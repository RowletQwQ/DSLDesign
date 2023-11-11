lexer grammar csl_lex;
options {
    caseInsensitive = false;

}
/* TOKENS (terminal) */

/* Keywords */
TOPIC: 'topic';
CONSTANCE: 'constance';
GOTO: 'goto';
DEFALUT: 'default';
MENU: 'menu';
SAY: 'say';
EXIT: 'exit';
INPUT: 'input';
ASSERT: 'assert';

/* Symbols */
WHITESPACE: (' ' | '\t' | '\r' | '\n' | '\u000C')+;
DIGIT: [0-9]+;
INTS: DIGIT+;
FLOATS: DIGIT+ '.' DIGIT+;
ID: [a-zA-Z_][a-zA-Z_0-9]*;
STRING: ('"' .*? '"' | '\'' .*? '\'');
QUOTE: ('"' | '\'');

ARROW: '=>';
ASSIGN: ':=';
EQUAL: '=';
COLON: ':';
SEMICOLON: ';';
COMMA: ',';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
DOLLAR: '$';
PLUS: '+';
MINUS: '-';
TIMES: '*';
DIVIDE: '/';
GREATER: '>';
GREATER_EQUAL: '>=';
LESS: '<';
LESS_EQUAL: '<=';
NOT_EQUAL: '<>';
BANG: '!';
