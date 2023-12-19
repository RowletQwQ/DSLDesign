import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
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

  /**
   * Creates an instance of MatchExecutor.
   * @param stmt - The MatchStmt object.
   */
  constructor(stmt: MatchStmt) {
    this.match_map_ = new Map<string, number>();
    let stmts = stmt.get_cases();
    let default_stmt = stmt.get_default_case();
    if (default_stmt != null) {
      this.default_index_ = this.children_.length;
      this.children_.push(new CommandExecutor(default_stmt));
    }
    for (let stmt of stmts) {
      let pattern = stmt.get_pattren();
      // 检查是否出现重复
      if (this.match_map_.has(pattern)) {
        throw new Error("Duplicate pattern in MatchStmt");
      }
      this.match_map_.set(pattern, this.children_.length);
      this.children_.push(new CommandExecutor(stmt));
    }
  }

  /**
   * Opens the match executor with the given context.
   * @param context - The context to open the executor with.
   */
  open(context: Context): void {
    this.local_context_ = context;
    this.local_context_.enter_new_scope();
    this.current_index_ = 0;
    this.is_running_ = false;
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
        return this.when_silence_executor_.next(input);
      }
      if (input_str == null) {
        // 无输入,请求输入
        return new ResultEvent(0, "", ResultType.INPUT);
      }
      // 如果有输入,则检查是否有对应的分支,无对应分支则进入default
      let index = this.match_map_.get(input_str);
      if (index == undefined) {
        index = this.default_index_;
      }
      this.is_running_ = true;
      this.children_[index].open(this.local_context_);
      this.current_index_ = index;
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
