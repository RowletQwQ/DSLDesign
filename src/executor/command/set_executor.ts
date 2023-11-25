import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { SetStmt } from "../../stmt/command/set_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

export class SetExecutor implements Executor {
    private id_: string;
    private value_expr_: Expression;
    private is_global_: boolean;
    private upper_context_: Context;
    constructor(stmt: SetStmt) {
        this.id_ = stmt.get_var_name();
        this.value_expr_ = stmt.get_value_expr();
        this.is_global_ = stmt.is_global();
    }
    open(context: Context): void {
        this.upper_context_ = context;
    }
    next(input: ScriptInputEvent): ResultEvent {
        if (this.is_global_) {
            this.upper_context_.set_global_symbol(this.id_, this.value_expr_.get_value(this.upper_context_));
        } else {
            this.upper_context_.set_symbol(this.id_, this.value_expr_.get_value(this.upper_context_));
        }
        return new ResultEvent(0, "", ResultType.END);
    }
    close(): Context {
        return this.upper_context_;
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.SET;
    }
}