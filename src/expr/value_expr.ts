import { Expression, ExprType } from "./expression.js";
import { Context } from "../context/context.js";

/**
 * Represents a value expression.
 */
export class ValueExpr implements Expression {
  private value_: string | number | boolean;
  private value_type_: string;

  /**
   * Creates a new instance of ValueExpr.
   * @param value The value of the expression.
   */
  constructor(value: string | number | boolean) {
    this.value_ = value;
    this.value_type_ = typeof value;
  }

  /**
   * Gets the type of the expression.
   * @returns The type of the expression.
   */
  get_type(): ExprType {
    return ExprType.VALUE;
  }

  /**
   * Gets the value type of the expression.
   * @returns The value type of the expression.
   */
  get_value_type(): string {
    return this.value_type_;
  }

  /**
   * Gets the value of the expression.
   * @param context The context object.
   * @returns The value of the expression.
   */
  get_value(context: Context): string | number | boolean | undefined {
    return this.value_;
  }

  /**
   * Tries to get the value of the expression.
   * @returns The value of the expression.
   */
  try_get_value(): string | number | boolean | undefined {
    return this.value_;
  }
}
