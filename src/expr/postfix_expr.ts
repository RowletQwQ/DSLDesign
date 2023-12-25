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
  private postfix_: string | Expression;

  /**
   * Constructs a new PostfixExpr object.
   * @param id The identifier of the expression.
   * @param type The type of the postfix expression.
   * @param postfix The postfix.
   */
  constructor(
    id: string,
    type: PostfixExprType,
    postfix: string | Expression = ""
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
      if (typeof this.postfix_ == "string") {
        this.item_ = obj[this.postfix_];
      } else {
        throw new Error("Expected string after dot.")
      }
      
    } else if (this.type_ == PostfixExprType.ARRAY_ACCESS) {
      let obj = context.get_symbol(this.id_) as Array<any>;
      if (typeof this.postfix_ == "string") {
        throw new Error("Expected number in array access.")
      }
      let index = this.postfix_.get_value(context)
      if (typeof index == "number") {
        if (index < 0 || index >= obj.length) {
          throw new Error("Array index out of bounds.")
        }
        this.item_ = obj[index];
      } else {
        throw new Error("Expected number in array access.")
      }
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
