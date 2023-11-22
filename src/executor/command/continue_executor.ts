import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { ContinueStmt } from "../../stmt/command/continue_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class ContinueExecutor implements Executor {
    private upper_context_: Context;
    constructor(stmt: ContinueStmt){
        // 什么都不做
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.CONTINUE;
    }
    open(context: Context): void {
        this.upper_context_ = context;
    }
    next(input: ScriptInputEvent): ResultEvent {
        return new ResultEvent(0,"",ResultType.CONTINUE);
    }
    close(): Context {
        return this.upper_context_;
    }
}