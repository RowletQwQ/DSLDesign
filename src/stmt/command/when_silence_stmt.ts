import { Expression } from "../../expr/expression.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents a command statement that executes a sequence of commands when there is silence for a specified timeout.
 */
export class WhenSilenceStmt implements CommandStmt {
  private timeout_: Expression;
  private command_seq_: CommandStmt[];

  /**
   * Creates a new instance of WhenSilenceStmt.
   * @param timeout The timeout expression for silence.
   * @param command_seq The sequence of commands to execute.
   */
  constructor(timeout: Expression, command_seq: CommandStmt[]) {
    this.timeout_ = timeout;
    this.command_seq_ = command_seq;
  }

  /**
   * Gets the timeout expression for silence.
   * @returns The timeout expression.
   */
  get_timeout(): Expression {
    return this.timeout_;
  }

  /**
   * Gets the sequence of commands to execute.
   * @returns The command sequence.
   */
  get_command_seq(): CommandStmt[] {
    return this.command_seq_;
  }

  /**
   * Gets the type of the command statement.
   * @returns The command statement type.
   */
  get_cmd_type(): CommandStmtType {
    return CommandStmtType.WHEN_SILENCE_STMT;
  }

  /**
   * Gets the type of the statement.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.COMMAND_STMT;
  }
}
