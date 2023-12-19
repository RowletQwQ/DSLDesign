import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents an exit statement.
 */
export class ExitStmt implements CommandStmt {
  /**
   * Gets the command statement type.
   * @returns The command statement type.
   */
  get_cmd_type(): CommandStmtType {
    return CommandStmtType.EXIT_STMT;
  }

  /**
   * Gets the statement type.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.COMMAND_STMT;
  }
}
