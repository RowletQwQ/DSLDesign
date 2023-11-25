import { Expression,ExprType } from "./expression.js";
import { Context } from "../context/context.js";

export class ValueExpr implements Expression {
    private value_: string | number | boolean;
    private value_type_: string;
    constructor(value: string | number | boolean) {
        this.value_ = value;
        this.value_type_ = typeof value;
    }
    
    get_type(): ExprType {
        return ExprType.VALUE;
    }

    get_value_type(): string {
        return this.value_type_;
    }

    get_value(context: Context): string | number | boolean | undefined {
        return this.value_;
    }

    try_get_value(): string | number | boolean | undefined {
        return this.value_;
    }
}