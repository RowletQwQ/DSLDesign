import { Context } from "../context/context.ts";
import { ResultEvent, ResultType } from "../event/result_event.ts";
import { ScriptInputEvent } from "../event/script_input_event.ts";
import { ChatBoxStmt } from "../stmt/chatbox_stmt.ts";
import { ConstanceStmt } from "../stmt/constance_stmt.ts";
import { HelloStmt } from "../stmt/hello_stmt.ts";
import { ScriptStmt } from "../stmt/script_stmt.ts";
import { Stmt } from "../stmt/stmt.ts";
import { TopicStmt } from "../stmt/topic_stmt.ts";
import { ChatBoxExecutor } from "./chatbox_executor.ts";
import { Executor, ExecutorType } from "./executor.ts";
import { HelloExecutor } from "./hello_executor.ts";
import { TopicExecutor } from "./topic_executor.ts";

export class ScriptExecutor implements Executor {
    private global_context_: Context;
    private child_executors_: Executor[] = [];
    private current_child_index_: number = 0;
    private chatbox_index_: number = 0;
    private topic_id_map_: Map<string, number>;
    constructor(stmt: ScriptStmt) {
        this.global_context_ = new Context();
        this.topic_id_map_ = new Map<string, number>();
        let hello_stmt = stmt.get_hello_stmt() as HelloStmt;
        let chatbox_stmt = stmt.get_chatbox_stmt() as ChatBoxStmt;
        let topic_stmts = stmt.get_topic_stmts() as TopicStmt[];
        let constance_stmt = stmt.get_constance_stmt() as ConstanceStmt;

        // 先设置全局变量
        if (constance_stmt) {
            this.global_context_.import_symbol_table(constance_stmt.get_map());
        }

        // 执行顺序为，先执行hello，然后执行chatbox，最后执行topic
        if (hello_stmt) {
            this.child_executors_.push(new HelloExecutor(hello_stmt));
            this.chatbox_index_++;
        }

        // chatbox 必定存在
        this.child_executors_.push(new ChatBoxExecutor(chatbox_stmt));
        this.topic_id_map_.set("chatbox",this.chatbox_index_);

        // 随后开始添加topic
        for (let topic_stmt of topic_stmts) {
            this.topic_id_map_.set(topic_stmt.get_name(), this.child_executors_.length);
            this.child_executors_.push(new TopicExecutor(topic_stmt));
        }
        // 构造结束
    }
    open(context: Context): void {
        // 设置全局上下文
        this.global_context_ = context;
        // 打开第一个执行器
        this.child_executors_[0].open(this.global_context_);
    }

    next(input: ScriptInputEvent): ResultEvent {
        // 执行当前执行器
        let result = this.child_executors_[this.current_child_index_].next(input);
        while (result.is_finished()) {
            // 如果当前执行器执行完毕，则执行下一个执行器
            let context = this.child_executors_[this.current_child_index_].close();
            this.global_context_= context;
            this.current_child_index_++;
            if (this.current_child_index_ >= this.child_executors_.length) {
                // 如果没有下一个执行器，则返回END
                return new ResultEvent(0, "", ResultType.END);
            }
            this.child_executors_[this.current_child_index_].open(this.global_context_);
            result = this.child_executors_[this.current_child_index_].next(input);
        }
        if (result.get_result_type() == ResultType.GOTO) {
            // 如果是跳转指令，则跳转到对应的topic
            let topic_index = this.topic_id_map_.get(result.get_result());
            let context = this.child_executors_[this.current_child_index_].close();
            if (topic_index) {
                // 如果topic或chatbox存在，则跳转到topic或chatbox
                this.global_context_= context;
                this.current_child_index_ = topic_index;
                this.child_executors_[this.current_child_index_].open(this.global_context_);
                return result;
            } else {
                // 如果topic不存在，则返回END
                return new ResultEvent(-1, `Unknown Topic Name: ${result.get_result()}`, ResultType.ERROR);
            }
        }
        // 剩下的情况直接返回结果即可
        return result;
    }

    close(): Context {
        return this.global_context_;
    }

    get_executor_type(): ExecutorType {
        return ExecutorType.SCRIPT;
    }
}