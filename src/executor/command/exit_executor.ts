import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { ExitStmt } from "../../stmt/command/exit_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class ExitExecutor implements Executor {
    private upper_context_: Context;
    constructor(stmt: ExitStmt) {
        // 什么都不做
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.EXIT;
    }
    open(context: Context): void {
        this.upper_context_ = context;
    }
    next(input: ScriptInputEvent): ResultEvent {
        return new ResultEvent(0, "", ResultType.EXIT);
    }
    close(): Context {
        return this.upper_context_;
    }
}