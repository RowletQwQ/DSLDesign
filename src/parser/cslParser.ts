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
    public static readonly T__1 = 2;
    public static readonly CHATBOX = 3;
    public static readonly HELLO = 4;
    public static readonly TOPIC = 5;
    public static readonly CONSTANCE = 6;
    public static readonly GOTO = 7;
    public static readonly DEFAULT = 8;
    public static readonly MENU = 9;
    public static readonly SAY = 10;
    public static readonly EXIT = 11;
    public static readonly INPUT = 12;
    public static readonly ASSERT = 13;
    public static readonly IF = 14;
    public static readonly ELSE = 15;
    public static readonly ELIF = 16;
    public static readonly LOOP = 17;
    public static readonly WHEN = 18;
    public static readonly BREAK = 19;
    public static readonly CONTINUE = 20;
    public static readonly SILENCE = 21;
    public static readonly MATCH = 22;
    public static readonly SET = 23;
    public static readonly GLOBAL = 24;
    public static readonly FETCH = 25;
    public static readonly POST = 26;
    public static readonly OR = 27;
    public static readonly AND = 28;
    public static readonly NOT = 29;
    public static readonly TRUE = 30;
    public static readonly FALSE = 31;
    public static readonly STRING = 32;
    public static readonly QUOTE = 33;
    public static readonly INTS = 34;
    public static readonly FLOATS = 35;
    public static readonly ARROW = 36;
    public static readonly ASSIGN = 37;
    public static readonly EQUAL = 38;
    public static readonly COLON = 39;
    public static readonly SEMICOLON = 40;
    public static readonly COMMA = 41;
    public static readonly LPAREN = 42;
    public static readonly RPAREN = 43;
    public static readonly LBRACE = 44;
    public static readonly RBRACE = 45;
    public static readonly LBRACK = 46;
    public static readonly RBRACK = 47;
    public static readonly DOLLAR = 48;
    public static readonly PLUS = 49;
    public static readonly MINUS = 50;
    public static readonly MULTIPLY = 51;
    public static readonly DIVIDE = 52;
    public static readonly GREATER = 53;
    public static readonly GREATER_EQUAL = 54;
    public static readonly LESS = 55;
    public static readonly LESS_EQUAL = 56;
    public static readonly NOT_EQUAL = 57;
    public static readonly BANG = 58;
    public static readonly MOD = 59;
    public static readonly DOT = 60;
    public static readonly ID = 61;
    public static readonly WS = 62;
    public static readonly COMMENT = 63;
    public static readonly RULE_template_string = 0;
    public static readonly RULE_template_string_part = 1;
    public static readonly RULE_template_string_plain_text = 2;
    public static readonly RULE_template_string_expr = 3;
    public static readonly RULE_script = 4;
    public static readonly RULE_hello_stmt = 5;
    public static readonly RULE_constance_stmt = 6;
    public static readonly RULE_constance_list = 7;
    public static readonly RULE_constance = 8;
    public static readonly RULE_chatbox_stmt = 9;
    public static readonly RULE_default_branch = 10;
    public static readonly RULE_topic_stmt = 11;
    public static readonly RULE_command_sequnces = 12;
    public static readonly RULE_command_stmt = 13;
    public static readonly RULE_continue_stmt = 14;
    public static readonly RULE_break_stmt = 15;
    public static readonly RULE_say_stmt = 16;
    public static readonly RULE_assign_stmt = 17;
    public static readonly RULE_assign_global_stmt = 18;
    public static readonly RULE_goto_stmt = 19;
    public static readonly RULE_exit_stmt = 20;
    public static readonly RULE_input_stmt = 21;
    public static readonly RULE_assert_stmt = 22;
    public static readonly RULE_when_silence_stmt = 23;
    public static readonly RULE_match_stmt = 24;
    public static readonly RULE_menu_stmt = 25;
    public static readonly RULE_case_list = 26;
    public static readonly RULE_case_branch = 27;
    public static readonly RULE_if_stmt = 28;
    public static readonly RULE_else_if_stmt = 29;
    public static readonly RULE_else_stmt = 30;
    public static readonly RULE_loop_stmt = 31;
    public static readonly RULE_when_clause = 32;
    public static readonly RULE_fetch_stmt = 33;
    public static readonly RULE_post_stmt = 34;
    public static readonly RULE_json_object = 35;
    public static readonly RULE_json_pair = 36;
    public static readonly RULE_expression = 37;
    public static readonly RULE_logical_or_expression = 38;
    public static readonly RULE_logical_and_expression = 39;
    public static readonly RULE_equality_expression = 40;
    public static readonly RULE_relational_expression = 41;
    public static readonly RULE_additive_expression = 42;
    public static readonly RULE_multiplicative_expression = 43;
    public static readonly RULE_unary_expression = 44;
    public static readonly RULE_postfix_expression = 45;
    public static readonly RULE_primary_expression = 46;
    public static readonly RULE_value = 47;

    public static readonly literalNames = [
        null, "'`'", "'\\'", "'chatbox'", "'hello'", "'topic'", "'constance'", 
        "'goto'", "'default'", "'menu'", "'say'", "'exit'", "'input'", "'assert'", 
        "'if'", "'else'", "'elif'", "'loop'", "'when'", "'break'", "'continue'", 
        "'silence'", "'match'", "'set'", "'global'", "'fetch'", "'post'", 
        "'or'", "'and'", "'not'", "'true'", "'false'", null, null, null, 
        null, "'=>'", "':='", "'='", "':'", "';'", "','", "'('", "')'", 
        "'{'", "'}'", "'['", "']'", "'$'", "'+'", "'-'", "'*'", "'/'", "'>'", 
        "'>='", "'<'", "'<='", "'<>'", "'!'", "'%'", "'.'"
    ];

    public static readonly symbolicNames = [
        null, null, null, "CHATBOX", "HELLO", "TOPIC", "CONSTANCE", "GOTO", 
        "DEFAULT", "MENU", "SAY", "EXIT", "INPUT", "ASSERT", "IF", "ELSE", 
        "ELIF", "LOOP", "WHEN", "BREAK", "CONTINUE", "SILENCE", "MATCH", 
        "SET", "GLOBAL", "FETCH", "POST", "OR", "AND", "NOT", "TRUE", "FALSE", 
        "STRING", "QUOTE", "INTS", "FLOATS", "ARROW", "ASSIGN", "EQUAL", 
        "COLON", "SEMICOLON", "COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "LBRACK", "RBRACK", "DOLLAR", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", 
        "GREATER", "GREATER_EQUAL", "LESS", "LESS_EQUAL", "NOT_EQUAL", "BANG", 
        "MOD", "DOT", "ID", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "template_string", "template_string_part", "template_string_plain_text", 
        "template_string_expr", "script", "hello_stmt", "constance_stmt", 
        "constance_list", "constance", "chatbox_stmt", "default_branch", 
        "topic_stmt", "command_sequnces", "command_stmt", "continue_stmt", 
        "break_stmt", "say_stmt", "assign_stmt", "assign_global_stmt", "goto_stmt", 
        "exit_stmt", "input_stmt", "assert_stmt", "when_silence_stmt", "match_stmt", 
        "menu_stmt", "case_list", "case_branch", "if_stmt", "else_if_stmt", 
        "else_stmt", "loop_stmt", "when_clause", "fetch_stmt", "post_stmt", 
        "json_object", "json_pair", "expression", "logical_or_expression", 
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
            this.state = 96;
            this.match(cslParser.T__0);
            this.state = 100;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0)) {
                {
                {
                this.state = 97;
                this.template_string_part();
                }
                }
                this.state = 102;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 103;
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
            this.state = 107;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.T__1:
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
            case cslParser.TRUE:
            case cslParser.FALSE:
            case cslParser.STRING:
            case cslParser.QUOTE:
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
            case cslParser.ID:
            case cslParser.WS:
            case cslParser.COMMENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 105;
                this.template_string_plain_text();
                }
                break;
            case cslParser.DOLLAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 106;
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
            this.state = 114;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 109;
                _la = this.tokenStream.LA(1);
                if(_la<=0 || _la === 1 || _la === 2 || _la === 48) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 110;
                this.match(cslParser.T__1);
                this.state = 111;
                this.match(cslParser.T__0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 112;
                this.match(cslParser.T__1);
                this.state = 113;
                this.match(cslParser.DOLLAR);
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
    public script(): ScriptContext {
        let localContext = new ScriptContext(this.context, this.state);
        this.enterRule(localContext, 8, cslParser.RULE_script);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
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
                this.state = 127;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 120) !== 0));
            this.state = 129;
            this.match(cslParser.EOF);
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
            this.state = 131;
            this.match(cslParser.HELLO);
            this.state = 132;
            this.match(cslParser.LBRACE);
            this.state = 133;
            this.command_sequnces();
            this.state = 134;
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
            this.state = 136;
            this.match(cslParser.CONSTANCE);
            this.state = 137;
            this.match(cslParser.LBRACE);
            this.state = 138;
            this.constance_list();
            this.state = 139;
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
    public constance_list(): Constance_listContext {
        let localContext = new Constance_listContext(this.context, this.state);
        this.enterRule(localContext, 14, cslParser.RULE_constance_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 141;
                this.constance();
                }
                }
                this.state = 144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 61);
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
    public constance(): ConstanceContext {
        let localContext = new ConstanceContext(this.context, this.state);
        this.enterRule(localContext, 16, cslParser.RULE_constance);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 146;
            this.match(cslParser.ID);
            this.state = 147;
            this.match(cslParser.ASSIGN);
            this.state = 148;
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
            this.state = 150;
            this.match(cslParser.CHATBOX);
            this.state = 151;
            this.match(cslParser.LBRACE);
            this.state = 153;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096384) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 537138189) !== 0)) {
                {
                this.state = 152;
                this.case_list();
                }
            }

            this.state = 155;
            this.default_branch();
            this.state = 156;
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
    public default_branch(): Default_branchContext {
        let localContext = new Default_branchContext(this.context, this.state);
        this.enterRule(localContext, 20, cslParser.RULE_default_branch);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.match(cslParser.DEFAULT);
            this.state = 159;
            this.match(cslParser.ARROW);
            this.state = 160;
            this.match(cslParser.LBRACE);
            this.state = 161;
            this.command_sequnces();
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
    public topic_stmt(): Topic_stmtContext {
        let localContext = new Topic_stmtContext(this.context, this.state);
        this.enterRule(localContext, 22, cslParser.RULE_topic_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.match(cslParser.TOPIC);
            this.state = 165;
            this.match(cslParser.ID);
            this.state = 166;
            this.match(cslParser.LBRACE);
            this.state = 167;
            this.command_sequnces();
            this.state = 168;
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
    public command_sequnces(): Command_sequncesContext {
        let localContext = new Command_sequncesContext(this.context, this.state);
        this.enterRule(localContext, 24, cslParser.RULE_command_sequnces);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 115236480) !== 0)) {
                {
                {
                this.state = 170;
                this.command_stmt();
                }
                }
                this.state = 175;
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
    public command_stmt(): Command_stmtContext {
        let localContext = new Command_stmtContext(this.context, this.state);
        this.enterRule(localContext, 26, cslParser.RULE_command_stmt);
        try {
            this.state = 191;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 176;
                this.say_stmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 177;
                this.goto_stmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 178;
                this.input_stmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 179;
                this.menu_stmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 180;
                this.match_stmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 181;
                this.if_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 182;
                this.when_silence_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 183;
                this.assign_stmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 184;
                this.assign_global_stmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 185;
                this.loop_stmt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 186;
                this.continue_stmt();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 187;
                this.break_stmt();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 188;
                this.fetch_stmt();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 189;
                this.post_stmt();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 190;
                this.exit_stmt();
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
        this.enterRule(localContext, 28, cslParser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 193;
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
        this.enterRule(localContext, 30, cslParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 195;
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
        this.enterRule(localContext, 32, cslParser.RULE_say_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 197;
            this.match(cslParser.SAY);
            this.state = 200;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.NOT:
            case cslParser.TRUE:
            case cslParser.FALSE:
            case cslParser.STRING:
            case cslParser.INTS:
            case cslParser.FLOATS:
            case cslParser.LPAREN:
            case cslParser.LBRACE:
            case cslParser.MINUS:
            case cslParser.ID:
                {
                this.state = 198;
                this.expression();
                }
                break;
            case cslParser.T__0:
                {
                this.state = 199;
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
        this.enterRule(localContext, 34, cslParser.RULE_assign_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.match(cslParser.SET);
            this.state = 203;
            this.match(cslParser.ID);
            this.state = 204;
            this.match(cslParser.ASSIGN);
            this.state = 205;
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
        this.enterRule(localContext, 36, cslParser.RULE_assign_global_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            this.match(cslParser.SET);
            this.state = 208;
            this.match(cslParser.GLOBAL);
            this.state = 209;
            this.match(cslParser.ID);
            this.state = 210;
            this.match(cslParser.ASSIGN);
            this.state = 211;
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
        this.enterRule(localContext, 38, cslParser.RULE_goto_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 213;
            this.match(cslParser.GOTO);
            this.state = 214;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 61)) {
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
    public exit_stmt(): Exit_stmtContext {
        let localContext = new Exit_stmtContext(this.context, this.state);
        this.enterRule(localContext, 40, cslParser.RULE_exit_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 216;
            this.match(cslParser.EXIT);
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
        this.enterRule(localContext, 42, cslParser.RULE_input_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 218;
            this.match(cslParser.INPUT);
            this.state = 219;
            this.match(cslParser.ID);
            this.state = 221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 220;
                this.assert_stmt();
                }
            }

            this.state = 224;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                {
                this.state = 223;
                this.when_silence_stmt();
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
    public assert_stmt(): Assert_stmtContext {
        let localContext = new Assert_stmtContext(this.context, this.state);
        this.enterRule(localContext, 44, cslParser.RULE_assert_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(cslParser.ASSERT);
            this.state = 227;
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
        this.enterRule(localContext, 46, cslParser.RULE_when_silence_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 229;
            this.match(cslParser.WHEN);
            this.state = 230;
            this.match(cslParser.SILENCE);
            this.state = 231;
            this.expression();
            this.state = 232;
            this.match(cslParser.ARROW);
            this.state = 233;
            this.match(cslParser.LBRACE);
            this.state = 234;
            this.command_sequnces();
            this.state = 235;
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
        this.enterRule(localContext, 48, cslParser.RULE_match_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 237;
            this.match(cslParser.MATCH);
            this.state = 238;
            this.match(cslParser.INPUT);
            this.state = 239;
            this.match(cslParser.LBRACE);
            this.state = 240;
            this.case_list();
            this.state = 242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 241;
                this.default_branch();
                }
            }

            this.state = 244;
            this.match(cslParser.RBRACE);
            this.state = 246;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                {
                this.state = 245;
                this.when_silence_stmt();
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
    public menu_stmt(): Menu_stmtContext {
        let localContext = new Menu_stmtContext(this.context, this.state);
        this.enterRule(localContext, 50, cslParser.RULE_menu_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
            this.match(cslParser.MENU);
            this.state = 249;
            this.match(cslParser.LBRACE);
            this.state = 250;
            this.case_list();
            this.state = 251;
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
    public case_list(): Case_listContext {
        let localContext = new Case_listContext(this.context, this.state);
        this.enterRule(localContext, 52, cslParser.RULE_case_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 253;
                this.case_branch();
                }
                }
                this.state = 256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096384) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 537138189) !== 0));
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
    public case_branch(): Case_branchContext {
        let localContext = new Case_branchContext(this.context, this.state);
        this.enterRule(localContext, 54, cslParser.RULE_case_branch);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 258;
            this.expression();
            this.state = 259;
            this.match(cslParser.ARROW);
            this.state = 260;
            this.match(cslParser.LBRACE);
            this.state = 261;
            this.command_sequnces();
            this.state = 262;
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
    public if_stmt(): If_stmtContext {
        let localContext = new If_stmtContext(this.context, this.state);
        this.enterRule(localContext, 56, cslParser.RULE_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 264;
            this.match(cslParser.IF);
            this.state = 265;
            this.expression();
            this.state = 266;
            this.match(cslParser.ARROW);
            this.state = 267;
            this.match(cslParser.LBRACE);
            this.state = 268;
            this.command_sequnces();
            this.state = 269;
            this.match(cslParser.RBRACE);
            this.state = 271;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 270;
                this.else_if_stmt();
                }
            }

            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15) {
                {
                this.state = 273;
                this.else_stmt();
                }
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
        this.enterRule(localContext, 58, cslParser.RULE_else_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 276;
            this.match(cslParser.ELIF);
            this.state = 277;
            this.expression();
            this.state = 278;
            this.match(cslParser.ARROW);
            this.state = 279;
            this.match(cslParser.LBRACE);
            this.state = 280;
            this.command_sequnces();
            this.state = 281;
            this.match(cslParser.RBRACE);
            this.state = 283;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 282;
                this.else_if_stmt();
                }
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
        this.enterRule(localContext, 60, cslParser.RULE_else_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 285;
            this.match(cslParser.ELSE);
            this.state = 286;
            this.match(cslParser.ARROW);
            this.state = 287;
            this.match(cslParser.LBRACE);
            this.state = 288;
            this.command_sequnces();
            this.state = 289;
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
        this.enterRule(localContext, 62, cslParser.RULE_loop_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 291;
            this.match(cslParser.LOOP);
            this.state = 293;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 292;
                this.when_clause();
                }
            }

            this.state = 295;
            this.match(cslParser.LBRACE);
            this.state = 296;
            this.command_sequnces();
            this.state = 297;
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
        this.enterRule(localContext, 64, cslParser.RULE_when_clause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 299;
            this.match(cslParser.WHEN);
            this.state = 300;
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
        this.enterRule(localContext, 66, cslParser.RULE_fetch_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 302;
            this.match(cslParser.FETCH);
            this.state = 305;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.STRING:
                {
                this.state = 303;
                this.match(cslParser.STRING);
                }
                break;
            case cslParser.T__0:
                {
                this.state = 304;
                this.template_string();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 307;
            this.match(cslParser.ARROW);
            this.state = 308;
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
        this.enterRule(localContext, 68, cslParser.RULE_post_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 310;
            this.match(cslParser.POST);
            this.state = 311;
            this.match(cslParser.ID);
            this.state = 312;
            this.match(cslParser.ARROW);
            this.state = 315;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.STRING:
                {
                this.state = 313;
                this.match(cslParser.STRING);
                }
                break;
            case cslParser.T__0:
                {
                this.state = 314;
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

    public json_object(): Json_objectContext;
    public json_object(_p: number): Json_objectContext;
    public json_object(_p?: number): Json_objectContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new Json_objectContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 70;
        this.enterRecursionRule(localContext, 70, cslParser.RULE_json_object, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 318;
            this.json_pair();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 325;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new Json_objectContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_json_object);
                    this.state = 320;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 321;
                    this.match(cslParser.COMMA);
                    this.state = 322;
                    this.json_pair();
                    }
                    }
                }
                this.state = 327;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
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
    public json_pair(): Json_pairContext {
        let localContext = new Json_pairContext(this.context, this.state);
        this.enterRule(localContext, 72, cslParser.RULE_json_pair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.match(cslParser.STRING);
            this.state = 329;
            this.match(cslParser.COLON);
            this.state = 330;
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
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 74, cslParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 332;
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
        let _startState = 76;
        this.enterRecursionRule(localContext, 76, cslParser.RULE_logical_or_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 335;
            this.logical_and_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 342;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
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
                    this.state = 337;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 338;
                    this.match(cslParser.OR);
                    this.state = 339;
                    this.logical_and_expression(0);
                    }
                    }
                }
                this.state = 344;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
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
        let _startState = 78;
        this.enterRecursionRule(localContext, 78, cslParser.RULE_logical_and_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 346;
            this.equality_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 353;
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
                    localContext = new Logical_and_expressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_logical_and_expression);
                    this.state = 348;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 349;
                    this.match(cslParser.AND);
                    this.state = 350;
                    this.equality_expression(0);
                    }
                    }
                }
                this.state = 355;
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
        let _startState = 80;
        this.enterRecursionRule(localContext, 80, cslParser.RULE_equality_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 357;
            this.relational_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 367;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 365;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
                    case 1:
                        {
                        localContext = new Equality_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_equality_expression);
                        this.state = 359;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 360;
                        this.match(cslParser.EQUAL);
                        this.state = 361;
                        this.relational_expression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new Equality_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_equality_expression);
                        this.state = 362;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 363;
                        this.match(cslParser.NOT_EQUAL);
                        this.state = 364;
                        this.relational_expression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 369;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
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
        let _startState = 82;
        this.enterRecursionRule(localContext, 82, cslParser.RULE_relational_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 371;
            this.additive_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 387;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 385;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
                    case 1:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 373;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 374;
                        this.match(cslParser.GREATER);
                        this.state = 375;
                        this.additive_expression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 376;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 377;
                        this.match(cslParser.GREATER_EQUAL);
                        this.state = 378;
                        this.additive_expression(0);
                        }
                        break;
                    case 3:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 379;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 380;
                        this.match(cslParser.LESS);
                        this.state = 381;
                        this.additive_expression(0);
                        }
                        break;
                    case 4:
                        {
                        localContext = new Relational_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_relational_expression);
                        this.state = 382;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 383;
                        this.match(cslParser.LESS_EQUAL);
                        this.state = 384;
                        this.additive_expression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 389;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
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
        let _startState = 84;
        this.enterRecursionRule(localContext, 84, cslParser.RULE_additive_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 391;
            this.multiplicative_expression(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 401;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 399;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
                    case 1:
                        {
                        localContext = new Additive_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_additive_expression);
                        this.state = 393;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 394;
                        this.match(cslParser.PLUS);
                        this.state = 395;
                        this.multiplicative_expression(0);
                        }
                        break;
                    case 2:
                        {
                        localContext = new Additive_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_additive_expression);
                        this.state = 396;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 397;
                        this.match(cslParser.MINUS);
                        this.state = 398;
                        this.multiplicative_expression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 403;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
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
        let _startState = 86;
        this.enterRecursionRule(localContext, 86, cslParser.RULE_multiplicative_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 405;
            this.unary_expression();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 418;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 416;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
                    case 1:
                        {
                        localContext = new Multiplicative_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_multiplicative_expression);
                        this.state = 407;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 408;
                        this.match(cslParser.MULTIPLY);
                        this.state = 409;
                        this.unary_expression();
                        }
                        break;
                    case 2:
                        {
                        localContext = new Multiplicative_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_multiplicative_expression);
                        this.state = 410;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 411;
                        this.match(cslParser.DIVIDE);
                        this.state = 412;
                        this.unary_expression();
                        }
                        break;
                    case 3:
                        {
                        localContext = new Multiplicative_expressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, cslParser.RULE_multiplicative_expression);
                        this.state = 413;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 414;
                        this.match(cslParser.MOD);
                        this.state = 415;
                        this.unary_expression();
                        }
                        break;
                    }
                    }
                }
                this.state = 420;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
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
        this.enterRule(localContext, 88, cslParser.RULE_unary_expression);
        try {
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.NOT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 421;
                this.match(cslParser.NOT);
                this.state = 422;
                this.unary_expression();
                }
                break;
            case cslParser.MINUS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 423;
                this.match(cslParser.MINUS);
                this.state = 424;
                this.unary_expression();
                }
                break;
            case cslParser.TRUE:
            case cslParser.FALSE:
            case cslParser.STRING:
            case cslParser.INTS:
            case cslParser.FLOATS:
            case cslParser.LPAREN:
            case cslParser.LBRACE:
            case cslParser.ID:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 425;
                this.postfix_expression();
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
    public postfix_expression(): Postfix_expressionContext {
        let localContext = new Postfix_expressionContext(this.context, this.state);
        this.enterRule(localContext, 90, cslParser.RULE_postfix_expression);
        try {
            this.state = 437;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 428;
                this.primary_expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 429;
                this.match(cslParser.ID);
                this.state = 430;
                this.match(cslParser.LBRACK);
                this.state = 431;
                this.expression();
                this.state = 432;
                this.match(cslParser.RBRACK);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 434;
                this.match(cslParser.ID);
                this.state = 435;
                this.match(cslParser.DOT);
                this.state = 436;
                this.match(cslParser.ID);
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
    public primary_expression(): Primary_expressionContext {
        let localContext = new Primary_expressionContext(this.context, this.state);
        this.enterRule(localContext, 92, cslParser.RULE_primary_expression);
        try {
            this.state = 445;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 439;
                this.match(cslParser.ID);
                }
                break;
            case cslParser.TRUE:
            case cslParser.FALSE:
            case cslParser.STRING:
            case cslParser.INTS:
            case cslParser.FLOATS:
            case cslParser.LBRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 440;
                this.value();
                }
                break;
            case cslParser.LPAREN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 441;
                this.match(cslParser.LPAREN);
                this.state = 442;
                this.expression();
                this.state = 443;
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
        this.enterRule(localContext, 94, cslParser.RULE_value);
        try {
            this.state = 456;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case cslParser.INTS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 447;
                this.match(cslParser.INTS);
                }
                break;
            case cslParser.FLOATS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 448;
                this.match(cslParser.FLOATS);
                }
                break;
            case cslParser.STRING:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 449;
                this.match(cslParser.STRING);
                }
                break;
            case cslParser.LBRACE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 450;
                this.match(cslParser.LBRACE);
                this.state = 451;
                this.json_object(0);
                this.state = 452;
                this.match(cslParser.RBRACE);
                }
                break;
            case cslParser.TRUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 454;
                this.match(cslParser.TRUE);
                }
                break;
            case cslParser.FALSE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 455;
                this.match(cslParser.FALSE);
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

    public override sempred(localContext: antlr.RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 35:
            return this.json_object_sempred(localContext as Json_objectContext, predIndex);
        case 38:
            return this.logical_or_expression_sempred(localContext as Logical_or_expressionContext, predIndex);
        case 39:
            return this.logical_and_expression_sempred(localContext as Logical_and_expressionContext, predIndex);
        case 40:
            return this.equality_expression_sempred(localContext as Equality_expressionContext, predIndex);
        case 41:
            return this.relational_expression_sempred(localContext as Relational_expressionContext, predIndex);
        case 42:
            return this.additive_expression_sempred(localContext as Additive_expressionContext, predIndex);
        case 43:
            return this.multiplicative_expression_sempred(localContext as Multiplicative_expressionContext, predIndex);
        }
        return true;
    }
    private json_object_sempred(localContext: Json_objectContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private logical_or_expression_sempred(localContext: Logical_or_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private logical_and_expression_sempred(localContext: Logical_and_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private equality_expression_sempred(localContext: Equality_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 3);
        case 4:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private relational_expression_sempred(localContext: Relational_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 5:
            return this.precpred(this.context, 5);
        case 6:
            return this.precpred(this.context, 4);
        case 7:
            return this.precpred(this.context, 3);
        case 8:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private additive_expression_sempred(localContext: Additive_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 9:
            return this.precpred(this.context, 3);
        case 10:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private multiplicative_expression_sempred(localContext: Multiplicative_expressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 11:
            return this.precpred(this.context, 4);
        case 12:
            return this.precpred(this.context, 3);
        case 13:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,63,459,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,1,0,1,0,5,0,99,8,0,10,0,12,0,102,9,0,1,0,1,0,1,1,
        1,1,3,1,108,8,1,1,2,1,2,1,2,1,2,1,2,3,2,115,8,2,1,3,1,3,1,3,1,3,
        1,3,1,4,1,4,1,4,1,4,4,4,126,8,4,11,4,12,4,127,1,4,1,4,1,5,1,5,1,
        5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,4,7,143,8,7,11,7,12,7,144,1,8,
        1,8,1,8,1,8,1,9,1,9,1,9,3,9,154,8,9,1,9,1,9,1,9,1,10,1,10,1,10,1,
        10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,5,12,172,8,12,10,
        12,12,12,175,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
        13,1,13,1,13,1,13,1,13,1,13,3,13,192,8,13,1,14,1,14,1,15,1,15,1,
        16,1,16,1,16,3,16,201,8,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,
        18,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,21,1,21,1,21,3,21,222,
        8,21,1,21,3,21,225,8,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
        1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,243,8,24,1,24,1,24,
        3,24,247,8,24,1,25,1,25,1,25,1,25,1,25,1,26,4,26,255,8,26,11,26,
        12,26,256,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
        1,28,1,28,3,28,272,8,28,1,28,3,28,275,8,28,1,29,1,29,1,29,1,29,1,
        29,1,29,1,29,3,29,284,8,29,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,
        31,3,31,294,8,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,
        33,3,33,306,8,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,3,34,316,
        8,34,1,35,1,35,1,35,1,35,1,35,1,35,5,35,324,8,35,10,35,12,35,327,
        9,35,1,36,1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,
        5,38,341,8,38,10,38,12,38,344,9,38,1,39,1,39,1,39,1,39,1,39,1,39,
        5,39,352,8,39,10,39,12,39,355,9,39,1,40,1,40,1,40,1,40,1,40,1,40,
        1,40,1,40,1,40,5,40,366,8,40,10,40,12,40,369,9,40,1,41,1,41,1,41,
        1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,5,41,
        386,8,41,10,41,12,41,389,9,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,
        1,42,1,42,5,42,400,8,42,10,42,12,42,403,9,42,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,5,43,417,8,43,10,43,12,43,
        420,9,43,1,44,1,44,1,44,1,44,1,44,3,44,427,8,44,1,45,1,45,1,45,1,
        45,1,45,1,45,1,45,1,45,1,45,3,45,438,8,45,1,46,1,46,1,46,1,46,1,
        46,1,46,3,46,446,8,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,
        47,3,47,457,8,47,1,47,0,7,70,76,78,80,82,84,86,48,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,0,2,2,0,
        1,2,48,48,2,0,3,3,61,61,472,0,96,1,0,0,0,2,107,1,0,0,0,4,114,1,0,
        0,0,6,116,1,0,0,0,8,125,1,0,0,0,10,131,1,0,0,0,12,136,1,0,0,0,14,
        142,1,0,0,0,16,146,1,0,0,0,18,150,1,0,0,0,20,158,1,0,0,0,22,164,
        1,0,0,0,24,173,1,0,0,0,26,191,1,0,0,0,28,193,1,0,0,0,30,195,1,0,
        0,0,32,197,1,0,0,0,34,202,1,0,0,0,36,207,1,0,0,0,38,213,1,0,0,0,
        40,216,1,0,0,0,42,218,1,0,0,0,44,226,1,0,0,0,46,229,1,0,0,0,48,237,
        1,0,0,0,50,248,1,0,0,0,52,254,1,0,0,0,54,258,1,0,0,0,56,264,1,0,
        0,0,58,276,1,0,0,0,60,285,1,0,0,0,62,291,1,0,0,0,64,299,1,0,0,0,
        66,302,1,0,0,0,68,310,1,0,0,0,70,317,1,0,0,0,72,328,1,0,0,0,74,332,
        1,0,0,0,76,334,1,0,0,0,78,345,1,0,0,0,80,356,1,0,0,0,82,370,1,0,
        0,0,84,390,1,0,0,0,86,404,1,0,0,0,88,426,1,0,0,0,90,437,1,0,0,0,
        92,445,1,0,0,0,94,456,1,0,0,0,96,100,5,1,0,0,97,99,3,2,1,0,98,97,
        1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,103,1,
        0,0,0,102,100,1,0,0,0,103,104,5,1,0,0,104,1,1,0,0,0,105,108,3,4,
        2,0,106,108,3,6,3,0,107,105,1,0,0,0,107,106,1,0,0,0,108,3,1,0,0,
        0,109,115,8,0,0,0,110,111,5,2,0,0,111,115,5,1,0,0,112,113,5,2,0,
        0,113,115,5,48,0,0,114,109,1,0,0,0,114,110,1,0,0,0,114,112,1,0,0,
        0,115,5,1,0,0,0,116,117,5,48,0,0,117,118,5,44,0,0,118,119,3,74,37,
        0,119,120,5,45,0,0,120,7,1,0,0,0,121,126,3,12,6,0,122,126,3,22,11,
        0,123,126,3,18,9,0,124,126,3,10,5,0,125,121,1,0,0,0,125,122,1,0,
        0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,127,1,0,0,0,127,125,1,0,
        0,0,127,128,1,0,0,0,128,129,1,0,0,0,129,130,5,0,0,1,130,9,1,0,0,
        0,131,132,5,4,0,0,132,133,5,44,0,0,133,134,3,24,12,0,134,135,5,45,
        0,0,135,11,1,0,0,0,136,137,5,6,0,0,137,138,5,44,0,0,138,139,3,14,
        7,0,139,140,5,45,0,0,140,13,1,0,0,0,141,143,3,16,8,0,142,141,1,0,
        0,0,143,144,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,15,1,0,0,
        0,146,147,5,61,0,0,147,148,5,37,0,0,148,149,3,74,37,0,149,17,1,0,
        0,0,150,151,5,3,0,0,151,153,5,44,0,0,152,154,3,52,26,0,153,152,1,
        0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,156,3,20,10,0,156,157,
        5,45,0,0,157,19,1,0,0,0,158,159,5,8,0,0,159,160,5,36,0,0,160,161,
        5,44,0,0,161,162,3,24,12,0,162,163,5,45,0,0,163,21,1,0,0,0,164,165,
        5,5,0,0,165,166,5,61,0,0,166,167,5,44,0,0,167,168,3,24,12,0,168,
        169,5,45,0,0,169,23,1,0,0,0,170,172,3,26,13,0,171,170,1,0,0,0,172,
        175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,25,1,0,0,0,175,173,
        1,0,0,0,176,192,3,32,16,0,177,192,3,38,19,0,178,192,3,42,21,0,179,
        192,3,50,25,0,180,192,3,48,24,0,181,192,3,56,28,0,182,192,3,46,23,
        0,183,192,3,34,17,0,184,192,3,36,18,0,185,192,3,62,31,0,186,192,
        3,28,14,0,187,192,3,30,15,0,188,192,3,66,33,0,189,192,3,68,34,0,
        190,192,3,40,20,0,191,176,1,0,0,0,191,177,1,0,0,0,191,178,1,0,0,
        0,191,179,1,0,0,0,191,180,1,0,0,0,191,181,1,0,0,0,191,182,1,0,0,
        0,191,183,1,0,0,0,191,184,1,0,0,0,191,185,1,0,0,0,191,186,1,0,0,
        0,191,187,1,0,0,0,191,188,1,0,0,0,191,189,1,0,0,0,191,190,1,0,0,
        0,192,27,1,0,0,0,193,194,5,20,0,0,194,29,1,0,0,0,195,196,5,19,0,
        0,196,31,1,0,0,0,197,200,5,10,0,0,198,201,3,74,37,0,199,201,3,0,
        0,0,200,198,1,0,0,0,200,199,1,0,0,0,201,33,1,0,0,0,202,203,5,23,
        0,0,203,204,5,61,0,0,204,205,5,37,0,0,205,206,3,74,37,0,206,35,1,
        0,0,0,207,208,5,23,0,0,208,209,5,24,0,0,209,210,5,61,0,0,210,211,
        5,37,0,0,211,212,3,74,37,0,212,37,1,0,0,0,213,214,5,7,0,0,214,215,
        7,1,0,0,215,39,1,0,0,0,216,217,5,11,0,0,217,41,1,0,0,0,218,219,5,
        12,0,0,219,221,5,61,0,0,220,222,3,44,22,0,221,220,1,0,0,0,221,222,
        1,0,0,0,222,224,1,0,0,0,223,225,3,46,23,0,224,223,1,0,0,0,224,225,
        1,0,0,0,225,43,1,0,0,0,226,227,5,13,0,0,227,228,3,74,37,0,228,45,
        1,0,0,0,229,230,5,18,0,0,230,231,5,21,0,0,231,232,3,74,37,0,232,
        233,5,36,0,0,233,234,5,44,0,0,234,235,3,24,12,0,235,236,5,45,0,0,
        236,47,1,0,0,0,237,238,5,22,0,0,238,239,5,12,0,0,239,240,5,44,0,
        0,240,242,3,52,26,0,241,243,3,20,10,0,242,241,1,0,0,0,242,243,1,
        0,0,0,243,244,1,0,0,0,244,246,5,45,0,0,245,247,3,46,23,0,246,245,
        1,0,0,0,246,247,1,0,0,0,247,49,1,0,0,0,248,249,5,9,0,0,249,250,5,
        44,0,0,250,251,3,52,26,0,251,252,5,45,0,0,252,51,1,0,0,0,253,255,
        3,54,27,0,254,253,1,0,0,0,255,256,1,0,0,0,256,254,1,0,0,0,256,257,
        1,0,0,0,257,53,1,0,0,0,258,259,3,74,37,0,259,260,5,36,0,0,260,261,
        5,44,0,0,261,262,3,24,12,0,262,263,5,45,0,0,263,55,1,0,0,0,264,265,
        5,14,0,0,265,266,3,74,37,0,266,267,5,36,0,0,267,268,5,44,0,0,268,
        269,3,24,12,0,269,271,5,45,0,0,270,272,3,58,29,0,271,270,1,0,0,0,
        271,272,1,0,0,0,272,274,1,0,0,0,273,275,3,60,30,0,274,273,1,0,0,
        0,274,275,1,0,0,0,275,57,1,0,0,0,276,277,5,16,0,0,277,278,3,74,37,
        0,278,279,5,36,0,0,279,280,5,44,0,0,280,281,3,24,12,0,281,283,5,
        45,0,0,282,284,3,58,29,0,283,282,1,0,0,0,283,284,1,0,0,0,284,59,
        1,0,0,0,285,286,5,15,0,0,286,287,5,36,0,0,287,288,5,44,0,0,288,289,
        3,24,12,0,289,290,5,45,0,0,290,61,1,0,0,0,291,293,5,17,0,0,292,294,
        3,64,32,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,296,
        5,44,0,0,296,297,3,24,12,0,297,298,5,45,0,0,298,63,1,0,0,0,299,300,
        5,18,0,0,300,301,3,74,37,0,301,65,1,0,0,0,302,305,5,25,0,0,303,306,
        5,32,0,0,304,306,3,0,0,0,305,303,1,0,0,0,305,304,1,0,0,0,306,307,
        1,0,0,0,307,308,5,36,0,0,308,309,5,61,0,0,309,67,1,0,0,0,310,311,
        5,26,0,0,311,312,5,61,0,0,312,315,5,36,0,0,313,316,5,32,0,0,314,
        316,3,0,0,0,315,313,1,0,0,0,315,314,1,0,0,0,316,69,1,0,0,0,317,318,
        6,35,-1,0,318,319,3,72,36,0,319,325,1,0,0,0,320,321,10,2,0,0,321,
        322,5,41,0,0,322,324,3,72,36,0,323,320,1,0,0,0,324,327,1,0,0,0,325,
        323,1,0,0,0,325,326,1,0,0,0,326,71,1,0,0,0,327,325,1,0,0,0,328,329,
        5,32,0,0,329,330,5,39,0,0,330,331,3,74,37,0,331,73,1,0,0,0,332,333,
        3,76,38,0,333,75,1,0,0,0,334,335,6,38,-1,0,335,336,3,78,39,0,336,
        342,1,0,0,0,337,338,10,2,0,0,338,339,5,27,0,0,339,341,3,78,39,0,
        340,337,1,0,0,0,341,344,1,0,0,0,342,340,1,0,0,0,342,343,1,0,0,0,
        343,77,1,0,0,0,344,342,1,0,0,0,345,346,6,39,-1,0,346,347,3,80,40,
        0,347,353,1,0,0,0,348,349,10,2,0,0,349,350,5,28,0,0,350,352,3,80,
        40,0,351,348,1,0,0,0,352,355,1,0,0,0,353,351,1,0,0,0,353,354,1,0,
        0,0,354,79,1,0,0,0,355,353,1,0,0,0,356,357,6,40,-1,0,357,358,3,82,
        41,0,358,367,1,0,0,0,359,360,10,3,0,0,360,361,5,38,0,0,361,366,3,
        82,41,0,362,363,10,2,0,0,363,364,5,57,0,0,364,366,3,82,41,0,365,
        359,1,0,0,0,365,362,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,
        368,1,0,0,0,368,81,1,0,0,0,369,367,1,0,0,0,370,371,6,41,-1,0,371,
        372,3,84,42,0,372,387,1,0,0,0,373,374,10,5,0,0,374,375,5,53,0,0,
        375,386,3,84,42,0,376,377,10,4,0,0,377,378,5,54,0,0,378,386,3,84,
        42,0,379,380,10,3,0,0,380,381,5,55,0,0,381,386,3,84,42,0,382,383,
        10,2,0,0,383,384,5,56,0,0,384,386,3,84,42,0,385,373,1,0,0,0,385,
        376,1,0,0,0,385,379,1,0,0,0,385,382,1,0,0,0,386,389,1,0,0,0,387,
        385,1,0,0,0,387,388,1,0,0,0,388,83,1,0,0,0,389,387,1,0,0,0,390,391,
        6,42,-1,0,391,392,3,86,43,0,392,401,1,0,0,0,393,394,10,3,0,0,394,
        395,5,49,0,0,395,400,3,86,43,0,396,397,10,2,0,0,397,398,5,50,0,0,
        398,400,3,86,43,0,399,393,1,0,0,0,399,396,1,0,0,0,400,403,1,0,0,
        0,401,399,1,0,0,0,401,402,1,0,0,0,402,85,1,0,0,0,403,401,1,0,0,0,
        404,405,6,43,-1,0,405,406,3,88,44,0,406,418,1,0,0,0,407,408,10,4,
        0,0,408,409,5,51,0,0,409,417,3,88,44,0,410,411,10,3,0,0,411,412,
        5,52,0,0,412,417,3,88,44,0,413,414,10,2,0,0,414,415,5,59,0,0,415,
        417,3,88,44,0,416,407,1,0,0,0,416,410,1,0,0,0,416,413,1,0,0,0,417,
        420,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,87,1,0,0,0,420,418,
        1,0,0,0,421,422,5,29,0,0,422,427,3,88,44,0,423,424,5,50,0,0,424,
        427,3,88,44,0,425,427,3,90,45,0,426,421,1,0,0,0,426,423,1,0,0,0,
        426,425,1,0,0,0,427,89,1,0,0,0,428,438,3,92,46,0,429,430,5,61,0,
        0,430,431,5,46,0,0,431,432,3,74,37,0,432,433,5,47,0,0,433,438,1,
        0,0,0,434,435,5,61,0,0,435,436,5,60,0,0,436,438,5,61,0,0,437,428,
        1,0,0,0,437,429,1,0,0,0,437,434,1,0,0,0,438,91,1,0,0,0,439,446,5,
        61,0,0,440,446,3,94,47,0,441,442,5,42,0,0,442,443,3,74,37,0,443,
        444,5,43,0,0,444,446,1,0,0,0,445,439,1,0,0,0,445,440,1,0,0,0,445,
        441,1,0,0,0,446,93,1,0,0,0,447,457,5,34,0,0,448,457,5,35,0,0,449,
        457,5,32,0,0,450,451,5,44,0,0,451,452,3,70,35,0,452,453,5,45,0,0,
        453,457,1,0,0,0,454,457,5,30,0,0,455,457,5,31,0,0,456,447,1,0,0,
        0,456,448,1,0,0,0,456,449,1,0,0,0,456,450,1,0,0,0,456,454,1,0,0,
        0,456,455,1,0,0,0,457,95,1,0,0,0,36,100,107,114,125,127,144,153,
        173,191,200,221,224,242,246,256,271,274,283,293,305,315,325,342,
        353,365,367,385,387,399,401,416,418,426,437,445,456
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
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(cslParser.DOLLAR, 0);
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


export class ScriptContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(cslParser.EOF, 0)!;
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
        return cslParser.RULE_script;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterScript) {
             listener.enterScript(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitScript) {
             listener.exitScript(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitScript) {
            return visitor.visitScript(this);
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
    public constance(): ConstanceContext[];
    public constance(i: number): ConstanceContext | null;
    public constance(i?: number): ConstanceContext[] | ConstanceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstanceContext);
        }

        return this.getRuleContext(i, ConstanceContext);
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
    public default_branch(): Default_branchContext {
        return this.getRuleContext(0, Default_branchContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public case_list(): Case_listContext | null {
        return this.getRuleContext(0, Case_listContext);
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
    public command_stmt(): Command_stmtContext[];
    public command_stmt(i: number): Command_stmtContext | null;
    public command_stmt(i?: number): Command_stmtContext[] | Command_stmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Command_stmtContext);
        }

        return this.getRuleContext(i, Command_stmtContext);
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
    public exit_stmt(): Exit_stmtContext | null {
        return this.getRuleContext(0, Exit_stmtContext);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(cslParser.ID, 0);
    }
    public CHATBOX(): antlr.TerminalNode | null {
        return this.getToken(cslParser.CHATBOX, 0);
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


export class Exit_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXIT(): antlr.TerminalNode {
        return this.getToken(cslParser.EXIT, 0)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_exit_stmt;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterExit_stmt) {
             listener.enterExit_stmt(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitExit_stmt) {
             listener.exitExit_stmt(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitExit_stmt) {
            return visitor.visitExit_stmt(this);
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
    public assert_stmt(): Assert_stmtContext | null {
        return this.getRuleContext(0, Assert_stmtContext);
    }
    public when_silence_stmt(): When_silence_stmtContext | null {
        return this.getRuleContext(0, When_silence_stmtContext);
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
    public case_list(): Case_listContext {
        return this.getRuleContext(0, Case_listContext)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(cslParser.RBRACE, 0)!;
    }
    public default_branch(): Default_branchContext | null {
        return this.getRuleContext(0, Default_branchContext);
    }
    public when_silence_stmt(): When_silence_stmtContext | null {
        return this.getRuleContext(0, When_silence_stmtContext);
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
    public case_branch(): Case_branchContext[];
    public case_branch(i: number): Case_branchContext | null;
    public case_branch(i?: number): Case_branchContext[] | Case_branchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Case_branchContext);
        }

        return this.getRuleContext(i, Case_branchContext);
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


export class Json_objectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public json_pair(): Json_pairContext {
        return this.getRuleContext(0, Json_pairContext)!;
    }
    public json_object(): Json_objectContext | null {
        return this.getRuleContext(0, Json_objectContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(cslParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_json_object;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterJson_object) {
             listener.enterJson_object(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitJson_object) {
             listener.exitJson_object(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitJson_object) {
            return visitor.visitJson_object(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Json_pairContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(cslParser.STRING, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(cslParser.COLON, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return cslParser.RULE_json_pair;
    }
    public override enterRule(listener: cslListener): void {
        if(listener.enterJson_pair) {
             listener.enterJson_pair(this);
        }
    }
    public override exitRule(listener: cslListener): void {
        if(listener.exitJson_pair) {
             listener.exitJson_pair(this);
        }
    }
    public override accept<Result>(visitor: cslVisitor<Result>): Result | null {
        if (visitor.visitJson_pair) {
            return visitor.visitJson_pair(this);
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
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(cslParser.ID);
    	} else {
    		return this.getToken(cslParser.ID, i);
    	}
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
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.LBRACE, 0);
    }
    public json_object(): Json_objectContext | null {
        return this.getRuleContext(0, Json_objectContext);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.RBRACE, 0);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(cslParser.FALSE, 0);
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
