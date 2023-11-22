import { Context } from "../../context/context.ts";
import { ResultEvent } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { MatchStmt } from "../../stmt/command/match_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class MatchExecutor implements Executor {
    constructor(stmt: MatchStmt) {

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
        return ExecutorType.MATCH;
    }
}