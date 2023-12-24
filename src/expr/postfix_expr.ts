import { Expression, ExprType } from "./expression.js";
import { Context, JsonObj } from "../context/context.js";

export enum PostfixExprType {
  DIRECT_ACCESS, //< 直接访问
  MEMBER_ACCESS, //< 成员访问
  ARRAY_ACCESS, //< 数组访问
}

/**
 * Represents a postfix expression.
 */
export class PostfixExpr implements Expression {
  private item_: boolean | number | string | JsonObj | undefined;
  private id_: string;
  private type_: PostfixExprType;
  private postfix_: string | number;

  /**
   * Constructs a new PostfixExpr object.
   * @param id The identifier of the expression.
   * @param type The type of the postfix expression.
   * @param postfix The postfix.
   */
  constructor(
    id: string,
    type: PostfixExprType,
    postfix: string | number = ""
  ) {
    this.id_ = id;
    this.type_ = type;
    this.postfix_ = postfix;
  }

  /**
   * Gets the type of the expression.
   * @returns The expression type.
   */
  get_type(): ExprType {
    return ExprType.POSTFIX;
  }

  /**
   * Gets the value type of the expression.
   * @returns The value type.
   */
  get_value_type(): string {
    return typeof this.item_;
  }

  /**
   * Gets the value of the expression.
   * @param context The context object of the runtime.
   * @returns The value of the expression.
   */
  get_value(context: Context): string | number | boolean | object | undefined {
    if (this.type_ == PostfixExprType.DIRECT_ACCESS) {
      this.item_ = context.get_symbol(this.id_);
    } else if (this.type_ == PostfixExprType.MEMBER_ACCESS) {
      let obj = context.get_symbol(this.id_) as JsonObj;
      this.item_ = obj[this.postfix_];
    } else if (this.type_ == PostfixExprType.ARRAY_ACCESS) {
      throw new Error("Not implemented.");
    }
    return this.item_;
  }

  /**
   * Tries to get the value of the expression.
   * @returns The value of the expression, or undefined if it cannot be obtained.
   */
  try_get_value(): undefined {
    return undefined;
  }
}
