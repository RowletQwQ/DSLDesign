// Generated from src/parser/csl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Template_stringContext } from "./cslParser";
import { Template_string_partContext } from "./cslParser";
import { Template_string_plain_textContext } from "./cslParser";
import { Template_string_exprContext } from "./cslParser";
import { ScriptsContext } from "./cslParser";
import { Hello_stmtContext } from "./cslParser";
import { Constance_stmtContext } from "./cslParser";
import { Constance_listContext } from "./cslParser";
import { ConstanceContext } from "./cslParser";
import { Chatbox_stmtContext } from "./cslParser";
import { Chatbox_listContext } from "./cslParser";
import { Chatbox_branchContext } from "./cslParser";
import { PatternContext } from "./cslParser";
import { Default_branchContext } from "./cslParser";
import { Topic_stmtContext } from "./cslParser";
import { Command_sequncesContext } from "./cslParser";
import { Command_stmtContext } from "./cslParser";
import { Continue_stmtContext } from "./cslParser";
import { Break_stmtContext } from "./cslParser";
import { Say_stmtContext } from "./cslParser";
import { Assign_stmtContext } from "./cslParser";
import { Assign_global_stmtContext } from "./cslParser";
import { Goto_stmtContext } from "./cslParser";
import { Input_stmtContext } from "./cslParser";
import { Assert_stmtContext } from "./cslParser";
import { AssertContext } from "./cslParser";
import { When_silence_stmtContext } from "./cslParser";
import { Match_stmtContext } from "./cslParser";
import { Match_listContext } from "./cslParser";
import { Match_branchContext } from "./cslParser";
import { Menu_stmtContext } from "./cslParser";
import { Case_listContext } from "./cslParser";
import { Case_branchContext } from "./cslParser";
import { If_stmtContext } from "./cslParser";
import { Else_if_stmtContext } from "./cslParser";
import { Else_stmtContext } from "./cslParser";
import { Loop_stmtContext } from "./cslParser";
import { When_clauseContext } from "./cslParser";
import { Fetch_stmtContext } from "./cslParser";
import { Post_stmtContext } from "./cslParser";
import { ExpressionContext } from "./cslParser";
import { Logical_or_expressionContext } from "./cslParser";
import { Logical_and_expressionContext } from "./cslParser";
import { Equality_expressionContext } from "./cslParser";
import { Relational_expressionContext } from "./cslParser";
import { Additive_expressionContext } from "./cslParser";
import { Multiplicative_expressionContext } from "./cslParser";
import { Unary_expressionContext } from "./cslParser";
import { Postfix_expressionContext } from "./cslParser";
import { Primary_expressionContext } from "./cslParser";
import { ValueContext } from "./cslParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `cslParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface cslVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `cslParser.template_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_string?: (ctx: Template_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.template_string_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_string_part?: (ctx: Template_string_partContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.template_string_plain_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_string_plain_text?: (ctx: Template_string_plain_textContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.template_string_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_string_expr?: (ctx: Template_string_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.scripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScripts?: (ctx: ScriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.hello_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHello_stmt?: (ctx: Hello_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.constance_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstance_stmt?: (ctx: Constance_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.constance_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstance_list?: (ctx: Constance_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.constance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstance?: (ctx: ConstanceContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.chatbox_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChatbox_stmt?: (ctx: Chatbox_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.chatbox_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChatbox_list?: (ctx: Chatbox_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.chatbox_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChatbox_branch?: (ctx: Chatbox_branchContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.default_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_branch?: (ctx: Default_branchContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.topic_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopic_stmt?: (ctx: Topic_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.command_sequnces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_sequnces?: (ctx: Command_sequncesContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.command_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_stmt?: (ctx: Command_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.continue_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_stmt?: (ctx: Continue_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.break_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_stmt?: (ctx: Break_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.say_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSay_stmt?: (ctx: Say_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.assign_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_stmt?: (ctx: Assign_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.assign_global_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_global_stmt?: (ctx: Assign_global_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.goto_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoto_stmt?: (ctx: Goto_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.input_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_stmt?: (ctx: Input_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.assert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert_stmt?: (ctx: Assert_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.assert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert?: (ctx: AssertContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.when_silence_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_silence_stmt?: (ctx: When_silence_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.match_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_stmt?: (ctx: Match_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.match_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_list?: (ctx: Match_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.match_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_branch?: (ctx: Match_branchContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.menu_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMenu_stmt?: (ctx: Menu_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.case_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_list?: (ctx: Case_listContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.case_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_branch?: (ctx: Case_branchContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.else_if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_if_stmt?: (ctx: Else_if_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.else_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_stmt?: (ctx: Else_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.loop_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop_stmt?: (ctx: Loop_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.when_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_clause?: (ctx: When_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.fetch_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFetch_stmt?: (ctx: Fetch_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.post_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPost_stmt?: (ctx: Post_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.logical_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_or_expression?: (ctx: Logical_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.logical_and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_and_expression?: (ctx: Logical_and_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_expression?: (ctx: Postfix_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cslParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

