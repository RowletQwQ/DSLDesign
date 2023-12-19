import { Expression, ExprType } from "./expression.js";
import { Context } from "../context/context.js";

export enum ArithmeticExprType {
  ADD,
  SUB,
  MUL,
  DIV,
  MOD,
  NEG,
}

/**
 * Represents an arithmetic expression.
 */
export class ArithmeticExpr implements Expression {
  private left_: Expression;
  private right_: Expression;
  private type_: ArithmeticExprType;
  private value_type_: string;

  /**
   * Constructs a new ArithmeticExpr object.
   * @param left The left expression.
   * @param right The right expression.
   * @param type The type of arithmetic expression.
   */
  constructor(left: Expression, right: Expression, type: ArithmeticExprType) {
    this.left_ = left;
    this.right_ = right;
    this.type_ = type;
    this.value_type_ = "undefined";
  }

  /**
   * Gets the type of the expression.
   * @returns The expression type.
   */
  get_type(): ExprType {
    return ExprType.ARITHMETIC;
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
   * @param context The context object.
   * @returns The value of the expression.
   */
  get_value(context: Context): string | number | boolean | undefined {
    let left_value = this.left_.get_value(context);
    let right_value = this.right_.get_value(context);

    let result = this.calculate(left_value, right_value);
    this.value_type_ = typeof result;
    return result;
  }

  /**
   * Tries to get the value of the expression.
   * @returns The value of the expression.
   */
  try_get_value(): string | number | boolean | undefined {
    let left_value = this.left_.try_get_value();
    let right_value = this.right_.try_get_value();

    let result = this.calculate(left_value, right_value);
    this.value_type_ = typeof result;
    return result;
  }

  /**
   * Calculates the result of an arithmetic expression.
   *
   * @param left_value The left value of the expression.
   * @param right_value The right value of the expression.
   * @returns The result of the arithmetic expression.
   */
  private calculate(
    left_value: string | number | boolean | undefined | object,
    right_value: string | number | boolean | undefined | object
  ): string | number | boolean | undefined {
    // 做类型检查
    if (typeof left_value == "undefined" || typeof right_value == "undefined") {
      return undefined;
    }

    if (typeof left_value == "string" && typeof right_value == "string") {
      // 字符串类型的加法
      if (this.type_ == ArithmeticExprType.ADD) {
        return left_value + right_value;
      } else {
        return undefined;
      }
    }

    if (typeof left_value == "number" && typeof right_value == "number") {
      switch (this.type_) {
        case ArithmeticExprType.ADD:
          return left_value + right_value;
        case ArithmeticExprType.SUB:
          return left_value - right_value;
        case ArithmeticExprType.MUL:
          return left_value * right_value;
        case ArithmeticExprType.DIV:
          return left_value / right_value;
        case ArithmeticExprType.MOD:
          return left_value % right_value;
      }
    }

    return undefined;
  }
}
