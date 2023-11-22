import { Context } from "../context/context.ts";
import { ResultEvent, ResultType } from "../event/result_event.ts";
import { ScriptInputEvent } from "../event/script_input_event.ts";
import { TopicStmt } from "../stmt/topic_stmt.ts";
import { CommandExecutor } from "./command_executor.ts";
import { Executor, ExecutorType } from "./executor.ts";

export class TopicExecutor implements Executor {
    private children_: CommandExecutor[] = [];
    private index_: number = 0;
    private local_context_: Context;
    constructor(stmt: TopicStmt) {
        this.local_context_ = new Context();
        let stmts = stmt.get_command_seq();
        for (let stmt of stmts) {
            this.children_.push(new CommandExecutor(stmt));
        }
        if (this.children_.length == 0) {
            throw new Error("TopicExecutor must have at least one CommandStmt");
        }
    }
    open(context: Context): void {
        this.local_context_.set_global_context(context);
        this.children_[0].open(context);
    }

    next(input: ScriptInputEvent): ResultEvent {
        let result = this.children_[this.index_].next(input);
        while (result.is_finished()) {
            let context = this.children_[this.index_].close();
            this.local_context_ = context;
            this.index_++;
            if (this.index_ >= this.children_.length) {
                return new ResultEvent(0, "", ResultType.END);
            }
            this.children_[this.index_].open(context);
            result = this.children_[this.index_].next(input);
        }
        return result;
    }

    close(): Context {
        if (this.index_ < this.children_.length) {
            // GOTO退出
            return this.children_[this.index_].close();
        }
        let upper_context = this.local_context_.get_global_context();
        if (upper_context == null) {
            throw new Error("Upper context is null");
        }
        return upper_context;
    }

    get_executor_type(): ExecutorType {
        return ExecutorType.TOPIC;
    }
}