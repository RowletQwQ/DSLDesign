import { Expression } from "../../expr/expression.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents a Set statement.
 */
export class SetStmt implements CommandStmt {
    private var_name_: string;
    private value_expr_: Expression;
    private is_global_: boolean;

    /**
     * Creates a new SetStmt instance.
     * @param var_name The name of the variable to set.
     * @param value_expr The expression representing the value to set.
     * @param is_global Specifies whether the variable is global or not. Default is false.
     */
    constructor(var_name: string, value_expr: Expression, is_global: boolean = false) {
        this.var_name_ = var_name;
        this.value_expr_ = value_expr;
        this.is_global_ = is_global;
    }

    /**
     * Gets the command statement type.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.SET_STMT;
    }

    /**
     * Gets the statement type.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

    /**
     * Gets the name of the variable to set.
     * @returns The variable name.
     */
    get_var_name(): string {
        return this.var_name_;
    }

    /**
     * Gets the expression representing the value to set.
     * @returns The value expression.
     */
    get_value_expr(): Expression {
        return this.value_expr_;
    }

    /**
     * Checks if the variable is global.
     * @returns True if the variable is global, false otherwise.
     */
    is_global(): boolean {
        return this.is_global_;
    }
}