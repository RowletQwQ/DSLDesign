import { Expression,ExprType } from "./expression.js";
import { Context } from "../context/context.js";

// 变量表达式
/**
 * Represents a field expression.
 */
export class FieldExpr implements Expression {
    private name_: string;
    private value_type_: string;

    /**
     * Creates a new instance of FieldExpr.
     * @param name The name of the field.
     */
    constructor(name: string) {
        this.name_ = name;
        this.value_type_ = "undefined";
    }
    
    /**
     * Gets the expression type.
     * @returns The expression type.
     */
    get_type(): ExprType {
        return ExprType.FIELD;
    }

    /**
     * Gets the value type of the field.
     * @returns The value type of the field.
     */
    get_value_type(): string {
        return this.value_type_;
    }

    /**
     * Gets the value of the field from the given context.
     * @param context The context object.
     * @returns The value of the field.
     */
    get_value(context: Context): string | number | boolean | undefined {
        let value = context.get_symbol(this.name_);
        this.value_type_ = typeof value;
        if (typeof value == "undefined" || typeof value == "object") {
            return undefined;
        }
        return value;
    }

    /**
     * Tries to get the value of the field.
     * @returns The value of the field, if available; otherwise, undefined.
     */
    try_get_value(): string | number | boolean | undefined {
        return undefined;
    }
}