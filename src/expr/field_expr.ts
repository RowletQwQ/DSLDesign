import { Expression,ExprType } from "./expression";
import { Context } from "../context/context";

// 变量表达式
export class FieldExpr implements Expression {
    private name_: string;
    private value_type_: string;
    constructor(name: string) {
        this.name_ = name;
        this.value_type_ = "undefined";
    }
    
    get_type(): ExprType {
        return ExprType.FIELD;
    }

    get_value_type(): string {
        return this.value_type_;
    }

    get_value(context: Context): string | number | boolean | undefined {
        let value = context.get_symbol(this.name_);
        this.value_type_ = typeof value;
        if (typeof value == "undefined") {
            return undefined;
        }
        return value;
    }

    try_get_value(): string | number | boolean | undefined {
        return undefined;
    }

}