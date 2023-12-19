import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { GotoStmt } from "../../stmt/command/goto_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

/**
 * Represents an executor for the Goto statement.
 */
export class GotoExecutor implements Executor {
    private target_topic_: string;

    /**
     * Creates a new instance of the GotoExecutor class.
     * @param stmt The Goto statement.
     */
    constructor(stmt: GotoStmt) {
        this.target_topic_ = stmt.get_target();
    }

    /**
     * Gets the executor type.
     * @returns The executor type.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.GOTO;
    }

    /**
     * Opens the executor with the specified context.
     */
    open(context: Context): void {
        // Do nothing
    }

    /**
     * Processes the next input event and returns the result event.
     * @param input The input event.
     * @returns The result event.
     */
    next(input: ScriptInputEvent): ResultEvent {
        return new ResultEvent(0, `${this.target_topic_}`, ResultType.GOTO);
    }

    /**
     * Closes the executor 
     */
    close(): void {
        // Do nothing
    }
}