import { Context } from "../context/context.js";
import { ResultEvent, ResultType } from "../event/result_event.js";
import { ScriptInputEvent } from "../event/script_input_event.js";
import { HelloStmt } from "../stmt/hello_stmt.js";
import { CommandExecutor } from "./command_executor.js";
import { Executor, ExecutorType } from "./executor.js";

export class HelloExecutor implements Executor {
    private children_: CommandExecutor[] = [];
    private index_: number = 0;
    private local_context_: Context;
    constructor(stmt: HelloStmt) {
        this.local_context_ = new Context();
        let stmts = stmt.get_command_seq();
        for (let stmt of stmts) {
            this.children_.push(new CommandExecutor(stmt));
        }
    }
    open(context: Context): void {
        // Hello语句的外层上下文为全局上下文
        this.local_context_ = new Context();
        this.local_context_.set_global_context(context);
        this.index_ = 0;
        if (this.children_.length != 0) {
            this.children_[0].open(context);
        }
        
    }

    next(input: ScriptInputEvent): ResultEvent {
        if (this.children_.length == 0) {
            // 什么都不做
            return new ResultEvent(0, "", ResultType.END);
        }
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
        let global_context = this.local_context_.get_global_context();
        if (global_context == undefined) {
            throw new Error("Global context is undefined");
        }
        return global_context;
    }

    get_executor_type(): ExecutorType {
        return ExecutorType.HELLO;
    }
}