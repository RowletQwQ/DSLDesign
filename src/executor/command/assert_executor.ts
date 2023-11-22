import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { Expression } from "../../expr/expression.ts";
import { AssertStmt } from "../../stmt/command/assert_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class AssertExecutor implements Executor {
    private assert_expr_: Expression;
    private is_asserted_: boolean = false;
    private local_context_: Context;
    constructor(stmt: AssertStmt) {
        this.assert_expr_ = stmt.get_expr();
        this.local_context_ = new Context();
    }
    open(context: Context): void {
        this.local_context_.set_global_context(context);
        let result = this.assert_expr_.get_value(context);
        if (typeof result == "boolean") {
            this.is_asserted_ = result;
        } else {
            throw new Error("Assert expression must have a boolean result.");
        }
    }
    next(input: ScriptInputEvent): ResultEvent {
        if(this.is_asserted_) {
            return new ResultEvent(0,"Asserted successfully.",ResultType.END)
        }
        return new ResultEvent(1,"Assert failed.",ResultType.ERROR)
    }
    close(): Context {
        let upper_context = this.local_context_.get_global_context();
        if (upper_context == null) {
            throw new Error("Global context is null.");
        }
        return upper_context;
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.ASSERT;
    }
}