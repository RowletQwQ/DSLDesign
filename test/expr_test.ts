import { CharStreams, CommonTokenStream } from "antlr4ng";
import { createInterface } from "readline";
import { Readline } from "readline/promises";
import { cslLexer } from "../src/parser/cslLexer.js";
import { cslParser } from "../src/parser/cslParser.js";
import { ExpressionVisitor } from "../src/visitor/expression_visitor.js";

/**
 * Represents a test class for evaluating and generating random expressions.
 */
class TestExpr {
    readonly operators = ['+', '-', '*', '/', '%'];
    readonly maxOprand = 10000;
    readonly minOprand = -10000;
    

    /**
     * Extends the given expression from the left by adding a random operand and operator.
     * 
     * @param expr - The original expression.
     * @returns The extended expression.
     */
    private extendExprFromLeft(expr: string): string {
        const randOprand = Math.floor(Math.random() * (this.maxOprand - this.minOprand + 1)) 
                            + this.minOprand;
        const randOperator = this.operators[Math.floor(Math.random() * this.operators.length)];
        return `${randOprand} ${randOperator} ${expr}`;
    }

    /**
     * Extends the given expression from the right by appending a random operand and operator.
     * 
     * @param expr - The original expression.
     * @returns The extended expression.
     */
    private extendExprFromRight(expr: string): string {
        const randOprand = Math.floor(Math.random() * (this.maxOprand - this.minOprand + 1)) 
                            + this.minOprand;
        const randOperator = this.operators[Math.floor(Math.random() * this.operators.length)];
        return `${expr} ${randOperator} ${randOprand}`;
    }

    /**
     * Wraps the given expression in parentheses.
     * 
     * @param expr - The expression to be wrapped.
     * @returns The expression wrapped in parentheses.
     */
    private warpParentheses(expr: string): string {
        return `(${expr})`;
    }

    /**
     * Generates random expressions and evaluates them using JavaScript and a parser.
     * @param count The number of random expressions to generate. Default is 100.
     */
    generateRandomExpressions(count: number = 100): void {
        for (let i = 0; i < count; i++) {
            // Generate a random expression
            // Ensure the number of operands is at least 2
            let operCnt = Math.floor(Math.random() * 100) + 2;
            const randOprand = Math.floor(Math.random() * (this.maxOprand - this.minOprand + 1)) 
                            + this.minOprand;
            let randomExpression = `${randOprand}`;
            for (let j = 0; j < operCnt; j++) {
                if (Math.random() < 0.5) {
                    randomExpression = this.extendExprFromLeft(randomExpression);
                } else {
                    randomExpression = this.extendExprFromRight(randomExpression);
                }

                if (Math.random() < 0.2) {
                    randomExpression = this.warpParentheses(randomExpression);
                }
            }
            console.log(`Generated Expression: ${randomExpression}`);

            // Evaluate the generated expression using JavaScript
            const jsResult = eval(randomExpression);
            console.log(`JavaScript Result: ${jsResult}`);

            // Evaluate the generated expression using the parser
            let lexer = new cslLexer(CharStreams.fromString(randomExpression));
            let token = new CommonTokenStream(lexer);
            let parser = new cslParser(token);
            let visitor = new ExpressionVisitor();
            let expr = visitor.visit(parser.expression());
            if (expr == null) {
                throw new Error("expr is null");
            }
            const parserResult = expr.try_get_value();
            console.log(`Parser Result: ${parserResult}`);

            // Compare the results
            if (jsResult === parserResult || (typeof parserResult == "number" && isNaN(jsResult) && isNaN(parserResult))) {
                console.log("Results match!");
            } else {
                console.log("Results do not match!");
                break;
            }
        }

        setImmediate(() => {
            rl.question("Input the number of testcase you want to generate, or exit with 'q':", (answer) => {
                if (answer.toLowerCase() === 'q') {
                    process.exit(0);
                }
                this.generateRandomExpressions(parseInt(answer));
            });
        });
    }
}

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

try {
    let test = new TestExpr();
    rl.question("Input the number of testcase you want to generate, or exit with 'q':", (answer) => {
        if (answer.toLowerCase() === 'q') {
            process.exit(0);
        }
        test.generateRandomExpressions(parseInt(answer));
    });
} catch (error) {
    console.log(error);
}