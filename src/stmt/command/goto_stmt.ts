import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents a Goto statement.
 */
export class GotoStmt implements CommandStmt {
  private target_: string;
  /**
   * Creates a new GotoStmt instance.
   * @param target The target of the Goto statement.
   */
  constructor(target: string) {
    this.target_ = target;
  }

  /**
   * Gets the type of the command statement.
   * @returns The command statement type.
   */
  get_cmd_type(): CommandStmtType {
    return CommandStmtType.GOTO_STMT;
  }

  /**
   * Gets the target of the Goto statement.
   * @returns The target of the Goto statement.
   */
  get_target(): string {
    return this.target_;
  }

  /**
   * Gets the type of the statement.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.COMMAND_STMT;
  }
}
