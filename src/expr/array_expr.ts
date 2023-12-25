import { Context } from "../context/context.js";
import { ExprType, Expression } from "./expression.js";

/**
 * Represents an array expression.
 */
export class ArrayExpr implements Expression {
    private exprs_: Array<Expression>;
    private array_: any[] | undefined;

    /**
     * Constructs a new ArrayExpr object.
     * @param exprs The array of expressions.
     */
    constructor(exprs: Array<Expression>) {
        this.exprs_ = exprs;
        this.array_ = undefined;
    }

    /**
     * Get the type of the expression.
     * @returns {ExprType} The type of the expression.
     */
    get_type(): ExprType {
        return ExprType.ARRAY;
    }

    /**
     * Get the value type of the expression.
     * @returns {string} The value type of the expression.
     */
    get_value_type(): string {
        return "array";
    }

    /**
     * Retrieves the value of the array expression.
     * @param context The context object.
     * @returns The value of the array expression.
     */
    get_value(context: Context): string | number | boolean | object | any[] | undefined {
        if (this.array_) {
            return this.array_;
        }
        let result: any[] = [];
        for (let expr of this.exprs_) {
            result.push(expr.get_value(context));
        }
        this.array_ = result;
        return result;
    }

    /**
     * Tries to get the value of the array expression without using the context.
     * @returns The value of the array expression, which can be a string, number, boolean, object, array, or undefined.
     */
    try_get_value(): string | number | boolean | object | any[] | undefined {
        if (this.array_) {
            return this.array_;
        }
        let result: any[] = [];
        for (let expr of this.exprs_) {
            let value = expr.try_get_value();
            if (typeof value == "undefined") {
                return undefined;
            }
            result.push(value);
        }
        this.array_ = result;
        return result;
    }

}