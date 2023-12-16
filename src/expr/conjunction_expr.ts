import { Expression,ExprType } from "./expression.js";
import { Context } from "../context/context.js";

export enum ConjunctionExprType {
    AND,
    OR,
}

/**
 * Represents a conjunction expression.
 */
export class ConjunctionExpr implements Expression {
    private left_: Expression;
    private right_: Expression;
    private type_: ConjunctionExprType;
    private value_type_: string;

    /**
     * Creates a new instance of ConjunctionExpr.
     * @param left The left expression.
     * @param right The right expression.
     * @param type The type of conjunction.
     */
    constructor(left: Expression, right: Expression, type: ConjunctionExprType) {
        this.left_ = left;
        this.right_ = right;
        this.type_ = type;
        this.value_type_ = "undefined"
    }

    /**
     * Gets the expression type.
     * @returns The expression type.
     */
    get_type(): ExprType {
        return ExprType.CONJUNCTION;
    }

    /**
     * Gets the value type.
     * @returns The value type.
     */
    get_value_type(): string {
        return this.value_type_;
    }

    /**
     * Gets the value of the conjunction expression.
     * @param context The context for evaluating the expression.
     * @returns The value of the conjunction expression.
     */
    get_value(context: Context): string | number | boolean | undefined {
        let left_value = this.left_.get_value(context);
        let right_value = this.right_.get_value(context);
        
        let result = this.calculate(left_value, right_value);
        this.value_type_ = typeof result;
        return result;
    }
    
    /**
     * Tries to get the value of the conjunction expression.
     * @returns The value of the conjunction expression.
     */
    try_get_value(): string | number | boolean | undefined {
        let left_value = this.left_.try_get_value();
        let right_value = this.right_.try_get_value();
        
        let result = this.calculate(left_value, right_value);
        this.value_type_ = typeof result;
        return result;
    }

    /**
     * Calculates the result of a conjunction expression.
     * 
     * @param left_value - The left value of the expression.
     * @param right_value - The right value of the expression.
     * @returns The result of the conjunction expression.
     */
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