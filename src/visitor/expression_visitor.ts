import { ArithmeticExpr, ArithmeticExprType } from "../expr/arithmetic_expr.js";
import { ComparisonExpr, ComparisonExprType } from "../expr/comparison_expr.js";
import {
  ConjunctionExpr,
  ConjunctionExprType,
} from "../expr/conjunction_expr.js";
import { Expression } from "../expr/expression.js";
import { FieldExpr } from "../expr/field_expr.js";
import { JsonExpr } from "../expr/json_expr.js";
import { PostfixExpr, PostfixExprType } from "../expr/postfix_expr.js";
import { UnaryExprType, UnaryExpression } from "../expr/unary_expr.js";
import { ValueExpr } from "../expr/value_expr.js";
import {
  ExpressionContext,
  Logical_or_expressionContext,
  Logical_and_expressionContext,
  Equality_expressionContext,
  Relational_expressionContext,
  Additive_expressionContext,
  Multiplicative_expressionContext,
  Unary_expressionContext,
  Postfix_expressionContext,
  Primary_expressionContext,
  ValueContext,
  Json_objectContext,
} from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";
import { Instance } from "../runtime/instance.js";

// ExpressionVisitor 类实现了 cslVisitor 接口
// 用于解析表达式
// 以下解析的顺序为优先级别顺序，越底层的优先级越高
/**
 * ExpressionVisitor class is responsible for visiting different types of expressions in the DSL.
 * It extends the cslVisitor class.
 */
export class ExpressionVisitor extends cslVisitor<Expression> {
  /**
   * Visits the expression and returns the evaluated expression.
   * @param ctx The expression context.
   * @returns The evaluated expression.
   * @throws Error if the expression parse error occurs.
   */
  override visitExpression = (ctx: ExpressionContext): Expression => {
    let expr = this.visit(ctx.logical_or_expression());
    if (expr == null) {
      throw new Error("Expression Parse error");
    }
    return expr;
  };

  /**
   * Visits the logical OR expression and returns the evaluated expression.
   * @param ctx The logical OR expression context.
   * @returns The evaluated expression.
   * @throws Error if the logical OR expression parse error occurs.
   */
  override visitLogical_or_expression = (
    ctx: Logical_or_expressionContext
  ): Expression => {
    let expr: Expression;
    let right = this.visit(ctx.logical_and_expression());
    if (right == undefined) {
      throw new Error(
        "Logical or expression Parse error: No logical and expression"
      );
    }
    let left: Expression | null;
    left = null;
    let logical_or_stmt = ctx.logical_or_expression();
    if (logical_or_stmt != undefined) {
      left = this.visit(logical_or_stmt);
    }
    if (left == null) {
      expr = right;
    } else {
      expr = new ConjunctionExpr(left, right, ConjunctionExprType.OR);
    }
    return expr;
  };

  /**
   * Visits the logical AND expression and returns the evaluated expression.
   * @param ctx The logical AND expression context.
   * @returns The evaluated expression.
   * @throws Error if the logical AND expression parse error occurs.
   */
  override visitLogical_and_expression = (
    ctx: Logical_and_expressionContext
  ): Expression => {
    let expr: Expression;
    let right = this.visit(ctx.equality_expression());
    if (right == undefined) {
      throw new Error(
        "Logical and expression Parse error: No equality expression"
      );
    }
    let left: Expression | null;
    left = null;
    let logical_and_stmt = ctx.logical_and_expression();
    if (logical_and_stmt != undefined) {
      left = this.visit(logical_and_stmt);
    }
    if (left == null) {
      expr = right;
    } else {
      expr = new ConjunctionExpr(left, right, ConjunctionExprType.AND);
    }
    return expr;
  };

  /**
   * Visits the equality expression and returns the evaluated expression.
   * @param ctx The equality expression context.
   * @returns The evaluated expression.
   * @throws Error if the equality expression parse error occurs.
   */
  override visitEquality_expression = (
    ctx: Equality_expressionContext
  ): Expression => {
    let expr: Expression;
    let right = this.visit(ctx.relational_expression());
    if (right == undefined) {
      throw new Error(
        "Equality expression Parse error: No relational expression"
      );
    }
    let left: Expression | null;
    left = null;
    let equality_stmt = ctx.equality_expression();
    if (equality_stmt != undefined) {
      left = this.visit(equality_stmt);
    }
    if (left == null) {
      expr = right;
    } else {
      let operator =
        ctx.EQUAL() != undefined
          ? ComparisonExprType.EQUAL
          : ComparisonExprType.NOT_EQUAL;
      expr = new ComparisonExpr(left, right, operator);
    }
    return expr;
  };

  /**
   * Visits the relational expression and returns the evaluated expression.
   * @param ctx The relational expression context.
   * @returns The evaluated expression.
   */
  override visitRelational_expression = (
    ctx: Relational_expressionContext
  ): Expression => {
    let expr: Expression;
    let right = this.visitAdditive_expression(ctx.additive_expression());
    let left: Expression | undefined;
    left = undefined;
    let relational_stmt = ctx.relational_expression();
    if (relational_stmt != undefined) {
      left = this.visitRelational_expression(relational_stmt);
    }
    if (left == undefined) {
      expr = right;
    } else {
      let operator =
        ctx.GREATER() != undefined
          ? ComparisonExprType.GREATER
          : ctx.GREATER_EQUAL() != undefined
          ? ComparisonExprType.GREATER_EQUAL
          : ctx.LESS() != undefined
          ? ComparisonExprType.LESS
          : ComparisonExprType.LESS_EQUAL;
      expr = new ComparisonExpr(left, right, operator);
    }
    return expr;
  };

  /**
   * Visits the additive expression and returns the evaluated expression.
   * @param ctx The additive expression context.
   * @returns The evaluated expression.
   */
  override visitAdditive_expression = (
    ctx: Additive_expressionContext
  ): Expression => {
    let expr: Expression;
    let right = this.visitMultiplicative_expression(
      ctx.multiplicative_expression()
    );
    let left: Expression | undefined;
    left = undefined;
    let additive_stmt = ctx.additive_expression();
    if (additive_stmt != undefined) {
      left = this.visitAdditive_expression(additive_stmt);
    }
    if (left == undefined) {
      expr = right;
    } else {
      let operator =
        ctx.PLUS() != undefined
          ? ArithmeticExprType.ADD
          : ArithmeticExprType.SUB;
      expr = new ArithmeticExpr(left, right, operator);
    }
    return expr;
  };

  /**
   * Visits the multiplicative expression and returns the evaluated expression.
   * @param ctx The multiplicative expression context.
   * @returns The evaluated expression.
   */
  override visitMultiplicative_expression = (
    ctx: Multiplicative_expressionContext
  ): Expression => {
    let expr: Expression;
    let right = this.visitUnary_expression(ctx.unary_expression());
    let left: Expression | undefined;
    left = undefined;
    let multiplicative_stmt = ctx.multiplicative_expression();
    if (multiplicative_stmt != undefined) {
      left = this.visitMultiplicative_expression(multiplicative_stmt);
    }
    if (left == undefined) {
      expr = right;
    } else {
      let operator =
        ctx.MULTIPLY() != undefined
          ? ArithmeticExprType.MUL
          : ctx.DIVIDE() != undefined
          ? ArithmeticExprType.DIV
          : ArithmeticExprType.MOD;
      expr = new ArithmeticExpr(left, right, operator);
    }
    return expr;
  };

  /**
   * Visits the unary expression and returns the evaluated expression.
   * @param ctx The unary expression context.
   * @returns The evaluated expression.
   * @throws Error if the unary expression parse error occurs.
   */
  override visitUnary_expression = (
    ctx: Unary_expressionContext
  ): Expression => {
    let expr: Expression;
    let postfix_expr = ctx.postfix_expression();
    if (postfix_expr != undefined) {
      expr = this.visitPostfix_expression(postfix_expr);
    } else {
      let type =
        ctx.MINUS() != undefined ? UnaryExprType.NEGATIVE : UnaryExprType.NOT;
      let unary_stmt = ctx.unary_expression();
      if (unary_stmt == undefined) {
        throw new Error(`Unary expression Parse error,No unary expression after\
                ${ctx.MINUS() != null ? "-" : "!"}`);
      }
      let unary_expr = this.visitUnary_expression(unary_stmt);
      expr = new UnaryExpression(unary_expr, type);
    }
    return expr;
  };

  /**
   * Visits the postfix expression and returns the evaluated expression.
   * @param ctx The postfix expression context.
   * @returns The evaluated expression.
   * @throws Error if the postfix expression parse error occurs.
   */
  override visitPostfix_expression = (
    ctx: Postfix_expressionContext
  ): Expression => {
    let expr: Expression;
    let id_list = ctx.ID();
    if (ctx.DOT() != undefined || ctx.LBRACK() != undefined) {
      if (ctx.LBRACK() != undefined) {
        throw new Error("Not implemented for array access");
      }
      expr = new PostfixExpr(
        id_list[0].getText(),
        PostfixExprType.MEMBER_ACCESS,
        id_list[1].getText()
      );
    } else {
      let primary_stmt = ctx.primary_expression();
      if (primary_stmt == undefined) {
        throw new Error("Postfix expression Parse error,No primary expression");
      }
      expr = this.visitPrimary_expression(primary_stmt);
    }
    return expr;
  };

  /**
   * Visits the primary expression and returns the evaluated expression.
   * @param ctx The primary expression context.
   * @returns The evaluated expression.
   * @throws Error if the primary expression parse error occurs.
   */
  override visitPrimary_expression = (
    ctx: Primary_expressionContext
  ): Expression => {
    let expr: Expression;
    let value_stmt = ctx.value();
    let field_stmt = ctx.ID();
    if (value_stmt != undefined) {
      expr = this.visitValue(value_stmt);
    } else if (field_stmt != undefined) {
      expr = new FieldExpr(field_stmt.getText());
    } else {
      // Parenthesized expression
      let expr_stmt = ctx.expression();
      if (expr_stmt == undefined) {
        throw new Error(
          "Primary expression Parse error,No expression between parentheses"
        );
      }
      expr = this.visitExpression(expr_stmt);
    }
    return expr;
  };

  /**
   * Visits the value and returns the evaluated expression.
   * @param ctx The value context.
   * @returns The evaluated expression.
   */
  override visitValue = (ctx: ValueContext): Expression => {
    let expr: Expression;
    let int_stmt = ctx.INTS();
    let float_stmt = ctx.FLOATS();
    let string_stmt = ctx.STRING();
    let json_stmt = ctx.json_object();
    if (int_stmt != undefined) {
      expr = new ValueExpr(parseInt(int_stmt.getText()));
    } else if (float_stmt != undefined) {
      expr = new ValueExpr(parseFloat(float_stmt.getText()));
    } else if (string_stmt != undefined) {
      let str = string_stmt.getText();
      str = str.substring(1, str.length - 1);
      expr = new ValueExpr(str);
    } else if (json_stmt != undefined) {
      expr = this.visitJson_object(json_stmt);
    } else {
      if (ctx.TRUE() != undefined) {
        expr = new ValueExpr(true);
      } else {
        expr = new ValueExpr(false);
      }
    }
    return expr;
  };
  override visitJson_object = (ctx: Json_objectContext): Expression => {
    let expr: Expression;
    let tmp_expr: JsonExpr = new JsonExpr(new Map<string, Expression>());
    let json_stmt = ctx.json_object();
    if (json_stmt != undefined) {
      tmp_expr = this.visitJson_object(json_stmt) as JsonExpr;
    }
    if (ctx.json_pair() != undefined) {
      let key = ctx.json_pair().STRING().getText();
      key = key.substring(1, key.length - 1);
      let value = this.visit(ctx.json_pair().expression());
      if (value == undefined) {
        throw new Error("Json object parse error");
      }
      let map = new Map<string, Expression>();
      map.set(key, value);
      tmp_expr.add_map(map);
    }
    expr = tmp_expr;
    return expr;
  };
}
