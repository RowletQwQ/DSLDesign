import { Expression,ExprType } from "./expression";
import { Context } from "../context/context";

export enum ConjunctionExprType {
    AND,
    OR,
}

export class ConjunctionExpr implements Expression {
    private left_: Expression;
    private right_: Expression;
    private type_: ConjunctionExprType;
    private value_type_: string;

    constructor(left: Expression, right: Expression, type: ConjunctionExprType) {
        this.left_ = left;
        this.right_ = right;
        this.type_ = type;
        this.value_type_ = "undefined"
    }

    get_type(): ExprType {
        return ExprType.CONJUNCTION;
    }

    get_value_type(): string {
        return this.value_type_;
    }

    get_value(context: Context): string | number | boolean | undefined {
        let left_value = this.left_.get_value(context);
        let right_value = this.right_.get_value(context);
        
        let result = this.calculate(left_value, right_value);
        this.value_type_ = typeof result;
        return result;
    }
    
    try_get_value(): string | number | boolean | undefined {
        let left_value = this.left_.try_get_value();
        let right_value = this.right_.try_get_value();
        
        let result = this.calculate(left_value, right_value);
        this.value_type_ = typeof result;
        return result;
    }

    private calculate(left_value: string | number | boolean | undefined,
        right_value: string | number | boolean | undefined)
       :string | number | boolean | undefined
    {
        if (typeof left_value == "undefined" || typeof right_value == "undefined") {
            return undefined;
        }
        switch (this.type_) {
            case ConjunctionExprType.AND: return left_value && right_value;
            case ConjunctionExprType.OR: return left_value || right_value;
        }
    }
                    
}