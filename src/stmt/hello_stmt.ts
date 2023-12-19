import { CommandStmt } from "./command_stmt.js";
import { Stmt, StmtType } from "./stmt.js";

/**
 * Represents a Hello statement.
 */
export class HelloStmt implements Stmt {
  private command_seq_: CommandStmt[];

  /**
   * Creates a new instance of HelloStmt.
   * @param command_seq The sequence of command statements.
   */
  constructor(command_seq: CommandStmt[]) {
    this.command_seq_ = command_seq;
  }

  /**
   * Gets the sequence of command statements.
   * @returns The command sequence.
   */
  get_command_seq(): CommandStmt[] {
    return this.command_seq_;
  }

  /**
   * Gets the type of the statement.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.HELLO_STMT;
  }
}
