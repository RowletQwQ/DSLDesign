import { CharStreams, CommonTokenStream } from "antlr4ng";
import { createInterface } from "readline";
import test from "ava";
import { cslLexer } from "../../src/parser/cslLexer.js";
import { cslParser } from "../../src/parser/cslParser.js";
import { ExpressionVisitor } from "../../src/visitor/expression_visitor.js";

/**
 * Represents a test class for evaluating and generating random expressions.
 */
class TestExpr {
  readonly operators = ["+", "-", "*", "/", "%"];
  readonly maxOprand = 10000;
  readonly minOprand = -10000;
  /**
   * Extends the given expression from the left by adding a random operand and operator.
   *
   * @param expr - The original expression.
   * @returns The extended expression.
   */
  private extendExprFromLeft(expr: string): string {
    const randOprand =
      Math.floor(Math.random() * (this.maxOprand - this.minOprand + 1)) +
      this.minOprand;
    const randOperator =
      this.operators[Math.floor(Math.random() * this.operators.length)];
    return `${randOprand} ${randOperator} ${expr}`;
  }

  /**
   * Extends the given expression from the right by appending a random operand and operator.
   *
   * @param expr - The original expression.
   * @returns The extended expression.
   */
  private extendExprFromRight(expr: string): string {
    const randOprand =
      Math.floor(Math.random() * (this.maxOprand - this.minOprand + 1)) +
      this.minOprand;
    const randOperator =
      this.operators[Math.floor(Math.random() * this.operators.length)];
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
  generateRandomExpressions(): string {
    let operCnt = Math.floor(Math.random() * 100) + 2;
    const randOprand =
      Math.floor(Math.random() * (this.maxOprand - this.minOprand + 1)) +
      this.minOprand;
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
    return randomExpression;
  }
}
for (let i = 0; i < 100; i++) {
  test(`test random expression ${i}`, (t) => {
    let test = new TestExpr();
    let expr = test.generateRandomExpressions();
    let lexer = new cslLexer(CharStreams.fromString(expr));
    let token = new CommonTokenStream(lexer);
    let parser = new cslParser(token);
    let visitor = new ExpressionVisitor();
    let expr1 = visitor.visit(parser.expression());
    t.false(expr1 == null);
    if (expr1 == null) {
      return;
    }
    t.is(eval(expr), expr1.try_get_value());
  });
}
