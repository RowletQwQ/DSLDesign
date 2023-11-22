import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { TemplateStringExpr } from "../../expr/template_string_expr.ts";
import { PostStmt } from "../../stmt/command/post_stmt.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class PostExecutor implements Executor {
    private target_url_: URL;
    private url_expr_: TemplateStringExpr | null = null;
    private url_str_: string | null = null;
    private source_id_: string;
    private upper_context_: Context;
    constructor(stmt: PostStmt) {
        this.source_id_ = stmt.get_source_id();
        let url = stmt.get_target_url();
        if (url instanceof TemplateStringExpr) {
            this.url_expr_ = url;
        } else {
            this.url_str_ = url;
        }
    }
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
    close(): Context {
        return this.upper_context_;
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.POST;
    }
}