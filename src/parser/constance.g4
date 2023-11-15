lexer grammar constance;
STRING: ('"' ('\\"'|~["])* '"' | '\'' ('\\\''|~['])* '\'');
QUOTE: ('"' | '\'');
DIGIT: [0-9]+;
INTS: DIGIT+;
FLOATS: DIGIT+ '.' DIGIT+;
