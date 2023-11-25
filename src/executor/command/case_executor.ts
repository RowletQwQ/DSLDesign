import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { CaseStmt } from "../../stmt/command/case_stmt.js";
import { CommandExecutor } from "../command_executor.js";
import { Executor, ExecutorType } from "../executor.js";

export class CaseExecutor implements Executor {
    private children_: Executor[];
    private current_index_: number = 0;
    private local_context_: Context;
    constructor(stmt: CaseStmt){
        this.local_context_ = new Context();
        let command_seq = stmt.get_commands();
        this.children_ = [];
        for(let command of command_seq) {
            this.children_.push(new CommandExecutor(command));
        }
        if (command_seq.length == 0) {
            throw new Error("CaseStmt should have at least one command");
        }
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.CASE;
    }

    open(context: Context): void {
        this.local_context_.set_upper_context(context);
        this.children_[this.current_index_].open(context);
    }

    next(input: ScriptInputEvent): ResultEvent {
        let result = this.children_[this.current_index_].next(input);
        while (result.is_finished()) {
            let context = this.children_[this.current_index_].close();
            this.local_context_.set_upper_context(context);
            this.current_index_++;
            if (this.current_index_ >= this.children_.length) {
                return new ResultEvent(0,"",ResultType.END);
            }
            this.children_[this.current_index_].open(this.local_context_);
            result = this.children_[this.current_index_].next(input);
        }
        return result;
    }

    close(): Context {
        // 执行完毕退出
        let upper_context = this.local_context_.get_upper_context();
        if (upper_context == null) {
            throw new Error("CaseExecutor should have upper context");
        }
        return upper_context;
    }
}