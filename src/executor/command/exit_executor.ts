import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { ExitStmt } from "../../stmt/command/exit_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

/**
 * Represents an executor for the "exit" command.
 */
export class ExitExecutor implements Executor {
  /**
   * Creates a new instance of ExitExecutor.
   * @param stmt The exit statement.
   */
  constructor(stmt: ExitStmt) {
    // 什么都不做
  }

  /**
   * Gets the executor type.
   * @returns The executor type.
   */
  get_executor_type(): ExecutorType {
    return ExecutorType.EXIT;
  }

  /**
   * Opens the executor.
   * @param context The context.
   */
  open(context: Context): void {
    // Do nothing
  }

  /**
   * Processes the next input event.
   * @param input The script input event.
   * @returns The result event.
   */
  next(input: ScriptInputEvent): ResultEvent {
    return new ResultEvent(0, "", ResultType.EXIT);
  }

  /**
   * Closes the executor
   */
  close(): void {
    // Do nothing
  }
}
