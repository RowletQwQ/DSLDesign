// Generated from src/parser/csl.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { Template_stringContext } from "./cslParser.js";
import { Template_string_partContext } from "./cslParser.js";
import { Template_string_plain_textContext } from "./cslParser.js";
import { Template_string_exprContext } from "./cslParser.js";
import { ScriptContext } from "./cslParser.js";
import { Hello_stmtContext } from "./cslParser.js";
import { Constance_stmtContext } from "./cslParser.js";
import { Constance_listContext } from "./cslParser.js";
import { ConstanceContext } from "./cslParser.js";
import { Chatbox_stmtContext } from "./cslParser.js";
import { Default_branchContext } from "./cslParser.js";
import { Topic_stmtContext } from "./cslParser.js";
import { Command_sequncesContext } from "./cslParser.js";
import { Command_stmtContext } from "./cslParser.js";
import { Continue_stmtContext } from "./cslParser.js";
import { Break_stmtContext } from "./cslParser.js";
import { Say_stmtContext } from "./cslParser.js";
import { Assign_stmtContext } from "./cslParser.js";
import { Assign_global_stmtContext } from "./cslParser.js";
import { Goto_stmtContext } from "./cslParser.js";
import { Exit_stmtContext } from "./cslParser.js";
import { Input_stmtContext } from "./cslParser.js";
import { Assert_stmtContext } from "./cslParser.js";
import { When_silence_stmtContext } from "./cslParser.js";
import { Match_stmtContext } from "./cslParser.js";
import { Menu_stmtContext } from "./cslParser.js";
import { Case_listContext } from "./cslParser.js";
import { Case_branchContext } from "./cslParser.js";
import { If_stmtContext } from "./cslParser.js";
import { Else_if_stmtContext } from "./cslParser.js";
import { Else_stmtContext } from "./cslParser.js";
import { Loop_stmtContext } from "./cslParser.js";
import { When_clauseContext } from "./cslParser.js";
import { Fetch_stmtContext } from "./cslParser.js";
import { Post_stmtContext } from "./cslParser.js";
import { ExpressionContext } from "./cslParser.js";
import { Logical_or_expressionContext } from "./cslParser.js";
import { Logical_and_expressionContext } from "./cslParser.js";
import { Equality_expressionContext } from "./cslParser.js";
import { Relational_expressionContext } from "./cslParser.js";
import { Additive_expressionContext } from "./cslParser.js";
import { Multiplicative_expressionContext } from "./cslParser.js";
import { Unary_expressionContext } from "./cslParser.js";
import { Postfix_expressionContext } from "./cslParser.js";
import { Primary_expressionContext } from "./cslParser.js";
import { ValueContext } from "./cslParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `cslParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class cslVisitor<Result> extends AbstractParseTreeVisitor<Result> {
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
     * Visit a parse tree produced by `cslParser.script`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScript?: (ctx: ScriptContext) => Result;
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
     * Visit a parse tree produced by `cslParser.exit_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExit_stmt?: (ctx: Exit_stmtContext) => Result;
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

