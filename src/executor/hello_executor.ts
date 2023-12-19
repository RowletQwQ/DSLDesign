import { Context } from "../context/context.js";
import { ResultEvent, ResultType } from "../event/result_event.js";
import { ScriptInputEvent } from "../event/script_input_event.js";
import { HelloStmt } from "../stmt/hello_stmt.js";
import { CommandExecutor } from "./command_executor.js";
import { Executor, ExecutorType } from "./executor.js";

/**
 * Represents an executor for the HelloStmt.
 */
export class HelloExecutor implements Executor {
    private children_: CommandExecutor[] = [];
    private index_: number = 0;
    private local_context_: Context;

    /**
     * Creates a new instance of HelloExecutor.
     * @param stmt The HelloStmt to be executed.
     */
    constructor(stmt: HelloStmt) {
        let stmts = stmt.get_command_seq();
        for (let stmt of stmts) {
            this.children_.push(new CommandExecutor(stmt));
        }
    }

    /**
     * Opens the executor and sets the initial context.
     * @param context The global context.
     */
    open(context: Context): void {
        // Hello语句的外层上下文为全局上下文
        this.local_context_ = context;
        this.local_context_.enter_new_scope();
        this.index_ = 0;
        if (this.children_.length != 0) {
            this.children_[0].open(context);
        }
    }

    /**
     * Moves to the next step in the execution and returns the result.
     * @param input The script input event.
     * @returns The result event.
     */
    next(input: ScriptInputEvent): ResultEvent {
        if (this.children_.length == 0) {
            // 什么都不做
            return new ResultEvent(0, "", ResultType.END);
        }
        let result = this.children_[this.index_].next(input);
        while (result.is_finished()) {
            this.children_[this.index_].close();
            this.index_++;
            if (this.index_ >= this.children_.length) {
                return new ResultEvent(0, "", ResultType.END);
            }
            this.children_[this.index_].open(this.local_context_);
            result = this.children_[this.index_].next(input);
        }
        return result;
    }


    /**
     * Closes the executor.
     */
    close():void {
        if (this.index_ < this.children_.length) {
            // GOTO退出
            this.children_[this.index_].close();
        }
        this.local_context_.exit_current_scope();
    }

    /**
     * Gets the executor type.
     * @returns The executor type.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.HELLO;
    }
}