import { AbstractParseTreeVisitor } from "antlr4ng";
import 
{   
    Assert_stmtContext, Assign_global_stmtContext, Assign_stmtContext, Break_stmtContext, 
    Case_branchContext, Case_listContext, Command_sequncesContext, Command_stmtContext, 
    Continue_stmtContext, Default_branchContext, Else_if_stmtContext, Exit_stmtContext, Fetch_stmtContext, 
    Goto_stmtContext, If_stmtContext, Input_stmtContext, Loop_stmtContext, Match_stmtContext, 
    Menu_stmtContext, Post_stmtContext, Say_stmtContext, When_clauseContext, When_silence_stmtContext 
} 
from "../parser/cslParser.ts";
import { cslVisitor } from "../parser/cslVisitor.ts";
import { CommandStmt, CommandStmtType } from "../stmt/command_stmt.ts";
import { AssertStmt } from "../stmt/command/assert_stmt.ts";
import { ExpressionVisitor } from "./expression_visitor.ts";
import { BreakStmt } from "../stmt/command/break_stmt.ts";
import { ContinueStmt } from "../stmt/command/continue_stmt.ts";
import { CaseStmt } from "../stmt/command/case_stmt.ts";
import { TemplateStringVisitor } from "./template_str_visitor.ts";
import { FetchStmt } from "../stmt/command/fetch_stmt.ts";
import { GotoStmt } from "../stmt/command/goto_stmt.ts";
import { IfStmt } from "../stmt/command/if_stmt.ts";
import { InputStmt } from "../stmt/command/input_stmt.ts";
import { WhenSilenceStmt } from "../stmt/command/when_silence_stmt.ts";
import { LoopStmt } from "../stmt/command/loop_stmt.ts";
import { WhenStmt } from "../stmt/command/when_stmt.ts";
import { SetStmt } from "../stmt/command/set_stmt.ts";
import { SayStmt } from "../stmt/command/say_stmt.ts";
import { PostStmt } from "../stmt/command/post_stmt.ts";
import { MatchStmt } from "../stmt/command/match_stmt.ts";
import { MenuStmt } from "../stmt/command/menu_stmt.ts";
import { ExitStmt } from "../stmt/command/exit_stmt.ts";

export class CommandVisitor extends cslVisitor<CommandStmt [] | CommandStmt> {
    private expr_visitor_: ExpressionVisitor;
    private template_str_visitor_: TemplateStringVisitor;
    constructor() {
        super();
        this.expr_visitor_ = new ExpressionVisitor();
        this.template_str_visitor_ = new TemplateStringVisitor();
    }
    override visitCommand_sequnces = (ctx: Command_sequncesContext): CommandStmt [] =>{
        // 在这里实现访问 Command_sequnces 的逻辑
        let command_stmts = ctx.command_stmt();
        let seq_stmts = ctx.command_sequnces();
        let command_seq = new Array<CommandStmt>();
        if (seq_stmts != undefined) {
            command_seq = this.visitCommand_sequnces(seq_stmts);
        }
        let command = this.visitCommand_stmt(command_stmts);
        command_seq.push(command);
        return command_seq;
    }
    
    override visitCommand_stmt = (ctx: Command_stmtContext): CommandStmt =>{
        let command = this.visitChildren(ctx);
        if (command instanceof Array || command == null) {
            throw new Error("Command Parse error");
        }
        return command;
    }

    // 以下是对应语法

    // assert 语句
    override visitAssert_stmt = (ctx: Assert_stmtContext): CommandStmt =>{
        let expr = this.expr_visitor_.visit(ctx.expression());
        if (expr instanceof Array || expr == null) {
            throw new Error("Assert_stmt Parse error");
        }
        return new AssertStmt(expr);
    }

    // break 命令
    override visitBreak_stmt = (ctx: Break_stmtContext): CommandStmt => {
        return new BreakStmt();
    }

    // case分支
    override visitCase_list = (ctx: Case_listContext): CommandStmt[] => {
        let case_list_stmt = ctx.case_list();
        let case_list : CommandStmt[];
        if (case_list_stmt != null) {
            case_list = this.visitCase_list(case_list_stmt);
        } else {
            case_list = new Array<CommandStmt>();
        }
        let case_branch = this.visit(ctx.case_branch());
        if (case_branch instanceof Array || case_branch == null) {
            throw new Error("Case_list Parse error");
        } else {
            case_list.push(case_branch);
        }
        return case_list;
    }

    override visitCase_branch = (ctx: Case_branchContext): CommandStmt => {
        let pattern_stmt = ctx.expression();
        if (pattern_stmt == null) {
            throw new Error("Case_branch Parse error");
        }
        let pattern_expr = this.expr_visitor_.visit(pattern_stmt);
        if (pattern_expr instanceof Array || pattern_expr == null) {
            throw new Error("Case_branch Parse error");
        }
        let command_seq_stmt = ctx.command_sequnces();
        let command_stmts :CommandStmt[];
        if (command_seq_stmt != null) {
            let command_seq = this.visit(command_seq_stmt);
            if (command_seq instanceof Array) {
                command_stmts = command_seq;
            } else {
                throw new Error("Case_branch Parse error");
            }
        } else {
            throw new Error("Case_branch Parse error");
        }
        let pattern = pattern_expr.try_get_value();
        if (typeof pattern != "string") {
            throw new Error("Case_branch Parse error");
        }
        return new CaseStmt(command_stmts, pattern, false);
    }

    override visitDefault_branch = (ctx: Default_branchContext): CommandStmt => {
        let pattern = "";
        let command_seq_stmt = ctx.command_sequnces();
        let command_stmts :CommandStmt[];
        if (command_seq_stmt != null) {
            let command_seq = this.visit(command_seq_stmt);
            if (command_seq instanceof Array) {
                command_stmts = command_seq;
            } else {
                throw new Error("Default_branch Parse error");
            }
        } else {
            throw new Error("Default_branch Parse error");
        }
        return new CaseStmt(command_stmts, pattern, true);
    }
    // continue 命令
    override visitContinue_stmt = (ctx: Continue_stmtContext): CommandStmt => {
        return new ContinueStmt();
    }

    // exit 命令
    override visitExit_stmt = (ctx: Exit_stmtContext): CommandStmt => {
        return new ExitStmt();
    }

    // fetch 命令
    override visitFetch_stmt = (ctx: Fetch_stmtContext): CommandStmt => {
        let url = ctx.STRING();
        let identifier = ctx.ID().toString();
        if (url == null) {
            let template_str_stmt = ctx.template_string();
            if (template_str_stmt == null) {
                throw new Error("Fetch_stmt Parse error");
            }
            let template_str = this.template_str_visitor_.visit(template_str_stmt);
            if (template_str == null) {
                throw new Error("Fetch_stmt Parse error");
            }
            return new FetchStmt(template_str, identifier);
        }
        return new FetchStmt(url.toString(), identifier);
    }
    
    // goto 命令
    override visitGoto_stmt = (ctx: Goto_stmtContext): CommandStmt => {
        let identifier = ctx.ID().toString();
        return new GotoStmt(identifier);
    }

    // if语句
    override visitIf_stmt = (ctx: If_stmtContext): CommandStmt => {
        let expr = this.expr_visitor_.visit(ctx.expression());
        if (expr instanceof Array || expr == null) {
            throw new Error("If_stmt Parse error");
        }
        let command_seq_stmt = ctx.command_sequnces();
        let command_stmts :CommandStmt[];
        if (command_seq_stmt != null) {
            let command_seq = this.visit(command_seq_stmt);
            if (command_seq instanceof Array) {
                command_stmts = command_seq;
            } else {
                throw new Error("If_stmt Parse error");
            }
        } else {
            throw new Error("If_stmt Parse error");
        }
        // 查看有没有elseif 和 else
        let else_if_stmt = ctx.else_if_stmt();
        let else_stmt = ctx.else_stmt();

        let else_if_instance: IfStmt | null = null;
        if (else_if_stmt != null) {
            else_if_instance = this.visit(else_if_stmt) as IfStmt;
            if (else_if_instance == null || else_if_instance.get_cmd_type() != CommandStmtType.IF_STMT) {
                throw new Error("If_stmt Parse error");
            }

        }
        let else_command_stmts: CommandStmt[] | null = null;
        if (else_stmt != null) {
            let command_seq_stmt = else_stmt.command_sequnces();
            if (command_seq_stmt != null) {
                let command_seq = this.visitCommand_sequnces(command_seq_stmt);
                else_command_stmts = command_seq;
            }                                
        }

        return new IfStmt(expr, command_stmts, else_if_instance, else_command_stmts);
    }

    override visitElse_if_stmt = (ctx: Else_if_stmtContext): CommandStmt => {
        let expr = this.expr_visitor_.visit(ctx.expression());
        if (expr instanceof Array || expr == null) {
            throw new Error("If_stmt Parse error");
        }
        let command_seq_stmt = ctx.command_sequnces();
        let command_stmts :CommandStmt[];
        if (command_seq_stmt != null) {
            let command_seq = this.visit(command_seq_stmt);
            if (command_seq instanceof Array) {
                command_stmts = command_seq;
            } else {
                throw new Error("If_stmt Parse error");
            }
        } else {
            throw new Error("If_stmt Parse error");
        }
        // 查看有没有elseif 和 else
        let else_if_stmt = ctx.else_if_stmt();

        let else_if_instance: IfStmt | null = null;
        if (else_if_stmt != null) {
            else_if_instance = this.visit(else_if_stmt) as IfStmt;
            if (else_if_instance == null || else_if_instance.get_cmd_type() != CommandStmtType.IF_STMT) {
                throw new Error("If_stmt Parse error");
            }

        }
        return new IfStmt(expr, command_stmts, else_if_instance);
    }

    // input 命令
    override visitInput_stmt = (ctx: Input_stmtContext): CommandStmt => {
        let identifier = ctx.ID().toString();
        let assert_stmt = ctx.assert_stmt();
        let when_silence_stmt = ctx.when_silence_stmt();
        let assert_instance: AssertStmt | null = null;
        let when_silence_instance: WhenSilenceStmt | null = null;
        if (assert_stmt != null) {
            assert_instance = this.visit(assert_stmt) as AssertStmt;
        }
        if (when_silence_stmt != null) {
            when_silence_instance = this.visit(when_silence_stmt) as WhenSilenceStmt;
        }
        return new InputStmt(identifier, when_silence_instance, assert_instance);
    }

    // loop 语句
    override visitLoop_stmt = (ctx: Loop_stmtContext): CommandStmt => {
        let command_seq_stmt = ctx.command_sequnces();
        if (command_seq_stmt == null) {
            throw new Error("Loop_stmt Parse error");
        }
        let command_seq = this.visitCommand_sequnces(command_seq_stmt);
        if (command_seq instanceof Array == false) {
            throw new Error("Loop_stmt Parse error");
        }
        let when_clause_stmt = ctx.when_clause();
        let when_clause_instance: WhenStmt | null = null;
        if (when_clause_stmt != null) {
            when_clause_instance = this.visitWhen_clause(when_clause_stmt) as WhenStmt;
        }
        return new LoopStmt(command_seq, when_clause_instance);
    }

    // match 语句
    override visitMatch_stmt = (ctx: Match_stmtContext): CommandStmt => {
        let match_list_stmt = ctx.case_list();
        if (match_list_stmt == null) {
            throw new Error("Match_stmt Parse error");
        }
        let case_stmts = this.visitCase_list(match_list_stmt) as CaseStmt[];
        let default_stmt = ctx.default_branch();
        let default_stmt_instance: CaseStmt | null = null;
        if (default_stmt != null) {
            default_stmt_instance = this.visitDefault_branch(default_stmt) as CaseStmt;
        }
        let when_silence_stmt = ctx.when_silence_stmt();
        let when_silence_instance: WhenSilenceStmt | null = null;
        if (when_silence_stmt != null) {
            when_silence_instance = this.visit(when_silence_stmt) as WhenSilenceStmt;
        }
        return new MatchStmt(case_stmts, default_stmt_instance, when_silence_instance);
    }

    

    // menu 语句
    override visitMenu_stmt = (ctx: Menu_stmtContext): CommandStmt => {
        let match_list_stmt = ctx.case_list();
        if (match_list_stmt == null) {
            throw new Error("Menu_stmt Parse error");
        }
        let case_stmts = this.visitCase_list(match_list_stmt) as CaseStmt[];
        let default_stmt = ctx.default_branch();
        let default_stmt_instance: CaseStmt | null = null;
        if (default_stmt != null) {
            default_stmt_instance = this.visitDefault_branch(default_stmt) as CaseStmt;
        }
        return new MenuStmt(case_stmts, default_stmt_instance);
    }

    // post 语句
    override visitPost_stmt = (ctx: Post_stmtContext): CommandStmt => {
        let url = ctx.STRING();
        let identifier = ctx.ID().toString();
        if (url == null) {
            let template_str_stmt = ctx.template_string();
            if (template_str_stmt == null) {
                throw new Error("Fetch_stmt Parse error");
            }
            let template_str = this.template_str_visitor_.visit(template_str_stmt);
            if (template_str == null) {
                throw new Error("Fetch_stmt Parse error");
            }
            return new PostStmt(identifier, template_str);
        }
        return new PostStmt(identifier, url.toString());
    }

    // say 语句
    override visitSay_stmt = (ctx: Say_stmtContext): CommandStmt => {
        let expr_stmt = ctx.expression();
        if (expr_stmt == null) {
            throw new Error("Say_stmt Parse error");
        }
        let expr = this.expr_visitor_.visit(expr_stmt);
        if (expr instanceof Array || expr == null) {
            throw new Error("Say_stmt Parse error");
        }
        return new SayStmt(expr);
    }

    // set 语句
    override visitAssign_stmt = (ctx: Assign_stmtContext): CommandStmt => {
        let identifier = ctx.ID().toString();
        let expr_stmt = ctx.expression();
        if (expr_stmt == null) {
            throw new Error("Assign_stmt Parse error");
        }
        let expr = this.expr_visitor_.visit(expr_stmt);
        if (expr instanceof Array || expr == null) {
            throw new Error("Assign_stmt Parse error");
        }
        return new SetStmt(identifier, expr);
    }

    // set global 语句
    override visitAssign_global_stmt = (ctx: Assign_global_stmtContext): CommandStmt => {
        let identifier = ctx.ID().toString();
        let expr_stmt = ctx.expression();
        if (expr_stmt == null) {
            throw new Error("Assign_global_stmt Parse error");
        }
        let expr = this.expr_visitor_.visit(expr_stmt);
        if (expr instanceof Array || expr == null) {
            throw new Error("Assign_global_stmt Parse error");
        }
        return new SetStmt(identifier, expr, true);
    }

    // when silence 语句
    override visitWhen_silence_stmt = (ctx: When_silence_stmtContext): CommandStmt => {
        let expr_stmt = ctx.expression();
        if (expr_stmt == null) {
            throw new Error("When_silence_stmt Parse error");
        }
        let expr = this.expr_visitor_.visit(expr_stmt);
        if (expr instanceof Array || expr == null) {
            throw new Error("When_silence_stmt Parse error");
        }
        let command_seq_stmt = ctx.command_sequnces();
        if (command_seq_stmt == null) {
            throw new Error("When_silence_stmt Parse error");
        }
        let command_seq = this.visitCommand_sequnces(command_seq_stmt);
        if (command_seq instanceof Array == false) {
            throw new Error("When_silence_stmt Parse error");
        }
        return new WhenSilenceStmt(expr, command_seq);
    }

    // when 语句
    override visitWhen_clause = (ctx: When_clauseContext): CommandStmt => {
        let expr_stmt = ctx.expression();
        if (expr_stmt == null) {
            throw new Error("When_clause Parse error");
        }
        let expr = this.expr_visitor_.visit(expr_stmt);
        if (expr instanceof Array || expr == null) {
            throw new Error("When_clause Parse error");
        }
        return new WhenStmt(expr);
    }
}