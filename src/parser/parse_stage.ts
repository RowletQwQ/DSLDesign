import { CharStreams, CommonTokenStream } from "antlr4ng";
import { ScriptStmt } from "../stmt/script_stmt.ts";
import { Stmt } from "../stmt/stmt.ts";
import { cslLexer } from "./cslLexer.ts";
import { cslParser } from "./cslParser.ts";
import { cslVisitor } from "./cslVisitor.ts";
import { ScriptVisitor } from "../visitor/script_visitor.ts";
import { StdioNull } from "child_process";

export class ParserStage {
    handle_script(script: string): ScriptStmt | null {
        // 先进行词法分析
        let lexer = new cslLexer(CharStreams.fromString(script));
        let tokens = new CommonTokenStream(lexer);
        // 语法分析
        let parser = new cslParser(tokens);
        let visitor = new ScriptVisitor();
        let stmt = visitor.visit(parser.script());
        return stmt;
    }
}