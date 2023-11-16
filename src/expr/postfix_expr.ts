import { Expression,ExprType } from "./expression";
import { Context } from "../context/context";


export class PostfixExpr implements Expression {
    private item_: Array<any> | object | undefined;
    private name_: string;
    constructor(name: string) {
        this.name_ = name;
    }

    get_type(): ExprType {
        return ExprType.POSTFIX;
    }

    get_value_type(): string {
        return typeof this.item_;
    }

    get_value(context: Context): string | number | boolean | undefined {
        this.item_ = context.get_symbol(this.name_);
        if (typeof this.item_ == "undefined") {
            return undefined;
        }
        return this.item_[this.name_];
    }

    try_get_value(): string | number | boolean | undefined {
        return undefined;
    }
}