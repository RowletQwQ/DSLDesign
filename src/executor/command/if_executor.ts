import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { IfStmt } from "../../stmt/command/if_stmt.js";
import { CommandExecutor } from "../command_executor.js";
import { Executor, ExecutorType } from "../executor.js";

export class IfExecutor implements Executor {
    private condition_expr_: Expression;
    private children_: Executor[];
    private current_index_: number = 0;
    private in_branch_: boolean = false;
    private this_command_seq_: Executor[];
    private branch_executor_: IfExecutor | null = null;
    private else_command_seq_: Executor[];
    private local_context_: Context = new Context();
    constructor(stmt: IfStmt){
        this.local_context_ = new Context();
        this.condition_expr_ = stmt.get_condition();
        this.this_command_seq_ = [];
        let command_seq = stmt.get_command_seq();
        for(let command of command_seq) {
            this.this_command_seq_.push(new CommandExecutor(command));
        }
        let else_if_stmt = stmt.get_else_if_stmt();
        if (else_if_stmt !== null) {
            this.branch_executor_ = new IfExecutor(else_if_stmt);
        }
        let else_cmd_seq = stmt.get_else_command_seq();
        this.else_command_seq_ = [];
        if (else_cmd_seq !== null) {
            for(let command of else_cmd_seq) {
                this.else_command_seq_.push(new CommandExecutor(command));
            }
        }
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.IF;
    }
    open(context: Context): void {
        this.current_index_ = 0;
        this.in_branch_ = false;
        // 先计算条件表达式
        let result = this.condition_expr_.get_value(context);
        this.local_context_ = new Context();
        this.local_context_.set_upper_context(context);
        if (result == undefined) {
            throw new Error("Result is undefined");
        }
        if (result) {
            // 满足条件，执行if分支
            this.children_ = this.this_command_seq_;
            this.children_[this.current_index_].open(this.local_context_);
        } else {
            // 不满足条件，执行else分支
            // 只有最后一个else if存在else分支，故可以这么写
            if (this.branch_executor_ !== null) {
                this.branch_executor_.open(context);
                this.in_branch_ = true;
            } else {
                this.children_ = this.else_command_seq_;
                if (this.children_.length != 0) {
                    this.children_[this.current_index_].open(this.local_context_);
                }
            }
        }
    }
    next(input: ScriptInputEvent): ResultEvent {
        if (this.in_branch_ && this.branch_executor_ !== null) {
            // 如果判断满足else if条件，执行else if分支
            return this.branch_executor_.next(input);
        }
        if (this.children_.length == 0) {
            // 什么都不做
            return new ResultEvent(0, "", ResultType.END);
        }
        // 剩下则正常执行
        let result = this.children_[this.current_index_].next(input);
        while (result.is_finished()) {
            let context = this.children_[this.current_index_].close();
            this.local_context_ = context;
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
        if (this.in_branch_ && this.branch_executor_ !== null) {
            // 如果判断满足else if条件，执行else if分支
            return this.branch_executor_.close();
        }
        if (this.children_.length == 0) {
            // 什么都不做
            let upper_context = this.local_context_.get_upper_context();
            if (upper_context == null) {
                throw new Error("Upper context is null");
            }
            return upper_context;
        }
        
        // 执行完毕退出
        let upper_context = this.local_context_.get_upper_context();
        if (upper_context == null) {
            throw new Error("CaseExecutor should have upper context");
        }
        return upper_context;
        
    }
}