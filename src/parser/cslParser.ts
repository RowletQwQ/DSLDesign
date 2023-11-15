// Generated from src/parser/csl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { cslListener } from "./cslListener";
import { cslVisitor } from "./cslVisitor";


export class cslParser extends Parser {
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
	public static readonly RULE_assert = 25;
	public static readonly RULE_when_silence_stmt = 26;
	public static readonly RULE_match_stmt = 27;
	public static readonly RULE_match_list = 28;
	public static readonly RULE_match_branch = 29;
	public static readonly RULE_menu_stmt = 30;
	public static readonly RULE_case_list = 31;
	public static readonly RULE_case_branch = 32;
	public static readonly RULE_if_stmt = 33;
	public static readonly RULE_else_if_stmt = 34;
	public static readonly RULE_else_stmt = 35;
	public static readonly RULE_loop_stmt = 36;
	public static readonly RULE_when_clause = 37;
	public static readonly RULE_fetch_stmt = 38;
	public static readonly RULE_post_stmt = 39;
	public static readonly RULE_expression = 40;
	public static readonly RULE_logical_or_expression = 41;
	public static readonly RULE_logical_and_expression = 42;
	public static readonly RULE_equality_expression = 43;
	public static readonly RULE_relational_expression = 44;
	public static readonly RULE_additive_expression = 45;
	public static readonly RULE_multiplicative_expression = 46;
	public static readonly RULE_unary_expression = 47;
	public static readonly RULE_postfix_expression = 48;
	public static readonly RULE_primary_expression = 49;
	public static readonly RULE_value = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"template_string", "template_string_part", "template_string_plain_text", 
		"template_string_expr", "scripts", "hello_stmt", "constance_stmt", "constance_list", 
		"constance", "chatbox_stmt", "chatbox_list", "chatbox_branch", "pattern", 
		"default_branch", "topic_stmt", "command_sequnces", "command_stmt", "continue_stmt", 
		"break_stmt", "say_stmt", "assign_stmt", "assign_global_stmt", "goto_stmt", 
		"input_stmt", "assert_stmt", "assert", "when_silence_stmt", "match_stmt", 
		"match_list", "match_branch", "menu_stmt", "case_list", "case_branch", 
		"if_stmt", "else_if_stmt", "else_stmt", "loop_stmt", "when_clause", "fetch_stmt", 
		"post_stmt", "expression", "logical_or_expression", "logical_and_expression", 
		"equality_expression", "relational_expression", "additive_expression", 
		"multiplicative_expression", "unary_expression", "postfix_expression", 
		"primary_expression", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'`'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'=>'", "':='", "'='", "':'", "';'", "','", "'('", 
		"')'", "'{'", "'}'", "'['", "']'", "'$'", "'+'", "'-'", "'*'", "'/'", 
		"'>'", "'>='", "'<'", "'<='", "'<>'", "'!'", "'%'", "'.'", "'chatbox'", 
		"'hello'", "'topic'", "'constance'", "'goto'", "'default'", "'menu'", 
		"'say'", "'exit'", "'input'", "'assert'", "'if'", "'else'", "'elif'", 
		"'loop'", "'when'", "'break'", "'continue'", "'silence'", "'match'", "'set'", 
		"'global'", "'fetch'", "'post'", "'or'", "'and'", "'not'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "ID", "WS", "STRING", "QUOTE", "DIGIT", "INTS", 
		"FLOATS", "ARROW", "ASSIGN", "EQUAL", "COLON", "SEMICOLON", "COMMA", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "DOLLAR", "PLUS", "MINUS", 
		"MULTIPLY", "DIVIDE", "GREATER", "GREATER_EQUAL", "LESS", "LESS_EQUAL", 
		"NOT_EQUAL", "BANG", "MOD", "DOT", "CHATBOX", "HELLO", "TOPIC", "CONSTANCE", 
		"GOTO", "DEFAULT", "MENU", "SAY", "EXIT", "INPUT", "ASSERT", "IF", "ELSE", 
		"ELIF", "LOOP", "WHEN", "BREAK", "CONTINUE", "SILENCE", "MATCH", "SET", 
		"GLOBAL", "FETCH", "POST", "OR", "AND", "NOT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(cslParser._LITERAL_NAMES, cslParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return cslParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "csl.g4"; }

	// @Override
	public get ruleNames(): string[] { return cslParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return cslParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(cslParser._ATN, this);
	}
	// @RuleVersion(0)
	public template_string(): Template_stringContext {
		let _localctx: Template_stringContext = new Template_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, cslParser.RULE_template_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(cslParser.T__0);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cslParser.ID) | (1 << cslParser.WS) | (1 << cslParser.STRING) | (1 << cslParser.QUOTE) | (1 << cslParser.DIGIT) | (1 << cslParser.INTS) | (1 << cslParser.FLOATS) | (1 << cslParser.ARROW) | (1 << cslParser.ASSIGN) | (1 << cslParser.EQUAL) | (1 << cslParser.COLON) | (1 << cslParser.SEMICOLON) | (1 << cslParser.COMMA) | (1 << cslParser.LPAREN) | (1 << cslParser.RPAREN) | (1 << cslParser.LBRACE) | (1 << cslParser.RBRACE) | (1 << cslParser.LBRACK) | (1 << cslParser.RBRACK) | (1 << cslParser.DOLLAR) | (1 << cslParser.PLUS) | (1 << cslParser.MINUS) | (1 << cslParser.MULTIPLY) | (1 << cslParser.DIVIDE) | (1 << cslParser.GREATER) | (1 << cslParser.GREATER_EQUAL) | (1 << cslParser.LESS) | (1 << cslParser.LESS_EQUAL) | (1 << cslParser.NOT_EQUAL) | (1 << cslParser.BANG))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (cslParser.MOD - 32)) | (1 << (cslParser.DOT - 32)) | (1 << (cslParser.CHATBOX - 32)) | (1 << (cslParser.HELLO - 32)) | (1 << (cslParser.TOPIC - 32)) | (1 << (cslParser.CONSTANCE - 32)) | (1 << (cslParser.GOTO - 32)) | (1 << (cslParser.DEFAULT - 32)) | (1 << (cslParser.MENU - 32)) | (1 << (cslParser.SAY - 32)) | (1 << (cslParser.EXIT - 32)) | (1 << (cslParser.INPUT - 32)) | (1 << (cslParser.ASSERT - 32)) | (1 << (cslParser.IF - 32)) | (1 << (cslParser.ELSE - 32)) | (1 << (cslParser.ELIF - 32)) | (1 << (cslParser.LOOP - 32)) | (1 << (cslParser.WHEN - 32)) | (1 << (cslParser.BREAK - 32)) | (1 << (cslParser.CONTINUE - 32)) | (1 << (cslParser.SILENCE - 32)) | (1 << (cslParser.MATCH - 32)) | (1 << (cslParser.SET - 32)) | (1 << (cslParser.GLOBAL - 32)) | (1 << (cslParser.FETCH - 32)) | (1 << (cslParser.POST - 32)) | (1 << (cslParser.OR - 32)) | (1 << (cslParser.AND - 32)) | (1 << (cslParser.NOT - 32)))) !== 0)) {
				{
				{
				this.state = 103;
				this.template_string_part();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 109;
			this.match(cslParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public template_string_part(): Template_string_partContext {
		let _localctx: Template_string_partContext = new Template_string_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, cslParser.RULE_template_string_part);
		try {
			this.state = 113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.template_string_plain_text();
				}
				break;
			case cslParser.DOLLAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 112;
				this.template_string_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public template_string_plain_text(): Template_string_plain_textContext {
		let _localctx: Template_string_plain_textContext = new Template_string_plain_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, cslParser.RULE_template_string_plain_text);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			_la = this._input.LA(1);
			if (_la <= 0 || (_la === cslParser.T__0 || _la === cslParser.DOLLAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 116;
			this.matchWildcard();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public template_string_expr(): Template_string_exprContext {
		let _localctx: Template_string_exprContext = new Template_string_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, cslParser.RULE_template_string_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(cslParser.DOLLAR);
			this.state = 119;
			this.match(cslParser.LBRACE);
			this.state = 120;
			this.expression();
			this.state = 121;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scripts(): ScriptsContext {
		let _localctx: ScriptsContext = new ScriptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, cslParser.RULE_scripts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cslParser.CHATBOX - 34)) | (1 << (cslParser.HELLO - 34)) | (1 << (cslParser.TOPIC - 34)) | (1 << (cslParser.CONSTANCE - 34)))) !== 0)) {
				{
				this.state = 127;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case cslParser.CONSTANCE:
					{
					this.state = 123;
					this.constance_stmt();
					}
					break;
				case cslParser.TOPIC:
					{
					this.state = 124;
					this.topic_stmt();
					}
					break;
				case cslParser.CHATBOX:
					{
					this.state = 125;
					this.chatbox_stmt();
					}
					break;
				case cslParser.HELLO:
					{
					this.state = 126;
					this.hello_stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hello_stmt(): Hello_stmtContext {
		let _localctx: Hello_stmtContext = new Hello_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, cslParser.RULE_hello_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(cslParser.HELLO);
			this.state = 133;
			this.match(cslParser.LBRACE);
			this.state = 134;
			this.command_sequnces(0);
			this.state = 135;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constance_stmt(): Constance_stmtContext {
		let _localctx: Constance_stmtContext = new Constance_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, cslParser.RULE_constance_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(cslParser.CONSTANCE);
			this.state = 138;
			this.match(cslParser.LBRACE);
			this.state = 139;
			this.constance_list(0);
			this.state = 140;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public constance_list(): Constance_listContext;
	public constance_list(_p: number): Constance_listContext;
	// @RuleVersion(0)
	public constance_list(_p?: number): Constance_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Constance_listContext = new Constance_listContext(this._ctx, _parentState);
		let _prevctx: Constance_listContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, cslParser.RULE_constance_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 143;
			this.constance();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 149;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Constance_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_constance_list);
					this.state = 145;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 146;
					this.constance();
					}
					}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constance(): ConstanceContext {
		let _localctx: ConstanceContext = new ConstanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, cslParser.RULE_constance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(cslParser.ID);
			this.state = 153;
			this.match(cslParser.ASSIGN);
			this.state = 154;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chatbox_stmt(): Chatbox_stmtContext {
		let _localctx: Chatbox_stmtContext = new Chatbox_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, cslParser.RULE_chatbox_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(cslParser.CHATBOX);
			this.state = 157;
			this.match(cslParser.LBRACE);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cslParser.ID || _la === cslParser.STRING || _la === cslParser.DEFAULT) {
				{
				{
				this.state = 158;
				this.chatbox_list(0);
				}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 164;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public chatbox_list(): Chatbox_listContext;
	public chatbox_list(_p: number): Chatbox_listContext;
	// @RuleVersion(0)
	public chatbox_list(_p?: number): Chatbox_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Chatbox_listContext = new Chatbox_listContext(this._ctx, _parentState);
		let _prevctx: Chatbox_listContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, cslParser.RULE_chatbox_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 167;
			this.chatbox_branch();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Chatbox_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_chatbox_list);
					this.state = 169;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 170;
					this.chatbox_branch();
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chatbox_branch(): Chatbox_branchContext {
		let _localctx: Chatbox_branchContext = new Chatbox_branchContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, cslParser.RULE_chatbox_branch);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.ID:
			case cslParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 176;
				this.pattern();
				this.state = 177;
				this.match(cslParser.ARROW);
				this.state = 178;
				this.match(cslParser.LBRACE);
				this.state = 179;
				this.command_sequnces(0);
				this.state = 180;
				this.match(cslParser.RBRACE);
				}
				break;
			case cslParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 182;
				this.default_branch();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, cslParser.RULE_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			_la = this._input.LA(1);
			if (!(_la === cslParser.ID || _la === cslParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public default_branch(): Default_branchContext {
		let _localctx: Default_branchContext = new Default_branchContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, cslParser.RULE_default_branch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(cslParser.DEFAULT);
			this.state = 188;
			this.match(cslParser.ARROW);
			this.state = 189;
			this.match(cslParser.LBRACE);
			this.state = 190;
			this.command_sequnces(0);
			this.state = 191;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topic_stmt(): Topic_stmtContext {
		let _localctx: Topic_stmtContext = new Topic_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, cslParser.RULE_topic_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(cslParser.TOPIC);
			this.state = 194;
			this.match(cslParser.ID);
			this.state = 195;
			this.match(cslParser.LBRACE);
			this.state = 196;
			this.command_sequnces(0);
			this.state = 197;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public command_sequnces(): Command_sequncesContext;
	public command_sequnces(_p: number): Command_sequncesContext;
	// @RuleVersion(0)
	public command_sequnces(_p?: number): Command_sequncesContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Command_sequncesContext = new Command_sequncesContext(this._ctx, _parentState);
		let _prevctx: Command_sequncesContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, cslParser.RULE_command_sequnces, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 200;
			this.command_stmt();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 206;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Command_sequncesContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_command_sequnces);
					this.state = 202;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 203;
					this.command_stmt();
					}
					}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_stmt(): Command_stmtContext {
		let _localctx: Command_stmtContext = new Command_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, cslParser.RULE_command_stmt);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 209;
				this.say_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 210;
				this.goto_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 211;
				this.input_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 212;
				this.menu_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 213;
				this.match_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 214;
				this.if_stmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 215;
				this.when_silence_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 216;
				this.assign_stmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 217;
				this.assign_global_stmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 218;
				this.loop_stmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 219;
				this.continue_stmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 220;
				this.break_stmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 221;
				this.fetch_stmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 222;
				this.post_stmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, cslParser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(cslParser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, cslParser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(cslParser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public say_stmt(): Say_stmtContext {
		let _localctx: Say_stmtContext = new Say_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, cslParser.RULE_say_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(cslParser.SAY);
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.ID:
			case cslParser.STRING:
			case cslParser.INTS:
			case cslParser.FLOATS:
			case cslParser.LPAREN:
			case cslParser.MINUS:
			case cslParser.NOT:
				{
				this.state = 230;
				this.expression();
				}
				break;
			case cslParser.T__0:
				{
				this.state = 231;
				this.template_string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign_stmt(): Assign_stmtContext {
		let _localctx: Assign_stmtContext = new Assign_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, cslParser.RULE_assign_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(cslParser.SET);
			this.state = 235;
			this.match(cslParser.ID);
			this.state = 236;
			this.match(cslParser.ASSIGN);
			this.state = 237;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign_global_stmt(): Assign_global_stmtContext {
		let _localctx: Assign_global_stmtContext = new Assign_global_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, cslParser.RULE_assign_global_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(cslParser.SET);
			this.state = 240;
			this.match(cslParser.GLOBAL);
			this.state = 241;
			this.match(cslParser.ID);
			this.state = 242;
			this.match(cslParser.ASSIGN);
			this.state = 243;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public goto_stmt(): Goto_stmtContext {
		let _localctx: Goto_stmtContext = new Goto_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, cslParser.RULE_goto_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(cslParser.GOTO);
			this.state = 246;
			this.match(cslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public input_stmt(): Input_stmtContext {
		let _localctx: Input_stmtContext = new Input_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, cslParser.RULE_input_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(cslParser.INPUT);
			this.state = 249;
			this.match(cslParser.ID);
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 250;
					this.assert_stmt(0);
					}
					}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 259;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 256;
					this.when_silence_stmt();
					}
					}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public assert_stmt(): Assert_stmtContext;
	public assert_stmt(_p: number): Assert_stmtContext;
	// @RuleVersion(0)
	public assert_stmt(_p?: number): Assert_stmtContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, _parentState);
		let _prevctx: Assert_stmtContext = _localctx;
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, cslParser.RULE_assert_stmt, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 263;
			this.assert();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 269;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Assert_stmtContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_assert_stmt);
					this.state = 265;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 266;
					this.assert();
					}
					}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assert(): AssertContext {
		let _localctx: AssertContext = new AssertContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, cslParser.RULE_assert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(cslParser.ASSERT);
			this.state = 273;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public when_silence_stmt(): When_silence_stmtContext {
		let _localctx: When_silence_stmtContext = new When_silence_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, cslParser.RULE_when_silence_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(cslParser.WHEN);
			this.state = 276;
			this.match(cslParser.SILENCE);
			this.state = 277;
			this.expression();
			this.state = 278;
			this.match(cslParser.ARROW);
			this.state = 279;
			this.match(cslParser.LBRACE);
			this.state = 280;
			this.command_sequnces(0);
			this.state = 281;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public match_stmt(): Match_stmtContext {
		let _localctx: Match_stmtContext = new Match_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, cslParser.RULE_match_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(cslParser.MATCH);
			this.state = 284;
			this.match(cslParser.INPUT);
			this.state = 285;
			this.match(cslParser.LBRACE);
			this.state = 286;
			this.match_list(0);
			this.state = 287;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public match_list(): Match_listContext;
	public match_list(_p: number): Match_listContext;
	// @RuleVersion(0)
	public match_list(_p?: number): Match_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Match_listContext = new Match_listContext(this._ctx, _parentState);
		let _prevctx: Match_listContext = _localctx;
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, cslParser.RULE_match_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 290;
			this.match_branch();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 296;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Match_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_match_list);
					this.state = 292;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 293;
					this.match_branch();
					}
					}
				}
				this.state = 298;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public match_branch(): Match_branchContext {
		let _localctx: Match_branchContext = new Match_branchContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, cslParser.RULE_match_branch);
		try {
			this.state = 307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.ID:
			case cslParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 299;
				this.pattern();
				this.state = 300;
				this.match(cslParser.ARROW);
				this.state = 301;
				this.match(cslParser.LBRACE);
				this.state = 302;
				this.command_sequnces(0);
				this.state = 303;
				this.match(cslParser.RBRACE);
				}
				break;
			case cslParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.default_branch();
				}
				break;
			case cslParser.WHEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 306;
				this.when_silence_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public menu_stmt(): Menu_stmtContext {
		let _localctx: Menu_stmtContext = new Menu_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, cslParser.RULE_menu_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(cslParser.MENU);
			this.state = 310;
			this.match(cslParser.LBRACE);
			this.state = 311;
			this.case_list(0);
			this.state = 312;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public case_list(): Case_listContext;
	public case_list(_p: number): Case_listContext;
	// @RuleVersion(0)
	public case_list(_p?: number): Case_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Case_listContext = new Case_listContext(this._ctx, _parentState);
		let _prevctx: Case_listContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, cslParser.RULE_case_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 315;
			this.case_branch();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Case_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_case_list);
					this.state = 317;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 318;
					this.case_branch();
					}
					}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_branch(): Case_branchContext {
		let _localctx: Case_branchContext = new Case_branchContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, cslParser.RULE_case_branch);
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.ID:
			case cslParser.STRING:
			case cslParser.INTS:
			case cslParser.FLOATS:
			case cslParser.LPAREN:
			case cslParser.MINUS:
			case cslParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 324;
				this.expression();
				this.state = 325;
				this.match(cslParser.ARROW);
				this.state = 326;
				this.match(cslParser.LBRACE);
				this.state = 327;
				this.command_sequnces(0);
				this.state = 328;
				this.match(cslParser.RBRACE);
				}
				break;
			case cslParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				this.default_branch();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, cslParser.RULE_if_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(cslParser.IF);
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
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 339;
				this.else_if_stmt();
				}
				break;
			}
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 342;
				this.else_stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_if_stmt(): Else_if_stmtContext {
		let _localctx: Else_if_stmtContext = new Else_if_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, cslParser.RULE_else_if_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(cslParser.ELIF);
			this.state = 346;
			this.expression();
			this.state = 347;
			this.match(cslParser.ARROW);
			this.state = 348;
			this.match(cslParser.LBRACE);
			this.state = 349;
			this.command_sequnces(0);
			this.state = 350;
			this.match(cslParser.RBRACE);
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 351;
				this.else_if_stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_stmt(): Else_stmtContext {
		let _localctx: Else_stmtContext = new Else_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, cslParser.RULE_else_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(cslParser.ELSE);
			this.state = 355;
			this.match(cslParser.ARROW);
			this.state = 356;
			this.match(cslParser.LBRACE);
			this.state = 357;
			this.command_sequnces(0);
			this.state = 358;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loop_stmt(): Loop_stmtContext {
		let _localctx: Loop_stmtContext = new Loop_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, cslParser.RULE_loop_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(cslParser.LOOP);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cslParser.WHEN) {
				{
				this.state = 361;
				this.when_clause();
				}
			}

			this.state = 364;
			this.match(cslParser.LBRACE);
			this.state = 365;
			this.command_sequnces(0);
			this.state = 366;
			this.match(cslParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public when_clause(): When_clauseContext {
		let _localctx: When_clauseContext = new When_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, cslParser.RULE_when_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(cslParser.WHEN);
			this.state = 369;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fetch_stmt(): Fetch_stmtContext {
		let _localctx: Fetch_stmtContext = new Fetch_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, cslParser.RULE_fetch_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(cslParser.FETCH);
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.STRING:
				{
				this.state = 372;
				this.match(cslParser.STRING);
				}
				break;
			case cslParser.T__0:
				{
				this.state = 373;
				this.template_string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 376;
			this.match(cslParser.ARROW);
			this.state = 377;
			this.match(cslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public post_stmt(): Post_stmtContext {
		let _localctx: Post_stmtContext = new Post_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, cslParser.RULE_post_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(cslParser.POST);
			this.state = 380;
			this.match(cslParser.ID);
			this.state = 381;
			this.match(cslParser.ARROW);
			this.state = 384;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.STRING:
				{
				this.state = 382;
				this.match(cslParser.STRING);
				}
				break;
			case cslParser.T__0:
				{
				this.state = 383;
				this.template_string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, cslParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.logical_or_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public logical_or_expression(): Logical_or_expressionContext;
	public logical_or_expression(_p: number): Logical_or_expressionContext;
	// @RuleVersion(0)
	public logical_or_expression(_p?: number): Logical_or_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Logical_or_expressionContext = new Logical_or_expressionContext(this._ctx, _parentState);
		let _prevctx: Logical_or_expressionContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, cslParser.RULE_logical_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 389;
			this.logical_and_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 396;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Logical_or_expressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_logical_or_expression);
					this.state = 391;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 392;
					this.match(cslParser.OR);
					this.state = 393;
					this.logical_and_expression(0);
					}
					}
				}
				this.state = 398;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logical_and_expression(): Logical_and_expressionContext;
	public logical_and_expression(_p: number): Logical_and_expressionContext;
	// @RuleVersion(0)
	public logical_and_expression(_p?: number): Logical_and_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Logical_and_expressionContext = new Logical_and_expressionContext(this._ctx, _parentState);
		let _prevctx: Logical_and_expressionContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, cslParser.RULE_logical_and_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 400;
			this.equality_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Logical_and_expressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_logical_and_expression);
					this.state = 402;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 403;
					this.match(cslParser.AND);
					this.state = 404;
					this.equality_expression(0);
					}
					}
				}
				this.state = 409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equality_expression(): Equality_expressionContext;
	public equality_expression(_p: number): Equality_expressionContext;
	// @RuleVersion(0)
	public equality_expression(_p?: number): Equality_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, _parentState);
		let _prevctx: Equality_expressionContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, cslParser.RULE_equality_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 411;
			this.relational_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 421;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 419;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
					case 1:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_equality_expression);
						this.state = 413;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 414;
						this.match(cslParser.EQUAL);
						this.state = 415;
						this.relational_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_equality_expression);
						this.state = 416;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 417;
						this.match(cslParser.NOT_EQUAL);
						this.state = 418;
						this.relational_expression(0);
						}
						break;
					}
					}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relational_expression(): Relational_expressionContext;
	public relational_expression(_p: number): Relational_expressionContext;
	// @RuleVersion(0)
	public relational_expression(_p?: number): Relational_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Relational_expressionContext = new Relational_expressionContext(this._ctx, _parentState);
		let _prevctx: Relational_expressionContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, cslParser.RULE_relational_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 425;
			this.additive_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 441;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 439;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_relational_expression);
						this.state = 427;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 428;
						this.match(cslParser.GREATER);
						this.state = 429;
						this.additive_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_relational_expression);
						this.state = 430;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 431;
						this.match(cslParser.GREATER_EQUAL);
						this.state = 432;
						this.additive_expression(0);
						}
						break;

					case 3:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_relational_expression);
						this.state = 433;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 434;
						this.match(cslParser.LESS);
						this.state = 435;
						this.additive_expression(0);
						}
						break;

					case 4:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_relational_expression);
						this.state = 436;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 437;
						this.match(cslParser.LESS_EQUAL);
						this.state = 438;
						this.additive_expression(0);
						}
						break;
					}
					}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additive_expression(): Additive_expressionContext;
	public additive_expression(_p: number): Additive_expressionContext;
	// @RuleVersion(0)
	public additive_expression(_p?: number): Additive_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, _parentState);
		let _prevctx: Additive_expressionContext = _localctx;
		let _startState: number = 90;
		this.enterRecursionRule(_localctx, 90, cslParser.RULE_additive_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 445;
			this.multiplicative_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 455;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 453;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						_localctx = new Additive_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_additive_expression);
						this.state = 447;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 448;
						this.match(cslParser.PLUS);
						this.state = 449;
						this.multiplicative_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Additive_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_additive_expression);
						this.state = 450;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 451;
						this.match(cslParser.MINUS);
						this.state = 452;
						this.multiplicative_expression(0);
						}
						break;
					}
					}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicative_expression(): Multiplicative_expressionContext;
	public multiplicative_expression(_p: number): Multiplicative_expressionContext;
	// @RuleVersion(0)
	public multiplicative_expression(_p?: number): Multiplicative_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this._ctx, _parentState);
		let _prevctx: Multiplicative_expressionContext = _localctx;
		let _startState: number = 92;
		this.enterRecursionRule(_localctx, 92, cslParser.RULE_multiplicative_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 459;
			this.unary_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 472;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 470;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
					case 1:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_multiplicative_expression);
						this.state = 461;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 462;
						this.match(cslParser.MULTIPLY);
						this.state = 463;
						this.unary_expression();
						}
						break;

					case 2:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_multiplicative_expression);
						this.state = 464;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 465;
						this.match(cslParser.DIVIDE);
						this.state = 466;
						this.unary_expression();
						}
						break;

					case 3:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_multiplicative_expression);
						this.state = 467;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 468;
						this.match(cslParser.MOD);
						this.state = 469;
						this.unary_expression();
						}
						break;
					}
					}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_expression(): Unary_expressionContext {
		let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, cslParser.RULE_unary_expression);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.match(cslParser.NOT);
				this.state = 476;
				this.unary_expression();
				}
				break;
			case cslParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.match(cslParser.MINUS);
				this.state = 478;
				this.unary_expression();
				}
				break;
			case cslParser.ID:
			case cslParser.STRING:
			case cslParser.INTS:
			case cslParser.FLOATS:
			case cslParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 479;
				this.postfix_expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfix_expression(): Postfix_expressionContext;
	public postfix_expression(_p: number): Postfix_expressionContext;
	// @RuleVersion(0)
	public postfix_expression(_p?: number): Postfix_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Postfix_expressionContext = new Postfix_expressionContext(this._ctx, _parentState);
		let _prevctx: Postfix_expressionContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, cslParser.RULE_postfix_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 483;
			this.primary_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 495;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 493;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_postfix_expression);
						this.state = 485;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 486;
						this.match(cslParser.LBRACK);
						this.state = 487;
						this.expression();
						this.state = 488;
						this.match(cslParser.RBRACK);
						}
						break;

					case 2:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, cslParser.RULE_postfix_expression);
						this.state = 490;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 491;
						this.match(cslParser.DOT);
						this.state = 492;
						this.match(cslParser.ID);
						}
						break;
					}
					}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary_expression(): Primary_expressionContext {
		let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, cslParser.RULE_primary_expression);
		try {
			this.state = 504;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cslParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 498;
				this.match(cslParser.ID);
				}
				break;
			case cslParser.STRING:
			case cslParser.INTS:
			case cslParser.FLOATS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 499;
				this.value();
				}
				break;
			case cslParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 500;
				this.match(cslParser.LPAREN);
				this.state = 501;
				this.expression();
				this.state = 502;
				this.match(cslParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, cslParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cslParser.STRING) | (1 << cslParser.INTS) | (1 << cslParser.FLOATS))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.constance_list_sempred(_localctx as Constance_listContext, predIndex);

		case 10:
			return this.chatbox_list_sempred(_localctx as Chatbox_listContext, predIndex);

		case 15:
			return this.command_sequnces_sempred(_localctx as Command_sequncesContext, predIndex);

		case 24:
			return this.assert_stmt_sempred(_localctx as Assert_stmtContext, predIndex);

		case 28:
			return this.match_list_sempred(_localctx as Match_listContext, predIndex);

		case 31:
			return this.case_list_sempred(_localctx as Case_listContext, predIndex);

		case 41:
			return this.logical_or_expression_sempred(_localctx as Logical_or_expressionContext, predIndex);

		case 42:
			return this.logical_and_expression_sempred(_localctx as Logical_and_expressionContext, predIndex);

		case 43:
			return this.equality_expression_sempred(_localctx as Equality_expressionContext, predIndex);

		case 44:
			return this.relational_expression_sempred(_localctx as Relational_expressionContext, predIndex);

		case 45:
			return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex);

		case 46:
			return this.multiplicative_expression_sempred(_localctx as Multiplicative_expressionContext, predIndex);

		case 48:
			return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex);
		}
		return true;
	}
	private constance_list_sempred(_localctx: Constance_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private chatbox_list_sempred(_localctx: Chatbox_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private command_sequnces_sempred(_localctx: Command_sequncesContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private assert_stmt_sempred(_localctx: Assert_stmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private match_list_sempred(_localctx: Match_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private case_list_sempred(_localctx: Case_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private logical_or_expression_sempred(_localctx: Logical_or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private logical_and_expression_sempred(_localctx: Logical_and_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private equality_expression_sempred(_localctx: Equality_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private relational_expression_sempred(_localctx: Relational_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private additive_expression_sempred(_localctx: Additive_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 3);

		case 15:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private multiplicative_expression_sempred(_localctx: Multiplicative_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 4);

		case 17:
			return this.precpred(this._ctx, 3);

		case 18:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03>\u01FF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x03\x02\x07\x02k\n\x02\f\x02\x0E\x02n\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x05\x03t\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x82\n" +
		"\x06\f\x06\x0E\x06\x85\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x96\n\t" +
		"\f\t\x0E\t\x99\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\xA2" +
		"\n\v\f\v\x0E\v\xA5\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f" +
		"\xAE\n\f\f\f\x0E\f\xB1\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\xBA\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\xCF\n\x11\f\x11\x0E\x11\xD2\v\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xE2\n\x12\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x05\x15\xEB\n\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19\xFE\n\x19\f\x19" +
		"\x0E\x19\u0101\v\x19\x03\x19\x07\x19\u0104\n\x19\f\x19\x0E\x19\u0107\v" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u010E\n\x1A\f\x1A" +
		"\x0E\x1A\u0111\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0129\n\x1E" +
		"\f\x1E\x0E\x1E\u012C\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u0136\n\x1F\x03 \x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03!\x07!\u0142\n!\f!\x0E!\u0145\v!\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03\"\x05\"\u014E\n\"\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x05#\u0157\n#\x03#\x05#\u015A\n#\x03$\x03$\x03$\x03$\x03$\x03$" +
		"\x03$\x05$\u0163\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x05&\u016D" +
		"\n&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u0179\n" +
		"(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x05)\u0183\n)\x03*\x03*\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x07+\u018D\n+\f+\x0E+\u0190\v+\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x07,\u0198\n,\f,\x0E,\u019B\v,\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x07-\u01A6\n-\f-\x0E-\u01A9\v-\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u01BA\n" +
		".\f.\x0E.\u01BD\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u01C8" +
		"\n/\f/\x0E/\u01CB\v/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x070\u01D9\n0\f0\x0E0\u01DC\v0\x031\x031\x031\x031\x031\x05" +
		"1\u01E3\n1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x07" +
		"2\u01F0\n2\f2\x0E2\u01F3\v2\x033\x033\x033\x033\x033\x033\x053\u01FB\n" +
		"3\x034\x034\x034\x02\x02\x0F\x10\x16 2:@TVXZ\\^b5\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02" +
		"\x05\x04\x02\x03\x03\x17\x17\x04\x02\x04\x04\x06\x06\x04\x02\x06\x06\t" +
		"\n\x02\u0205\x02h\x03\x02\x02\x02\x04s\x03\x02\x02\x02\x06u\x03\x02\x02" +
		"\x02\bx\x03\x02\x02\x02\n\x83\x03\x02\x02\x02\f\x86\x03\x02\x02\x02\x0E" +
		"\x8B\x03\x02\x02\x02\x10\x90\x03\x02\x02\x02\x12\x9A\x03\x02\x02\x02\x14" +
		"\x9E\x03\x02\x02\x02\x16\xA8\x03\x02\x02\x02\x18\xB9\x03\x02\x02\x02\x1A" +
		"\xBB\x03\x02\x02\x02\x1C\xBD\x03\x02\x02\x02\x1E\xC3\x03\x02\x02\x02 " +
		"\xC9\x03\x02\x02\x02\"\xE1\x03\x02\x02\x02$\xE3\x03\x02\x02\x02&\xE5\x03" +
		"\x02\x02\x02(\xE7\x03\x02\x02\x02*\xEC\x03\x02\x02\x02,\xF1\x03\x02\x02" +
		"\x02.\xF7\x03\x02\x02\x020\xFA\x03\x02\x02\x022\u0108\x03\x02\x02\x02" +
		"4\u0112\x03\x02\x02\x026\u0115\x03\x02\x02\x028\u011D\x03\x02\x02\x02" +
		":\u0123\x03\x02\x02\x02<\u0135\x03\x02\x02\x02>\u0137\x03\x02\x02\x02" +
		"@\u013C\x03\x02\x02\x02B\u014D\x03\x02\x02\x02D\u014F\x03\x02\x02\x02" +
		"F\u015B\x03\x02\x02\x02H\u0164\x03\x02\x02\x02J\u016A\x03\x02\x02\x02" +
		"L\u0172\x03\x02\x02\x02N\u0175\x03\x02\x02\x02P\u017D\x03\x02\x02\x02" +
		"R\u0184\x03\x02\x02\x02T\u0186\x03\x02\x02\x02V\u0191\x03\x02\x02\x02" +
		"X\u019C\x03\x02\x02\x02Z\u01AA\x03\x02\x02\x02\\\u01BE\x03\x02\x02\x02" +
		"^\u01CC\x03\x02\x02\x02`\u01E2\x03\x02\x02\x02b\u01E4\x03\x02\x02\x02" +
		"d\u01FA\x03\x02\x02\x02f\u01FC\x03\x02\x02\x02hl\x07\x03\x02\x02ik\x05" +
		"\x04\x03\x02ji\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03" +
		"\x02\x02\x02mo\x03\x02\x02\x02nl\x03\x02\x02\x02op\x07\x03\x02\x02p\x03" +
		"\x03\x02\x02\x02qt\x05\x06\x04\x02rt\x05\b\x05\x02sq\x03\x02\x02\x02s" +
		"r\x03\x02\x02\x02t\x05\x03\x02\x02\x02uv\n\x02\x02\x02vw\v\x02\x02\x02" +
		"w\x07\x03\x02\x02\x02xy\x07\x17\x02\x02yz\x07\x13\x02\x02z{\x05R*\x02" +
		"{|\x07\x14\x02\x02|\t\x03\x02\x02\x02}\x82\x05\x0E\b\x02~\x82\x05\x1E" +
		"\x10\x02\x7F\x82\x05\x14\v\x02\x80\x82\x05\f\x07\x02\x81}\x03\x02\x02" +
		"\x02\x81~\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02" +
		"\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02" +
		"\x02\x84\v\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x87\x07%\x02\x02" +
		"\x87\x88\x07\x13\x02\x02\x88\x89\x05 \x11\x02\x89\x8A\x07\x14\x02\x02" +
		"\x8A\r\x03\x02\x02\x02\x8B\x8C\x07\'\x02\x02\x8C\x8D\x07\x13\x02\x02\x8D" +
		"\x8E\x05\x10\t\x02\x8E\x8F\x07\x14\x02\x02\x8F\x0F\x03\x02\x02\x02\x90" +
		"\x91\b\t\x01\x02\x91\x92\x05\x12\n\x02\x92\x97\x03\x02\x02\x02\x93\x94" +
		"\f\x04\x02\x02\x94\x96\x05\x12\n\x02\x95\x93\x03\x02\x02\x02\x96\x99\x03" +
		"\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x11\x03" +
		"\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9B\x07\x04\x02\x02\x9B\x9C\x07" +
		"\f\x02\x02\x9C\x9D\x05R*\x02\x9D\x13\x03\x02\x02\x02\x9E\x9F\x07$\x02" +
		"\x02\x9F\xA3\x07\x13\x02\x02\xA0\xA2\x05\x16\f\x02\xA1\xA0\x03\x02\x02" +
		"\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02" +
		"\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA7\x07\x14\x02" +
		"\x02\xA7\x15\x03\x02\x02\x02\xA8\xA9\b\f\x01\x02\xA9\xAA\x05\x18\r\x02" +
		"\xAA\xAF\x03\x02\x02\x02\xAB\xAC\f\x04\x02\x02\xAC\xAE\x05\x18\r\x02\xAD" +
		"\xAB\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF" +
		"\xB0\x03\x02\x02\x02\xB0\x17\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2" +
		"\xB3\x05\x1A\x0E\x02\xB3\xB4\x07\v\x02\x02\xB4\xB5\x07\x13\x02\x02\xB5" +
		"\xB6\x05 \x11\x02\xB6\xB7\x07\x14\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8" +
		"\xBA\x05\x1C\x0F\x02\xB9\xB2\x03\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA" +
		"\x19\x03\x02\x02\x02\xBB\xBC\t\x03\x02\x02\xBC\x1B\x03\x02\x02\x02\xBD" +
		"\xBE\x07)\x02\x02\xBE\xBF\x07\v\x02\x02\xBF\xC0\x07\x13\x02\x02\xC0\xC1" +
		"\x05 \x11\x02\xC1\xC2\x07\x14\x02\x02\xC2\x1D\x03\x02\x02\x02\xC3\xC4" +
		"\x07&\x02\x02\xC4\xC5\x07\x04\x02\x02\xC5\xC6\x07\x13\x02\x02\xC6\xC7" +
		"\x05 \x11\x02\xC7\xC8\x07\x14\x02\x02\xC8\x1F\x03\x02\x02\x02\xC9\xCA" +
		"\b\x11\x01\x02\xCA\xCB\x05\"\x12\x02\xCB\xD0\x03\x02\x02\x02\xCC\xCD\f" +
		"\x04\x02\x02\xCD\xCF\x05\"\x12\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD2\x03" +
		"\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1!\x03" +
		"\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xE2\x05(\x15\x02\xD4\xE2\x05" +
		".\x18\x02\xD5\xE2\x050\x19\x02\xD6\xE2\x05> \x02\xD7\xE2\x058\x1D\x02" +
		"\xD8\xE2\x05D#\x02\xD9\xE2\x056\x1C\x02\xDA\xE2\x05*\x16\x02\xDB\xE2\x05" +
		",\x17\x02\xDC\xE2\x05J&\x02\xDD\xE2\x05$\x13\x02\xDE\xE2\x05&\x14\x02" +
		"\xDF\xE2\x05N(\x02\xE0\xE2\x05P)\x02\xE1\xD3\x03\x02\x02\x02\xE1\xD4\x03" +
		"\x02\x02\x02\xE1\xD5\x03\x02\x02\x02\xE1\xD6\x03\x02\x02\x02\xE1\xD7\x03" +
		"\x02\x02\x02\xE1\xD8\x03\x02\x02\x02\xE1\xD9\x03\x02\x02\x02\xE1\xDA\x03" +
		"\x02\x02\x02\xE1\xDB\x03\x02\x02\x02\xE1\xDC\x03\x02\x02\x02\xE1\xDD\x03" +
		"\x02\x02\x02\xE1\xDE\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE0\x03" +
		"\x02\x02\x02\xE2#\x03\x02\x02\x02\xE3\xE4\x075\x02\x02\xE4%\x03\x02\x02" +
		"\x02\xE5\xE6\x074\x02\x02\xE6\'\x03\x02\x02\x02\xE7\xEA\x07+\x02\x02\xE8" +
		"\xEB\x05R*\x02\xE9\xEB\x05\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9" +
		"\x03\x02\x02\x02\xEB)\x03\x02\x02\x02\xEC\xED\x078\x02\x02\xED\xEE\x07" +
		"\x04\x02\x02\xEE\xEF\x07\f\x02\x02\xEF\xF0\x05R*\x02\xF0+\x03\x02\x02" +
		"\x02\xF1\xF2\x078\x02\x02\xF2\xF3\x079\x02\x02\xF3\xF4\x07\x04\x02\x02" +
		"\xF4\xF5\x07\f\x02\x02\xF5\xF6\x05R*\x02\xF6-\x03\x02\x02\x02\xF7\xF8" +
		"\x07(\x02\x02\xF8\xF9\x07\x04\x02\x02\xF9/\x03\x02\x02\x02\xFA\xFB\x07" +
		"-\x02\x02\xFB\xFF\x07\x04\x02\x02\xFC\xFE\x052\x1A\x02\xFD\xFC\x03\x02" +
		"\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03" +
		"\x02\x02\x02\u0100\u0105\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102" +
		"\u0104\x056\x1C\x02\u0103\u0102\x03\x02\x02\x02\u0104\u0107\x03\x02\x02" +
		"\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u01061\x03" +
		"\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108\u0109\b\x1A\x01\x02\u0109" +
		"\u010A\x054\x1B\x02\u010A\u010F\x03\x02\x02\x02\u010B\u010C\f\x04\x02" +
		"\x02\u010C\u010E\x054\x1B\x02\u010D\u010B\x03\x02\x02\x02\u010E\u0111" +
		"\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02" +
		"\u01103\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0113\x07.\x02" +
		"\x02\u0113\u0114\x05R*\x02\u01145\x03\x02\x02\x02\u0115\u0116\x073\x02" +
		"\x02\u0116\u0117\x076\x02\x02\u0117\u0118\x05R*\x02\u0118\u0119\x07\v" +
		"\x02\x02\u0119\u011A\x07\x13\x02\x02\u011A\u011B\x05 \x11\x02\u011B\u011C" +
		"\x07\x14\x02\x02\u011C7\x03\x02\x02\x02\u011D\u011E\x077\x02\x02\u011E" +
		"\u011F\x07-\x02\x02\u011F\u0120\x07\x13\x02\x02\u0120\u0121\x05:\x1E\x02" +
		"\u0121\u0122\x07\x14\x02\x02\u01229\x03\x02\x02\x02\u0123\u0124\b\x1E" +
		"\x01\x02\u0124\u0125\x05<\x1F\x02\u0125\u012A\x03\x02\x02\x02\u0126\u0127" +
		"\f\x04\x02\x02\u0127\u0129\x05<\x1F\x02\u0128\u0126\x03\x02\x02\x02\u0129" +
		"\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02" +
		"\x02\x02\u012B;\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u012E" +
		"\x05\x1A\x0E\x02\u012E\u012F\x07\v\x02\x02\u012F\u0130\x07\x13\x02\x02" +
		"\u0130\u0131\x05 \x11\x02\u0131\u0132\x07\x14\x02\x02\u0132\u0136\x03" +
		"\x02\x02\x02\u0133\u0136\x05\x1C\x0F\x02\u0134\u0136\x056\x1C\x02\u0135" +
		"\u012D\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0134\x03\x02" +
		"\x02\x02\u0136=\x03\x02\x02\x02\u0137\u0138\x07*\x02\x02\u0138\u0139\x07" +
		"\x13\x02\x02\u0139\u013A\x05@!\x02\u013A\u013B\x07\x14\x02\x02\u013B?" +
		"\x03\x02\x02\x02\u013C\u013D\b!\x01\x02\u013D\u013E\x05B\"\x02\u013E\u0143" +
		"\x03\x02\x02\x02\u013F\u0140\f\x04\x02\x02\u0140\u0142\x05B\"\x02\u0141" +
		"\u013F\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02" +
		"\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144A\x03\x02\x02\x02\u0145\u0143" +
		"\x03\x02\x02\x02\u0146\u0147\x05R*\x02\u0147\u0148\x07\v\x02\x02\u0148" +
		"\u0149\x07\x13\x02\x02\u0149\u014A\x05 \x11\x02\u014A\u014B\x07\x14\x02" +
		"\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014E\x05\x1C\x0F\x02\u014D\u0146" +
		"\x03\x02\x02\x02\u014D\u014C\x03\x02\x02\x02\u014EC\x03\x02\x02\x02\u014F" +
		"\u0150\x07/\x02\x02\u0150\u0151\x05R*\x02\u0151\u0152\x07\v\x02\x02\u0152" +
		"\u0153\x07\x13\x02\x02\u0153\u0154\x05 \x11\x02\u0154\u0156\x07\x14\x02" +
		"\x02\u0155\u0157\x05F$\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03" +
		"\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u015A\x05H%\x02\u0159\u0158" +
		"\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015AE\x03\x02\x02\x02\u015B" +
		"\u015C\x071\x02\x02\u015C\u015D\x05R*\x02\u015D\u015E\x07\v\x02\x02\u015E" +
		"\u015F\x07\x13\x02\x02\u015F\u0160\x05 \x11\x02\u0160\u0162\x07\x14\x02" +
		"\x02\u0161\u0163\x05F$\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03" +
		"\x02\x02\x02\u0163G\x03\x02\x02\x02\u0164\u0165\x070\x02\x02\u0165\u0166" +
		"\x07\v\x02\x02\u0166\u0167\x07\x13\x02\x02\u0167\u0168\x05 \x11\x02\u0168" +
		"\u0169\x07\x14\x02\x02\u0169I\x03\x02\x02\x02\u016A\u016C\x072\x02\x02" +
		"\u016B\u016D\x05L\'\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02" +
		"\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x07\x13\x02\x02\u016F" +
		"\u0170\x05 \x11\x02\u0170\u0171\x07\x14\x02\x02\u0171K\x03\x02\x02\x02" +
		"\u0172\u0173\x073\x02\x02\u0173\u0174\x05R*\x02\u0174M\x03\x02\x02\x02" +
		"\u0175\u0178\x07:\x02\x02\u0176\u0179\x07\x06\x02\x02\u0177\u0179\x05" +
		"\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179" +
		"\u017A\x03\x02\x02\x02\u017A\u017B\x07\v\x02\x02\u017B\u017C\x07\x04\x02" +
		"\x02\u017CO\x03\x02\x02\x02\u017D\u017E\x07;\x02\x02\u017E\u017F\x07\x04" +
		"\x02\x02\u017F\u0182\x07\v\x02\x02\u0180\u0183\x07\x06\x02\x02\u0181\u0183" +
		"\x05\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0181\x03\x02\x02\x02" +
		"\u0183Q\x03\x02\x02\x02\u0184\u0185\x05T+\x02\u0185S\x03\x02\x02\x02\u0186" +
		"\u0187\b+\x01\x02\u0187\u0188\x05V,\x02\u0188\u018E\x03\x02\x02\x02\u0189" +
		"\u018A\f\x04\x02\x02\u018A\u018B\x07<\x02\x02\u018B\u018D\x05V,\x02\u018C" +
		"\u0189\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02" +
		"\x02\x02\u018E\u018F\x03\x02\x02\x02\u018FU\x03\x02\x02\x02\u0190\u018E" +
		"\x03\x02\x02\x02\u0191\u0192\b,\x01\x02\u0192\u0193\x05X-\x02\u0193\u0199" +
		"\x03\x02\x02\x02\u0194\u0195\f\x04\x02\x02\u0195\u0196\x07=\x02\x02\u0196" +
		"\u0198\x05X-\x02\u0197\u0194\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02" +
		"\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019AW\x03\x02" +
		"\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019D\b-\x01\x02\u019D\u019E" +
		"\x05Z.\x02\u019E\u01A7\x03\x02\x02\x02\u019F\u01A0\f\x05\x02\x02\u01A0" +
		"\u01A1\x07\r\x02\x02\u01A1\u01A6\x05Z.\x02\u01A2\u01A3\f\x04\x02\x02\u01A3" +
		"\u01A4\x07 \x02\x02\u01A4\u01A6\x05Z.\x02\u01A5\u019F\x03\x02\x02\x02" +
		"\u01A5\u01A2\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03" +
		"\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8Y\x03\x02\x02\x02\u01A9" +
		"\u01A7\x03\x02\x02\x02\u01AA\u01AB\b.\x01\x02\u01AB\u01AC\x05\\/\x02\u01AC" +
		"\u01BB\x03\x02\x02\x02\u01AD\u01AE\f\x07\x02\x02\u01AE\u01AF\x07\x1C\x02" +
		"\x02\u01AF\u01BA\x05\\/\x02\u01B0\u01B1\f\x06\x02\x02\u01B1\u01B2\x07" +
		"\x1D\x02\x02\u01B2\u01BA\x05\\/\x02\u01B3\u01B4\f\x05\x02\x02\u01B4\u01B5" +
		"\x07\x1E\x02\x02\u01B5\u01BA\x05\\/\x02\u01B6\u01B7\f\x04\x02\x02\u01B7" +
		"\u01B8\x07\x1F\x02\x02\u01B8\u01BA\x05\\/\x02\u01B9\u01AD\x03\x02\x02" +
		"\x02\u01B9\u01B0\x03\x02\x02\x02\u01B9\u01B3\x03\x02\x02\x02\u01B9\u01B6" +
		"\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02" +
		"\u01BB\u01BC\x03\x02\x02\x02\u01BC[\x03\x02\x02\x02\u01BD\u01BB\x03\x02" +
		"\x02\x02\u01BE\u01BF\b/\x01\x02\u01BF\u01C0\x05^0\x02\u01C0\u01C9\x03" +
		"\x02\x02\x02\u01C1\u01C2\f\x05\x02\x02\u01C2\u01C3\x07\x18\x02\x02\u01C3" +
		"\u01C8\x05^0\x02\u01C4\u01C5\f\x04\x02\x02\u01C5\u01C6\x07\x19\x02\x02" +
		"\u01C6\u01C8\x05^0\x02\u01C7\u01C1\x03\x02\x02\x02\u01C7\u01C4\x03\x02" +
		"\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA]\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02" +
		"\x02\u01CC\u01CD\b0\x01\x02\u01CD\u01CE\x05`1\x02\u01CE\u01DA\x03\x02" +
		"\x02\x02\u01CF\u01D0\f\x06\x02\x02\u01D0\u01D1\x07\x1A\x02\x02\u01D1\u01D9" +
		"\x05`1\x02\u01D2\u01D3\f\x05\x02\x02\u01D3\u01D4\x07\x1B\x02\x02\u01D4" +
		"\u01D9\x05`1\x02\u01D5\u01D6\f\x04\x02\x02\u01D6\u01D7\x07\"\x02\x02\u01D7" +
		"\u01D9\x05`1\x02\u01D8\u01CF\x03\x02\x02\x02\u01D8\u01D2\x03\x02\x02\x02" +
		"\u01D8\u01D5\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03" +
		"\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB_\x03\x02\x02\x02\u01DC" +
		"\u01DA\x03\x02\x02\x02\u01DD\u01DE\x07>\x02\x02\u01DE\u01E3\x05`1\x02" +
		"\u01DF\u01E0\x07\x19\x02\x02\u01E0\u01E3\x05`1\x02\u01E1\u01E3\x05b2\x02" +
		"\u01E2\u01DD\x03\x02\x02\x02\u01E2\u01DF\x03\x02\x02\x02\u01E2\u01E1\x03" +
		"\x02\x02\x02\u01E3a\x03\x02\x02\x02\u01E4\u01E5\b2\x01\x02\u01E5\u01E6" +
		"\x05d3\x02\u01E6\u01F1\x03\x02\x02\x02\u01E7\u01E8\f\x04\x02\x02\u01E8" +
		"\u01E9\x07\x15\x02\x02\u01E9\u01EA\x05R*\x02\u01EA\u01EB\x07\x16\x02\x02" +
		"\u01EB\u01F0\x03\x02\x02\x02\u01EC\u01ED\f\x03\x02\x02\u01ED\u01EE\x07" +
		"#\x02\x02\u01EE\u01F0\x07\x04\x02\x02\u01EF\u01E7\x03\x02\x02\x02\u01EF" +
		"\u01EC\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
		"\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2c\x03\x02\x02\x02\u01F3\u01F1" +
		"\x03\x02\x02\x02\u01F4\u01FB\x07\x04\x02\x02\u01F5\u01FB\x05f4\x02\u01F6" +
		"\u01F7\x07\x11\x02\x02\u01F7\u01F8\x05R*\x02\u01F8\u01F9\x07\x12\x02\x02" +
		"\u01F9\u01FB\x03\x02\x02\x02\u01FA\u01F4\x03\x02\x02\x02\u01FA\u01F5\x03" +
		"\x02\x02\x02\u01FA\u01F6\x03\x02\x02\x02\u01FBe\x03\x02\x02\x02\u01FC" +
		"\u01FD\t\x04\x02\x02\u01FDg\x03\x02\x02\x02(ls\x81\x83\x97\xA3\xAF\xB9" +
		"\xD0\xE1\xEA\xFF\u0105\u010F\u012A\u0135\u0143\u014D\u0156\u0159\u0162" +
		"\u016C\u0178\u0182\u018E\u0199\u01A5\u01A7\u01B9\u01BB\u01C7\u01C9\u01D8" +
		"\u01DA\u01E2\u01EF\u01F1\u01FA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!cslParser.__ATN) {
			cslParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(cslParser._serializedATN));
		}

		return cslParser.__ATN;
	}

}

export class Template_stringContext extends ParserRuleContext {
	public template_string_part(): Template_string_partContext[];
	public template_string_part(i: number): Template_string_partContext;
	public template_string_part(i?: number): Template_string_partContext | Template_string_partContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Template_string_partContext);
		} else {
			return this.getRuleContext(i, Template_string_partContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_template_string; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterTemplate_string) {
			listener.enterTemplate_string(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitTemplate_string) {
			listener.exitTemplate_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitTemplate_string) {
			return visitor.visitTemplate_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Template_string_partContext extends ParserRuleContext {
	public template_string_plain_text(): Template_string_plain_textContext | undefined {
		return this.tryGetRuleContext(0, Template_string_plain_textContext);
	}
	public template_string_expr(): Template_string_exprContext | undefined {
		return this.tryGetRuleContext(0, Template_string_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_template_string_part; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterTemplate_string_part) {
			listener.enterTemplate_string_part(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitTemplate_string_part) {
			listener.exitTemplate_string_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitTemplate_string_part) {
			return visitor.visitTemplate_string_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Template_string_plain_textContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(cslParser.DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_template_string_plain_text; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterTemplate_string_plain_text) {
			listener.enterTemplate_string_plain_text(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitTemplate_string_plain_text) {
			listener.exitTemplate_string_plain_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitTemplate_string_plain_text) {
			return visitor.visitTemplate_string_plain_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Template_string_exprContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(cslParser.DOLLAR, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_template_string_expr; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterTemplate_string_expr) {
			listener.enterTemplate_string_expr(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitTemplate_string_expr) {
			listener.exitTemplate_string_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitTemplate_string_expr) {
			return visitor.visitTemplate_string_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptsContext extends ParserRuleContext {
	public constance_stmt(): Constance_stmtContext[];
	public constance_stmt(i: number): Constance_stmtContext;
	public constance_stmt(i?: number): Constance_stmtContext | Constance_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Constance_stmtContext);
		} else {
			return this.getRuleContext(i, Constance_stmtContext);
		}
	}
	public topic_stmt(): Topic_stmtContext[];
	public topic_stmt(i: number): Topic_stmtContext;
	public topic_stmt(i?: number): Topic_stmtContext | Topic_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Topic_stmtContext);
		} else {
			return this.getRuleContext(i, Topic_stmtContext);
		}
	}
	public chatbox_stmt(): Chatbox_stmtContext[];
	public chatbox_stmt(i: number): Chatbox_stmtContext;
	public chatbox_stmt(i?: number): Chatbox_stmtContext | Chatbox_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Chatbox_stmtContext);
		} else {
			return this.getRuleContext(i, Chatbox_stmtContext);
		}
	}
	public hello_stmt(): Hello_stmtContext[];
	public hello_stmt(i: number): Hello_stmtContext;
	public hello_stmt(i?: number): Hello_stmtContext | Hello_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Hello_stmtContext);
		} else {
			return this.getRuleContext(i, Hello_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_scripts; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterScripts) {
			listener.enterScripts(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitScripts) {
			listener.exitScripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitScripts) {
			return visitor.visitScripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hello_stmtContext extends ParserRuleContext {
	public HELLO(): TerminalNode { return this.getToken(cslParser.HELLO, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_hello_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterHello_stmt) {
			listener.enterHello_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitHello_stmt) {
			listener.exitHello_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitHello_stmt) {
			return visitor.visitHello_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constance_stmtContext extends ParserRuleContext {
	public CONSTANCE(): TerminalNode { return this.getToken(cslParser.CONSTANCE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public constance_list(): Constance_listContext {
		return this.getRuleContext(0, Constance_listContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_constance_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterConstance_stmt) {
			listener.enterConstance_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitConstance_stmt) {
			listener.exitConstance_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitConstance_stmt) {
			return visitor.visitConstance_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constance_listContext extends ParserRuleContext {
	public constance_list(): Constance_listContext | undefined {
		return this.tryGetRuleContext(0, Constance_listContext);
	}
	public constance(): ConstanceContext {
		return this.getRuleContext(0, ConstanceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_constance_list; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterConstance_list) {
			listener.enterConstance_list(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitConstance_list) {
			listener.exitConstance_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitConstance_list) {
			return visitor.visitConstance_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstanceContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(cslParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_constance; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterConstance) {
			listener.enterConstance(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitConstance) {
			listener.exitConstance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitConstance) {
			return visitor.visitConstance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Chatbox_stmtContext extends ParserRuleContext {
	public CHATBOX(): TerminalNode { return this.getToken(cslParser.CHATBOX, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	public chatbox_list(): Chatbox_listContext[];
	public chatbox_list(i: number): Chatbox_listContext;
	public chatbox_list(i?: number): Chatbox_listContext | Chatbox_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Chatbox_listContext);
		} else {
			return this.getRuleContext(i, Chatbox_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_chatbox_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterChatbox_stmt) {
			listener.enterChatbox_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitChatbox_stmt) {
			listener.exitChatbox_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitChatbox_stmt) {
			return visitor.visitChatbox_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Chatbox_listContext extends ParserRuleContext {
	public chatbox_list(): Chatbox_listContext | undefined {
		return this.tryGetRuleContext(0, Chatbox_listContext);
	}
	public chatbox_branch(): Chatbox_branchContext {
		return this.getRuleContext(0, Chatbox_branchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_chatbox_list; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterChatbox_list) {
			listener.enterChatbox_list(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitChatbox_list) {
			listener.exitChatbox_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitChatbox_list) {
			return visitor.visitChatbox_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Chatbox_branchContext extends ParserRuleContext {
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext | undefined {
		return this.tryGetRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(cslParser.RBRACE, 0); }
	public default_branch(): Default_branchContext | undefined {
		return this.tryGetRuleContext(0, Default_branchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_chatbox_branch; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterChatbox_branch) {
			listener.enterChatbox_branch(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitChatbox_branch) {
			listener.exitChatbox_branch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitChatbox_branch) {
			return visitor.visitChatbox_branch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(cslParser.STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(cslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_pattern; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Default_branchContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(cslParser.DEFAULT, 0); }
	public ARROW(): TerminalNode { return this.getToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_default_branch; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterDefault_branch) {
			listener.enterDefault_branch(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitDefault_branch) {
			listener.exitDefault_branch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitDefault_branch) {
			return visitor.visitDefault_branch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Topic_stmtContext extends ParserRuleContext {
	public TOPIC(): TerminalNode { return this.getToken(cslParser.TOPIC, 0); }
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_topic_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterTopic_stmt) {
			listener.enterTopic_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitTopic_stmt) {
			listener.exitTopic_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitTopic_stmt) {
			return visitor.visitTopic_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_sequncesContext extends ParserRuleContext {
	public command_sequnces(): Command_sequncesContext | undefined {
		return this.tryGetRuleContext(0, Command_sequncesContext);
	}
	public command_stmt(): Command_stmtContext {
		return this.getRuleContext(0, Command_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_command_sequnces; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterCommand_sequnces) {
			listener.enterCommand_sequnces(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitCommand_sequnces) {
			listener.exitCommand_sequnces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitCommand_sequnces) {
			return visitor.visitCommand_sequnces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_stmtContext extends ParserRuleContext {
	public say_stmt(): Say_stmtContext | undefined {
		return this.tryGetRuleContext(0, Say_stmtContext);
	}
	public goto_stmt(): Goto_stmtContext | undefined {
		return this.tryGetRuleContext(0, Goto_stmtContext);
	}
	public input_stmt(): Input_stmtContext | undefined {
		return this.tryGetRuleContext(0, Input_stmtContext);
	}
	public menu_stmt(): Menu_stmtContext | undefined {
		return this.tryGetRuleContext(0, Menu_stmtContext);
	}
	public match_stmt(): Match_stmtContext | undefined {
		return this.tryGetRuleContext(0, Match_stmtContext);
	}
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public when_silence_stmt(): When_silence_stmtContext | undefined {
		return this.tryGetRuleContext(0, When_silence_stmtContext);
	}
	public assign_stmt(): Assign_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assign_stmtContext);
	}
	public assign_global_stmt(): Assign_global_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assign_global_stmtContext);
	}
	public loop_stmt(): Loop_stmtContext | undefined {
		return this.tryGetRuleContext(0, Loop_stmtContext);
	}
	public continue_stmt(): Continue_stmtContext | undefined {
		return this.tryGetRuleContext(0, Continue_stmtContext);
	}
	public break_stmt(): Break_stmtContext | undefined {
		return this.tryGetRuleContext(0, Break_stmtContext);
	}
	public fetch_stmt(): Fetch_stmtContext | undefined {
		return this.tryGetRuleContext(0, Fetch_stmtContext);
	}
	public post_stmt(): Post_stmtContext | undefined {
		return this.tryGetRuleContext(0, Post_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_command_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterCommand_stmt) {
			listener.enterCommand_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitCommand_stmt) {
			listener.exitCommand_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitCommand_stmt) {
			return visitor.visitCommand_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(cslParser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_continue_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterContinue_stmt) {
			listener.enterContinue_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitContinue_stmt) {
			listener.exitContinue_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitContinue_stmt) {
			return visitor.visitContinue_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_stmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(cslParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_break_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterBreak_stmt) {
			listener.enterBreak_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitBreak_stmt) {
			listener.exitBreak_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitBreak_stmt) {
			return visitor.visitBreak_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Say_stmtContext extends ParserRuleContext {
	public SAY(): TerminalNode { return this.getToken(cslParser.SAY, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public template_string(): Template_stringContext | undefined {
		return this.tryGetRuleContext(0, Template_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_say_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterSay_stmt) {
			listener.enterSay_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitSay_stmt) {
			listener.exitSay_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitSay_stmt) {
			return visitor.visitSay_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assign_stmtContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(cslParser.SET, 0); }
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(cslParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_assign_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterAssign_stmt) {
			listener.enterAssign_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitAssign_stmt) {
			listener.exitAssign_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitAssign_stmt) {
			return visitor.visitAssign_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assign_global_stmtContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(cslParser.SET, 0); }
	public GLOBAL(): TerminalNode { return this.getToken(cslParser.GLOBAL, 0); }
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(cslParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_assign_global_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterAssign_global_stmt) {
			listener.enterAssign_global_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitAssign_global_stmt) {
			listener.exitAssign_global_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitAssign_global_stmt) {
			return visitor.visitAssign_global_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Goto_stmtContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(cslParser.GOTO, 0); }
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_goto_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterGoto_stmt) {
			listener.enterGoto_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitGoto_stmt) {
			listener.exitGoto_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitGoto_stmt) {
			return visitor.visitGoto_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Input_stmtContext extends ParserRuleContext {
	public INPUT(): TerminalNode { return this.getToken(cslParser.INPUT, 0); }
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	public assert_stmt(): Assert_stmtContext[];
	public assert_stmt(i: number): Assert_stmtContext;
	public assert_stmt(i?: number): Assert_stmtContext | Assert_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Assert_stmtContext);
		} else {
			return this.getRuleContext(i, Assert_stmtContext);
		}
	}
	public when_silence_stmt(): When_silence_stmtContext[];
	public when_silence_stmt(i: number): When_silence_stmtContext;
	public when_silence_stmt(i?: number): When_silence_stmtContext | When_silence_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(When_silence_stmtContext);
		} else {
			return this.getRuleContext(i, When_silence_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_input_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterInput_stmt) {
			listener.enterInput_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitInput_stmt) {
			listener.exitInput_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitInput_stmt) {
			return visitor.visitInput_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	public assert_stmt(): Assert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assert_stmtContext);
	}
	public assert(): AssertContext {
		return this.getRuleContext(0, AssertContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_assert_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterAssert_stmt) {
			listener.enterAssert_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitAssert_stmt) {
			listener.exitAssert_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitAssert_stmt) {
			return visitor.visitAssert_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(cslParser.ASSERT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_assert; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterAssert) {
			listener.enterAssert(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitAssert) {
			listener.exitAssert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitAssert) {
			return visitor.visitAssert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class When_silence_stmtContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(cslParser.WHEN, 0); }
	public SILENCE(): TerminalNode { return this.getToken(cslParser.SILENCE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ARROW(): TerminalNode { return this.getToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_when_silence_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterWhen_silence_stmt) {
			listener.enterWhen_silence_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitWhen_silence_stmt) {
			listener.exitWhen_silence_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitWhen_silence_stmt) {
			return visitor.visitWhen_silence_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Match_stmtContext extends ParserRuleContext {
	public MATCH(): TerminalNode { return this.getToken(cslParser.MATCH, 0); }
	public INPUT(): TerminalNode { return this.getToken(cslParser.INPUT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public match_list(): Match_listContext {
		return this.getRuleContext(0, Match_listContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_match_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterMatch_stmt) {
			listener.enterMatch_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitMatch_stmt) {
			listener.exitMatch_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitMatch_stmt) {
			return visitor.visitMatch_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Match_listContext extends ParserRuleContext {
	public match_list(): Match_listContext | undefined {
		return this.tryGetRuleContext(0, Match_listContext);
	}
	public match_branch(): Match_branchContext {
		return this.getRuleContext(0, Match_branchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_match_list; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterMatch_list) {
			listener.enterMatch_list(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitMatch_list) {
			listener.exitMatch_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitMatch_list) {
			return visitor.visitMatch_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Match_branchContext extends ParserRuleContext {
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext | undefined {
		return this.tryGetRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(cslParser.RBRACE, 0); }
	public default_branch(): Default_branchContext | undefined {
		return this.tryGetRuleContext(0, Default_branchContext);
	}
	public when_silence_stmt(): When_silence_stmtContext | undefined {
		return this.tryGetRuleContext(0, When_silence_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_match_branch; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterMatch_branch) {
			listener.enterMatch_branch(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitMatch_branch) {
			listener.exitMatch_branch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitMatch_branch) {
			return visitor.visitMatch_branch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Menu_stmtContext extends ParserRuleContext {
	public MENU(): TerminalNode { return this.getToken(cslParser.MENU, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public case_list(): Case_listContext {
		return this.getRuleContext(0, Case_listContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_menu_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterMenu_stmt) {
			listener.enterMenu_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitMenu_stmt) {
			listener.exitMenu_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitMenu_stmt) {
			return visitor.visitMenu_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_listContext extends ParserRuleContext {
	public case_list(): Case_listContext | undefined {
		return this.tryGetRuleContext(0, Case_listContext);
	}
	public case_branch(): Case_branchContext {
		return this.getRuleContext(0, Case_branchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_case_list; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterCase_list) {
			listener.enterCase_list(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitCase_list) {
			listener.exitCase_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitCase_list) {
			return visitor.visitCase_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_branchContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext | undefined {
		return this.tryGetRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(cslParser.RBRACE, 0); }
	public default_branch(): Default_branchContext | undefined {
		return this.tryGetRuleContext(0, Default_branchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_case_branch; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterCase_branch) {
			listener.enterCase_branch(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitCase_branch) {
			listener.exitCase_branch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitCase_branch) {
			return visitor.visitCase_branch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(cslParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ARROW(): TerminalNode { return this.getToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	public else_if_stmt(): Else_if_stmtContext | undefined {
		return this.tryGetRuleContext(0, Else_if_stmtContext);
	}
	public else_stmt(): Else_stmtContext | undefined {
		return this.tryGetRuleContext(0, Else_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_if_stmtContext extends ParserRuleContext {
	public ELIF(): TerminalNode { return this.getToken(cslParser.ELIF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ARROW(): TerminalNode { return this.getToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	public else_if_stmt(): Else_if_stmtContext | undefined {
		return this.tryGetRuleContext(0, Else_if_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_else_if_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterElse_if_stmt) {
			listener.enterElse_if_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitElse_if_stmt) {
			listener.exitElse_if_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitElse_if_stmt) {
			return visitor.visitElse_if_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_stmtContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(cslParser.ELSE, 0); }
	public ARROW(): TerminalNode { return this.getToken(cslParser.ARROW, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_else_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterElse_stmt) {
			listener.enterElse_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitElse_stmt) {
			listener.exitElse_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitElse_stmt) {
			return visitor.visitElse_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Loop_stmtContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(cslParser.LOOP, 0); }
	public LBRACE(): TerminalNode { return this.getToken(cslParser.LBRACE, 0); }
	public command_sequnces(): Command_sequncesContext {
		return this.getRuleContext(0, Command_sequncesContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(cslParser.RBRACE, 0); }
	public when_clause(): When_clauseContext | undefined {
		return this.tryGetRuleContext(0, When_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_loop_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterLoop_stmt) {
			listener.enterLoop_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitLoop_stmt) {
			listener.exitLoop_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitLoop_stmt) {
			return visitor.visitLoop_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class When_clauseContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(cslParser.WHEN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_when_clause; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterWhen_clause) {
			listener.enterWhen_clause(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitWhen_clause) {
			listener.exitWhen_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitWhen_clause) {
			return visitor.visitWhen_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fetch_stmtContext extends ParserRuleContext {
	public FETCH(): TerminalNode { return this.getToken(cslParser.FETCH, 0); }
	public ARROW(): TerminalNode { return this.getToken(cslParser.ARROW, 0); }
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(cslParser.STRING, 0); }
	public template_string(): Template_stringContext | undefined {
		return this.tryGetRuleContext(0, Template_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_fetch_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterFetch_stmt) {
			listener.enterFetch_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitFetch_stmt) {
			listener.exitFetch_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitFetch_stmt) {
			return visitor.visitFetch_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Post_stmtContext extends ParserRuleContext {
	public POST(): TerminalNode { return this.getToken(cslParser.POST, 0); }
	public ID(): TerminalNode { return this.getToken(cslParser.ID, 0); }
	public ARROW(): TerminalNode { return this.getToken(cslParser.ARROW, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(cslParser.STRING, 0); }
	public template_string(): Template_stringContext | undefined {
		return this.tryGetRuleContext(0, Template_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_post_stmt; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterPost_stmt) {
			listener.enterPost_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitPost_stmt) {
			listener.exitPost_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitPost_stmt) {
			return visitor.visitPost_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public logical_or_expression(): Logical_or_expressionContext {
		return this.getRuleContext(0, Logical_or_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_or_expressionContext extends ParserRuleContext {
	public logical_or_expression(): Logical_or_expressionContext | undefined {
		return this.tryGetRuleContext(0, Logical_or_expressionContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(cslParser.OR, 0); }
	public logical_and_expression(): Logical_and_expressionContext {
		return this.getRuleContext(0, Logical_and_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_logical_or_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterLogical_or_expression) {
			listener.enterLogical_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitLogical_or_expression) {
			listener.exitLogical_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitLogical_or_expression) {
			return visitor.visitLogical_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_and_expressionContext extends ParserRuleContext {
	public logical_and_expression(): Logical_and_expressionContext | undefined {
		return this.tryGetRuleContext(0, Logical_and_expressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(cslParser.AND, 0); }
	public equality_expression(): Equality_expressionContext {
		return this.getRuleContext(0, Equality_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_logical_and_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterLogical_and_expression) {
			listener.enterLogical_and_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitLogical_and_expression) {
			listener.exitLogical_and_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitLogical_and_expression) {
			return visitor.visitLogical_and_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	public equality_expression(): Equality_expressionContext | undefined {
		return this.tryGetRuleContext(0, Equality_expressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(cslParser.EQUAL, 0); }
	public relational_expression(): Relational_expressionContext {
		return this.getRuleContext(0, Relational_expressionContext);
	}
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(cslParser.NOT_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_equality_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterEquality_expression) {
			listener.enterEquality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitEquality_expression) {
			listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	public relational_expression(): Relational_expressionContext | undefined {
		return this.tryGetRuleContext(0, Relational_expressionContext);
	}
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(cslParser.GREATER, 0); }
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	public GREATER_EQUAL(): TerminalNode | undefined { return this.tryGetToken(cslParser.GREATER_EQUAL, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(cslParser.LESS, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(cslParser.LESS_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_relational_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterRelational_expression) {
			listener.enterRelational_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitRelational_expression) {
			listener.exitRelational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitRelational_expression) {
			return visitor.visitRelational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	public additive_expression(): Additive_expressionContext | undefined {
		return this.tryGetRuleContext(0, Additive_expressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(cslParser.PLUS, 0); }
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(cslParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_additive_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterAdditive_expression) {
			listener.enterAdditive_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitAdditive_expression) {
			listener.exitAdditive_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitAdditive_expression) {
			return visitor.visitAdditive_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	public multiplicative_expression(): Multiplicative_expressionContext | undefined {
		return this.tryGetRuleContext(0, Multiplicative_expressionContext);
	}
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(cslParser.MULTIPLY, 0); }
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(cslParser.DIVIDE, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(cslParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_multiplicative_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterMultiplicative_expression) {
			listener.enterMultiplicative_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitMultiplicative_expression) {
			listener.exitMultiplicative_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitMultiplicative_expression) {
			return visitor.visitMultiplicative_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(cslParser.NOT, 0); }
	public unary_expression(): Unary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Unary_expressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(cslParser.MINUS, 0); }
	public postfix_expression(): Postfix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_unary_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterUnary_expression) {
			listener.enterUnary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitUnary_expression) {
			listener.exitUnary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitUnary_expression) {
			return visitor.visitUnary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_expressionContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public postfix_expression(): Postfix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expressionContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(cslParser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(cslParser.RBRACK, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(cslParser.DOT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(cslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_postfix_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterPostfix_expression) {
			listener.enterPostfix_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitPostfix_expression) {
			listener.exitPostfix_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitPostfix_expression) {
			return visitor.visitPostfix_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(cslParser.ID, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(cslParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(cslParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public INTS(): TerminalNode | undefined { return this.tryGetToken(cslParser.INTS, 0); }
	public FLOATS(): TerminalNode | undefined { return this.tryGetToken(cslParser.FLOATS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(cslParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cslParser.RULE_value; }
	// @Override
	public enterRule(listener: cslListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: cslListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cslVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


