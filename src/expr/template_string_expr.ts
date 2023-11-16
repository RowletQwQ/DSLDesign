import { Context } from "../context/context";
import { ExprType, Expression } from "./expression";

export class TemplateStringExpr implements Expression {
    private exprs_: Array<Expression>;
    private value_type_: string;
    private plain_text_: Array<string>;
    constructor(plain_text_: Array<string>, exprs_: Array<Expression>) {
        this.exprs_ = exprs_;
        this.value_type_ = "string";
        this.plain_text_ = plain_text_;
    }

    get_type(): ExprType {
        return ExprType.TEMPLATE_STRING;
    }

    get_value_type(): string {
        return this.value_type_;
    }

    get_value(context: Context): string | number | boolean | undefined {
        let result = "";
        for (let i = 0; i < this.plain_text_.length; ++i) {
            result += this.plain_text_[i];
            if (i < this.exprs_.length) {
                let value = this.exprs_[i].get_value(context);
                if (typeof value != "undefined") {
                    result += value;
                } else {
                    return undefined;
                }
            }
        }
        return result;
    }

    try_get_value(): string | number | boolean | undefined {
        let result = "";
        for (let i = 0; i < this.plain_text_.length; ++i) {
            result += this.plain_text_[i];
            if (i < this.exprs_.length) {
                let value = this.exprs_[i].try_get_value();
                if (typeof value != "undefined") {
                    result += value;
                } else {
                    return undefined;
                }
            }
        }
    }
}