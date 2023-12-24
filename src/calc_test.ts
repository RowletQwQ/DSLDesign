// calc_test.ts
/**
 * @module calc_test
 * A simple calculator that can calculate expressions.
 * Use for testing the parser and visitor.
 */
import { CharStreams, CommonTokenStream } from "antlr4ng";
import { cslLexer } from "./parser/cslLexer.js";
import { cslParser } from "./parser/cslParser.js";
import { ExpressionVisitor } from "./visitor/expression_visitor.js";
import { createInterface } from "readline";



const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
export class TestCalcExpression {
    /**
     * Handles the execution of an expression script.
     * @param expr_script - The expression script to be executed.
     * @returns void
     */
  handle_expr(expr_script: string): void {
    if (expr_script.toLowerCase() === 'q') {
        process.exit(0);
    }
    
    let lexer = new cslLexer(CharStreams.fromString(expr_script));
    let token = new CommonTokenStream(lexer);
    let parser = new cslParser(token);
    let visitor = new ExpressionVisitor();
    let expr = visitor.visit(parser.expression());
    if (expr == null) {
        throw new Error("expr is null");
    }
    console.log(expr.try_get_value());
    console.log("Input the expression you want to calculate, or exit with 'q':");
    setImmediate(() => {
        rl.question(">>>", (answer) => {
            this.handle_expr(answer);
        });
    });
}
}

try {
    let test = new TestCalcExpression();
    console.log("Input the expression you want to calculate, or exit with 'q':");
    rl.question(">>>", (answer) => {
        test.handle_expr(answer);
    });
} catch (error) {
    console.log(error);
}