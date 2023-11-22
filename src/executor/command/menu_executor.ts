import { Context } from "../../context/context.ts";
import { ResultEvent, ResultType } from "../../event/result_event.ts";
import { ScriptInputEvent } from "../../event/script_input_event.ts";
import { MenuStmt } from "../../stmt/command/menu_stmt.ts";
import { CommandExecutor } from "../command_executor.ts";
import { Executor, ExecutorType } from "../executor.ts";

export class MenuExecutor implements Executor {
    private when_silence_executor_: Executor;
    private current_index_: number = 0;
    private is_running_: boolean = false;
    private children_: Executor[] = [];
    private menu_pattern_: string[] = [];
    private match_map_: Map<string, number>;
    private local_context_: Context;
    constructor(stmt: MenuStmt) {
        this.match_map_ = new Map<string, number>();
        this.local_context_ = new Context();
        let stmts = stmt.get_cases();
        for (let stmt of stmts) {
            let pattern = stmt.get_pattren();
            // 检查是否出现重复
            if (this.match_map_.has(pattern)) {
                throw new Error("Duplicate pattern in MatchStmt");
            }
            this.menu_pattern_.push(pattern);
            this.match_map_.set(pattern, this.children_.length);
            this.children_.push(new CommandExecutor(stmt));
        }
    }
    open(context: Context): void {
        this.local_context_.set_upper_context(context);
    }
    next(input: ScriptInputEvent): ResultEvent {
        if (!this.is_running_) {
            // 不在分支内,需要检查是否有input,如果有input则进入分支
            let input_str = input.get_input();
            if (input_str == null) {
                // 无输入,则返回待选项
                let result = new ResultEvent(0, "", ResultType.MENU);
                result.set_menu(this.menu_pattern_);
                return result;
            }
            // 如果有输入,则查找对应分支
            let index = this.match_map_.get(input_str);
            if (index == undefined) {
                throw new Error("Invalid input in MenuStmt");
            }
            this.is_running_ = true;
            this.children_[index].open(this.local_context_);
            this.current_index_ = index;
        }
        // 接下来正常执行分支
        return this.children_[this.current_index_].next(input);
    }
    close(): Context {
       let upper_context = this.local_context_.get_upper_context();
       if (upper_context == null) {
            throw new Error("MenuExecutor should have upper context");
       }
       return upper_context;
    }
    get_executor_type(): ExecutorType {
        return ExecutorType.MENU;
    }
}