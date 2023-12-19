import { Context } from "../context/context.js";
import { ResultEvent, ResultType } from "../event/result_event.js";
import { ScriptInputEvent } from "../event/script_input_event.js";
import { TopicStmt } from "../stmt/topic_stmt.js";
import { CommandExecutor } from "./command_executor.js";
import { Executor, ExecutorType } from "./executor.js";

/**
 * Represents a TopicExecutor that executes a sequence of CommandExecutors.
 */
export class TopicExecutor implements Executor {
  private children_: CommandExecutor[] = [];
  private index_: number = 0;
  private local_context_: Context;

  /**
   * Constructs a new TopicExecutor with the given TopicStmt.
   * @param stmt The TopicStmt to be executed.
   * @throws Error if TopicExecutor does not have at least one CommandStmt.
   */
  constructor(stmt: TopicStmt) {
    let stmts = stmt.get_command_seq();
    for (let stmt of stmts) {
      this.children_.push(new CommandExecutor(stmt));
    }
    if (this.children_.length == 0) {
      throw new Error("TopicExecutor must have at least one CommandStmt");
    }
  }

  /**
   * Opens the TopicExecutor with the given context.
   * @param context The context to be used.
   */
  open(context: Context): void {
    this.local_context_ = context;
    this.local_context_.enter_new_scope();
    this.index_ = 0;
    this.children_[0].open(this.local_context_);
  }

  /**
   * Moves to the next step in the execution and returns the result.
   * @param input The input event.
   * @returns The result event.
   */
  next(input: ScriptInputEvent): ResultEvent {
    let result = this.children_[this.index_].next(input);
    while (result.is_finished()) {
      this.children_[this.index_].close();
      this.index_++;
      if (this.index_ >= this.children_.length) {
        return new ResultEvent(0, "", ResultType.END);
      }
      this.children_[this.index_].open(this.local_context_);
      result = this.children_[this.index_].next(input);
    }
    return result;
  }

  /**
   * Closes the executor and exits the current scope.
   */
  close(): void {
    if (this.index_ < this.children_.length) {
      // GOTO退出
      this.children_[this.index_].close();
    }
    this.local_context_.exit_current_scope();
    return;
  }

  /**
   * Gets the executor type.
   * @returns The executor type.
   */
  get_executor_type(): ExecutorType {
    return ExecutorType.TOPIC;
  }
}
