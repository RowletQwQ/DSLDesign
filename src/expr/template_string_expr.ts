import { Expression,ExprType } from "./expression.js";
import { Context } from "../context/context.js";

/**
 * Represents a template string expression.
 */
export class TemplateStringExpr implements Expression {
    private value_type_: string;
    private template_parts_: Array<string | Expression>;

    /**
     * Constructs a new TemplateStringExpr object.
     * @param template_parts_ - An array of strings or expressions that make up the template string.
     */
    constructor(template_parts_: Array<string | Expression>) {
        this.value_type_ = "string";
        this.template_parts_ = template_parts_;
    }

    /**
     * Gets the expression type.
     * @returns The expression type.
     */
    get_type(): ExprType {
        return ExprType.TEMPLATE_STRING;
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
     * @param context - The context object.
     * @returns The value of the expression as a string or undefined.
     */
    get_value(context: Context): string | undefined{
        let result = "";
        for (let part of this.template_parts_) {
            if (typeof part == "string") {
                result += part + " ";
            } else {
                let value = part.get_value(context);
                if (typeof value == "object") {
                    result += JSON.stringify(value) + " ";
                }else if (typeof value != "undefined") {
                    result += value.toString() + " ";
                } else {
                    return undefined;
                }
            }
        }
        return result;
    }

    /**
     * Tries to get the value of the expression.
     * @returns The value of the expression as a string, number, boolean, or undefined.
     */
    try_get_value(): string | undefined{
        let result = "";
        for (let part of this.template_parts_) {
            if (typeof part == "string") {
                result += part + " ";
            } else {
                let value = part.try_get_value();
                if (typeof value != "undefined") {
                    result += value.toString() + " ";
                } else {
                    return undefined;
                }
            }
        }
        return result;
    }
}