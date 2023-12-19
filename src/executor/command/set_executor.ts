import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { SetStmt } from "../../stmt/command/set_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

export class SetExecutor implements Executor {
  private id_: string;
  private value_expr_: Expression;
  private is_global_: boolean;
  private need_declare_: boolean;
  private upper_context_: Context;
  /**
   * Creates a new instance of the SetExecutor class.
   * @param stmt The SetStmt object representing the set statement.
   */
  constructor(stmt: SetStmt) {
    this.id_ = stmt.get_var_name();
    this.value_expr_ = stmt.get_value_expr();
    this.is_global_ = stmt.is_global();
    this.need_declare_ = stmt.need_declare();
  }
  /**
   * Opens the executor with the given context.
   * @param context The context to open the executor with.
   */
  open(context: Context): void {
    this.upper_context_ = context;
  }
  /**
   * Executes the next command in the script and returns the result event.
   * @param input The script input event.
   * @returns The result event.
   */
  next(input: ScriptInputEvent): ResultEvent {
    if (this.is_global_) {
      if (this.need_declare_) {
        this.upper_context_.set_global_symbol(
          this.id_,
          this.value_expr_.get_value(this.upper_context_)
        );
      } else {
        this.upper_context_.assign_global_symbol(
          this.id_,
          this.value_expr_.get_value(this.upper_context_)
        );
      }
    } else {
      if (this.need_declare_) {
        this.upper_context_.set_local_symbol(
          this.id_,
          this.value_expr_.get_value(this.upper_context_)
        );
      } else {
        this.upper_context_.assign_local_symbol(
          this.id_,
          this.value_expr_.get_value(this.upper_context_)
        );
      }
    }
    return new ResultEvent(0, "", ResultType.END);
  }
  close(): void {
    // Do nothing
  }
  get_executor_type(): ExecutorType {
    return ExecutorType.SET;
  }
}
