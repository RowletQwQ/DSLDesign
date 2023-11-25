import { Expression,ExprType } from "./expression.js";
import { Context } from "../context/context.js";

export enum ArithmeticExprType {
    ADD,
    SUB,
    MUL,
    DIV,
    MOD,
    NEG,
}

export class ArithmeticExpr implements Expression {
    private left_: Expression;
    private right_: Expression;
    private type_: ArithmeticExprType;
    private value_type_: string;

    constructor(left: Expression, right: Expression, type: ArithmeticExprType) {
        this.left_ = left;
        this.right_ = right;
        this.type_ = type;
        this.value_type_ = "undefined"
    }

    get_type(): ExprType {
        return ExprType.ARITHMETIC;
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
                    : string | number | boolean | undefined {
        // 做类型检查
        if (typeof left_value == "undefined" || typeof right_value == "undefined") {
            return undefined;
        }

        if (typeof left_value == "string" && typeof right_value == "string") {
            // 字符串类型的加法
            if (this.type_ == ArithmeticExprType.ADD) {
                return left_value + right_value;
            } else {
                return undefined;
            }
        }

        if (typeof left_value == "number" && typeof right_value == "number") {
            switch (this.type_) {
                case ArithmeticExprType.ADD: return left_value + right_value;
                case ArithmeticExprType.SUB: return left_value - right_value;
                case ArithmeticExprType.MUL: return left_value * right_value;
                case ArithmeticExprType.DIV: return left_value / right_value;
                case ArithmeticExprType.MOD: return left_value % right_value;
            }
        }

        return undefined;
    }
}