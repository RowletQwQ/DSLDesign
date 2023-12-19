import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { MenuStmt } from "../../stmt/command/menu_stmt.js";
import { CommandExecutor } from "../command_executor.js";
import { Executor, ExecutorType } from "../executor.js";

export class MenuExecutor implements Executor {
    private current_index_: number = 0;
    private is_running_: boolean = false;
    private children_: Executor[] = [];
    private menu_pattern_: string[] = [];
    private match_map_: Map<string, number>;
    private local_context_: Context;
    /**
     * Creates an instance of MenuExecutor.
     * @param stmt The MenuStmt object.
     */
    constructor(stmt: MenuStmt) {
        this.match_map_ = new Map<string, number>();
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
    /**
     * Opens the menu executor with the given context.
     * @param context The context to open the menu executor with.
     */
    open(context: Context): void {
        this.current_index_ = -1;
        this.local_context_ = context;
        this.is_running_ = false;
    }
    /**
     * Advances the execution to the next step based on the provided input.
     * If not currently running, checks if there is any input. If input is available, enters the branch.
     * If no input is available, returns the menu options.
     * If input is available, finds the corresponding branch and opens it.
     * Then proceeds to execute the branch.
     * 
     * @param input The input event containing the user's selection.
     * @returns The result event of the next step in the execution.
     * @throws Error if the input is invalid.
     */
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
    /**
     * Closes the current menu item.
     */
    close(): void {
        if (this.current_index_ != -1) {
            this.children_[this.current_index_].close();
        }
    }
    /**
     * Gets the executor type.
     * @returns {ExecutorType} The executor type.
     */
    get_executor_type(): ExecutorType {
        return ExecutorType.MENU;
    }
}