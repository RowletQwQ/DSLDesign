import { ArithmeticExpr, ArithmeticExprType } from "../expr/arithmetic_expr.js";
import { ComparisonExpr,ComparisonExprType } from "../expr/comparison_expr.js";
import { ConjunctionExpr,ConjunctionExprType } from "../expr/conjunction_expr.js";
import { Expression } from "../expr/expression.js";
import { FieldExpr } from "../expr/field_expr.js";
import { UnaryExprType, UnaryExpression } from "../expr/unary_expr.js";
import { ValueExpr } from "../expr/value_expr.js";
import 
{ 
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
    ValueContext
} 
from "../parser/cslParser.js";
import { cslVisitor } from "../parser/cslVisitor.js";

// ExpressionVisitor 类实现了 cslVisitor 接口
// 用于解析表达式
// 以下解析的顺序为优先级别顺序，越底层的优先级越高
export class ExpressionVisitor extends cslVisitor<Expression>
{
    /* expression: logical_or_expression */
    override visitExpression = (ctx: ExpressionContext): Expression =>{
        let expr = this.visit(ctx.logical_or_expression());
        if ( expr == null) {
            throw new Error("Expression Parse error");
        }
        return expr;
    }

    /*
    // logical_or_expression: logical_or_expression OR logical_and_expression
    //                      | logical_and_expression; 
    */
    override visitLogical_or_expression = (ctx: Logical_or_expressionContext): Expression => {
        let expr: Expression;
        let left = this.visit(ctx.logical_and_expression());
        if (left == undefined) {
            throw new Error("Logical or expression Parse error: No logical and expression");
        }
        let right: Expression | null;
        right = null;
        let logical_or_stmt = ctx.logical_or_expression();
        if (logical_or_stmt != undefined) {
            right = this.visit(logical_or_stmt);
        }
        if (right == null) {
            expr = left;
        } else {
            expr = new ConjunctionExpr(left, right, ConjunctionExprType.OR);
        }
        return expr;
    }

    override visitLogical_and_expression = (ctx: Logical_and_expressionContext): Expression =>{
        let expr: Expression;
        let left = this.visit(ctx.equality_expression());
        if (left == undefined) {
            throw new Error("Logical and expression Parse error: No equality expression");
        }
        let right: Expression | null;
        right = null;
        let logical_and_stmt = ctx.logical_and_expression();
        if (logical_and_stmt != undefined) {
            right = this.visit(logical_and_stmt);
        }
        if (right == null) {
            expr = left;
        } else {
            expr = new ConjunctionExpr(left, right, ConjunctionExprType.AND);
        }
        return expr;
    }

    override visitEquality_expression = (ctx: Equality_expressionContext): Expression => {
        let expr: Expression;
        let left = this.visit(ctx.relational_expression());
        if (left == undefined) {
            throw new Error("Equality expression Parse error: No relational expression");
        }
        let right: Expression | null;
        right = null;
        let equality_stmt = ctx.equality_expression();
        if (equality_stmt != undefined) {
            right = this.visit(equality_stmt);
        }
        if (right == null) {
            expr = left;
        } else {
            let operator = ctx.EQUAL() != undefined ? ComparisonExprType.EQUAL : ComparisonExprType.NOT_EQUAL;
            expr = new ComparisonExpr(left, right, operator);
        }
        return expr;
    }

    override visitRelational_expression = (ctx: Relational_expressionContext): Expression => {
        let expr: Expression;
        let left = this.visitAdditive_expression(ctx.additive_expression());
        let right: Expression | undefined;
        right = undefined;
        let relational_stmt = ctx.relational_expression();
        if (relational_stmt != undefined) {
            right = this.visitRelational_expression(relational_stmt);
        }
        if (right == undefined) {
            expr = left;
        } else {
            let operator = ctx.GREATER() != undefined ? ComparisonExprType.GREATER :
                       ctx.GREATER_EQUAL() != undefined ? ComparisonExprType.GREATER_EQUAL :
                       ctx.LESS() != undefined ? ComparisonExprType.LESS :
                       ComparisonExprType.LESS_EQUAL;
            expr = new ComparisonExpr(left, right, operator);
        }
        return expr;
    }

    override visitAdditive_expression = (ctx: Additive_expressionContext): Expression =>{
        let expr: Expression;
        let left = this.visitMultiplicative_expression(ctx.multiplicative_expression());
        let right: Expression | undefined;
        right = undefined;
        let additive_stmt = ctx.additive_expression();
        if (additive_stmt != undefined) {
            right = this.visitAdditive_expression(additive_stmt);
        }
        if (right == undefined) {
            expr = left;
        } else {
            let operator = ctx.PLUS() != undefined ? ArithmeticExprType.ADD 
                           : ArithmeticExprType.SUB;
            expr = new ArithmeticExpr(left, right, operator);
        }
        return expr;
    }

    override visitMultiplicative_expression = (ctx: Multiplicative_expressionContext): Expression =>{
        let expr: Expression;
        let left = this.visitUnary_expression(ctx.unary_expression());
        let right: Expression | undefined;
        right = undefined;
        let multiplicative_stmt = ctx.multiplicative_expression();
        if (multiplicative_stmt != undefined) {
            right = this.visitMultiplicative_expression(multiplicative_stmt);
        }
        if (right == undefined) {
            expr = left;
        } else {
            let operator = ctx.MULTIPLY() != undefined ? ArithmeticExprType.MUL 
                           : ctx.DIVIDE() != undefined ? ArithmeticExprType.DIV 
                           : ArithmeticExprType.MOD;
            expr = new ArithmeticExpr(left, right, operator);
        }
        return expr;
    }

    // 一元运算符解析
    override visitUnary_expression = (ctx: Unary_expressionContext): Expression =>{
        let expr: Expression;
        let postfix_expr = ctx.postfix_expression();
        if (postfix_expr != undefined) {
            expr = this.visitPostfix_expression(postfix_expr);
        } else {
            let type = ctx.MINUS() != undefined ? UnaryExprType.NEGATIVE 
                      : UnaryExprType.NOT;
            let unary_stmt = ctx.unary_expression();
            if (unary_stmt == undefined) {
                throw new Error("Unary expression Parse error,No unary expression after" 
                        + ctx.MINUS() != null ? "-" : "!");
            }
            let unary_expr = this.visitUnary_expression(unary_stmt);
            expr = new UnaryExpression(unary_expr, type);
        }
        return expr;
    }

    override visitPostfix_expression = (ctx: Postfix_expressionContext): Expression =>{
        let expr: Expression;
        let postfix_expr = ctx.postfix_expression();
        if (postfix_expr != undefined) {
            expr = this.visitPostfix_expression(postfix_expr);
        } else {
            let primary_stmt = ctx.primary_expression();
            if (primary_stmt == undefined) {
                throw new Error("Postfix expression Parse error,No primary expression");
            }
            expr = this.visitPrimary_expression(primary_stmt);
        }
        return expr;
    }
    
    override visitPrimary_expression = (ctx: Primary_expressionContext): Expression =>{
        let expr: Expression;
        let value_stmt = ctx.value();
        let field_stmt = ctx.ID();
        if (value_stmt != undefined) {
            expr = this.visitValue(value_stmt);
        } else if (field_stmt != undefined) {
            expr = new FieldExpr(field_stmt.getText());
        } else {
            // 括号表达式
            let expr_stmt = ctx.expression();
            if (expr_stmt == undefined) {
                throw new Error("Primary expression Parse error,No expression between parentheses");
            }
            expr = this.visitExpression(expr_stmt);
        }
        return expr;
    }

    override visitValue = (ctx: ValueContext): Expression =>{
        let expr: Expression;
        let int_stmt = ctx.INTS();
        let float_stmt = ctx.FLOATS();
        let string_stmt = ctx.STRING();
        if (int_stmt != undefined) {
            expr = new ValueExpr(parseInt(int_stmt.getText()));
        } else if (float_stmt != undefined) {
            expr = new ValueExpr(parseFloat(float_stmt.getText()));
        } else if (string_stmt != undefined) {
            let str = string_stmt.getText();
            str = str.substring(1, str.length - 1);
            expr = new ValueExpr(str);
        } else {
            throw new Error("Value expression Parse error");
        }
        return expr;
    }
}