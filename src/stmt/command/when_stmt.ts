import { Expression } from "../../expr/expression.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents a "when" statement in a DSL program.
 */
export class WhenStmt implements CommandStmt {
  private expr_: Expression;

  /**
   * Creates a new instance of the WhenStmt class.
   * @param expr The expression associated with the "when" statement.
   */
  constructor(expr: Expression) {
    this.expr_ = expr;
  }

  /**
   * Gets the command statement type.
   * @returns The command statement type.
   */
  get_cmd_type(): CommandStmtType {
    return CommandStmtType.WHEN_STMT;
  }

  /**
   * Gets the statement type.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.COMMAND_STMT;
  }

  /**
   * Gets the expression associated with the "when" statement.
   * @returns The expression.
   */
  get_expr(): Expression {
    return this.expr_;
  }
}
