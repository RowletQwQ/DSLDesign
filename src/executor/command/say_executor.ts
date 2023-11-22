import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { Expression } from "../../expr/expression.ts";
import { SayStmt } from "../../stmt/command/say_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class SayExecutor implements Executor {
    private expr_: Expression;
    private upper_context_: Context;
    private is_printed_: boolean = false;
    constructor(stmt: SayStmt) {
        this.expr_ = stmt.get_expr();
    }
    open(context: Context): void {
        this.upper_context_ = context;
    }
    next(input: ScriptInputEvent): ResultEvent {
        if (this.is_printed_) {
            return new ResultEvent(0, "", ResultType.END);
        }
        let value = this.expr_.get_value(this.upper_context_);
        if (value == undefined) {
            throw new Error("value should be defined");
        }
        this.is_printed_ = true;
        return new ResultEvent(0, value.toString(), ResultType.OUTPUT);
    }
    close(): Context {
        return this.upper_context_;
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.SAY;
    }
}