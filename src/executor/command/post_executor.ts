import { Context } from "../../context/context.js";
import { AsycOp, ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { TemplateStringExpr } from "../../expr/template_string_expr.js";
import { PostStmt } from "../../stmt/command/post_stmt.js";
import { Executor, ExecutorType } from "../executor.js";

export class PostExecutor implements Executor {
  private target_url_: URL;
  private url_expr_: TemplateStringExpr | null = null;
  private url_str_: string | null = null;
  private source_id_: string;
  private upper_context_: Context;
  /**
   * Creates a new instance of the PostExecutor class.
   * @param stmt The PostStmt object.
   */
  constructor(stmt: PostStmt) {
    this.source_id_ = stmt.get_source_id();
    let url = stmt.get_target_url();
    if (url instanceof TemplateStringExpr) {
      this.url_expr_ = url;
    } else {
      this.url_str_ = url;
    }
  }
  /**
   * Opens the executor and sets the upper context.
   * If the URL is not provided, it generates the target URL based on the URL expression.
   * @param context The context object.
   * @throws Error if both url and url_expr are null, or if url_expr is undefined.
   */
  open(context: Context): void {
    this.upper_context_ = context;
    // 生成TargetURL
    if (this.url_str_ == null) {
      if (this.url_expr_ == null) {
        throw new Error("url and url_expr should not be null at the same time");
      }
      let plain_text = this.url_expr_.get_value(context);
      if (plain_text == undefined) {
        throw new Error("url_expr should be defined");
      }
      this.target_url_ = new URL(plain_text.toString());
    } else {
      this.target_url_ = new URL(this.url_str_);
    }
  }
  /**
   * Executes the next command in the script.
   * @param input - The input event for the command.
   * @returns The result event after executing the command.
   */
  next(input: ScriptInputEvent): ResultEvent {
    let payload = input.get_payload();
    if (payload == null) {
      // 还未发起请求
      // 先获取对象
      let source = this.upper_context_.get_symbol(this.source_id_);
      if (source == undefined) {
        throw new Error("Source should be defined");
      }
      // 生成payload，回传
      let result = new ResultEvent(0, "", ResultType.NEED_ASYNC);
      result.set_payload({
        op: AsycOp.POST,
        url: this.target_url_,
        data: JSON.stringify(source),
      });
      return result;
    }

    // 检查请求是否发送成功
    let data = payload.data;
    if (data == undefined) {
      // 请求发送失败
      return new ResultEvent(
        -1,
        `POST Request ERROR, url:${this.url_str_}`,
        ResultType.ERROR
      );
    }
    // 请求发送结束
    return new ResultEvent(0, "", ResultType.END);
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
    return ExecutorType.POST;
  }
}
