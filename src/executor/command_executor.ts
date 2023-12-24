import { match } from "assert";
import { Context } from "../context/context.js";
import { ResultEvent } from "../event/result_event.js";
import { ScriptInputEvent } from "../event/script_input_event.js";
import { CommandStmt, CommandStmtType } from "../stmt/command_stmt.js";
import { Executor, ExecutorMock, ExecutorType } from "./executor.js";
import { AssertStmt } from "../stmt/command/assert_stmt.js";
import { BreakExecutor } from "./command/break_executor.js";
import { BreakStmt } from "../stmt/command/break_stmt.js";
import { CaseExecutor } from "./command/case_executor.js";
import { CaseStmt } from "../stmt/command/case_stmt.js";
import { ContinueExecutor } from "./command/continue_executor.js";
import { ContinueStmt } from "../stmt/command/continue_stmt.js";
import { ExitExecutor } from "./command/exit_executor.js";
import { ExitStmt } from "../stmt/command/exit_stmt.js";
import { FetchExecutor } from "./command/fetch_executor.js";
import { FetchStmt } from "../stmt/command/fetch_stmt.js";
import { GotoExecutor } from "./command/goto_executor.js";
import { GotoStmt } from "../stmt/command/goto_stmt.js";
import { IfExecutor } from "./command/if_executor.js";
import { IfStmt } from "../stmt/command/if_stmt.js";
import { InputExecutor } from "./command/input_executor.js";
import { InputStmt } from "../stmt/command/input_stmt.js";
import { LoopExecutor } from "./command/loop_executor.js";
import { LoopStmt } from "../stmt/command/loop_stmt.js";
import { MatchExecutor } from "./command/match_executor.js";
import { MatchStmt } from "../stmt/command/match_stmt.js";
import { MenuExecutor } from "./command/menu_executor.js";
import { MenuStmt } from "../stmt/command/menu_stmt.js";
import { PostExecutor } from "./command/post_executor.js";
import { PostStmt } from "../stmt/command/post_stmt.js";
import { SayExecutor } from "./command/say_executor.js";
import { SayStmt } from "../stmt/command/say_stmt.js";
import { SetExecutor } from "./command/set_executor.js";
import { SetStmt } from "../stmt/command/set_stmt.js";
import { WhenSilenceExecutor } from "./command/when_silence_executor.js";
import { WhenSilenceStmt } from "../stmt/command/when_silence_stmt.js";
import { WhenStmt } from "../stmt/command/when_stmt.js";

/**
 * @brief CommandExecutor，用于执行Command
 * 构造函数会负责将CommandStmt解析为对应的stmt,并创建对应的Executor
 */
export class CommandExecutor implements Executor {
  private executor_: Executor;
  /**
   * Creates a new CommandExecutor instance.
   * @param stmt The command statement to be executed.
   */
  constructor(stmt: CommandStmt) {
    let command_type = stmt.get_cmd_type();
    switch (command_type) {
      case CommandStmtType.BREAK_STMT: {
        this.executor_ = new BreakExecutor(stmt as BreakStmt);
        break;
      }
      case CommandStmtType.CASE_STMT: {
        this.executor_ = new CaseExecutor(stmt as CaseStmt);
        break;
      }
      case CommandStmtType.CONTINUE_STMT: {
        this.executor_ = new ContinueExecutor(stmt as ContinueStmt);
        break;
      }
      case CommandStmtType.EXIT_STMT: {
        this.executor_ = new ExitExecutor(stmt as ExitStmt);
        break;
      }
      case CommandStmtType.FETCH_STMT: {
        this.executor_ = new FetchExecutor(stmt as FetchStmt);
        break;
      }
      case CommandStmtType.GOTO_STMT: {
        this.executor_ = new GotoExecutor(stmt as GotoStmt);
        break;
      }
      case CommandStmtType.IF_STMT: {
        this.executor_ = new IfExecutor(stmt as IfStmt);
        break;
      }
      case CommandStmtType.INPUT_STMT: {
        this.executor_ = new InputExecutor(stmt as InputStmt);
        break;
      }
      case CommandStmtType.LOOP_STMT: {
        this.executor_ = new LoopExecutor(stmt as LoopStmt);
        break;
      }
      case CommandStmtType.MATCH_STMT: {
        this.executor_ = new MatchExecutor(stmt as MatchStmt);
        break;
      }
      case CommandStmtType.MENU_STMT: {
        this.executor_ = new MenuExecutor(stmt as MenuStmt);
        break;
      }
      case CommandStmtType.POST_STMT: {
        this.executor_ = new PostExecutor(stmt as PostStmt);
        break;
      }
      case CommandStmtType.SAY_STMT: {
        this.executor_ = new SayExecutor(stmt as SayStmt);
        break;
      }
      case CommandStmtType.SET_STMT: {
        this.executor_ = new SetExecutor(stmt as SetStmt);
        break;
      }
      case CommandStmtType.WHEN_SILENCE_STMT: {
        this.executor_ = new WhenSilenceExecutor(stmt as WhenSilenceStmt);
        break;
      }
      case CommandStmtType.MOCK_STMT: {
        this.executor_ = new ExecutorMock();
        break;
      }
      default: {
        throw new Error("Unimplemented command stmt type");
      }
    }
  }

  /**
   * Opens the context.
   * @param context - The context to be used.
   */
  open(context: Context): void {
    this.executor_.open(context);
  }

  /**
   * Executes the next command in the script.
   * @param input The input event for the script.
   * @returns The result event of the executed command.
   */
  next(input: ScriptInputEvent): ResultEvent {
    return this.executor_.next(input);
  }

  /**
   * Closes the executor
   */
  close(): void {
    this.executor_.close();
  }

  /**
   * Gets the type of the executor.
   * @returns {ExecutorType} The executor type.
   */
  get_executor_type(): ExecutorType {
    return ExecutorType.COMMAND;
  }
}
