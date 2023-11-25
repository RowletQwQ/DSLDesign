import { Expression,ExprType } from "./expression.js";
import { Context } from "../context/context.js";
export enum UnaryExprType {
    NOT,
    NEGATIVE,
}
export class UnaryExpression implements Expression {
    private expr_: Expression;
    private type_: UnaryExprType;
    private value_type_: string;
    constructor(expr: Expression, type: UnaryExprType) {
        this.expr_ = expr;
        this.type_ = type;
        this.value_type_ = "undefined";
    }
    
    get_type(): ExprType {
        return ExprType.UNARY;
    }

    get_value_type(): string {
        return this.value_type_;
    }

    get_value(context: Context): string | number | boolean | undefined {
        let value = this.expr_.get_value(context);
        this.value_type_ = typeof value;
        if (typeof value == "undefined") {
            return undefined;
        }
        if (this.type_ == UnaryExprType.NOT) {
            return !value;
        }
        else if (this.type_ == UnaryExprType.NEGATIVE) {
            return -value;
        }
        return undefined;
    }

    try_get_value(): string | number | boolean | undefined {
        let value = this.expr_.try_get_value();
        this.value_type_ = typeof value;
        if (typeof value == "undefined") {
            return undefined;
        }
        if (this.type_ == UnaryExprType.NOT) {
            return !value;
        }
        else if (this.type_ == UnaryExprType.NEGATIVE) {
            return -value;
        }
        return undefined;
    }
}