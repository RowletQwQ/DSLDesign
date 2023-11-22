import { match } from "assert";
import { Context } from "../context/context.ts";
import { ResultEvent } from "../event/result_event.ts";
import { ScriptInputEvent } from "../event/script_input_event.ts";
import { CommandStmt, CommandStmtType } from "../stmt/command_stmt.ts";
import { Executor, ExecutorType } from "./executor.ts";
import { AssertStmt } from "../stmt/command/assert_stmt.ts";
import { BreakExecutor } from "./command/break_executor.ts";
import { BreakStmt } from "../stmt/command/break_stmt.ts";
import { CaseExecutor } from "./command/case_executor.ts";
import { CaseStmt } from "../stmt/command/case_stmt.ts";
import { ContinueExecutor } from "./command/continue_executor.ts";
import { ContinueStmt } from "../stmt/command/continue_stmt.ts";
import { ExitExecutor } from "./command/exit_executor.ts";
import { ExitStmt } from "../stmt/command/exit_stmt.ts";
import { FetchExecutor } from "./command/fetch_executor.ts";
import { FetchStmt } from "../stmt/command/fetch_stmt.ts";
import { GotoExecutor } from "./command/goto_executor.ts";
import { GotoStmt } from "../stmt/command/goto_stmt.ts";
import { IfExecutor } from "./command/if_executor.ts";
import { IfStmt } from "../stmt/command/if_stmt.ts";
import { InputExecutor } from "./command/input_executor.ts";
import { InputStmt } from "../stmt/command/input_stmt.ts";
import { LoopExecutor } from "./command/loop_executor.ts";
import { LoopStmt } from "../stmt/command/loop_stmt.ts";
import { MatchExecutor } from "./command/match_executor.ts";
import { MatchStmt } from "../stmt/command/match_stmt.ts";
import { MenuExecutor } from "./command/menu_executor.ts";
import { MenuStmt } from "../stmt/command/menu_stmt.ts";
import { PostExecutor } from "./command/post_executor.ts";
import { PostStmt } from "../stmt/command/post_stmt.ts";
import { SayExecutor } from "./command/say_executor.ts";
import { SayStmt } from "../stmt/command/say_stmt.ts";
import { SetExecutor } from "./command/set_executor.ts";
import { SetStmt } from "../stmt/command/set_stmt.ts";
import { WhenSilenceExecutor } from "./command/when_silence_executor.ts";
import { WhenSilenceStmt } from "../stmt/command/when_silence_stmt.ts";
import { WhenStmt } from "../stmt/command/when_stmt.ts";

/**
 * @brief CommandExecutor，用于执行Command
 * 构造函数会负责将CommandStmt解析为对应的stmt,并创建对应的Executor
 */
export class CommandExecutor implements Executor {
    private executor_: Executor;
    constructor (stmt: CommandStmt) {
        let command_type = stmt.get_cmd_type();
        switch(command_type) {
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
            default: {
                throw new Error("Unimplemented command stmt type");
            }
        }
    }
    
    open(context: Context): void {
        this.executor_.open(context);
    }

    next(input: ScriptInputEvent): ResultEvent {
        return this.executor_.next(input);
    }

    close(): Context {
        return this.executor_.close();
    }

    get_executor_type(): ExecutorType {
        return ExecutorType.COMMAND;
    }


}