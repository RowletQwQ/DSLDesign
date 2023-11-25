import { time } from "console";
import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { InputStmt } from "../../stmt/command/input_stmt.js";
import { Executor, ExecutorType } from "../executor.js";
import { WhenSilenceExecutor } from "./when_silence_executor.js";

export class InputExecutor implements Executor {
    private target_id_: string;
    private assert_expr_: Expression | null = null;
    private child_: WhenSilenceExecutor; // When Silence Stmt
    private timeout_expr_: Expression | null = null;
    private timeout_: number | undefined = undefined;
    private local_context_: Context;
    constructor(stmt: InputStmt) {
        this.local_context_ = new Context();
        this.target_id_ = stmt.get_target_id();
        let assert_stmt = stmt.get_assert_stmt();
        if (assert_stmt) {
            this.assert_expr_ = assert_stmt.get_expr();
        }
        let when_silence_stmt = stmt.get_when_silence_stmt();
        if (when_silence_stmt) {
            this.timeout_expr_ = when_silence_stmt.get_timeout();
            this.child_ = new WhenSilenceExecutor(when_silence_stmt);
        }
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.INPUT;
    }
    open(context: Context): void {
        // Input的时候也创建一个新的上下文，方便assert判断为false后回滚
        this.local_context_.set_upper_context(context);
        if (this.timeout_expr_ != null) {
            this.child_.open(this.local_context_);
        
        }
    }
    next(input: ScriptInputEvent): ResultEvent {
        let input_str = input.get_input();
        if (input.is_handled() && input_str == null) {
            // 超时了, 执行超时分支
            return this.child_.next(input);
        }
        
        if (this.timeout_expr_ != null) {
            let result = this.timeout_expr_.get_value(this.local_context_)
            if (typeof result != "number") {
                throw new Error("Timeout must be a number");
            }
            this.timeout_ = result; 
        }
        
        if (input_str == null) {
            // 还没输入,请求输入
            return new ResultEvent(0, "Need Input", ResultType.INPUT, this.timeout_);
        }
        // 有输入了，先进行类型推断, 仅支持数字和字符串
        let input_value = parseFloat(input_str);
        if (isNaN(input_value) && input_str != input_value.toString()) {
            // 不是数字
            this.local_context_.set_symbol(this.target_id_, input_str);
        } else {
            this.local_context_.set_symbol(this.target_id_, input_value);
        }
        // 接着执行assert表达式
        if (this.assert_expr_ != null) {
            let result = this.assert_expr_.get_value(this.local_context_);
            if (result == false) {
                // assert失败，回滚
                return new ResultEvent(0, "Assert Failed", ResultType.INPUT);
            }
        }
        // 如果通过了assert,那么将输入设置到上级上下文中
        let upper_context = this.local_context_.get_upper_context();
        if (upper_context == null) {
            throw new Error("Upper context is null");
        }
        if (isNaN(input_value) && input_str != input_value.toString()) {
            // 不是数字
            this.local_context_.set_upper_symbol(this.target_id_, input_str);
        } else {
            this.local_context_.set_upper_symbol(this.target_id_, input_value);
        }
        return new ResultEvent(0, "Input Success", ResultType.END);
    }
    close(): Context {
        let upper_context = this.local_context_.get_upper_context();
        if (upper_context == null) {
            throw new Error("Upper context is null");
        }
        return upper_context;
    }
}