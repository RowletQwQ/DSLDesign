import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { GotoStmt } from "../../stmt/command/goto_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

export class GotoExecutor implements Executor {
    private upper_context_: Context;
    private target_topic_: string;
    constructor(stmt: GotoStmt) {
        this.target_topic_ = stmt.get_target();
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.GOTO;
    }
    open(context: Context): void {
        this.upper_context_ = context;
    }
    next(input: ScriptInputEvent): ResultEvent {
        return new ResultEvent( 0, `${this.target_topic_}`, 
                                ResultType.GOTO);
    }
    close(): Context {
        return this.upper_context_;
    }
}