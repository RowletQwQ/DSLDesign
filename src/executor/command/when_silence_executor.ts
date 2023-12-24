import { Context } from "../../context/context.js";
import { ResultEvent, ResultType } from "../../event/result_event.js";
import { ScriptInputEvent } from "../../event/script_input_event.js";
import { WhenSilenceStmt } from "../../stmt/command/when_silence_stmt.js";
import { CommandExecutor } from "../command_executor.js";
import { Executor, ExecutorType } from "../executor.js";

export class WhenSilenceExecutor implements Executor {
  private children_: Executor[] = [];
  private current_index_: number = 0;
  private local_context_: Context;

  /**
   * Creates a new instance of the WhenSilenceExecutor class.
   * @param stmt The WhenSilenceStmt object.
   */
  constructor(stmt: WhenSilenceStmt) {
    // timeout has been handled outside
    let command_seq = stmt.get_command_seq();
    for (let command of command_seq) {
      this.children_.push(new CommandExecutor(command));
    }
  }
  /**
   * Opens the executor and initializes the local context.
   * @param context The context to be used.
   * @returns void
   */
  open(context: Context): void {
    this.local_context_ = context;
    this.local_context_.enter_new_scope();
    this.current_index_ = 0;
    this.children_[this.current_index_].open(this.local_context_);
  }
  /**
   * Advances to the next child executor and processes the input event.
   *
   * @param input - The input event to be processed.
   * @returns The result event after processing the input event.
   */
  next(input: ScriptInputEvent): ResultEvent {
    let result = this.children_[this.current_index_].next(input);
    while (result.is_finished()) {
      this.children_[this.current_index_].close();
      this.current_index_++;
      if (this.current_index_ >= this.children_.length) {
        return new ResultEvent(0, "", ResultType.END);
      }
      this.children_[this.current_index_].open(this.local_context_);
      result = this.children_[this.current_index_].next(input);
    }
    return result;
  }
  /**
   * Closes the executor.
   */
  close(): void {
    // 执行完毕退出
    this.local_context_.exit_current_scope();
  }
  /**
   * Gets the executor type.
   * @returns {ExecutorType} The executor type.
   */
  get_executor_type(): ExecutorType {
    return ExecutorType.WHEN_SILENCE;
  }
}
