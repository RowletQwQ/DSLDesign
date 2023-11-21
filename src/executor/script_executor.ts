import { Context } from "../context/context.ts";
import { ResultEvent } from "../event/result_event.ts";
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
        }

        // chatbox 必定存在
        this.child_executors_.push(new ChatBoxExecutor(chatbox_stmt));

        // 随后开始添加topic
        for (let topic_stmt of topic_stmts) {
            this.topic_id_map_.set(topic_stmt.get_name(), this.child_executors_.length);
            this.child_executors_.push(new TopicExecutor(topic_stmt));
        }
        // 构造结束
    }
    open(context: Context): void {
        // 设置全局上下文
        this.global_context_.set_global_context(context);
        for (let executor of this.child_executors_) {
            executor.open(this.global_context_);
        }
    }

    next(): ResultEvent {
        throw new Error("Method not implemented.");
    }

    close(): void {
        this.current_child_index_ = 0;
        for (let executor of this.child_executors_) {
            executor.close();
        }
    }

    get_executor_type(): ExecutorType {
        return ExecutorType.SCRIPT;
    }
}