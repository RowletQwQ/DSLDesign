import { LoopStmt } from "../../stmt/command/loop_stmt.js";
import { Executor, ExecutorType } from "../executor.js";
import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { CommandExecutor } from "../command_executor.js";

export class LoopExecutor implements Executor {
    private condition_expr_: Expression | null = null;
    private children_: Executor[] = [];
    private in_command_: boolean = false;
    private current_index_: number = 0;
    private local_context_: Context;
    
    /**
     * Creates a new LoopExecutor instance.
     * @param stmt The LoopStmt object representing the loop statement.
     */
    constructor(stmt: LoopStmt) {
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

    /**
     * Gets the executor type.
     * @returns {ExecutorType} The executor type.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.LOOP;
    }

    /**
     * Opens the loop executor with the given context.
     * @param context - The context to be used by the loop executor.
     */
    open(context: Context): void {
        this.local_context_ = context;
        this.local_context_.enter_new_scope();
        this.current_index_ = 0;
        this.in_command_ = false;
    }

    /**
     * Advances the loop executor to the next iteration.
     * 
     * @param input - The script input event.
     * @returns The result event indicating the status of the loop iteration.
     */
    next(input: ScriptInputEvent): ResultEvent {
        if (this.in_command_) {
            let result = this.children_[this.current_index_].next(input);
            while (result.is_finished()) {
                this.children_[this.current_index_].close();
                this.current_index_++;
                if (this.current_index_ == this.children_.length) {
                    // 本轮循环结束
                    this.in_command_ = false;
                    this.current_index_ = 0;
                    return new ResultEvent(0, "Continue Looping", ResultType.SUCCESS);
                }
                this.children_[this.current_index_].open(this.local_context_);
                result = this.children_[this.current_index_].next(input);
            }

            if (result.is_continue()) {
                // 继续循环
                this.in_command_ = false;
                this.children_[this.current_index_].close();
                // 检查是否需要继续循环
                if (this.condition_expr_ != null) {
                    let condition = this.condition_expr_.get_value(this.local_context_);
                    if (!condition) {
                        return new ResultEvent(0, "Break Loop", ResultType.END);
                    }
                }
                this.current_index_ = 0;
                return new ResultEvent(0, "Continue Looping", ResultType.SUCCESS);
            }
            if (result.is_break()) {
                this.in_command_ = false;
                this.children_[this.current_index_].close();
                return new ResultEvent(0, "Break Loop", ResultType.END);
            }
            // 其他情况，直接返回
            return result;
        }
        // 如果还没有打开，那么打开当前的executor
        // 检查是否需要进入循环
        if (this.condition_expr_ != null) {
            let condition = this.condition_expr_.get_value(this.local_context_);
            if (!condition) {
                // 不满足条件，退出循环
                this.in_command_ = false;
                return new ResultEvent(0, "Condition not Fix,Break the Loop", ResultType.END);
            }
        }
        this.children_[this.current_index_].open(this.local_context_);
        this.in_command_ = true;
        return new ResultEvent(0, "Enter Looping", ResultType.SUCCESS);
    }

    /**
     * Closes the loop executor and returns to the parent context.
     */
    close(): void {
        // 返回上层context
        this.local_context_.exit_current_scope();
    }
}