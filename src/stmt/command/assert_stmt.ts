import { Expression } from "../../expr/expression.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents an assertion statement.
 */
export class AssertStmt implements CommandStmt {
    private expr_: Expression;
    constructor(expr: Expression) {
        this.expr_ = expr;
    }
    
    /**
     * Gets the command statement type.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.ASSERT_STMT;
    }

    /**
     * Gets the statement type.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

    /**
     * Gets the expression of the assertion.
     * @returns The expression of the assertion.
     */
    get_expr(): Expression {
        return this.expr_;
    }
}
