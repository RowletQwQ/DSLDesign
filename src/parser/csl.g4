grammar csl;

options {
    caseInsensitive = false;
}
/* TOKENS (terminal) */
/* Keywords */
CHATBOX: 'chatbox';
HELLO: 'hello';
TOPIC: 'topic';
CONSTANCE: 'constance';
GOTO: 'goto';
DEFAULT: 'default';
MENU: 'menu';
SAY: 'say';
EXIT: 'exit';
INPUT: 'input';
ASSERT: 'assert';
IF: 'if';
ELSE: 'else';
ELIF: 'elif';
LOOP: 'loop';
WHEN: 'when';
BREAK: 'break';
CONTINUE: 'continue';
SILENCE: 'silence';
MATCH: 'match';
SET: 'set';
GLOBAL: 'global';
FETCH: 'fetch';
POST: 'post';
OR: 'or';
AND: 'and';
NOT: 'not';
/* constance */
STRING: '"' ('\\"'|~["])* '"' | '\'' ('\\\''|~['])* '\'';
QUOTE: ('"' | '\'');
DIGIT: [0-9]+;
INTS: DIGIT+;
FLOATS: DIGIT+ '.' DIGIT+;

/* operator */
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
MULTIPLY: '*';
DIVIDE: '/';
GREATER: '>';
GREATER_EQUAL: '>=';
LESS: '<';
LESS_EQUAL: '<=';
NOT_EQUAL: '<>';
BANG: '!';
MOD: '%';
DOT: '.';

/* Symbols */
ID: [a-zA-Z_][a-zA-Z_0-9]*;

/* Ignored tokens */
WS: [ \t\r\n]+ -> skip;

/* Ignored Comments */
COMMENT: '#' ~[\r\n]* -> skip;

/* template string */

template_string: '`' template_string_part* '`';

template_string_part: template_string_plain_text
                    | template_string_expr;

template_string_plain_text: ~('`' | '$' | '\\') | '\\' '`' | '\\' '$';

template_string_expr: '$' LBRACE expression RBRACE;
                    

/* Non-terminal */
script: ( constance_stmt | topic_stmt | chatbox_stmt | hello_stmt )+ EOF;

hello_stmt: HELLO LBRACE command_sequnces RBRACE;

constance_stmt: CONSTANCE LBRACE constance_list RBRACE;

constance_list: constance_list constance
              | constance;
            
constance: ID ASSIGN expression;



chatbox_stmt: CHATBOX LBRACE case_list? default_branch RBRACE;

default_branch: DEFAULT ARROW LBRACE command_sequnces RBRACE;

topic_stmt: TOPIC ID LBRACE command_sequnces RBRACE;

command_sequnces: command_sequnces command_stmt
                | command_stmt;

command_stmt: say_stmt | goto_stmt | input_stmt | menu_stmt | match_stmt 
            | if_stmt | when_silence_stmt | assign_stmt | assign_global_stmt
            | loop_stmt | continue_stmt | break_stmt | fetch_stmt
            | post_stmt | exit_stmt;

continue_stmt: CONTINUE;

break_stmt: BREAK;

say_stmt: SAY (expression | template_string);

assign_stmt: SET ID ASSIGN expression;

assign_global_stmt: SET GLOBAL ID ASSIGN expression;

goto_stmt: GOTO (ID | CHATBOX);

exit_stmt: EXIT;

input_stmt: INPUT ID assert_stmt? when_silence_stmt?;

assert_stmt: ASSERT expression;

when_silence_stmt: WHEN SILENCE expression ARROW LBRACE command_sequnces RBRACE;

match_stmt: MATCH INPUT LBRACE case_list default_branch? RBRACE when_silence_stmt?;

menu_stmt: MENU LBRACE case_list RBRACE;

case_list: case_list case_branch
         | case_branch;

case_branch: expression ARROW LBRACE command_sequnces RBRACE;

if_stmt: IF expression ARROW LBRACE command_sequnces RBRACE else_if_stmt? else_stmt?;

else_if_stmt: ELIF expression ARROW LBRACE command_sequnces RBRACE else_if_stmt?;

else_stmt: ELSE ARROW LBRACE command_sequnces RBRACE;

loop_stmt: LOOP (when_clause)? LBRACE command_sequnces RBRACE;

when_clause: WHEN expression;

fetch_stmt: FETCH (STRING | template_string) ARROW ID;

post_stmt: POST ID ARROW (STRING | template_string);

/* Expression */
expression: logical_or_expression;

logical_or_expression: logical_or_expression OR logical_and_expression
                      | logical_and_expression;

logical_and_expression: logical_and_expression AND equality_expression
                       | equality_expression;

equality_expression: equality_expression EQUAL relational_expression
                     | equality_expression NOT_EQUAL relational_expression    
                     | relational_expression;

relational_expression: relational_expression GREATER additive_expression
                      | relational_expression GREATER_EQUAL additive_expression
                      | relational_expression LESS additive_expression
                      | relational_expression LESS_EQUAL additive_expression
                      | additive_expression;

additive_expression: additive_expression PLUS multiplicative_expression
                     | additive_expression MINUS multiplicative_expression
                     | multiplicative_expression;

multiplicative_expression: multiplicative_expression MULTIPLY unary_expression
                          | multiplicative_expression DIVIDE unary_expression
                          | multiplicative_expression MOD unary_expression
                          | unary_expression;
            
unary_expression: NOT unary_expression
                | MINUS unary_expression
                | postfix_expression;

postfix_expression: primary_expression
                  | postfix_expression LBRACK expression RBRACK /* 下标访问 */
                  | postfix_expression DOT ID;

primary_expression: ID
                  | value
                  | LPAREN expression RPAREN;


value: INTS
    | FLOATS
    | STRING;