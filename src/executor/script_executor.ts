import { Context } from "../context/context.js";
import { ResultEvent, ResultType } from "../event/result_event.js";
import { ScriptInputEvent } from "../event/script_input_event.js";
import { ChatBoxStmt } from "../stmt/chatbox_stmt.js";
import { ConstanceStmt } from "../stmt/constance_stmt.js";
import { HelloStmt } from "../stmt/hello_stmt.js";
import { ScriptStmt } from "../stmt/script_stmt.js";
import { Stmt } from "../stmt/stmt.js";
import { TopicStmt } from "../stmt/topic_stmt.js";
import { ChatBoxExecutor } from "./chatbox_executor.js";
import { Executor, ExecutorType } from "./executor.js";
import { HelloExecutor } from "./hello_executor.js";
import { TopicExecutor } from "./topic_executor.js";

/**
 * Represents a ScriptExecutor that executes a script consisting of hello, chatbox, and topic statements.
 */
export class ScriptExecutor implements Executor {
    private global_context_: Context;
    private child_executors_: Executor[] = [];
    private current_child_index_: number = 0;
    private chatbox_index_: number = 0;
    private topic_id_map_: Map<string, number>;

    /**
     * Constructs a new ScriptExecutor with the given script statement.
     * @param stmt The script statement to execute.
     */
    constructor(stmt: ScriptStmt) {
        this.topic_id_map_ = new Map<string, number>();
        let hello_stmt = stmt.get_hello_stmt() as HelloStmt;
        let chatbox_stmt = stmt.get_chatbox_stmt() as ChatBoxStmt;
        let topic_stmts = stmt.get_topic_stmts() as TopicStmt[];
        let constance_stmt = stmt.get_constance_stmt() as ConstanceStmt;

        // Set global variables
        if (constance_stmt) {
            this.global_context_ = new Context(constance_stmt.get_map());
        } else {
            this.global_context_ = new Context(new Map<string,any>());
        }

        // Execution order: hello, chatbox, topic
        if (hello_stmt) {
            this.child_executors_.push(new HelloExecutor(hello_stmt));
            this.chatbox_index_++;
        }

        // Chatbox is always present
        this.child_executors_.push(new ChatBoxExecutor(chatbox_stmt));
        this.topic_id_map_.set("chatbox", this.chatbox_index_);

        // Add topics
        for (let topic_stmt of topic_stmts) {
            this.topic_id_map_.set(topic_stmt.get_name(), this.child_executors_.length);
            this.child_executors_.push(new TopicExecutor(topic_stmt));
        }
    }

    /**
     * Opens the ScriptExecutor with the given context.
     * @param context The context to open with.
     */
    open(context: Context): void {
        // Ignore the given context
        // Open the first executor
        this.child_executors_[0].open(this.global_context_);
        this.current_child_index_ = 0;
        this.chatbox_index_ = 0;
    }

    /**
     * Executes the next step of the script with the given input event.
     * @param input The input event.
     * @returns The result event of the execution.
     */
    next(input: ScriptInputEvent): ResultEvent {
        // Execute the current executor
        let result = this.child_executors_[this.current_child_index_].next(input);
        while (result.is_finished()) {
            // If the current executor is finished, move to the next executor
            this.child_executors_[this.current_child_index_].close();
            this.current_child_index_++;
            if (this.current_child_index_ >= this.child_executors_.length) {
                // If there is no next executor, return END
                return new ResultEvent(0, "", ResultType.END);
            }
            this.child_executors_[this.current_child_index_].open(this.global_context_);
            result = this.child_executors_[this.current_child_index_].next(input);
        }
        if (result.get_result_type() == ResultType.GOTO) {
            // If it is a GOTO instruction, jump to the corresponding topic
            let topic_index = this.topic_id_map_.get(result.get_result());
            this.child_executors_[this.current_child_index_].close();
            if (topic_index != undefined) {
                // If the topic or chatbox exists, jump to it
                this.current_child_index_ = topic_index;
                this.child_executors_[this.current_child_index_].open(this.global_context_);
                return result;
            } else {
                // If the topic does not exist, return ERROR
                return new ResultEvent(-1, `Unknown Topic Name: ${result.get_result()}`, ResultType.ERROR);
            }
        }
        // Return the result
        return result;
    }

    /**
     * Closes the ScriptExecutor.
     */
    close(): void {
        // Nothing to do
    }

    /**
     * Gets the type of the executor.
     * @returns The executor type.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.SCRIPT;
    }
}