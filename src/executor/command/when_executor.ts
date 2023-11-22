import { Context } from "../../context/context.ts";
import { ResultEvent } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { WhenStmt } from "../../stmt/command/when_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class WhenExecutor implements Executor {
    constructor(stmt: WhenStmt) {

    }
    get_executor_type(): ExecutorType {
        return ExecutorType.WHEN;
    }
    open(context: Context): void {
        throw new Error("Method not implemented.");
    }
    next(input: ScriptInputEvent): ResultEvent {
        throw new Error("Method not implemented.");
    }
    close(): Context {
        throw new Error("Method not implemented.");
    }
}