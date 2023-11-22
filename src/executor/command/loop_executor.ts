import { LoopStmt } from "../../stmt/command/loop_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";
import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { Expression } from "../../expr/expression.ts";
import { CommandExecutor } from "../command_executor.ts";

export class LoopExecutor implements Executor {
    private condition_expr_: Expression | null = null;
    private children_: Executor[] = [];
    private in_command_: boolean = false;
    private current_index_: number = 0;
    private local_context_: Context;
    constructor(stmt: LoopStmt) {
        this.local_context_ = new Context();
        if (stmt.get_when_stmt() != null) {
            let when_stmt = stmt.get_when_stmt()!;
            this.condition_expr_ = when_stmt.get_expr();
        }
        let command_seq = stmt.get_command_seq();
        for (let command_stmt of command_seq) {
            let executor = new CommandExecutor(command_stmt);
            this.children_.push(executor);
        }
        if (this.children_.length == 0) {
            throw new Error("LoopStmt must have at least one command.");
        }
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.LOOP;
    }
    open(context: Context): void {
        this.local_context_.set_upper_context(context);
    }
    next(input: ScriptInputEvent): ResultEvent {
        if (this.in_command_) {
            let result = this.children_[this.current_index_].next(input);
            if (result.is_finished()) {
                this.in_command_ = false;
                let context = this.children_[this.current_index_].close();
                this.local_context_ = context;
                this.current_index_++;
                if (this.current_index_ == this.children_.length) {
                    // 检查是否需要继续循环
                    if (this.condition_expr_ != null) {
                        let condition = this.condition_expr_.get_value(this.local_context_);
                        if (condition != "true") {
                            return new ResultEvent(0, "Condition not Fix,Break the Loop", ResultType.END);
                        }
                    }
                    this.current_index_ = 0;
                    return new ResultEvent(0, "Continue Looping", ResultType.SUCCESS);
                }
            }

            if (result.is_continue()) {
                // 继续循环
                this.in_command_ = false;
                let context = this.children_[this.current_index_].close();
                this.local_context_ = context;
                // 检查是否需要继续循环
                if (this.condition_expr_ != null) {
                    let condition = this.condition_expr_.get_value(this.local_context_);
                    if (condition != "true") {
                        return new ResultEvent(0, "Break Loop", ResultType.END);
                    }
                }
                this.current_index_ = 0;
                return new ResultEvent(0, "Continue Looping", ResultType.SUCCESS);
            }
            if (result.is_break()) {
                this.in_command_ = false;
                let context = this.children_[this.current_index_].close();
                this.local_context_ = context;
                return new ResultEvent(0, "Break Loop", ResultType.END);
            }
            // 其他情况，直接返回
            return result;
        }
        // 如果还没有打开，那么打开当前的executor
        this.children_[this.current_index_].open(this.local_context_);
        this.in_command_ = true;
        return new ResultEvent(0, "Enter Looping", ResultType.SUCCESS);
    }
    close(): Context {
        // 返回上层context
        let upper_context = this.local_context_.get_upper_context();
        if (upper_context == null) {
            throw new Error("Upper context should not be null");
        }
        return upper_context;
    }
}