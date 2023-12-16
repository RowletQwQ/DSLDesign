import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { BreakStmt } from "../../stmt/command/break_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

/**
 * Represents an executor for the "break" statement.
 */
export class BreakExecutor implements Executor {
    private upper_context_: Context;

    /**
     * Creates a new instance of the BreakExecutor class.
     * @param stmt The break statement.
     */
    constructor(stmt: BreakStmt) {
        // 什么都不做
    }

    /**
     * Gets the executor type.
     * @returns The executor type.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.BREAK;
    }

    /**
     * Opens the executor with the specified context.
     * @param context The context to open with.
     */
    open(context: Context): void {
        this.upper_context_ = context;
    }

    /**
     * Moves to the next input event and returns the result.
     * @param input The script input event.
     * @returns The result event.
     */
    next(input: ScriptInputEvent): ResultEvent {
        return new ResultEvent(0, "", ResultType.BREAK);
    }

    /**
     * Closes the executor and returns the upper context.
     * @returns The upper context.
     */
    close(): Context {
        return this.upper_context_;
    }
}