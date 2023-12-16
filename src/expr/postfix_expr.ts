import { Expression,ExprType } from "./expression.js";
import { Context,JsonObj } from "../context/context.js";


/**
 * Represents a postfix expression.
 */
export class PostfixExpr implements Expression {
    private item_: boolean | number | string | JsonObj | undefined;
    private name_: string;

    /**
     * Creates a new instance of PostfixExpr.
     * @param name The name of the expression.
     */
    constructor(name: string) {
        this.name_ = name;
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
     * @param context The context object.
     * @returns The value of the expression.
     */
    get_value(context: Context): string | number | boolean | undefined {
        this.item_ = context.get_symbol(this.name_);
        if (typeof this.item_ == "undefined") {
            return undefined;
        }
        if (typeof this.item_ == "object") {
            return this.item_[this.name_];
        }
        return undefined;
    }

    /**
     * Tries to get the value of the expression.
     * @returns The value of the expression, or undefined if it cannot be obtained.
     */
    try_get_value(): string | number | boolean | undefined {
        return undefined;
    }
}