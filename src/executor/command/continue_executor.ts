import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { ContinueStmt } from "../../stmt/command/continue_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

/**
 * Represents an executor for the "continue" statement.
 */
export class ContinueExecutor implements Executor {
    /**
     * Creates a new instance of the ContinueExecutor class.
     * @param stmt The continue statement.
     */
    constructor(stmt: ContinueStmt){
        // 什么都不做
    }

    /**
     * Gets the executor type.
     * @returns The executor type.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.CONTINUE;
    }

    /**
     * Opens the executor.
     * @param context The execution context.
     */
    open(context: Context): void {
        // Do nothing
    }

    /**
     * Moves to the next input event.
     * @param input The script input event.
     * @returns The result event.
     */
    next(input: ScriptInputEvent): ResultEvent {
        return new ResultEvent(0,"",ResultType.CONTINUE);
    }

    /**
     * Closes the executor 
     */
    close(): void {
        // Do nothing
    }
}