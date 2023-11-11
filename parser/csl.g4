grammar csl;
import csl_lex;

/* Non-terminal */
scripts: ( constance_stmt | topic_stmt )*;

constance_stmt: CONSTANCE LBRACE constance_list RBRACE;

constance_list: constance_list constance
              | constance;
            
constance: ID ASSIGN expression;

expression: expression PLUS term
         | expression MINUS term
         | term;

term: term TIMES factor
    | term DIVIDE factor
    | factor;

factor: LPAREN expression RPAREN
      | value
      | ID;

value: INTS
    | FLOATS
    | STRING;

topic_stmt: TOPIC ID LBRACE function_blocks RBRACE;

function_blocks: function_blocks function_block
               | function_block;

function_block: ( menu_stmt | command_sequnces );

command_sequnces: command_sequnces command_stmt
                | command_stmt;

command_stmt: (say_stmt | goto_stmt | input_stmt);

say_stmt: SAY expression;

goto_stmt: GOTO ID;

input_stmt: INPUT ID assert_stmt*;

assert_stmt: assert_stmt assert
           | assert;

assert: ASSERT expression;

menu_stmt: MENU LBRACE case_list RBRACE;

case_list: case_list case_stmt
         | case_stmt;

case_stmt: expression ARROW LBRACE command_sequnces RBRACE
         | DEFALUT ARROW LBRACE command_sequnces RBRACE;