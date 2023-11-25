import { Context } from "../context/context.js";
import { ResultEvent, ResultType } from "../event/result_event.js";
import { ScriptInputEvent } from "../event/script_input_event.js";
import { ChatBoxStmt } from "../stmt/chatbox_stmt.js";
import { CommandExecutor } from "./command_executor.js";
import { Executor, ExecutorType } from "./executor.js";

// ChatBox需要有输入才能触发，所以open的时候不会初始化分支
export class ChatBoxExecutor implements Executor {
    private children_: CommandExecutor[] = [];
    private index_: number = 0; // 当前执行的index
    private is_running_: boolean = false; // 检测当前是否还在分支中
    private jump_map_: Map<string, number>; // 跳转表
    private default_index_: number = -1; // 默认分支
    private local_context_: Context;
    constructor(stmt: ChatBoxStmt) {
        this.jump_map_ = new Map<string, number>();
        this.local_context_ = new Context();
        let stmts = stmt.get_cases();
        for (let stmt of stmts) {
            if (stmt.is_default()) {
                this.default_index_ = this.children_.length;
            } else {
                let pattern = stmt.get_pattren();
                // 检查是否出现重复
                if (this.jump_map_.has(pattern)) {
                    throw new Error("Duplicate pattern in ChatBoxStmt");
                }
                this.jump_map_.set(pattern, this.children_.length);
            }
            this.children_.push(new CommandExecutor(stmt));
        }
    }
    open(context: Context): void {
        // chatbox外层就是全局
        this.is_running_ = false;
        this.local_context_ = new Context();
        this.local_context_.set_global_context(context);
    }

    next(input: ScriptInputEvent): ResultEvent {
        if (!this.is_running_) {
            // 不在分支内,需要检查是否有input,如果有input则进入分支
            let input_str = input.get_input();
            if (input_str == null) {
                // 无输入,请求输入
                return new ResultEvent(0, "", ResultType.INPUT);
            }
            // 如果有输入,则检查是否有对应的分支,无对应分支则进入default
            let index = this.jump_map_.get(input_str);
            if (index == undefined) {
                index = this.default_index_;
            }
            this.is_running_ = true;
            this.children_[index].open(this.local_context_);
            this.index_ = index;
        }
        // 接下来正常执行分支
        let result = this.children_[this.index_].next(input);
        while (result.is_finished()) {
            // 分支执行结束, 回退到未运行状态
            let context = this.children_[this.index_].close();
            this.local_context_.set_global_context(context);
            this.is_running_ = false;
            return new ResultEvent(0, "", ResultType.INPUT);
        }
        return result;
    }

    close(): Context {
        if (this.is_running_) {
            // GOTO跳出,需要保留context
            let context = this.children_[this.index_].close();
            return context;
        }
        let upper_context = this.local_context_.get_upper_context();
        if (upper_context == undefined) {
            throw new Error("Executor has not been opened");
        }
        return upper_context;
    }

    get_executor_type(): ExecutorType {
        return ExecutorType.CHATBOX;
    }
}