import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
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
        // 先获取对象
        let source = this.upper_context_.get_symbol(this.source_id_);
        if (source == undefined) {
            throw new Error("Source should be defined");
        }
        // 发起POST请求
        fetch(this.target_url_, {
            method: "POST",
            body: JSON.stringify(source),
            headers: {
                "Content-Type": "application/json"
            }
        });
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