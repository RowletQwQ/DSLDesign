import { ExprType,Expression } from "./expression.js";
import { Context } from "../context/context.js";

export enum ComparisonExprType {
    EQUAL,
    NOT_EQUAL,
    GREATER,
    GREATER_EQUAL,
    LESS,
    LESS_EQUAL,
}

/**
 * Represents a comparison expression.
 */
export class ComparisonExpr implements Expression {
    private left_: Expression;
    private right_: Expression;
    private type_: ComparisonExprType;
    private value_type_: string;

    /**
     * Creates a new ComparisonExpr instance.
     * @param left The left expression.
     * @param right The right expression.
     * @param type The type of comparison.
     */
    constructor(left: Expression, right: Expression, type: ComparisonExprType) {
        this.left_ = left;
        this.right_ = right;
        this.type_ = type;
        this.value_type_ = "undefined"
    }

    /**
     * Gets the value of the comparison expression.
     * @param context The context object.
     * @returns The value of the comparison expression.
     */
    get_value(context: Context): string | number | boolean | undefined 
    {
        let left_value = this.left_.get_value(context);
        let right_value = this.right_.get_value(context);
        
        let result = this.calculate(left_value, right_value);
        this.value_type_ = typeof result;
        return result;
    }

    /**
     * Tries to get the value of the comparison expression.
     * @returns The value of the comparison expression.
     */
    try_get_value(): string | number | boolean | undefined 
    {
        let left_value = this.left_.try_get_value();
        let right_value = this.right_.try_get_value();
        
        let result = this.calculate(left_value, right_value);
        this.value_type_ = typeof result;
        return result;
    }

    /**
     * Gets the type of the expression.
     * @returns The type of the expression.
     */
    get_type(): ExprType 
    {
        return ExprType.COMPARISON;
    }

    /**
     * Gets the value type of the comparison expression.
     * @returns The value type of the comparison expression.
     */
    get_value_type(): string 
    {
        return this.value_type_;
    }

    /**
     * Calculates the result of a comparison expression.
     * 
     * @param left_value - The left value of the comparison.
     * @param right_value - The right value of the comparison.
     * @returns The result of the comparison as a string, number, boolean, or undefined.
     */
    private calculate(left_value: string | number | boolean | undefined | object,
                     right_value: string | number | boolean | undefined | object)
                    :string | number | boolean | undefined 
    {   
        if (typeof left_value == "undefined" || typeof right_value == "undefined") {
            return undefined;
        }
        
        
        switch (this.type_) {
            case ComparisonExprType.EQUAL:
                return left_value == right_value;
            case ComparisonExprType.NOT_EQUAL:
                return left_value != right_value;
            case ComparisonExprType.GREATER:
                return left_value > right_value;
            case ComparisonExprType.GREATER_EQUAL:
                return left_value >= right_value;
            case ComparisonExprType.LESS:
                return left_value < right_value;
            case ComparisonExprType.LESS_EQUAL:
                return left_value <= right_value;
        }
        
    }
}