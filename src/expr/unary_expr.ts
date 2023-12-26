import { Expression, ExprType } from "./expression.js";
import { Context } from "../context/context.js";
export enum UnaryExprType {
  NOT,
  NEGATIVE,
}
/**
 * Represents a unary expression.
 */
export class UnaryExpr implements Expression {
  private expr_: Expression;
  private type_: UnaryExprType;
  private value_type_: string;

  /**
   * Creates a new UnaryExpression instance.
   * @param expr The expression.
   * @param type The type of unary expression.
   */
  constructor(expr: Expression, type: UnaryExprType) {
    this.expr_ = expr;
    this.type_ = type;
    this.value_type_ = "undefined";
  }

  /**
   * Gets the type of the expression.
   * @returns The expression type.
   */
  get_type(): ExprType {
    return ExprType.UNARY;
  }

  /**
   * Gets the value type of the expression.
   * @returns The value type.
   */
  get_value_type(): string {
    return this.value_type_;
  }

  /**
   * Gets the value of the expression.
   * @param context The context.
   * @returns The value of the expression.
   */
  get_value(context: Context): string | number | boolean | undefined {
    let value = this.expr_.get_value(context);
    this.value_type_ = typeof value;
    if (typeof value == "undefined") {
      return undefined;
    }
    if (this.type_ == UnaryExprType.NOT) {
      return !value;
    } else if (this.type_ == UnaryExprType.NEGATIVE) {
      return -value;
    }
    return undefined;
  }

  /**
   * Tries to get the value of the expression.
   * @returns The value of the expression.
   */
  try_get_value(): string | number | boolean | undefined {
    let value = this.expr_.try_get_value();
    this.value_type_ = typeof value;
    if (typeof value == "undefined") {
      return undefined;
    }
    if (this.type_ == UnaryExprType.NOT) {
      return !value;
    } else if (this.type_ == UnaryExprType.NEGATIVE) {
      return -value;
    }
    return undefined;
  }
}
