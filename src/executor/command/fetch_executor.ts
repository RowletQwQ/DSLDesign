import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { TemplateStringExpr } from "../../expr/template_string_expr.js";
import { FetchStmt } from "../../stmt/command/fetch_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

/**
 * Represents an executor for fetching data from a URL.
 */
export class FetchExecutor implements Executor {
  private url_: URL;
  private url_expr_: TemplateStringExpr | null = null;
  private url_str_: string | null = null;
  private target_id_: string;
  private upper_context_: Context;

  /**
   * Creates a new instance of FetchExecutor.
   * @param stmt The fetch statement.
   */
  constructor(stmt: FetchStmt) {
    this.target_id_ = stmt.get_target_id();
    let url = stmt.get_url();
    if (url instanceof TemplateStringExpr) {
      this.url_expr_ = url;
    } else {
      this.url_str_ = url;
    }
  }

  /**
   * Gets the type of the executor.
   * @returns The executor type.
   */
  get_executor_type(): ExecutorType {
    return ExecutorType.FETCH;
  }

  /**
   * Opens the executor and initializes the context.
   * @param context The execution context.
   */
  open(context: Context): void {
    this.upper_context_ = context;
    if (this.url_str_ == null) {
      if (this.url_expr_ == null) {
        throw new Error("url and url_expr should not be null at the same time");
      }
      let plain_text = this.url_expr_.get_value(context);
      if (plain_text == undefined) {
        throw new Error("url_expr should be defined");
      }
      this.url_ = new URL(plain_text.toString());
    } else {
      this.url_ = new URL(this.url_str_);
    }
  }

  /**
   * Processes the next input event and returns the result event.
   * @param input The input event.
   * @returns The result event.
   */
  next(input: ScriptInputEvent): ResultEvent {
    // Send a GET request to the URL
    fetch(this.url_)
      .then((response) => response.json())
      .then((data) => {
        // Process the response data
        this.upper_context_.set_local_symbol(this.target_id_, data);
      })
      .catch((error) => {
        // Handle the error
        return new ResultEvent(-1, error.toString(), ResultType.ERROR);
      });

    // Set the execution as finished
    return new ResultEvent(0, "", ResultType.END);
  }

  /**
   * Closes the executor and returns the updated context.
   * @returns The updated context.
   */
  close(): Context {
    return this.upper_context_;
  }
}
