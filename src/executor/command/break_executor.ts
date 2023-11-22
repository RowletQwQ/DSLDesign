import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { BreakStmt } from "../../stmt/command/break_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class BreakExecutor implements Executor {
    private upper_context_: Context;
    constructor(stmt: BreakStmt) {
        // 什么都不做
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.BREAK;
    }
    open(context: Context): void {
        this.upper_context_ = context;
    }
    next(input: ScriptInputEvent): ResultEvent {
        return new ResultEvent(0,"",ResultType.BREAK);
    }
    close(): Context {
        return this.upper_context_;
    }
}