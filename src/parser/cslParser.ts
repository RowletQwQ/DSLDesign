// Generated from src/parser/csl.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { cslListener } from "./cslListener.js";
import { cslVisitor } from "./cslVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class cslParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly ID = 2;
    public static readonly WS = 3;
    public static readonly STRING = 4;
    public static readonly QUOTE = 5;
    public static readonly DIGIT = 6;
    public static readonly INTS = 7;
    public static readonly FLOATS = 8;
    public static readonly ARROW = 9;
    public static readonly ASSIGN = 10;
    public static readonly EQUAL = 11;
    public static readonly COLON = 12;
    public static readonly SEMICOLON = 13;
    public static readonly COMMA = 14;
    public static readonly LPAREN = 15;
    public static readonly RPAREN = 16;
    public static readonly LBRACE = 17;
    public static readonly RBRACE = 18;
    public static readonly LBRACK = 19;
    public static readonly RBRACK = 20;
    public static readonly DOLLAR = 21;
    public static readonly PLUS = 22;
    public static readonly MINUS = 23;
    public static readonly MULTIPLY = 24;
    public static readonly DIVIDE = 25;
    public static readonly GREATER = 26;
    public static readonly GREATER_EQUAL = 27;
    public static readonly LESS = 28;
    public static readonly LESS_EQUAL = 29;
    public static readonly NOT_EQUAL = 30;
    public static readonly BANG = 31;
    public static readonly MOD = 32;
    public static readonly DOT = 33;
    public static readonly CHATBOX = 34;
    public static readonly HELLO = 35;
    public static readonly TOPIC = 36;
    public static readonly CONSTANCE = 37;
    public static readonly GOTO = 38;
    public static readonly DEFAULT = 39;
    public static readonly MENU = 40;
    public static readonly SAY = 41;
    public static readonly EXIT = 42;
    public static readonly INPUT = 43;
    public static readonly ASSERT = 44;
    public static readonly IF = 45;
    public static readonly ELSE = 46;
    public static readonly ELIF = 47;
    public static readonly LOOP = 48;
    public static readonly WHEN = 49;
    public static readonly BREAK = 50;
    public static readonly CONTINUE = 51;
    public static readonly SILENCE = 52;
    public static readonly MATCH = 53;
    public static readonly SET = 54;
    public static readonly GLOBAL = 55;
    public static readonly FETCH = 56;
    public static readonly POST = 57;
    public static readonly OR = 58;
    public static readonly AND = 59;
    public static readonly NOT = 60;
    public static readonly RULE_template_string = 0;
    public static readonly RULE_template_string_part = 1;
    public static readonly RULE_template_string_plain_text = 2;
    public static readonly RULE_template_string_expr = 3;
    public static readonly RULE_scripts = 4;
    public static readonly RULE_hello_stmt = 5;
    public static readonly RULE_constance_stmt = 6;
    public static readonly RULE_constance_list = 7;
    public static readonly RULE_constance = 8;
    public static readonly RULE_chatbox_stmt = 9;
    public static readonly RULE_chatbox_list = 10;
    public static readonly RULE_chatbox_branch = 11;
    public static readonly RULE_pattern = 12;
    public static readonly RULE_default_branch = 13;
    public static readonly RULE_topic_stmt = 14;
    public static readonly RULE_command_sequnces = 15;
    public static readonly RULE_command_stmt = 16;
    public static readonly RULE_continue_stmt = 17;
    public static readonly RULE_break_stmt = 18;
    public static readonly RULE_say_stmt = 19;
    public static readonly RULE_assign_stmt = 20;
    public static readonly RULE_assign_global_stmt = 21;
    public static readonly RULE_goto_stmt = 22;
    public static readonly RULE_input_stmt = 23;
    public static readonly RULE_assert_stmt = 24;
    public static readonly RULE_when_silence_stmt = 25;
    public static readonly RULE_match_stmt = 26;
    public static readonly RULE_match_list = 27;
    public static readonly RULE_match_branch = 28;
    public static readonly RULE_menu_stmt = 29;
    public static readonly RULE_case_list = 30;
    public static readonly RULE_case_branch = 31;
    public static readonly RULE_if_stmt = 32;
    public static readonly RULE_else_if_stmt = 33;
    public static readonly RULE_else_stmt = 34;
    public static readonly RULE_loop_stmt = 35;
    public static readonly RULE_when_clause = 36;
    public static readonly RULE_fetch_stmt = 37;
    public static readonly RULE_post_stmt = 38;
    public static readonly RULE_expression = 39;
    public static readonly RULE_logical_or_expression = 40;
    public static readonly RULE_logical_and_expression = 41;
    public static readonly RULE_equality_expression = 42;
    public static readonly RULE_relational_expression = 43;
    public static readonly RULE_additive_expression = 44;
    public static readonly RULE_multiplicative_expression = 45;
    public static readonly RULE_unary_expression = 46;
    public static readonly RULE_postfix_expression = 47;
    public static readonly RULE_primary_expression = 48;
    public static readonly RULE_value = 49;

    public static readonly literalNames = [
        null, "'`'", null, null, null, null, null, null, null, "'=>'", "':='", 
        "'='", "':'", "';'", "','", "'('", "')'", "'{'", "'}'", "'['", "']'", 
        "'$'", "'+'", "'-'", "'*'", "'/'", "'>'", "'>='", "'<'", "'<='", 
        "'<>'", "'!'", "'%'", "'.'", "'chatbox'", "'hello'", "'topic'", 
        "'constance'", "'goto'", "'default'", "'menu'", "'say'", "'exit'", 
        "'input'", "'assert'", "'if'", "'else'", "'elif'", "'loop'", "'when'", 
        "'break'", "'continue'", "'silence'", "'match'", "'set'", "'global'", 
        "'fetch'", "'post'", "'or'", "'and'", "'not'"
    ];

    public static readonly symbolicNames = [
        null, null, "ID", "WS", "STRING", "QUOTE", "DIGIT", "INTS", "FLOATS", 
        "ARROW", "ASSIGN", "EQUAL", "COLON", "SEMICOLON", "COMMA", "LPAREN", 
        "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "DOLLAR", "PLUS", 
        "MINUS", "MULTIPLY", "DIVIDE", "GREATER", "GREATER_EQUAL", "LESS", 
        "LESS_EQUAL", "NOT_EQUAL", "BANG", "MOD", "DOT", "CHATBOX", "HELLO", 
        "TOPIC", "CONSTANCE", "GOTO", "DEFAULT", "MENU", "SAY", "EXIT", 
        "INPUT", "ASSERT", "IF", "ELSE", "ELIF", "LOOP", "WHEN", "BREAK", 
        "CONTINUE", "SILENCE", "MATCH", "SET", "GLOBAL", "FETCH", "POST", 
        "OR", "AND", "NOT"
    ];
    public static readonly ruleNames = [
        "template_string", "template_string_part", "template_string_plain_text", 
        "template_string_expr", "scripts", "hello_stmt", "constance_stmt", 
        "constance_list", "constance", "chatbox_stmt", "chatbox_list", "chatbox_branch", 
        "pattern", "default_branch", "topic_stmt", "command_sequnces", "command_stmt", 
        "continue_stmt", "break_stmt", "say_stmt", "assign_stmt", "assign_global_stmt", 
        "goto_stmt", "input_stmt", "assert_stmt", "when_silence_stmt", "match_stmt", 
        "match_list", "match_branch", "menu_stmt", "case_list", "case_branch", 
        "if_stmt", "else_if_stmt", "else_stmt", "loop_stmt", "when_clause", 
        "fetch_stmt", "post_stmt", "expression", "logical_or_expression", 
        "logical_and_expression", "equality_expression", "relational_expression", 
        "additive_expression", "multiplicative_expression", "unary_expression", 
        "postfix_expression", "primary_expression", "value",
    ];

    public get grammarFileName(): string { return "csl.g4"; }
    public get literalNames(): (string | null)[] { return cslParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return cslParser.symbolicNames; }
    public get ruleNames(): string[] { return cslParser.ruleNames; }
    public get serializedATN(): number[] { return cslParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, cslParser._ATN, cslParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public template_string(): Template_stringContext {
        let localContext = new Template_stringContext(this.context, this.state);
        this.enterRule(localContext, 0, cslParser.RULE_template_string);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 100;
            this.match(cslParser.T__0);
            this.state = 104;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 536870911) !== 0)) {
                {
                {
                this.state = 101;
                this.template_string_part();
                }
                }
                this.state = 106;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 107;
            this.match(cslParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public template_string_part(): Template_string_partContext {
        let localContext = new Template_string_partContext(this.context, this.state);
        this.enterRule(localContext, 2, cslParser.RULE_template_string_part);
        try {
            this.state = 111;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.ID:
            case cslParser.WS:
            case cslParser.STRING:
            case cslParser.QUOTE:
            case cslParser.DIGIT:
            case cslParser.INTS:
            case cslParser.FLOATS:
            case cslParser.ARROW:
            case cslParser.ASSIGN:
            case cslParser.EQUAL:
            case cslParser.COLON:
            case cslParser.SEMICOLON:
            case cslParser.COMMA:
            case cslParser.LPAREN:
            case cslParser.RPAREN:
            case cslParser.LBRACE:
            case cslParser.RBRACE:
            case cslParser.LBRACK:
            case cslParser.RBRACK:
            case cslParser.PLUS:
            case cslParser.MINUS:
            case cslParser.MULTIPLY:
            case cslParser.DIVIDE:
            case cslParser.GREATER:
            case cslParser.GREATER_EQUAL:
            case cslParser.LESS:
            case cslParser.LESS_EQUAL:
            case cslParser.NOT_EQUAL:
            case cslParser.BANG:
            case cslParser.MOD:
            case cslParser.DOT:
            case cslParser.CHATBOX:
            case cslParser.HELLO:
            case cslParser.TOPIC:
            case cslParser.CONSTANCE:
            case cslParser.GOTO:
            case cslParser.DEFAULT:
            case cslParser.MENU:
            case cslParser.SAY:
            case cslParser.EXIT:
            case cslParser.INPUT:
            case cslParser.ASSERT:
            case cslParser.IF:
            case cslParser.ELSE:
            case cslParser.ELIF:
            case cslParser.LOOP:
            case cslParser.WHEN:
            case cslParser.BREAK:
            case cslParser.CONTINUE:
            case cslParser.SILENCE:
            case cslParser.MATCH:
            case cslParser.SET:
            case cslParser.GLOBAL:
            case cslParser.FETCH:
            case cslParser.POST:
            case cslParser.OR:
            case cslParser.AND:
            case cslParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 109;
                this.template_string_plain_text();
                }
                break;
            case cslParser.DOLLAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 110;
                this.template_string_expr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public template_string_plain_text(): Template_string_plain_textContext {
        let localContext = new Template_string_plain_textContext(this.context, this.state);
        this.enterRule(localContext, 4, cslParser.RULE_template_string_plain_text);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 113;
            _la = this.tokenStream.LA(1);
            if(_la<=0 || _la === 1 || _la === 21) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 114;
            this.matchWildcard();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public template_string_expr(): Template_string_exprContext {
        let localContext = new Template_string_exprContext(this.context, this.state);
        this.enterRule(localContext, 6, cslParser.RULE_template_string_expr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 116;
            this.match(cslParser.DOLLAR);
            this.state = 117;
            this.match(cslParser.LBRACE);
            this.state = 118;
            this.expression();
            this.state = 119;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scripts(): ScriptsContext {
        let localContext = new ScriptsContext(this.context, this.state);
        this.enterRule(localContext, 8, cslParser.RULE_scripts);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 15) !== 0)) {
                {
                this.state = 125;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case cslParser.CONSTANCE:
                    {
                    this.state = 121;
                    this.constance_stmt();
                    }
                    break;
                case cslParser.TOPIC:
                    {
                    this.state = 122;
                    this.topic_stmt();
                    }
                    break;
                case cslParser.CHATBOX:
                    {
                    this.state = 123;
                    this.chatbox_stmt();
                    }
                    break;
                case cslParser.HELLO:
                    {
                    this.state = 124;
                    this.hello_stmt();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 129;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hello_stmt(): Hello_stmtContext {
        let localContext = new Hello_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, cslParser.RULE_hello_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
            this.match(cslParser.HELLO);
            this.state = 131;
            this.match(cslParser.LBRACE);
            this.state = 132;
            this.command_sequnces(0);
            this.state = 133;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constance_stmt(): Constance_stmtContext {
        let localContext = new Constance_stmtContext(this.context, this.state);
        this.enterRule(localContext, 12, cslParser.RULE_constance_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.match(cslParser.CONSTANCE);
            this.state = 136;
            this.match(cslParser.LBRACE);
            this.state = 137;
            this.constance_list(0);
            this.state = 138;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public constance_list(): Constance_listContext;
    public constance_list(_p: number): Constance_listContext;
    public constance_list(_p?: number): Constance_listContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Constance_listContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 14;
        this.enterRecursionRule(localContext, 14, cslParser.RULE_constance_list, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 141;
            this.constance();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 147;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Constance_listContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_constance_list);
                    this.state = 143;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 144;
                    this.constance();
                    }
                    }
                }
                this.state = 149;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public constance(): ConstanceContext {
        let localContext = new ConstanceContext(this.context, this.state);
        this.enterRule(localContext, 16, cslParser.RULE_constance);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            this.match(cslParser.ID);
            this.state = 151;
            this.match(cslParser.ASSIGN);
            this.state = 152;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public chatbox_stmt(): Chatbox_stmtContext {
        let localContext = new Chatbox_stmtContext(this.context, this.state);
        this.enterRule(localContext, 18, cslParser.RULE_chatbox_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 154;
            this.match(cslParser.CHATBOX);
            this.state = 155;
            this.match(cslParser.LBRACE);
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2 || _la === 4 || _la === 39) {
                {
                {
                this.state = 156;
                this.chatbox_list(0);
                }
                }
                this.state = 161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 162;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public chatbox_list(): Chatbox_listContext;
    public chatbox_list(_p: number): Chatbox_listContext;
    public chatbox_list(_p?: number): Chatbox_listContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Chatbox_listContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 20;
        this.enterRecursionRule(localContext, 20, cslParser.RULE_chatbox_list, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 165;
            this.chatbox_branch();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 171;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Chatbox_listContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_chatbox_list);
                    this.state = 167;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 168;
                    this.chatbox_branch();
                    }
                    }
                }
                this.state = 173;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public chatbox_branch(): Chatbox_branchContext {
        let localContext = new Chatbox_branchContext(this.context, this.state);
        this.enterRule(localContext, 22, cslParser.RULE_chatbox_branch);
        try {
            this.state = 181;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.ID:
            case cslParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 174;
                this.pattern();
                this.state = 175;
                this.match(cslParser.ARROW);
                this.state = 176;
                this.match(cslParser.LBRACE);
                this.state = 177;
                this.command_sequnces(0);
                this.state = 178;
                this.match(cslParser.RBRACE);
                }
                break;
            case cslParser.DEFAULT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 180;
                this.default_branch();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pattern(): PatternContext {
        let localContext = new PatternContext(this.context, this.state);
        this.enterRule(localContext, 24, cslParser.RULE_pattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            _la = this.tokenStream.LA(1);
            if(!(_la === 2 || _la === 4)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public default_branch(): Default_branchContext {
        let localContext = new Default_branchContext(this.context, this.state);
        this.enterRule(localContext, 26, cslParser.RULE_default_branch);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 185;
            this.match(cslParser.DEFAULT);
            this.state = 186;
            this.match(cslParser.ARROW);
            this.state = 187;
            this.match(cslParser.LBRACE);
            this.state = 188;
            this.command_sequnces(0);
            this.state = 189;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public topic_stmt(): Topic_stmtContext {
        let localContext = new Topic_stmtContext(this.context, this.state);
        this.enterRule(localContext, 28, cslParser.RULE_topic_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 191;
            this.match(cslParser.TOPIC);
            this.state = 192;
            this.match(cslParser.ID);
            this.state = 193;
            this.match(cslParser.LBRACE);
            this.state = 194;
            this.command_sequnces(0);
            this.state = 195;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public command_sequnces(): Command_sequncesContext;
    public command_sequnces(_p: number): Command_sequncesContext;
    public command_sequnces(_p?: number): Command_sequncesContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Command_sequncesContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 30;
        this.enterRecursionRule(localContext, 30, cslParser.RULE_command_sequnces, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 198;
            this.command_stmt();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 204;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Command_sequncesContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_command_sequnces);
                    this.state = 200;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 201;
                    this.command_stmt();
                    }
                    }
                }
                this.state = 206;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public command_stmt(): Command_stmtContext {
        let localContext = new Command_stmtContext(this.context, this.state);
        this.enterRule(localContext, 32, cslParser.RULE_command_stmt);
        try {
            this.state = 221;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 207;
                this.say_stmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 208;
                this.goto_stmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 209;
                this.input_stmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 210;
                this.menu_stmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 211;
                this.match_stmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 212;
                this.if_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 213;
                this.when_silence_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 214;
                this.assign_stmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 215;
                this.assign_global_stmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 216;
                this.loop_stmt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 217;
                this.continue_stmt();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 218;
                this.break_stmt();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 219;
                this.fetch_stmt();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 220;
                this.post_stmt();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continue_stmt(): Continue_stmtContext {
        let localContext = new Continue_stmtContext(this.context, this.state);
        this.enterRule(localContext, 34, cslParser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 223;
            this.match(cslParser.CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public break_stmt(): Break_stmtContext {
        let localContext = new Break_stmtContext(this.context, this.state);
        this.enterRule(localContext, 36, cslParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 225;
            this.match(cslParser.BREAK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public say_stmt(): Say_stmtContext {
        let localContext = new Say_stmtContext(this.context, this.state);
        this.enterRule(localContext, 38, cslParser.RULE_say_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 227;
            this.match(cslParser.SAY);
            this.state = 230;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.ID:
            case cslParser.STRING:
            case cslParser.INTS:
            case cslParser.FLOATS:
            case cslParser.LPAREN:
            case cslParser.MINUS:
            case cslParser.NOT:
                {
                this.state = 228;
                this.expression();
                }
                break;
            case cslParser.T__0:
                {
                this.state = 229;
                this.template_string();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assign_stmt(): Assign_stmtContext {
        let localContext = new Assign_stmtContext(this.context, this.state);
        this.enterRule(localContext, 40, cslParser.RULE_assign_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 232;
            this.match(cslParser.SET);
            this.state = 233;
            this.match(cslParser.ID);
            this.state = 234;
            this.match(cslParser.ASSIGN);
            this.state = 235;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assign_global_stmt(): Assign_global_stmtContext {
        let localContext = new Assign_global_stmtContext(this.context, this.state);
        this.enterRule(localContext, 42, cslParser.RULE_assign_global_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 237;
            this.match(cslParser.SET);
            this.state = 238;
            this.match(cslParser.GLOBAL);
            this.state = 239;
            this.match(cslParser.ID);
            this.state = 240;
            this.match(cslParser.ASSIGN);
            this.state = 241;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public goto_stmt(): Goto_stmtContext {
        let localContext = new Goto_stmtContext(this.context, this.state);
        this.enterRule(localContext, 44, cslParser.RULE_goto_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.match(cslParser.GOTO);
            this.state = 244;
            this.match(cslParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public input_stmt(): Input_stmtContext {
        let localContext = new Input_stmtContext(this.context, this.state);
        this.enterRule(localContext, 46, cslParser.RULE_input_stmt);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 246;
            this.match(cslParser.INPUT);
            this.state = 247;
            this.match(cslParser.ID);
            this.state = 251;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 248;
                    this.assert_stmt();
                    }
                    }
                }
                this.state = 253;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            }
            this.state = 257;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 254;
                    this.when_silence_stmt();
                    }
                    }
                }
                this.state = 259;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assert_stmt(): Assert_stmtContext {
        let localContext = new Assert_stmtContext(this.context, this.state);
        this.enterRule(localContext, 48, cslParser.RULE_assert_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 260;
            this.match(cslParser.ASSERT);
            this.state = 261;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public when_silence_stmt(): When_silence_stmtContext {
        let localContext = new When_silence_stmtContext(this.context, this.state);
        this.enterRule(localContext, 50, cslParser.RULE_when_silence_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
            this.match(cslParser.WHEN);
            this.state = 264;
            this.match(cslParser.SILENCE);
            this.state = 265;
            this.expression();
            this.state = 266;
            this.match(cslParser.ARROW);
            this.state = 267;
            this.match(cslParser.LBRACE);
            this.state = 268;
            this.command_sequnces(0);
            this.state = 269;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public match_stmt(): Match_stmtContext {
        let localContext = new Match_stmtContext(this.context, this.state);
        this.enterRule(localContext, 52, cslParser.RULE_match_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.match(cslParser.MATCH);
            this.state = 272;
            this.match(cslParser.INPUT);
            this.state = 273;
            this.match(cslParser.LBRACE);
            this.state = 274;
            this.match_list(0);
            this.state = 275;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public match_list(): Match_listContext;
    public match_list(_p: number): Match_listContext;
    public match_list(_p?: number): Match_listContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Match_listContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 54;
        this.enterRecursionRule(localContext, 54, cslParser.RULE_match_list, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 278;
            this.match_branch();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 284;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Match_listContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_match_list);
                    this.state = 280;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 281;
                    this.match_branch();
                    }
                    }
                }
                this.state = 286;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public match_branch(): Match_branchContext {
        let localContext = new Match_branchContext(this.context, this.state);
        this.enterRule(localContext, 56, cslParser.RULE_match_branch);
        try {
            this.state = 295;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.ID:
            case cslParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 287;
                this.pattern();
                this.state = 288;
                this.match(cslParser.ARROW);
                this.state = 289;
                this.match(cslParser.LBRACE);
                this.state = 290;
                this.command_sequnces(0);
                this.state = 291;
                this.match(cslParser.RBRACE);
                }
                break;
            case cslParser.DEFAULT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 293;
                this.default_branch();
                }
                break;
            case cslParser.WHEN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 294;
                this.when_silence_stmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public menu_stmt(): Menu_stmtContext {
        let localContext = new Menu_stmtContext(this.context, this.state);
        this.enterRule(localContext, 58, cslParser.RULE_menu_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 297;
            this.match(cslParser.MENU);
            this.state = 298;
            this.match(cslParser.LBRACE);
            this.state = 299;
            this.case_list(0);
            this.state = 300;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public case_list(): Case_listContext;
    public case_list(_p: number): Case_listContext;
    public case_list(_p?: number): Case_listContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Case_listContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 60;
        this.enterRecursionRule(localContext, 60, cslParser.RULE_case_list, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 303;
            this.case_branch();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 309;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Case_listContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_case_list);
                    this.state = 305;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 306;
                    this.case_branch();
                    }
                    }
                }
                this.state = 311;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public case_branch(): Case_branchContext {
        let localContext = new Case_branchContext(this.context, this.state);
        this.enterRule(localContext, 62, cslParser.RULE_case_branch);
        try {
            this.state = 319;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.ID:
            case cslParser.STRING:
            case cslParser.INTS:
            case cslParser.FLOATS:
            case cslParser.LPAREN:
            case cslParser.MINUS:
            case cslParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 312;
                this.expression();
                this.state = 313;
                this.match(cslParser.ARROW);
                this.state = 314;
                this.match(cslParser.LBRACE);
                this.state = 315;
                this.command_sequnces(0);
                this.state = 316;
                this.match(cslParser.RBRACE);
                }
                break;
            case cslParser.DEFAULT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 318;
                this.default_branch();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public if_stmt(): If_stmtContext {
        let localContext = new If_stmtContext(this.context, this.state);
        this.enterRule(localContext, 64, cslParser.RULE_if_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 321;
            this.match(cslParser.IF);
            this.state = 322;
            this.expression();
            this.state = 323;
            this.match(cslParser.ARROW);
            this.state = 324;
            this.match(cslParser.LBRACE);
            this.state = 325;
            this.command_sequnces(0);
            this.state = 326;
            this.match(cslParser.RBRACE);
            this.state = 328;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                {
                this.state = 327;
                this.else_if_stmt();
                }
                break;
            }
            this.state = 331;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                {
                this.state = 330;
                this.else_stmt();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public else_if_stmt(): Else_if_stmtContext {
        let localContext = new Else_if_stmtContext(this.context, this.state);
        this.enterRule(localContext, 66, cslParser.RULE_else_if_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 333;
            this.match(cslParser.ELIF);
            this.state = 334;
            this.expression();
            this.state = 335;
            this.match(cslParser.ARROW);
            this.state = 336;
            this.match(cslParser.LBRACE);
            this.state = 337;
            this.command_sequnces(0);
            this.state = 338;
            this.match(cslParser.RBRACE);
            this.state = 340;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 339;
                this.else_if_stmt();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public else_stmt(): Else_stmtContext {
        let localContext = new Else_stmtContext(this.context, this.state);
        this.enterRule(localContext, 68, cslParser.RULE_else_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 342;
            this.match(cslParser.ELSE);
            this.state = 343;
            this.match(cslParser.ARROW);
            this.state = 344;
            this.match(cslParser.LBRACE);
            this.state = 345;
            this.command_sequnces(0);
            this.state = 346;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loop_stmt(): Loop_stmtContext {
        let localContext = new Loop_stmtContext(this.context, this.state);
        this.enterRule(localContext, 70, cslParser.RULE_loop_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 348;
            this.match(cslParser.LOOP);
            this.state = 350;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 349;
                this.when_clause();
                }
            }

            this.state = 352;
            this.match(cslParser.LBRACE);
            this.state = 353;
            this.command_sequnces(0);
            this.state = 354;
            this.match(cslParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public when_clause(): When_clauseContext {
        let localContext = new When_clauseContext(this.context, this.state);
        this.enterRule(localContext, 72, cslParser.RULE_when_clause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 356;
            this.match(cslParser.WHEN);
            this.state = 357;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fetch_stmt(): Fetch_stmtContext {
        let localContext = new Fetch_stmtContext(this.context, this.state);
        this.enterRule(localContext, 74, cslParser.RULE_fetch_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 359;
            this.match(cslParser.FETCH);
            this.state = 362;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.STRING:
                {
                this.state = 360;
                this.match(cslParser.STRING);
                }
                break;
            case cslParser.T__0:
                {
                this.state = 361;
                this.template_string();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 364;
            this.match(cslParser.ARROW);
            this.state = 365;
            this.match(cslParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public post_stmt(): Post_stmtContext {
        let localContext = new Post_stmtContext(this.context, this.state);
        this.enterRule(localContext, 76, cslParser.RULE_post_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 367;
            this.match(cslParser.POST);
            this.state = 368;
            this.match(cslParser.ID);
            this.state = 369;
            this.match(cslParser.ARROW);
            this.state = 372;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.STRING:
                {
                this.state = 370;
                this.match(cslParser.STRING);
                }
                break;
            case cslParser.T__0:
                {
                this.state = 371;
                this.template_string();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 78, cslParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 374;
            this.logical_or_expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public logical_or_expression(): Logical_or_expressionContext;
    public logical_or_expression(_p: number): Logical_or_expressionContext;
    public logical_or_expression(_p?: number): Logical_or_expressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Logical_or_expressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 80;
        this.enterRecursionRule(localContext, 80, cslParser.RULE_logical_or_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 377;
            this.logical_and_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 384;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Logical_or_expressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_logical_or_expression);
                    this.state = 379;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 380;
                    this.match(cslParser.OR);
                    this.state = 381;
                    this.logical_and_expression(0);
                    }
                    }
                }
                this.state = 386;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public logical_and_expression(): Logical_and_expressionContext;
    public logical_and_expression(_p: number): Logical_and_expressionContext;
    public logical_and_expression(_p?: number): Logical_and_expressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Logical_and_expressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 82;
        this.enterRecursionRule(localContext, 82, cslParser.RULE_logical_and_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 388;
            this.equality_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 395;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Logical_and_expressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_logical_and_expression);
                    this.state = 390;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 391;
                    this.match(cslParser.AND);
                    this.state = 392;
                    this.equality_expression(0);
                    }
                    }
                }
                this.state = 397;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public equality_expression(): Equality_expressionContext;
    public equality_expression(_p: number): Equality_expressionContext;
    public equality_expression(_p?: number): Equality_expressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Equality_expressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 84;
        this.enterRecursionRule(localContext, 84, cslParser.RULE_equality_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 399;
            this.relational_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 409;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 407;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
                    case 1:
                        {
                        localContext = new Equality_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_equality_expression);
                        this.state = 401;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 402;
                        this.match(cslParser.EQUAL);
                        this.state = 403;
                        this.relational_expression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new Equality_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_equality_expression);
                        this.state = 404;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 405;
                        this.match(cslParser.NOT_EQUAL);
                        this.state = 406;
                        this.relational_expression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 411;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public relational_expression(): Relational_expressionContext;
    public relational_expression(_p: number): Relational_expressionContext;
    public relational_expression(_p?: number): Relational_expressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Relational_expressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 86;
        this.enterRecursionRule(localContext, 86, cslParser.RULE_relational_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 413;
            this.additive_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 429;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 427;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
                    case 1:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 415;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 416;
                        this.match(cslParser.GREATER);
                        this.state = 417;
                        this.additive_expression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 418;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 419;
                        this.match(cslParser.GREATER_EQUAL);
                        this.state = 420;
                        this.additive_expression(0);
                        }
                        break;
                    case 3:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 421;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 422;
                        this.match(cslParser.LESS);
                        this.state = 423;
                        this.additive_expression(0);
                        }
                        break;
                    case 4:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 424;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 425;
                        this.match(cslParser.LESS_EQUAL);
                        this.state = 426;
                        this.additive_expression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 431;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public additive_expression(): Additive_expressionContext;
    public additive_expression(_p: number): Additive_expressionContext;
    public additive_expression(_p?: number): Additive_expressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Additive_expressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 88;
        this.enterRecursionRule(localContext, 88, cslParser.RULE_additive_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 433;
            this.multiplicative_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 443;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 441;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
                    case 1:
                        {
                        localContext = new Additive_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_additive_expression);
                        this.state = 435;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 436;
                        this.match(cslParser.PLUS);
                        this.state = 437;
                        this.multiplicative_expression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new Additive_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_additive_expression);
                        this.state = 438;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 439;
                        this.match(cslParser.MINUS);
                        this.state = 440;
                        this.multiplicative_expression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 445;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public multiplicative_expression(): Multiplicative_expressionContext;
    public multiplicative_expression(_p: number): Multiplicative_expressionContext;
    public multiplicative_expression(_p?: number): Multiplicative_expressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Multiplicative_expressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 90;
        this.enterRecursionRule(localContext, 90, cslParser.RULE_multiplicative_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 447;
            this.unary_expression();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 460;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 458;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
                    case 1:
                        {
                        localContext = new Multiplicative_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_multiplicative_expression);
                        this.state = 449;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 450;
                        this.match(cslParser.MULTIPLY);
                        this.state = 451;
                        this.unary_expression();
                        }
                        break;
                    case 2:
                        {
                        localContext = new Multiplicative_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_multiplicative_expression);
                        this.state = 452;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 453;
                        this.match(cslParser.DIVIDE);
                        this.state = 454;
                        this.unary_expression();
                        }
                        break;
                    case 3:
                        {
                        localContext = new Multiplicative_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_multiplicative_expression);
                        this.state = 455;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 456;
                        this.match(cslParser.MOD);
                        this.state = 457;
                        this.unary_expression();
                        }
                        break;
                    }
                    }
                }
                this.state = 462;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public unary_expression(): Unary_expressionContext {
        let localContext = new Unary_expressionContext(this.context, this.state);
        this.enterRule(localContext, 92, cslParser.RULE_unary_expression);
        try {
            this.state = 468;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 463;
                this.match(cslParser.NOT);
                this.state = 464;
                this.unary_expression();
                }
                break;
            case cslParser.MINUS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 465;
                this.match(cslParser.MINUS);
                this.state = 466;
                this.unary_expression();
                }
                break;
            case cslParser.ID:
            case cslParser.STRING:
            case cslParser.INTS:
            case cslParser.FLOATS:
            case cslParser.LPAREN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 467;
                this.postfix_expression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public postfix_expression(): Postfix_expressionContext;
    public postfix_expression(_p: number): Postfix_expressionContext;
    public postfix_expression(_p?: number): Postfix_expressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Postfix_expressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 94;
        this.enterRecursionRule(localContext, 94, cslParser.RULE_postfix_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 471;
            this.primary_expression();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 483;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 481;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
                    case 1:
                        {
                        localContext = new Postfix_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_postfix_expression);
                        this.state = 473;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 474;
                        this.match(cslParser.LBRACK);
                        this.state = 475;
                        this.expression();
                        this.state = 476;
                        this.match(cslParser.RBRACK);
                        }
                        break;
                    case 2:
                        {
                        localContext = new Postfix_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_postfix_expression);
                        this.state = 478;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 479;
                        this.match(cslParser.DOT);
                        this.state = 480;
                        this.match(cslParser.ID);
                        }
                        break;
                    }
                    }
                }
                this.state = 485;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public primary_expression(): Primary_expressionContext {
        let localContext = new Primary_expressionContext(this.context, this.state);
        this.enterRule(localContext, 96, cslParser.RULE_primary_expression);
        try {
            this.state = 492;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 486;
                this.match(cslParser.ID);
                }
                break;
            case cslParser.STRING:
            case cslParser.INTS:
            case cslParser.FLOATS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 487;
                this.value();
                }
                break;
            case cslParser.LPAREN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 488;
                this.match(cslParser.LPAREN);
                this.state = 489;
                this.expression();
                this.state = 490;
                this.match(cslParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public value(): ValueContext {
        let localContext = new ValueContext(this.context, this.state);
        this.enterRule(localContext, 98, cslParser.RULE_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 494;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 400) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 7:
            return this.constance_list_sempred(localContext as Constance_listContext, predIndex);
        case 10:
            return this.chatbox_list_sempred(localContext as Chatbox_listContext, predIndex);
        case 15:
            return this.command_sequnces_sempred(localContext as Command_sequncesContext, predIndex);
        case 27:
            return this.match_list_sempred(localContext as Match_listContext, predIndex);
        case 30:
            return this.case_list_sempred(localContext as Case_listContext, predIndex);
        case 40:
            return this.logical_or_expression_sempred(localContext as Logical_or_expressionContext, predIndex);
        case 41:
            return this.logical_and_expression_sempred(localContext as Logical_and_expressionContext, predIndex);
        case 42:
            return this.equality_expression_sempred(localContext as Equality_expressionContext, predIndex);
        case 43:
            return this.relational_expression_sempred(localContext as Relational_expressionContext, predIndex);
        case 44:
            return this.additive_expression_sempred(localContext as Additive_expressionContext, predIndex);
        case 45:
            return this.multiplicative_expression_sempred(localContext as Multiplicative_expressionContext, predIndex);
        case 47:
            return this.postfix_expression_sempred(localContext as Postfix_expressionContext, predIndex);
        }
        return true;
    }
    private constance_list_sempred(localContext: Constance_listContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private chatbox_list_sempred(localContext: Chatbox_listContext, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private command_sequnces_sempred(localContext: Command_sequncesContext, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private match_list_sempred(localContext: Match_listContext, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private case_list_sempred(localContext: Case_listContext, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private logical_or_expression_sempred(localContext: Logical_or_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 5:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private logical_and_expression_sempred(localContext: Logical_and_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 6:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private equality_expression_sempred(localContext: Equality_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 7:
            return this.precpred(this.context, 3);
        case 8:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private relational_expression_sempred(localContext: Relational_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 9:
            return this.precpred(this.context, 5);
        case 10:
            return this.precpred(this.context, 4);
        case 11:
            return this.precpred(this.context, 3);
        case 12:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private additive_expression_sempred(localContext: Additive_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 13:
            return this.precpred(this.context, 3);
        case 14:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private multiplicative_expression_sempred(localContext: Multiplicative_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 15:
            return this.precpred(this.context, 4);
        case 16:
            return this.precpred(this.context, 3);
        case 17:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private postfix_expression_sempred(localContext: Postfix_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 18:
            return this.precpred(this.context, 2);
        case 19:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,60,497,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,2,48,7,48,2,49,7,49,1,0,1,0,5,0,103,8,0,10,0,12,0,
        106,9,0,1,0,1,0,1,1,1,1,3,1,112,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,
        1,3,1,4,1,4,1,4,1,4,5,4,126,8,4,10,4,12,4,129,9,4,1,5,1,5,1,5,1,
        5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,5,7,146,8,7,10,7,12,
        7,149,9,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,5,9,158,8,9,10,9,12,9,161,
        9,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,5,10,170,8,10,10,10,12,10,173,
        9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,182,8,11,1,12,1,12,
        1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,
        1,15,1,15,1,15,1,15,5,15,203,8,15,10,15,12,15,206,9,15,1,16,1,16,
        1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,
        222,8,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,3,19,231,8,19,1,20,1,
        20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,
        23,1,23,1,23,5,23,250,8,23,10,23,12,23,253,9,23,1,23,5,23,256,8,
        23,10,23,12,23,259,9,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,
        1,27,5,27,283,8,27,10,27,12,27,286,9,27,1,28,1,28,1,28,1,28,1,28,
        1,28,1,28,1,28,3,28,296,8,28,1,29,1,29,1,29,1,29,1,29,1,30,1,30,
        1,30,1,30,1,30,5,30,308,8,30,10,30,12,30,311,9,30,1,31,1,31,1,31,
        1,31,1,31,1,31,1,31,3,31,320,8,31,1,32,1,32,1,32,1,32,1,32,1,32,
        1,32,3,32,329,8,32,1,32,3,32,332,8,32,1,33,1,33,1,33,1,33,1,33,1,
        33,1,33,3,33,341,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,3,
        35,351,8,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,3,
        37,363,8,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,38,373,8,38,
        1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,5,40,383,8,40,10,40,12,40,
        386,9,40,1,41,1,41,1,41,1,41,1,41,1,41,5,41,394,8,41,10,41,12,41,
        397,9,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,5,42,408,8,
        42,10,42,12,42,411,9,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,1,43,5,43,428,8,43,10,43,12,43,431,
        9,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,442,8,44,
        10,44,12,44,445,9,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,45,1,45,1,45,5,45,459,8,45,10,45,12,45,462,9,45,1,46,1,46,1,46,
        1,46,1,46,3,46,469,8,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,47,1,47,5,47,482,8,47,10,47,12,47,485,9,47,1,48,1,48,1,48,
        1,48,1,48,1,48,3,48,493,8,48,1,49,1,49,1,49,0,12,14,20,30,54,60,
        80,82,84,86,88,90,94,50,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
        74,76,78,80,82,84,86,88,90,92,94,96,98,0,3,2,0,1,1,21,21,2,0,2,2,
        4,4,2,0,4,4,7,8,503,0,100,1,0,0,0,2,111,1,0,0,0,4,113,1,0,0,0,6,
        116,1,0,0,0,8,127,1,0,0,0,10,130,1,0,0,0,12,135,1,0,0,0,14,140,1,
        0,0,0,16,150,1,0,0,0,18,154,1,0,0,0,20,164,1,0,0,0,22,181,1,0,0,
        0,24,183,1,0,0,0,26,185,1,0,0,0,28,191,1,0,0,0,30,197,1,0,0,0,32,
        221,1,0,0,0,34,223,1,0,0,0,36,225,1,0,0,0,38,227,1,0,0,0,40,232,
        1,0,0,0,42,237,1,0,0,0,44,243,1,0,0,0,46,246,1,0,0,0,48,260,1,0,
        0,0,50,263,1,0,0,0,52,271,1,0,0,0,54,277,1,0,0,0,56,295,1,0,0,0,
        58,297,1,0,0,0,60,302,1,0,0,0,62,319,1,0,0,0,64,321,1,0,0,0,66,333,
        1,0,0,0,68,342,1,0,0,0,70,348,1,0,0,0,72,356,1,0,0,0,74,359,1,0,
        0,0,76,367,1,0,0,0,78,374,1,0,0,0,80,376,1,0,0,0,82,387,1,0,0,0,
        84,398,1,0,0,0,86,412,1,0,0,0,88,432,1,0,0,0,90,446,1,0,0,0,92,468,
        1,0,0,0,94,470,1,0,0,0,96,492,1,0,0,0,98,494,1,0,0,0,100,104,5,1,
        0,0,101,103,3,2,1,0,102,101,1,0,0,0,103,106,1,0,0,0,104,102,1,0,
        0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,107,108,5,1,
        0,0,108,1,1,0,0,0,109,112,3,4,2,0,110,112,3,6,3,0,111,109,1,0,0,
        0,111,110,1,0,0,0,112,3,1,0,0,0,113,114,8,0,0,0,114,115,9,0,0,0,
        115,5,1,0,0,0,116,117,5,21,0,0,117,118,5,17,0,0,118,119,3,78,39,
        0,119,120,5,18,0,0,120,7,1,0,0,0,121,126,3,12,6,0,122,126,3,28,14,
        0,123,126,3,18,9,0,124,126,3,10,5,0,125,121,1,0,0,0,125,122,1,0,
        0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,129,1,0,0,0,127,125,1,0,
        0,0,127,128,1,0,0,0,128,9,1,0,0,0,129,127,1,0,0,0,130,131,5,35,0,
        0,131,132,5,17,0,0,132,133,3,30,15,0,133,134,5,18,0,0,134,11,1,0,
        0,0,135,136,5,37,0,0,136,137,5,17,0,0,137,138,3,14,7,0,138,139,5,
        18,0,0,139,13,1,0,0,0,140,141,6,7,-1,0,141,142,3,16,8,0,142,147,
        1,0,0,0,143,144,10,2,0,0,144,146,3,16,8,0,145,143,1,0,0,0,146,149,
        1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,15,1,0,0,0,149,147,1,
        0,0,0,150,151,5,2,0,0,151,152,5,10,0,0,152,153,3,78,39,0,153,17,
        1,0,0,0,154,155,5,34,0,0,155,159,5,17,0,0,156,158,3,20,10,0,157,
        156,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,
        162,1,0,0,0,161,159,1,0,0,0,162,163,5,18,0,0,163,19,1,0,0,0,164,
        165,6,10,-1,0,165,166,3,22,11,0,166,171,1,0,0,0,167,168,10,2,0,0,
        168,170,3,22,11,0,169,167,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,
        0,171,172,1,0,0,0,172,21,1,0,0,0,173,171,1,0,0,0,174,175,3,24,12,
        0,175,176,5,9,0,0,176,177,5,17,0,0,177,178,3,30,15,0,178,179,5,18,
        0,0,179,182,1,0,0,0,180,182,3,26,13,0,181,174,1,0,0,0,181,180,1,
        0,0,0,182,23,1,0,0,0,183,184,7,1,0,0,184,25,1,0,0,0,185,186,5,39,
        0,0,186,187,5,9,0,0,187,188,5,17,0,0,188,189,3,30,15,0,189,190,5,
        18,0,0,190,27,1,0,0,0,191,192,5,36,0,0,192,193,5,2,0,0,193,194,5,
        17,0,0,194,195,3,30,15,0,195,196,5,18,0,0,196,29,1,0,0,0,197,198,
        6,15,-1,0,198,199,3,32,16,0,199,204,1,0,0,0,200,201,10,2,0,0,201,
        203,3,32,16,0,202,200,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,
        205,1,0,0,0,205,31,1,0,0,0,206,204,1,0,0,0,207,222,3,38,19,0,208,
        222,3,44,22,0,209,222,3,46,23,0,210,222,3,58,29,0,211,222,3,52,26,
        0,212,222,3,64,32,0,213,222,3,50,25,0,214,222,3,40,20,0,215,222,
        3,42,21,0,216,222,3,70,35,0,217,222,3,34,17,0,218,222,3,36,18,0,
        219,222,3,74,37,0,220,222,3,76,38,0,221,207,1,0,0,0,221,208,1,0,
        0,0,221,209,1,0,0,0,221,210,1,0,0,0,221,211,1,0,0,0,221,212,1,0,
        0,0,221,213,1,0,0,0,221,214,1,0,0,0,221,215,1,0,0,0,221,216,1,0,
        0,0,221,217,1,0,0,0,221,218,1,0,0,0,221,219,1,0,0,0,221,220,1,0,
        0,0,222,33,1,0,0,0,223,224,5,51,0,0,224,35,1,0,0,0,225,226,5,50,
        0,0,226,37,1,0,0,0,227,230,5,41,0,0,228,231,3,78,39,0,229,231,3,
        0,0,0,230,228,1,0,0,0,230,229,1,0,0,0,231,39,1,0,0,0,232,233,5,54,
        0,0,233,234,5,2,0,0,234,235,5,10,0,0,235,236,3,78,39,0,236,41,1,
        0,0,0,237,238,5,54,0,0,238,239,5,55,0,0,239,240,5,2,0,0,240,241,
        5,10,0,0,241,242,3,78,39,0,242,43,1,0,0,0,243,244,5,38,0,0,244,245,
        5,2,0,0,245,45,1,0,0,0,246,247,5,43,0,0,247,251,5,2,0,0,248,250,
        3,48,24,0,249,248,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,
        1,0,0,0,252,257,1,0,0,0,253,251,1,0,0,0,254,256,3,50,25,0,255,254,
        1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,47,1,
        0,0,0,259,257,1,0,0,0,260,261,5,44,0,0,261,262,3,78,39,0,262,49,
        1,0,0,0,263,264,5,49,0,0,264,265,5,52,0,0,265,266,3,78,39,0,266,
        267,5,9,0,0,267,268,5,17,0,0,268,269,3,30,15,0,269,270,5,18,0,0,
        270,51,1,0,0,0,271,272,5,53,0,0,272,273,5,43,0,0,273,274,5,17,0,
        0,274,275,3,54,27,0,275,276,5,18,0,0,276,53,1,0,0,0,277,278,6,27,
        -1,0,278,279,3,56,28,0,279,284,1,0,0,0,280,281,10,2,0,0,281,283,
        3,56,28,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,
        1,0,0,0,285,55,1,0,0,0,286,284,1,0,0,0,287,288,3,24,12,0,288,289,
        5,9,0,0,289,290,5,17,0,0,290,291,3,30,15,0,291,292,5,18,0,0,292,
        296,1,0,0,0,293,296,3,26,13,0,294,296,3,50,25,0,295,287,1,0,0,0,
        295,293,1,0,0,0,295,294,1,0,0,0,296,57,1,0,0,0,297,298,5,40,0,0,
        298,299,5,17,0,0,299,300,3,60,30,0,300,301,5,18,0,0,301,59,1,0,0,
        0,302,303,6,30,-1,0,303,304,3,62,31,0,304,309,1,0,0,0,305,306,10,
        2,0,0,306,308,3,62,31,0,307,305,1,0,0,0,308,311,1,0,0,0,309,307,
        1,0,0,0,309,310,1,0,0,0,310,61,1,0,0,0,311,309,1,0,0,0,312,313,3,
        78,39,0,313,314,5,9,0,0,314,315,5,17,0,0,315,316,3,30,15,0,316,317,
        5,18,0,0,317,320,1,0,0,0,318,320,3,26,13,0,319,312,1,0,0,0,319,318,
        1,0,0,0,320,63,1,0,0,0,321,322,5,45,0,0,322,323,3,78,39,0,323,324,
        5,9,0,0,324,325,5,17,0,0,325,326,3,30,15,0,326,328,5,18,0,0,327,
        329,3,66,33,0,328,327,1,0,0,0,328,329,1,0,0,0,329,331,1,0,0,0,330,
        332,3,68,34,0,331,330,1,0,0,0,331,332,1,0,0,0,332,65,1,0,0,0,333,
        334,5,47,0,0,334,335,3,78,39,0,335,336,5,9,0,0,336,337,5,17,0,0,
        337,338,3,30,15,0,338,340,5,18,0,0,339,341,3,66,33,0,340,339,1,0,
        0,0,340,341,1,0,0,0,341,67,1,0,0,0,342,343,5,46,0,0,343,344,5,9,
        0,0,344,345,5,17,0,0,345,346,3,30,15,0,346,347,5,18,0,0,347,69,1,
        0,0,0,348,350,5,48,0,0,349,351,3,72,36,0,350,349,1,0,0,0,350,351,
        1,0,0,0,351,352,1,0,0,0,352,353,5,17,0,0,353,354,3,30,15,0,354,355,
        5,18,0,0,355,71,1,0,0,0,356,357,5,49,0,0,357,358,3,78,39,0,358,73,
        1,0,0,0,359,362,5,56,0,0,360,363,5,4,0,0,361,363,3,0,0,0,362,360,
        1,0,0,0,362,361,1,0,0,0,363,364,1,0,0,0,364,365,5,9,0,0,365,366,
        5,2,0,0,366,75,1,0,0,0,367,368,5,57,0,0,368,369,5,2,0,0,369,372,
        5,9,0,0,370,373,5,4,0,0,371,373,3,0,0,0,372,370,1,0,0,0,372,371,
        1,0,0,0,373,77,1,0,0,0,374,375,3,80,40,0,375,79,1,0,0,0,376,377,
        6,40,-1,0,377,378,3,82,41,0,378,384,1,0,0,0,379,380,10,2,0,0,380,
        381,5,58,0,0,381,383,3,82,41,0,382,379,1,0,0,0,383,386,1,0,0,0,384,
        382,1,0,0,0,384,385,1,0,0,0,385,81,1,0,0,0,386,384,1,0,0,0,387,388,
        6,41,-1,0,388,389,3,84,42,0,389,395,1,0,0,0,390,391,10,2,0,0,391,
        392,5,59,0,0,392,394,3,84,42,0,393,390,1,0,0,0,394,397,1,0,0,0,395,
        393,1,0,0,0,395,396,1,0,0,0,396,83,1,0,0,0,397,395,1,0,0,0,398,399,
        6,42,-1,0,399,400,3,86,43,0,400,409,1,0,0,0,401,402,10,3,0,0,402,
        403,5,11,0,0,403,408,3,86,43,0,404,405,10,2,0,0,405,406,5,30,0,0,
        406,408,3,86,43,0,407,401,1,0,0,0,407,404,1,0,0,0,408,411,1,0,0,
        0,409,407,1,0,0,0,409,410,1,0,0,0,410,85,1,0,0,0,411,409,1,0,0,0,
        412,413,6,43,-1,0,413,414,3,88,44,0,414,429,1,0,0,0,415,416,10,5,
        0,0,416,417,5,26,0,0,417,428,3,88,44,0,418,419,10,4,0,0,419,420,
        5,27,0,0,420,428,3,88,44,0,421,422,10,3,0,0,422,423,5,28,0,0,423,
        428,3,88,44,0,424,425,10,2,0,0,425,426,5,29,0,0,426,428,3,88,44,
        0,427,415,1,0,0,0,427,418,1,0,0,0,427,421,1,0,0,0,427,424,1,0,0,
        0,428,431,1,0,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,87,1,0,0,0,
        431,429,1,0,0,0,432,433,6,44,-1,0,433,434,3,90,45,0,434,443,1,0,
        0,0,435,436,10,3,0,0,436,437,5,22,0,0,437,442,3,90,45,0,438,439,
        10,2,0,0,439,440,5,23,0,0,440,442,3,90,45,0,441,435,1,0,0,0,441,
        438,1,0,0,0,442,445,1,0,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,
        89,1,0,0,0,445,443,1,0,0,0,446,447,6,45,-1,0,447,448,3,92,46,0,448,
        460,1,0,0,0,449,450,10,4,0,0,450,451,5,24,0,0,451,459,3,92,46,0,
        452,453,10,3,0,0,453,454,5,25,0,0,454,459,3,92,46,0,455,456,10,2,
        0,0,456,457,5,32,0,0,457,459,3,92,46,0,458,449,1,0,0,0,458,452,1,
        0,0,0,458,455,1,0,0,0,459,462,1,0,0,0,460,458,1,0,0,0,460,461,1,
        0,0,0,461,91,1,0,0,0,462,460,1,0,0,0,463,464,5,60,0,0,464,469,3,
        92,46,0,465,466,5,23,0,0,466,469,3,92,46,0,467,469,3,94,47,0,468,
        463,1,0,0,0,468,465,1,0,0,0,468,467,1,0,0,0,469,93,1,0,0,0,470,471,
        6,47,-1,0,471,472,3,96,48,0,472,483,1,0,0,0,473,474,10,2,0,0,474,
        475,5,19,0,0,475,476,3,78,39,0,476,477,5,20,0,0,477,482,1,0,0,0,
        478,479,10,1,0,0,479,480,5,33,0,0,480,482,5,2,0,0,481,473,1,0,0,
        0,481,478,1,0,0,0,482,485,1,0,0,0,483,481,1,0,0,0,483,484,1,0,0,
        0,484,95,1,0,0,0,485,483,1,0,0,0,486,493,5,2,0,0,487,493,3,98,49,
        0,488,489,5,15,0,0,489,490,3,78,39,0,490,491,5,16,0,0,491,493,1,
        0,0,0,492,486,1,0,0,0,492,487,1,0,0,0,492,488,1,0,0,0,493,97,1,0,
        0,0,494,495,7,2,0,0,495,99,1,0,0,0,37,104,111,125,127,147,159,171,
        181,204,221,230,251,257,284,295,309,319,328,331,340,350,362,372,
        384,395,407,409,427,429,441,443,458,460,468,481,483,492
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!cslParser.__ATN) {
            cslParser.__ATN = new antlr.ATNDeserializer().deserialize(cslParser._serializedATN);
        }

        return cslParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(cslParser.literalNames, cslParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return cslParser.vocabulary;
    }

    private static readonly decisionsToDFA = cslParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class Template_stringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public template_string_part(): Template_string_partContext[];
    public template_string_part(i: number): Template_string_partContext | null;
    public template_string_part(i?: number): Template_string_partContext[] | Template_string_partContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Template_string_partContext);
        }

        return this.getRuleContext(i, Template_string_partContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_template_string;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterTemplate_string) {
             listener.enterTemplate_string(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitTemplate_string) {
             listener.exitTemplate_string(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitTemplate_string) {
            return visitor.visitTemplate_string(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Template_string_partContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public template_string_plain_text(): Template_string_plain_textContext | null {
        return this.getRuleContext(0, Template_string_plain_textContext);
    }
    public template_string_expr(): Template_string_exprContext | null {
        return this.getRuleContext(0, Template_string_exprContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_template_string_part;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterTemplate_string_part) {
             listener.enterTemplate_string_part(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitTemplate_string_part) {
             listener.exitTemplate_string_part(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitTemplate_string_part) {
            return visitor.visitTemplate_string_part(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Template_string_plain_textContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOLLAR(): antlr.TerminalNode {
        return this.getToken(cslParser.DOLLAR, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_template_string_plain_text;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterTemplate_string_plain_text) {
             listener.enterTemplate_string_plain_text(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitTemplate_string_plain_text) {
             listener.exitTemplate_string_plain_text(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitTemplate_string_plain_text) {
            return visitor.visitTemplate_string_plain_text(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Template_string_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOLLAR(): antlr.TerminalNode {
        return this.getToken(cslParser.DOLLAR, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_template_string_expr;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterTemplate_string_expr) {
             listener.enterTemplate_string_expr(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitTemplate_string_expr) {
             listener.exitTemplate_string_expr(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitTemplate_string_expr) {
            return visitor.visitTemplate_string_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScriptsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constance_stmt(): Constance_stmtContext[];
    public constance_stmt(i: number): Constance_stmtContext | null;
    public constance_stmt(i?: number): Constance_stmtContext[] | Constance_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Constance_stmtContext);
        }

        return this.getRuleContext(i, Constance_stmtContext);
    }
    public topic_stmt(): Topic_stmtContext[];
    public topic_stmt(i: number): Topic_stmtContext | null;
    public topic_stmt(i?: number): Topic_stmtContext[] | Topic_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Topic_stmtContext);
        }

        return this.getRuleContext(i, Topic_stmtContext);
    }
    public chatbox_stmt(): Chatbox_stmtContext[];
    public chatbox_stmt(i: number): Chatbox_stmtContext | null;
    public chatbox_stmt(i?: number): Chatbox_stmtContext[] | Chatbox_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Chatbox_stmtContext);
        }

        return this.getRuleContext(i, Chatbox_stmtContext);
    }
    public hello_stmt(): Hello_stmtContext[];
    public hello_stmt(i: number): Hello_stmtContext | null;
    public hello_stmt(i?: number): Hello_stmtContext[] | Hello_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Hello_stmtContext);
        }

        return this.getRuleContext(i, Hello_stmtContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_scripts;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterScripts) {
             listener.enterScripts(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitScripts) {
             listener.exitScripts(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitScripts) {
            return visitor.visitScripts(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Hello_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HELLO(): antlr.TerminalNode {
        return this.getToken(cslParser.HELLO, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_hello_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterHello_stmt) {
             listener.enterHello_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitHello_stmt) {
             listener.exitHello_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitHello_stmt) {
            return visitor.visitHello_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Constance_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONSTANCE(): antlr.TerminalNode {
        return this.getToken(cslParser.CONSTANCE, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public constance_list(): Constance_listContext {
        return this.getRuleContext(0, Constance_listContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_constance_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterConstance_stmt) {
             listener.enterConstance_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitConstance_stmt) {
             listener.exitConstance_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitConstance_stmt) {
            return visitor.visitConstance_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Constance_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constance(): ConstanceContext {
        return this.getRuleContext(0, ConstanceContext)!;
    }
    public constance_list(): Constance_listContext | null {
        return this.getRuleContext(0, Constance_listContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_constance_list;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterConstance_list) {
             listener.enterConstance_list(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitConstance_list) {
             listener.exitConstance_list(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitConstance_list) {
            return visitor.visitConstance_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstanceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(cslParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_constance;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterConstance) {
             listener.enterConstance(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitConstance) {
             listener.exitConstance(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitConstance) {
            return visitor.visitConstance(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Chatbox_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHATBOX(): antlr.TerminalNode {
        return this.getToken(cslParser.CHATBOX, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public chatbox_list(): Chatbox_listContext[];
    public chatbox_list(i: number): Chatbox_listContext | null;
    public chatbox_list(i?: number): Chatbox_listContext[] | Chatbox_listContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Chatbox_listContext);
        }

        return this.getRuleContext(i, Chatbox_listContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_chatbox_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterChatbox_stmt) {
             listener.enterChatbox_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitChatbox_stmt) {
             listener.exitChatbox_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitChatbox_stmt) {
            return visitor.visitChatbox_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Chatbox_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public chatbox_branch(): Chatbox_branchContext {
        return this.getRuleContext(0, Chatbox_branchContext)!;
    }
    public chatbox_list(): Chatbox_listContext | null {
        return this.getRuleContext(0, Chatbox_listContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_chatbox_list;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterChatbox_list) {
             listener.enterChatbox_list(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitChatbox_list) {
             listener.exitChatbox_list(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitChatbox_list) {
            return visitor.visitChatbox_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Chatbox_branchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext | null {
        return this.getRuleContext(0, PatternContext);
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(cslParser.ARROW, 0);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LBRACE, 0);
    }
    public command_sequnces(): Command_sequncesContext | null {
        return this.getRuleContext(0, Command_sequncesContext);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.RBRACE, 0);
    }
    public default_branch(): Default_branchContext | null {
        return this.getRuleContext(0, Default_branchContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_chatbox_branch;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterChatbox_branch) {
             listener.enterChatbox_branch(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitChatbox_branch) {
             listener.exitChatbox_branch(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitChatbox_branch) {
            return visitor.visitChatbox_branch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(cslParser.STRING, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(cslParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_pattern;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterPattern) {
             listener.enterPattern(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitPattern) {
             listener.exitPattern(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Default_branchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(cslParser.DEFAULT, 0)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(cslParser.ARROW, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_default_branch;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterDefault_branch) {
             listener.enterDefault_branch(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitDefault_branch) {
             listener.exitDefault_branch(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitDefault_branch) {
            return visitor.visitDefault_branch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Topic_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TOPIC(): antlr.TerminalNode {
        return this.getToken(cslParser.TOPIC, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_topic_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterTopic_stmt) {
             listener.enterTopic_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitTopic_stmt) {
             listener.exitTopic_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitTopic_stmt) {
            return visitor.visitTopic_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Command_sequncesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public command_stmt(): Command_stmtContext {
        return this.getRuleContext(0, Command_stmtContext)!;
    }
    public command_sequnces(): Command_sequncesContext | null {
        return this.getRuleContext(0, Command_sequncesContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_command_sequnces;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterCommand_sequnces) {
             listener.enterCommand_sequnces(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitCommand_sequnces) {
             listener.exitCommand_sequnces(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitCommand_sequnces) {
            return visitor.visitCommand_sequnces(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Command_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public say_stmt(): Say_stmtContext | null {
        return this.getRuleContext(0, Say_stmtContext);
    }
    public goto_stmt(): Goto_stmtContext | null {
        return this.getRuleContext(0, Goto_stmtContext);
    }
    public input_stmt(): Input_stmtContext | null {
        return this.getRuleContext(0, Input_stmtContext);
    }
    public menu_stmt(): Menu_stmtContext | null {
        return this.getRuleContext(0, Menu_stmtContext);
    }
    public match_stmt(): Match_stmtContext | null {
        return this.getRuleContext(0, Match_stmtContext);
    }
    public if_stmt(): If_stmtContext | null {
        return this.getRuleContext(0, If_stmtContext);
    }
    public when_silence_stmt(): When_silence_stmtContext | null {
        return this.getRuleContext(0, When_silence_stmtContext);
    }
    public assign_stmt(): Assign_stmtContext | null {
        return this.getRuleContext(0, Assign_stmtContext);
    }
    public assign_global_stmt(): Assign_global_stmtContext | null {
        return this.getRuleContext(0, Assign_global_stmtContext);
    }
    public loop_stmt(): Loop_stmtContext | null {
        return this.getRuleContext(0, Loop_stmtContext);
    }
    public continue_stmt(): Continue_stmtContext | null {
        return this.getRuleContext(0, Continue_stmtContext);
    }
    public break_stmt(): Break_stmtContext | null {
        return this.getRuleContext(0, Break_stmtContext);
    }
    public fetch_stmt(): Fetch_stmtContext | null {
        return this.getRuleContext(0, Fetch_stmtContext);
    }
    public post_stmt(): Post_stmtContext | null {
        return this.getRuleContext(0, Post_stmtContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_command_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterCommand_stmt) {
             listener.enterCommand_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitCommand_stmt) {
             listener.exitCommand_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitCommand_stmt) {
            return visitor.visitCommand_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Continue_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONTINUE(): antlr.TerminalNode {
        return this.getToken(cslParser.CONTINUE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_continue_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterContinue_stmt) {
             listener.enterContinue_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitContinue_stmt) {
             listener.exitContinue_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitContinue_stmt) {
            return visitor.visitContinue_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Break_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BREAK(): antlr.TerminalNode {
        return this.getToken(cslParser.BREAK, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_break_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterBreak_stmt) {
             listener.enterBreak_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitBreak_stmt) {
             listener.exitBreak_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitBreak_stmt) {
            return visitor.visitBreak_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Say_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAY(): antlr.TerminalNode {
        return this.getToken(cslParser.SAY, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public template_string(): Template_stringContext | null {
        return this.getRuleContext(0, Template_stringContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_say_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterSay_stmt) {
             listener.enterSay_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitSay_stmt) {
             listener.exitSay_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitSay_stmt) {
            return visitor.visitSay_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Assign_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(cslParser.SET, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(cslParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_assign_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterAssign_stmt) {
             listener.enterAssign_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitAssign_stmt) {
             listener.exitAssign_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitAssign_stmt) {
            return visitor.visitAssign_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Assign_global_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(cslParser.SET, 0)!;
    }
    public GLOBAL(): antlr.TerminalNode {
        return this.getToken(cslParser.GLOBAL, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(cslParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_assign_global_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterAssign_global_stmt) {
             listener.enterAssign_global_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitAssign_global_stmt) {
             listener.exitAssign_global_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitAssign_global_stmt) {
            return visitor.visitAssign_global_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Goto_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GOTO(): antlr.TerminalNode {
        return this.getToken(cslParser.GOTO, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_goto_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterGoto_stmt) {
             listener.enterGoto_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitGoto_stmt) {
             listener.exitGoto_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitGoto_stmt) {
            return visitor.visitGoto_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Input_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INPUT(): antlr.TerminalNode {
        return this.getToken(cslParser.INPUT, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public assert_stmt(): Assert_stmtContext[];
    public assert_stmt(i: number): Assert_stmtContext | null;
    public assert_stmt(i?: number): Assert_stmtContext[] | Assert_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Assert_stmtContext);
        }

        return this.getRuleContext(i, Assert_stmtContext);
    }
    public when_silence_stmt(): When_silence_stmtContext[];
    public when_silence_stmt(i: number): When_silence_stmtContext | null;
    public when_silence_stmt(i?: number): When_silence_stmtContext[] | When_silence_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(When_silence_stmtContext);
        }

        return this.getRuleContext(i, When_silence_stmtContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_input_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterInput_stmt) {
             listener.enterInput_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitInput_stmt) {
             listener.exitInput_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitInput_stmt) {
            return visitor.visitInput_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Assert_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASSERT(): antlr.TerminalNode {
        return this.getToken(cslParser.ASSERT, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_assert_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterAssert_stmt) {
             listener.enterAssert_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitAssert_stmt) {
             listener.exitAssert_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitAssert_stmt) {
            return visitor.visitAssert_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class When_silence_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(cslParser.WHEN, 0)!;
    }
    public SILENCE(): antlr.TerminalNode {
        return this.getToken(cslParser.SILENCE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(cslParser.ARROW, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_when_silence_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterWhen_silence_stmt) {
             listener.enterWhen_silence_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitWhen_silence_stmt) {
             listener.exitWhen_silence_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitWhen_silence_stmt) {
            return visitor.visitWhen_silence_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Match_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(cslParser.MATCH, 0)!;
    }
    public INPUT(): antlr.TerminalNode {
        return this.getToken(cslParser.INPUT, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public match_list(): Match_listContext {
        return this.getRuleContext(0, Match_listContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_match_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterMatch_stmt) {
             listener.enterMatch_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitMatch_stmt) {
             listener.exitMatch_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitMatch_stmt) {
            return visitor.visitMatch_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Match_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public match_branch(): Match_branchContext {
        return this.getRuleContext(0, Match_branchContext)!;
    }
    public match_list(): Match_listContext | null {
        return this.getRuleContext(0, Match_listContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_match_list;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterMatch_list) {
             listener.enterMatch_list(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitMatch_list) {
             listener.exitMatch_list(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitMatch_list) {
            return visitor.visitMatch_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Match_branchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext | null {
        return this.getRuleContext(0, PatternContext);
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(cslParser.ARROW, 0);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LBRACE, 0);
    }
    public command_sequnces(): Command_sequncesContext | null {
        return this.getRuleContext(0, Command_sequncesContext);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.RBRACE, 0);
    }
    public default_branch(): Default_branchContext | null {
        return this.getRuleContext(0, Default_branchContext);
    }
    public when_silence_stmt(): When_silence_stmtContext | null {
        return this.getRuleContext(0, When_silence_stmtContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_match_branch;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterMatch_branch) {
             listener.enterMatch_branch(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitMatch_branch) {
             listener.exitMatch_branch(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitMatch_branch) {
            return visitor.visitMatch_branch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Menu_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MENU(): antlr.TerminalNode {
        return this.getToken(cslParser.MENU, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public case_list(): Case_listContext {
        return this.getRuleContext(0, Case_listContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_menu_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterMenu_stmt) {
             listener.enterMenu_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitMenu_stmt) {
             listener.exitMenu_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitMenu_stmt) {
            return visitor.visitMenu_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Case_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public case_branch(): Case_branchContext {
        return this.getRuleContext(0, Case_branchContext)!;
    }
    public case_list(): Case_listContext | null {
        return this.getRuleContext(0, Case_listContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_case_list;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterCase_list) {
             listener.enterCase_list(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitCase_list) {
             listener.exitCase_list(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitCase_list) {
            return visitor.visitCase_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Case_branchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(cslParser.ARROW, 0);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LBRACE, 0);
    }
    public command_sequnces(): Command_sequncesContext | null {
        return this.getRuleContext(0, Command_sequncesContext);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.RBRACE, 0);
    }
    public default_branch(): Default_branchContext | null {
        return this.getRuleContext(0, Default_branchContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_case_branch;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterCase_branch) {
             listener.enterCase_branch(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitCase_branch) {
             listener.exitCase_branch(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitCase_branch) {
            return visitor.visitCase_branch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class If_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(cslParser.IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(cslParser.ARROW, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public else_if_stmt(): Else_if_stmtContext | null {
        return this.getRuleContext(0, Else_if_stmtContext);
    }
    public else_stmt(): Else_stmtContext | null {
        return this.getRuleContext(0, Else_stmtContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_if_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterIf_stmt) {
             listener.enterIf_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitIf_stmt) {
             listener.exitIf_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitIf_stmt) {
            return visitor.visitIf_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Else_if_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ELIF(): antlr.TerminalNode {
        return this.getToken(cslParser.ELIF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(cslParser.ARROW, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public else_if_stmt(): Else_if_stmtContext | null {
        return this.getRuleContext(0, Else_if_stmtContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_else_if_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterElse_if_stmt) {
             listener.enterElse_if_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitElse_if_stmt) {
             listener.exitElse_if_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitElse_if_stmt) {
            return visitor.visitElse_if_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Else_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ELSE(): antlr.TerminalNode {
        return this.getToken(cslParser.ELSE, 0)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(cslParser.ARROW, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_else_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterElse_stmt) {
             listener.enterElse_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitElse_stmt) {
             listener.exitElse_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitElse_stmt) {
            return visitor.visitElse_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Loop_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOOP(): antlr.TerminalNode {
        return this.getToken(cslParser.LOOP, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.LBRACE, 0)!;
    }
    public command_sequnces(): Command_sequncesContext {
        return this.getRuleContext(0, Command_sequncesContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public when_clause(): When_clauseContext | null {
        return this.getRuleContext(0, When_clauseContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_loop_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterLoop_stmt) {
             listener.enterLoop_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitLoop_stmt) {
             listener.exitLoop_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitLoop_stmt) {
            return visitor.visitLoop_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class When_clauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(cslParser.WHEN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_when_clause;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterWhen_clause) {
             listener.enterWhen_clause(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitWhen_clause) {
             listener.exitWhen_clause(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitWhen_clause) {
            return visitor.visitWhen_clause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fetch_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FETCH(): antlr.TerminalNode {
        return this.getToken(cslParser.FETCH, 0)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(cslParser.ARROW, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(cslParser.STRING, 0);
    }
    public template_string(): Template_stringContext | null {
        return this.getRuleContext(0, Template_stringContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_fetch_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterFetch_stmt) {
             listener.enterFetch_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitFetch_stmt) {
             listener.exitFetch_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitFetch_stmt) {
            return visitor.visitFetch_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Post_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POST(): antlr.TerminalNode {
        return this.getToken(cslParser.POST, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(cslParser.ID, 0)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(cslParser.ARROW, 0)!;
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(cslParser.STRING, 0);
    }
    public template_string(): Template_stringContext | null {
        return this.getRuleContext(0, Template_stringContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_post_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterPost_stmt) {
             listener.enterPost_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitPost_stmt) {
             listener.exitPost_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitPost_stmt) {
            return visitor.visitPost_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logical_or_expression(): Logical_or_expressionContext {
        return this.getRuleContext(0, Logical_or_expressionContext)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Logical_or_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logical_and_expression(): Logical_and_expressionContext {
        return this.getRuleContext(0, Logical_and_expressionContext)!;
    }
    public logical_or_expression(): Logical_or_expressionContext | null {
        return this.getRuleContext(0, Logical_or_expressionContext);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(cslParser.OR, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_logical_or_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterLogical_or_expression) {
             listener.enterLogical_or_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitLogical_or_expression) {
             listener.exitLogical_or_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitLogical_or_expression) {
            return visitor.visitLogical_or_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Logical_and_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public equality_expression(): Equality_expressionContext {
        return this.getRuleContext(0, Equality_expressionContext)!;
    }
    public logical_and_expression(): Logical_and_expressionContext | null {
        return this.getRuleContext(0, Logical_and_expressionContext);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(cslParser.AND, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_logical_and_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterLogical_and_expression) {
             listener.enterLogical_and_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitLogical_and_expression) {
             listener.exitLogical_and_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitLogical_and_expression) {
            return visitor.visitLogical_and_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Equality_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relational_expression(): Relational_expressionContext {
        return this.getRuleContext(0, Relational_expressionContext)!;
    }
    public equality_expression(): Equality_expressionContext | null {
        return this.getRuleContext(0, Equality_expressionContext);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(cslParser.EQUAL, 0);
    }
    public NOT_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(cslParser.NOT_EQUAL, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_equality_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterEquality_expression) {
             listener.enterEquality_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitEquality_expression) {
             listener.exitEquality_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitEquality_expression) {
            return visitor.visitEquality_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Relational_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additive_expression(): Additive_expressionContext {
        return this.getRuleContext(0, Additive_expressionContext)!;
    }
    public relational_expression(): Relational_expressionContext | null {
        return this.getRuleContext(0, Relational_expressionContext);
    }
    public GREATER(): antlr.TerminalNode | null {
        return this.getToken(cslParser.GREATER, 0);
    }
    public GREATER_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(cslParser.GREATER_EQUAL, 0);
    }
    public LESS(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LESS, 0);
    }
    public LESS_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LESS_EQUAL, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_relational_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterRelational_expression) {
             listener.enterRelational_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitRelational_expression) {
             listener.exitRelational_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitRelational_expression) {
            return visitor.visitRelational_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Additive_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicative_expression(): Multiplicative_expressionContext {
        return this.getRuleContext(0, Multiplicative_expressionContext)!;
    }
    public additive_expression(): Additive_expressionContext | null {
        return this.getRuleContext(0, Additive_expressionContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(cslParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(cslParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_additive_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterAdditive_expression) {
             listener.enterAdditive_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitAdditive_expression) {
             listener.exitAdditive_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitAdditive_expression) {
            return visitor.visitAdditive_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Multiplicative_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unary_expression(): Unary_expressionContext {
        return this.getRuleContext(0, Unary_expressionContext)!;
    }
    public multiplicative_expression(): Multiplicative_expressionContext | null {
        return this.getRuleContext(0, Multiplicative_expressionContext);
    }
    public MULTIPLY(): antlr.TerminalNode | null {
        return this.getToken(cslParser.MULTIPLY, 0);
    }
    public DIVIDE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.DIVIDE, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(cslParser.MOD, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_multiplicative_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterMultiplicative_expression) {
             listener.enterMultiplicative_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitMultiplicative_expression) {
             listener.exitMultiplicative_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitMultiplicative_expression) {
            return visitor.visitMultiplicative_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Unary_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(cslParser.NOT, 0);
    }
    public unary_expression(): Unary_expressionContext | null {
        return this.getRuleContext(0, Unary_expressionContext);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(cslParser.MINUS, 0);
    }
    public postfix_expression(): Postfix_expressionContext | null {
        return this.getRuleContext(0, Postfix_expressionContext);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_unary_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterUnary_expression) {
             listener.enterUnary_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitUnary_expression) {
             listener.exitUnary_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitUnary_expression) {
            return visitor.visitUnary_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Postfix_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary_expression(): Primary_expressionContext | null {
        return this.getRuleContext(0, Primary_expressionContext);
    }
    public postfix_expression(): Postfix_expressionContext | null {
        return this.getRuleContext(0, Postfix_expressionContext);
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LBRACK, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(cslParser.RBRACK, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(cslParser.DOT, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(cslParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_postfix_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterPostfix_expression) {
             listener.enterPostfix_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitPostfix_expression) {
             listener.exitPostfix_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitPostfix_expression) {
            return visitor.visitPostfix_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Primary_expressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(cslParser.ID, 0);
    }
    public value(): ValueContext | null {
        return this.getRuleContext(0, ValueContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LPAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(cslParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_primary_expression;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterPrimary_expression) {
             listener.enterPrimary_expression(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitPrimary_expression) {
             listener.exitPrimary_expression(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitPrimary_expression) {
            return visitor.visitPrimary_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTS(): antlr.TerminalNode | null {
        return this.getToken(cslParser.INTS, 0);
    }
    public FLOATS(): antlr.TerminalNode | null {
        return this.getToken(cslParser.FLOATS, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(cslParser.STRING, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_value;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterValue) {
             listener.enterValue(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitValue) {
             listener.exitValue(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
