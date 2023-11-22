import { LoopStmt } from "../../stmt/command/loop_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";
import { Context } from "../../context/context.ts";
import { ResultEvent } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";

export class LoopExecutor implements Executor {
    constructor(stmt: LoopStmt) {

    }
    get_executor_type(): ExecutorType {
        return ExecutorType.LOOP;
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