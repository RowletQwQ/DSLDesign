import { Context } from "../../context/context.ts";
import { ResultEvent } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { SayStmt } from "../../stmt/command/say_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class SayExecutor implements Executor {
    constructor(stmt: SayStmt) {

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
    get_executor_type(): ExecutorType {
        return ExecutorType.SAY;
    }
}