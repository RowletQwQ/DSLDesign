import { Expression,ExprType } from "./expression.ts";
import { Context,JsonObj } from "../context/context.ts";


export class PostfixExpr implements Expression {
    private item_: boolean | number | string | JsonObj | undefined;
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
        if (typeof this.item_ == "object") {
            return this.item_[this.name_];
        }
        return undefined;
    }

    try_get_value(): string | number | boolean | undefined {
        return undefined;
    }
}