import { Expression,ExprType } from "./expression.js";
import { Context } from "../context/context.js";

export class TemplateStringExpr implements Expression {
    private value_type_: string;
    private template_parts_: Array<string | Expression>;
    constructor(template_parts_: Array<string | Expression>) {
        this.value_type_ = "string";
        this.template_parts_ = template_parts_;
    }

    get_type(): ExprType {
        return ExprType.TEMPLATE_STRING;
    }

    get_value_type(): string {
        return this.value_type_;
    }

    get_value(context: Context): string | number | boolean | undefined {
        let result = "";
        for (let part of this.template_parts_) {
            if (typeof part == "string") {
                result += part + " ";
            } else {
                let value = part.get_value(context);
                if (typeof value != "undefined") {
                    result += value.toString() + " ";
                } else {
                    return undefined;
                }
            }
        }
        return result;
    }

    try_get_value(): string | number | boolean | undefined {
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