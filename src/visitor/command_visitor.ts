import { AbstractParseTreeVisitor } from "antlr4ng";
import {
  Assert_stmtContext,
  Assign_global_stmtContext,
  Assign_stmtContext,
  Break_stmtContext,
  Case_branchContext,
  Case_listContext,
  Command_sequncesContext,
  Command_stmtContext,
  Continue_stmtContext,
  Default_branchContext,
  Else_if_stmtContext,
  Exit_stmtContext,
  Fetch_stmtContext,
  Goto_stmtContext,
  If_stmtContext,
  Input_stmtContext,
  Loop_stmtContext,
  Match_stmtContext,
  Menu_stmtContext,
  Post_stmtContext,
  Say_stmtContext,
  ScriptContext,
  When_clauseContext,
  When_silence_stmtContext,
} from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { CommandStmt, CommandStmtType } from "../stmt/command_stmt.js";
import { AssertStmt } from "../stmt/command/assert_stmt.js";
import { ExpressionVisitor } from "./expression_visitor.js";
import { BreakStmt } from "../stmt/command/break_stmt.js";
import { ContinueStmt } from "../stmt/command/continue_stmt.js";
import { CaseStmt } from "../stmt/command/case_stmt.js";
import { TemplateStringVisitor } from "./template_str_visitor.js";
import { FetchStmt } from "../stmt/command/fetch_stmt.js";
import { GotoStmt } from "../stmt/command/goto_stmt.js";
import { IfStmt } from "../stmt/command/if_stmt.js";
import { InputStmt } from "../stmt/command/input_stmt.js";
import { WhenSilenceStmt } from "../stmt/command/when_silence_stmt.js";
import { LoopStmt } from "../stmt/command/loop_stmt.js";
import { WhenStmt } from "../stmt/command/when_stmt.js";
import { SetStmt } from "../stmt/command/set_stmt.js";
import { SayStmt } from "../stmt/command/say_stmt.js";
import { PostStmt } from "../stmt/command/post_stmt.js";
import { MatchStmt } from "../stmt/command/match_stmt.js";
import { MenuStmt } from "../stmt/command/menu_stmt.js";
import { ExitStmt } from "../stmt/command/exit_stmt.js";

export class CommandVisitor extends cslVisitor<CommandStmt[] | CommandStmt> {
  private expr_visitor_: ExpressionVisitor;
  private template_str_visitor_: TemplateStringVisitor;
  /**
   * Creates an instance of CommandVisitor.
   */
  constructor() {
    super();
    this.expr_visitor_ = new ExpressionVisitor();
    this.template_str_visitor_ = new TemplateStringVisitor();
  }
  /**
   * Visits the Command_sequnces context and returns an array of CommandStmt objects.
   *
   * @param ctx The Command_sequncesContext object to visit.
   * @returns An array of CommandStmt objects.
   */
  override visitCommand_sequnces = (
    ctx: Command_sequncesContext
  ): CommandStmt[] => {
    // 在这里实现访问 Command_sequnces 的逻辑
    let command_stmt_list = ctx.command_stmt();
    let command_seq = new Array<CommandStmt>();
    for (let command_stmt of command_stmt_list) {
      let command = this.visitCommand_stmt(command_stmt);
      command_seq.push(command);
    }
    return command_seq;
  };

  /**
   * Visits a command statement node in the DSL AST.
   *
   * @param ctx The context object representing the command statement node.
   * @returns The parsed command statement.
   * @throws Error if the command parse error occurs.
   */
  override visitCommand_stmt = (ctx: Command_stmtContext): CommandStmt => {
    // visitChildren会返回最后一个非空的子节点的返回值
    let command = this.visitChildren(ctx);
    if (command instanceof Array || command == null) {
      throw new Error("Command Parse error");
    }
    return command;
  };

  // assert 语句
  /**
   * Visits an assert statement context and returns a CommandStmt object.
   *
   * @param ctx The assert statement context to visit.
   * @returns A CommandStmt object representing the assert statement.
   * @throws Error if there is a parse error or the expression is invalid.
   */
  override visitAssert_stmt = (ctx: Assert_stmtContext): CommandStmt => {
    let expr = this.expr_visitor_.visit(ctx.expression());
    if (expr instanceof Array || expr == null) {
      throw new Error("Assert_stmt Parse error");
    }
    return new AssertStmt(expr);
  };

  // break 命令
  /**
   * Visits a Break_stmtContext and returns a CommandStmt representing a break statement.
   *
   * @param ctx The Break_stmtContext to visit.
   * @returns A CommandStmt representing a break statement.
   */
  override visitBreak_stmt = (ctx: Break_stmtContext): CommandStmt => {
    return new BreakStmt();
  };

  // case分支
  /**
   * Visits the case_list production rule in the DSLDesign grammar.
   *
   * @param ctx - The Case_listContext object representing the parse tree node.
   * @returns An array of CommandStmt objects representing the visited case_list.
   * @throws Error if there is a parse error in the case_list.
   */
  override visitCase_list = (ctx: Case_listContext): CommandStmt[] => {
    let case_branch_ctx_list = ctx.case_branch();
    let case_list = new Array<CommandStmt>();
    for (let case_branch_ctx of case_branch_ctx_list) {
      let case_branch = this.visitCase_branch(case_branch_ctx);
      if (case_branch instanceof Array || case_branch == null) {
        throw new Error("Case_list Parse error");
      } else {
        case_list.push(case_branch);
      }
    }
    return case_list;
  };

  /**
   * Visits a case branch in the DSLDesign language.
   *
   * @param ctx - The context representing the case branch.
   * @returns The command statement representing the case branch.
   * @throws Error if there is a parse error in the case branch.
   */
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
    let command_stmts: CommandStmt[];
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
  };

  /**
   * Visits the default branch of a DSL command.
   *
   * @param ctx - The context of the default branch.
   * @returns The command statement representing the default branch.
   * @throws Error if there is a parse error in the default branch.
   */
  override visitDefault_branch = (ctx: Default_branchContext): CommandStmt => {
    let pattern = "";
    let command_seq_stmt = ctx.command_sequnces();
    let command_stmts: CommandStmt[];
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
  };

  // continue 命令
  /**
   * Visits a continue statement node in the AST.
   *
   * @param ctx The continue statement context.
   * @returns A CommandStmt representing the continue statement.
   */
  override visitContinue_stmt = (ctx: Continue_stmtContext): CommandStmt => {
    return new ContinueStmt();
  };

  // exit 命令
  /**
   * Visits the exit statement context and returns a CommandStmt object.
   *
   * @param ctx The exit statement context.
   * @returns A CommandStmt object representing the exit statement.
   */
  override visitExit_stmt = (ctx: Exit_stmtContext): CommandStmt => {
    return new ExitStmt();
  };

  // fetch 命令
  /**
   * Visits a fetch statement in the DSL and returns the corresponding CommandStmt object.
   *
   * @param ctx - The fetch statement context.
   * @returns The CommandStmt object representing the fetch statement.
   * @throws Error if there is a parse error.
   */
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
  };

  // goto 命令
  /**
   * Visits a Goto_stmtContext and returns a CommandStmt.
   *
   * @param ctx The Goto_stmtContext to visit.
   * @returns A CommandStmt representing the visited Goto_stmtContext.
   */
  override visitGoto_stmt = (ctx: Goto_stmtContext): CommandStmt => {
    let identifier = ctx.ID();
    if (identifier == null) {
      return new GotoStmt("chatbox");
    }
    return new GotoStmt(identifier.toString());
  };

  // if语句
  /**
   * Visits an if statement context and returns a CommandStmt.
   *
   * @param ctx - The if statement context to visit.
   * @returns The CommandStmt representing the if statement.
   * @throws Error if there is a parse error.
   */
  override visitIf_stmt = (ctx: If_stmtContext): CommandStmt => {
    let expr = this.expr_visitor_.visit(ctx.expression());
    if (expr instanceof Array || expr == null) {
      throw new Error("If_stmt Parse error");
    }
    let command_seq_stmt = ctx.command_sequnces();
    let command_stmts: CommandStmt[];
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
      if (
        else_if_instance == null ||
        else_if_instance.get_cmd_type() != CommandStmtType.IF_STMT
      ) {
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

    return new IfStmt(
      expr,
      command_stmts,
      else_if_instance,
      else_command_stmts
    );
  };

  /**
   * Visits the Else_if_stmtContext and returns a CommandStmt.
   *
   * @param ctx The Else_if_stmtContext to visit.
   * @returns A CommandStmt representing the else if statement.
   * @throws Error if there is a parse error.
   */
  override visitElse_if_stmt = (ctx: Else_if_stmtContext): CommandStmt => {
    let expr = this.expr_visitor_.visit(ctx.expression());
    if (expr instanceof Array || expr == null) {
      throw new Error("If_stmt Parse error");
    }
    let command_seq_stmt = ctx.command_sequnces();
    let command_stmts: CommandStmt[];
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
      if (
        else_if_instance == null ||
        else_if_instance.get_cmd_type() != CommandStmtType.IF_STMT
      ) {
        throw new Error("If_stmt Parse error");
      }
    }
    return new IfStmt(expr, command_stmts, else_if_instance);
  };

  // input 命令
  /**
   * Visits an input statement context and returns a CommandStmt object.
   *
   * @param ctx The input statement context to visit.
   * @returns A CommandStmt object representing the input statement.
   */
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
  };

  // loop 语句
  /**
   * Visits a loop statement and returns a CommandStmt object.
   *
   * @param ctx - The Loop_stmtContext object representing the loop statement.
   * @returns A CommandStmt object representing the loop statement.
   * @throws Error if there is a parse error in the loop statement.
   */
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
      when_clause_instance = this.visitWhen_clause(
        when_clause_stmt
      ) as WhenStmt;
    }
    return new LoopStmt(command_seq, when_clause_instance);
  };

  // match 语句
  /**
   * Visits a Match_stmtContext and returns a CommandStmt.
   *
   * @param ctx The Match_stmtContext to visit.
   * @returns A CommandStmt representing the visited Match_stmtContext.
   * @throws Error if there is a parse error in the Match_stmtContext.
   */
  override visitMatch_stmt = (ctx: Match_stmtContext): CommandStmt => {
    let match_list_stmt = ctx.case_list();
    if (match_list_stmt == null) {
      throw new Error("Match_stmt Parse error");
    }
    let case_stmts = this.visitCase_list(match_list_stmt) as CaseStmt[];
    let default_stmt = ctx.default_branch();
    let default_stmt_instance: CaseStmt | null = null;
    if (default_stmt != null) {
      default_stmt_instance = this.visitDefault_branch(
        default_stmt
      ) as CaseStmt;
    } else {
      throw new Error("Match_stmt Parse error");
    }
    let when_silence_stmt = ctx.when_silence_stmt();
    let when_silence_instance: WhenSilenceStmt | null = null;
    if (when_silence_stmt != null) {
      when_silence_instance = this.visit(when_silence_stmt) as WhenSilenceStmt;
    }
    return new MatchStmt(
      case_stmts,
      default_stmt_instance,
      when_silence_instance
    );
  };

  // menu 语句
  /**
   * Visits a Menu_stmt context and returns a CommandStmt object.
   *
   * @param ctx - The Menu_stmtContext to visit.
   * @returns A CommandStmt object representing the visited Menu_stmt.
   * @throws Error if there is a parse error in the Menu_stmt.
   */
  override visitMenu_stmt = (ctx: Menu_stmtContext): CommandStmt => {
    let match_list_stmt = ctx.case_list();
    if (match_list_stmt == null) {
      throw new Error("Menu_stmt Parse error");
    }
    let case_stmts = this.visitCase_list(match_list_stmt) as CaseStmt[];
    return new MenuStmt(case_stmts);
  };

  // post 语句
  /**
   * Visits a Post_stmtContext and returns a CommandStmt object.
   *
   * @param ctx - The Post_stmtContext to visit.
   * @returns The CommandStmt object representing the visited Post_stmtContext.
   * @throws Error if there is a parse error or if the fetch statement is invalid.
   */
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
  };

  // say 语句
  /**
   * Visits the "say_stmt" production rule in the DSL grammar and returns a CommandStmt object.
   *
   * @param ctx The Say_stmtContext object representing the parse tree node.
   * @returns A CommandStmt object representing the "say_stmt" production rule.
   * @throws Error if there is a parse error.
   */
  override visitSay_stmt = (ctx: Say_stmtContext): CommandStmt => {
    let expr_stmt = ctx.expression();
    let template_str_stmt = ctx.template_string();
    if (expr_stmt) {
      // 表达式
      let expr = this.expr_visitor_.visit(expr_stmt);
      if (expr instanceof Array || expr == null) {
        throw new Error("Say_stmt Parse error");
      }
      return new SayStmt(expr);
    }

    if (template_str_stmt) {
      // 模板字符串
      let template_str = this.template_str_visitor_.visit(template_str_stmt);
      if (template_str == null) {
        throw new Error("Say_stmt Parse error");
      }
      return new SayStmt(template_str);
    }
    throw new Error("Say_stmt Parse error");
  };

  // set 语句
  /**
   * Visits an assign statement and returns a CommandStmt object.
   *
   * @param ctx - The assign statement context.
   * @returns The CommandStmt object representing the assign statement.
   * @throws Error if there is a parse error in the assign statement.
   */
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
    let is_declare = ctx.ASSIGN() != null;
    return new SetStmt(identifier, expr, is_declare);
  };

  // set global 语句
  /**
   * Visits an Assign_global_stmtContext and returns a CommandStmt.
   *
   * @param ctx The Assign_global_stmtContext to visit.
   * @returns A CommandStmt representing the assignment statement.
   * @throws Error if there is a parse error or the expression is invalid.
   */
  override visitAssign_global_stmt = (
    ctx: Assign_global_stmtContext
  ): CommandStmt => {
    let identifier = ctx.ID().toString();
    let expr_stmt = ctx.expression();
    if (expr_stmt == null) {
      throw new Error("Assign_global_stmt Parse error");
    }
    let expr = this.expr_visitor_.visit(expr_stmt);
    if (expr instanceof Array || expr == null) {
      throw new Error("Assign_global_stmt Parse error");
    }
    let is_declare = ctx.ASSIGN() != null;
    return new SetStmt(identifier, expr, is_declare, true);
  };

  // when silence 语句
  /**
   * Visits a When_silence_stmtContext and returns a CommandStmt.
   *
   * @param ctx The When_silence_stmtContext to visit.
   * @returns The CommandStmt generated from visiting the context.
   * @throws Error if there is a parse error.
   */
  override visitWhen_silence_stmt = (
    ctx: When_silence_stmtContext
  ): CommandStmt => {
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
  };

  // when 语句
  /**
   * Visits a when_clause node and returns a CommandStmt.
   * @param ctx The when_clause context.
   * @returns The CommandStmt representing the when_clause.
   * @throws Error if there is a parse error.
   */
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
  };
}
