import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { SayStmt } from "../../stmt/command/say_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

export class SayExecutor implements Executor {
  private expr_: Expression;
  private upper_context_: Context;
  private is_printed_: boolean = false;
  /**
   * Creates a new instance of the SayExecutor class.
   * @param stmt The SayStmt object.
   */
  constructor(stmt: SayStmt) {
    this.expr_ = stmt.get_expr();
  }
  /**
   * Opens the context and initializes the upper context and is_printed_ flag.
   * @param context The context to be opened.
   */
  open(context: Context): void {
    this.upper_context_ = context;
    this.is_printed_ = false;
  }
  /**
   * Executes the next command in the script.
   * @param input The input event for the script.
   * @returns The result event of executing the command.
   * @throws Error if the value is undefined.
   */
  next(input: ScriptInputEvent): ResultEvent {
    if (this.is_printed_) {
      return new ResultEvent(0, "", ResultType.END);
    }
    let value = this.expr_.get_value(this.upper_context_);
    if (value == undefined) {
      throw new Error("value should be defined");
    }
    this.is_printed_ = true;
    return new ResultEvent(0, value.toString(), ResultType.OUTPUT);
  }
  /**
   * Closes the executor.
   */
  close(): void {
    // Do nothing
  }
  /**
   * Gets the executor type.
   * @returns {ExecutorType} The executor type.
   */
  get_executor_type(): ExecutorType {
    return ExecutorType.SAY;
  }
}
