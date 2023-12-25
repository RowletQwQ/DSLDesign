import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { Expression } from "../../expr/expression.js";
import { MatchStmt } from "../../stmt/command/match_stmt.js";
import { CommandExecutor } from "../command_executor.js";
import { Executor, ExecutorType } from "../executor.js";

export class MatchExecutor implements Executor {
  private when_silence_executor_: Executor;
  private current_index_: number = 0;
  private default_index_: number = -1;
  private is_running_: boolean = false;
  private children_: Executor[] = [];
  private match_map_: Map<string, number>;
  private local_context_: Context;
  private pattern_list_: RegExp[] = [];
  private is_timeout_: boolean = false;
  private timeout_expr_: Expression | null = null;
  private timeout_: number | undefined = undefined;
  /**
   * Creates an instance of MatchExecutor.
   * @param stmt - The MatchStmt object.
   */
  constructor(stmt: MatchStmt) {
    this.match_map_ = new Map<string, number>();
    this.pattern_list_ = [];
    let stmts = stmt.get_cases();
    let default_stmt = stmt.get_default_case();
    
    for (let stmt of stmts) {
      let pattern = stmt.get_pattren();
      // 检查是否出现重复
      if (this.match_map_.has(pattern)) {
        throw new Error("Duplicate pattern in MatchStmt");
      }
      this.match_map_.set(pattern, this.children_.length);
      this.pattern_list_.push(new RegExp(pattern));
      this.children_.push(new CommandExecutor(stmt));
    }
    let when_silence_stmt = stmt.get_when_silence_stmt();
    if (when_silence_stmt != null) {
      this.when_silence_executor_ = new CommandExecutor(when_silence_stmt);
      this.timeout_expr_ = when_silence_stmt.get_timeout();
    }
    if (default_stmt != null) {
      this.default_index_ = this.children_.length;
      this.children_.push(new CommandExecutor(default_stmt));
    }
  }

  /**
   * Opens the match executor with the given context.
   * @param context - The context to open the executor with.
   */
  open(context: Context): void {
    this.local_context_ = context;
    this.local_context_.enter_new_scope();
    this.current_index_ = -1;
    this.is_running_ = false;
    this.is_timeout_ = false;
    this.timeout_ = undefined;
  }

  /**
   * Advances the execution to the next step based on the provided input.
   *
   * @param input The input event to be processed.
   * @returns The result event indicating the next step in the execution.
   */
  next(input: ScriptInputEvent): ResultEvent {
    if (!this.is_running_) {
      // 不在分支内,需要检查是否有input,如果有input则进入分支
      let input_str = input.get_input();
      if (input.is_handled() && input_str == null) {
        // 超时了, 执行超时分支
        this.is_timeout_ = true;
        return this.when_silence_executor_.next(input);
      }
      if (this.timeout_expr_ != null) {
        let result = this.timeout_expr_.get_value(this.local_context_);
        if (typeof result != "number") {
          throw new Error("Timeout must be a number");
        }
        this.timeout_ = result;
      }
      if (input_str == null) {
        // 无输入,请求输入
        return new ResultEvent(0, "", ResultType.INPUT, this.timeout_);
      }
      // 遍历所有pattern,检查是否有匹配
      for (let i = 0; i < this.pattern_list_.length; ++i) {
        if (this.pattern_list_[i].test(input_str)) {
          this.is_running_ = true;
          this.children_[i].open(this.local_context_);
          this.current_index_ = i;
          let new_input = new ScriptInputEvent(undefined);
          return this.children_[i].next(new_input);
        }
      }
      // 没有匹配,执行default分支
      let index = this.default_index_;
      if (index != -1) {
        this.is_running_ = true;
        this.children_[index].open(this.local_context_);
        this.current_index_ = index;
        let new_input = new ScriptInputEvent(undefined);
        return this.children_[index].next(new_input);
      } else {
        throw new Error("No match in MatchStmt");
      }
    }
    if (this.is_timeout_) {
      // 超时了,执行超时分支
      return this.when_silence_executor_.next(input);
    }
    // 接下来正常执行分支
    return this.children_[this.current_index_].next(input);
  }

  /**
   * Closes the match executor.
   */
  close(): void {
    this.local_context_.exit_current_scope();
  }

  /**
   * Gets the executor type.
   * @returns {ExecutorType} The executor type.
   */
  get_executor_type(): ExecutorType {
    return ExecutorType.MATCH;
  }
}
