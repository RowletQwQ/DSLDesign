// Generated from src/parser/csl.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { Template_stringContext } from "./cslParser.js";
import { Template_string_partContext } from "./cslParser.js";
import { Template_string_plain_textContext } from "./cslParser.js";
import { Template_string_exprContext } from "./cslParser.js";
import { ScriptsContext } from "./cslParser.js";
import { Hello_stmtContext } from "./cslParser.js";
import { Constance_stmtContext } from "./cslParser.js";
import { Constance_listContext } from "./cslParser.js";
import { ConstanceContext } from "./cslParser.js";
import { Chatbox_stmtContext } from "./cslParser.js";
import { Chatbox_listContext } from "./cslParser.js";
import { Chatbox_branchContext } from "./cslParser.js";
import { PatternContext } from "./cslParser.js";
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
 * This interface defines a complete listener for a parse tree produced by
 * `cslParser`.
 */
export class cslListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `cslParser.template_string`.
     * @param ctx the parse tree
     */
    enterTemplate_string?: (ctx: Template_stringContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.template_string`.
     * @param ctx the parse tree
     */
    exitTemplate_string?: (ctx: Template_stringContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.template_string_part`.
     * @param ctx the parse tree
     */
    enterTemplate_string_part?: (ctx: Template_string_partContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.template_string_part`.
     * @param ctx the parse tree
     */
    exitTemplate_string_part?: (ctx: Template_string_partContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.template_string_plain_text`.
     * @param ctx the parse tree
     */
    enterTemplate_string_plain_text?: (ctx: Template_string_plain_textContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.template_string_plain_text`.
     * @param ctx the parse tree
     */
    exitTemplate_string_plain_text?: (ctx: Template_string_plain_textContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.template_string_expr`.
     * @param ctx the parse tree
     */
    enterTemplate_string_expr?: (ctx: Template_string_exprContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.template_string_expr`.
     * @param ctx the parse tree
     */
    exitTemplate_string_expr?: (ctx: Template_string_exprContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.scripts`.
     * @param ctx the parse tree
     */
    enterScripts?: (ctx: ScriptsContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.scripts`.
     * @param ctx the parse tree
     */
    exitScripts?: (ctx: ScriptsContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.hello_stmt`.
     * @param ctx the parse tree
     */
    enterHello_stmt?: (ctx: Hello_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.hello_stmt`.
     * @param ctx the parse tree
     */
    exitHello_stmt?: (ctx: Hello_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.constance_stmt`.
     * @param ctx the parse tree
     */
    enterConstance_stmt?: (ctx: Constance_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.constance_stmt`.
     * @param ctx the parse tree
     */
    exitConstance_stmt?: (ctx: Constance_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.constance_list`.
     * @param ctx the parse tree
     */
    enterConstance_list?: (ctx: Constance_listContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.constance_list`.
     * @param ctx the parse tree
     */
    exitConstance_list?: (ctx: Constance_listContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.constance`.
     * @param ctx the parse tree
     */
    enterConstance?: (ctx: ConstanceContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.constance`.
     * @param ctx the parse tree
     */
    exitConstance?: (ctx: ConstanceContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.chatbox_stmt`.
     * @param ctx the parse tree
     */
    enterChatbox_stmt?: (ctx: Chatbox_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.chatbox_stmt`.
     * @param ctx the parse tree
     */
    exitChatbox_stmt?: (ctx: Chatbox_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.chatbox_list`.
     * @param ctx the parse tree
     */
    enterChatbox_list?: (ctx: Chatbox_listContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.chatbox_list`.
     * @param ctx the parse tree
     */
    exitChatbox_list?: (ctx: Chatbox_listContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.chatbox_branch`.
     * @param ctx the parse tree
     */
    enterChatbox_branch?: (ctx: Chatbox_branchContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.chatbox_branch`.
     * @param ctx the parse tree
     */
    exitChatbox_branch?: (ctx: Chatbox_branchContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.pattern`.
     * @param ctx the parse tree
     */
    enterPattern?: (ctx: PatternContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.pattern`.
     * @param ctx the parse tree
     */
    exitPattern?: (ctx: PatternContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.default_branch`.
     * @param ctx the parse tree
     */
    enterDefault_branch?: (ctx: Default_branchContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.default_branch`.
     * @param ctx the parse tree
     */
    exitDefault_branch?: (ctx: Default_branchContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.topic_stmt`.
     * @param ctx the parse tree
     */
    enterTopic_stmt?: (ctx: Topic_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.topic_stmt`.
     * @param ctx the parse tree
     */
    exitTopic_stmt?: (ctx: Topic_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.command_sequnces`.
     * @param ctx the parse tree
     */
    enterCommand_sequnces?: (ctx: Command_sequncesContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.command_sequnces`.
     * @param ctx the parse tree
     */
    exitCommand_sequnces?: (ctx: Command_sequncesContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.command_stmt`.
     * @param ctx the parse tree
     */
    enterCommand_stmt?: (ctx: Command_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.command_stmt`.
     * @param ctx the parse tree
     */
    exitCommand_stmt?: (ctx: Command_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.continue_stmt`.
     * @param ctx the parse tree
     */
    enterContinue_stmt?: (ctx: Continue_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.continue_stmt`.
     * @param ctx the parse tree
     */
    exitContinue_stmt?: (ctx: Continue_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.break_stmt`.
     * @param ctx the parse tree
     */
    enterBreak_stmt?: (ctx: Break_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.break_stmt`.
     * @param ctx the parse tree
     */
    exitBreak_stmt?: (ctx: Break_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.say_stmt`.
     * @param ctx the parse tree
     */
    enterSay_stmt?: (ctx: Say_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.say_stmt`.
     * @param ctx the parse tree
     */
    exitSay_stmt?: (ctx: Say_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.assign_stmt`.
     * @param ctx the parse tree
     */
    enterAssign_stmt?: (ctx: Assign_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.assign_stmt`.
     * @param ctx the parse tree
     */
    exitAssign_stmt?: (ctx: Assign_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.assign_global_stmt`.
     * @param ctx the parse tree
     */
    enterAssign_global_stmt?: (ctx: Assign_global_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.assign_global_stmt`.
     * @param ctx the parse tree
     */
    exitAssign_global_stmt?: (ctx: Assign_global_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.goto_stmt`.
     * @param ctx the parse tree
     */
    enterGoto_stmt?: (ctx: Goto_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.goto_stmt`.
     * @param ctx the parse tree
     */
    exitGoto_stmt?: (ctx: Goto_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.exit_stmt`.
     * @param ctx the parse tree
     */
    enterExit_stmt?: (ctx: Exit_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.exit_stmt`.
     * @param ctx the parse tree
     */
    exitExit_stmt?: (ctx: Exit_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.input_stmt`.
     * @param ctx the parse tree
     */
    enterInput_stmt?: (ctx: Input_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.input_stmt`.
     * @param ctx the parse tree
     */
    exitInput_stmt?: (ctx: Input_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.assert_stmt`.
     * @param ctx the parse tree
     */
    enterAssert_stmt?: (ctx: Assert_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.assert_stmt`.
     * @param ctx the parse tree
     */
    exitAssert_stmt?: (ctx: Assert_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.when_silence_stmt`.
     * @param ctx the parse tree
     */
    enterWhen_silence_stmt?: (ctx: When_silence_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.when_silence_stmt`.
     * @param ctx the parse tree
     */
    exitWhen_silence_stmt?: (ctx: When_silence_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.match_stmt`.
     * @param ctx the parse tree
     */
    enterMatch_stmt?: (ctx: Match_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.match_stmt`.
     * @param ctx the parse tree
     */
    exitMatch_stmt?: (ctx: Match_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.menu_stmt`.
     * @param ctx the parse tree
     */
    enterMenu_stmt?: (ctx: Menu_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.menu_stmt`.
     * @param ctx the parse tree
     */
    exitMenu_stmt?: (ctx: Menu_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.case_list`.
     * @param ctx the parse tree
     */
    enterCase_list?: (ctx: Case_listContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.case_list`.
     * @param ctx the parse tree
     */
    exitCase_list?: (ctx: Case_listContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.case_branch`.
     * @param ctx the parse tree
     */
    enterCase_branch?: (ctx: Case_branchContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.case_branch`.
     * @param ctx the parse tree
     */
    exitCase_branch?: (ctx: Case_branchContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.if_stmt`.
     * @param ctx the parse tree
     */
    enterIf_stmt?: (ctx: If_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.if_stmt`.
     * @param ctx the parse tree
     */
    exitIf_stmt?: (ctx: If_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.else_if_stmt`.
     * @param ctx the parse tree
     */
    enterElse_if_stmt?: (ctx: Else_if_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.else_if_stmt`.
     * @param ctx the parse tree
     */
    exitElse_if_stmt?: (ctx: Else_if_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.else_stmt`.
     * @param ctx the parse tree
     */
    enterElse_stmt?: (ctx: Else_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.else_stmt`.
     * @param ctx the parse tree
     */
    exitElse_stmt?: (ctx: Else_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.loop_stmt`.
     * @param ctx the parse tree
     */
    enterLoop_stmt?: (ctx: Loop_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.loop_stmt`.
     * @param ctx the parse tree
     */
    exitLoop_stmt?: (ctx: Loop_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.when_clause`.
     * @param ctx the parse tree
     */
    enterWhen_clause?: (ctx: When_clauseContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.when_clause`.
     * @param ctx the parse tree
     */
    exitWhen_clause?: (ctx: When_clauseContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.fetch_stmt`.
     * @param ctx the parse tree
     */
    enterFetch_stmt?: (ctx: Fetch_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.fetch_stmt`.
     * @param ctx the parse tree
     */
    exitFetch_stmt?: (ctx: Fetch_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.post_stmt`.
     * @param ctx the parse tree
     */
    enterPost_stmt?: (ctx: Post_stmtContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.post_stmt`.
     * @param ctx the parse tree
     */
    exitPost_stmt?: (ctx: Post_stmtContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.logical_or_expression`.
     * @param ctx the parse tree
     */
    enterLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.logical_or_expression`.
     * @param ctx the parse tree
     */
    exitLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.logical_and_expression`.
     * @param ctx the parse tree
     */
    enterLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.logical_and_expression`.
     * @param ctx the parse tree
     */
    exitLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.equality_expression`.
     * @param ctx the parse tree
     */
    enterEquality_expression?: (ctx: Equality_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.equality_expression`.
     * @param ctx the parse tree
     */
    exitEquality_expression?: (ctx: Equality_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.relational_expression`.
     * @param ctx the parse tree
     */
    enterRelational_expression?: (ctx: Relational_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.relational_expression`.
     * @param ctx the parse tree
     */
    exitRelational_expression?: (ctx: Relational_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.additive_expression`.
     * @param ctx the parse tree
     */
    enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.additive_expression`.
     * @param ctx the parse tree
     */
    exitAdditive_expression?: (ctx: Additive_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.multiplicative_expression`.
     * @param ctx the parse tree
     */
    enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.multiplicative_expression`.
     * @param ctx the parse tree
     */
    exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.unary_expression`.
     * @param ctx the parse tree
     */
    enterUnary_expression?: (ctx: Unary_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.unary_expression`.
     * @param ctx the parse tree
     */
    exitUnary_expression?: (ctx: Unary_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.postfix_expression`.
     * @param ctx the parse tree
     */
    enterPostfix_expression?: (ctx: Postfix_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.postfix_expression`.
     * @param ctx the parse tree
     */
    exitPostfix_expression?: (ctx: Postfix_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.primary_expression`.
     * @param ctx the parse tree
     */
    enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.primary_expression`.
     * @param ctx the parse tree
     */
    exitPrimary_expression?: (ctx: Primary_expressionContext) => void;
    /**
     * Enter a parse tree produced by `cslParser.value`.
     * @param ctx the parse tree
     */
    enterValue?: (ctx: ValueContext) => void;
    /**
     * Exit a parse tree produced by `cslParser.value`.
     * @param ctx the parse tree
     */
    exitValue?: (ctx: ValueContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

