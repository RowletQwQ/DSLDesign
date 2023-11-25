import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { WhenSilenceStmt } from "../../stmt/command/when_silence_stmt.js";
import { CommandExecutor } from "../command_executor.js";
import { Executor, ExecutorType } from "../executor.js";

export class WhenSilenceExecutor implements Executor {
    private children_: Executor[] = [];
    private current_index_: number = 0;
    private local_context_: Context;
    constructor(stmt: WhenSilenceStmt) {
        // timeout已经在外面处理了，这里执行命令就行了
        this.local_context_ = new Context();
        let command_seq = stmt.get_command_seq();
        for (let command of command_seq) {
            this.children_.push(new CommandExecutor(command));
        }
    }
    open(context: Context): void {
        this.local_context_ = new Context();
        this.local_context_.set_upper_context(context);
        this.current_index_ = 0;
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
    get_executor_type(): ExecutorType {
        return ExecutorType.WHEN_SILENCE;
    }
}