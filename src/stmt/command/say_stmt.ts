import { Expression } from "../../expr/expression.js";
import { CommandStmtType,CommandStmt } from "../command_stmt.js"
import { StmtType } from "../stmt.js";

/**
 * Represents a command statement that outputs a message.
 */
export class SayStmt implements CommandStmt {
    private expr_: Expression;
    constructor(expr: Expression) {
        this.expr_ = expr;
    }

    /**
     * Gets the type of the command statement.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.SAY_STMT;
    }

    /**
     * Gets the expression associated with the command statement.
     * @returns The expression.
     */
    get_expr(): Expression {
        return this.expr_;
    }

    /**
     * Gets the type of the statement.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}