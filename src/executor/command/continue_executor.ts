import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { ContinueStmt } from "../../stmt/command/continue_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

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