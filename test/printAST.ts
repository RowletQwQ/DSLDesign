
import { CommonTokenStream } from "antlr4ng";
import { cslLexer } from "../src/parser/cslLexer.js";
import { cslParser } from "../src/parser/cslParser.js";
import { CharStreams } from "antlr4ng";


// TODO 打印语法的 AST

let code_str = `
chatbox{
    "Hello" => {
        say "Hello, how are you?"
    }
    "What is your name?" => {
        goto name
    }
    "What is your version?" => {
        goto version
    }
    default => {
        say "I don't understand"
    }
}
`

let lexer = new cslLexer(CharStreams.fromString(code_str));

let tokens = new CommonTokenStream(lexer);

let parser = new cslParser(tokens);

let tree = parser.script();

console.log(tree)