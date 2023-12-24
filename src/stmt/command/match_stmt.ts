import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";
import { CaseStmt } from "./case_stmt.js";
import { WhenSilenceStmt } from "./when_silence_stmt.js";

/**
 * Represents a match statement in a DSL program.
 */
export class MatchStmt implements CommandStmt {
  private cases_: CaseStmt[];
  private default_case_: CaseStmt | null;
  private when_silence_stmt_: WhenSilenceStmt | null;

  /**
   * Creates a new MatchStmt instance.
   * @param cases The list of case statements.
   * @param default_case The default case statement.
   * @param when_silence_stmt The when silence statement (optional).
   */
  constructor(
    cases: CaseStmt[],
    default_case: CaseStmt,
    when_silence_stmt: WhenSilenceStmt | null = null
  ) {
    this.cases_ = cases;
    this.default_case_ = default_case;
    this.when_silence_stmt_ = when_silence_stmt;
  }

  /**
   * Gets the list of case statements.
   * @returns The list of case statements.
   */
  get_cases(): CaseStmt[] {
    return this.cases_;
  }

  /**
   * Gets the default case statement.
   * @returns The default case statement, or null if not defined.
   */
  get_default_case(): CaseStmt | null {
    return this.default_case_;
  }

  /**
   * Gets the when silence statement.
   * @returns The when silence statement, or null if not defined.
   */
  get_when_silence_stmt(): WhenSilenceStmt | null {
    return this.when_silence_stmt_;
  }

  /**
   * Gets the command statement type.
   * @returns The command statement type.
   */
  get_cmd_type(): CommandStmtType {
    return CommandStmtType.MATCH_STMT;
  }

  /**
   * Gets the statement type.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.COMMAND_STMT;
  }
}
