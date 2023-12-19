import { TemplateStringExpr } from "../../expr/template_string_expr.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents a PostStmt, which is a command statement used to send a POST request.
 */
export class PostStmt implements CommandStmt {
  private source_id_: string;
  private target_url_: string | TemplateStringExpr;

  /**
   * Creates a new instance of the PostStmt class.
   * @param source_id The source ID for the POST request.
   * @param target_url The target URL for the POST request.
   */
  constructor(source_id: string, target_url: string | TemplateStringExpr) {
    this.source_id_ = source_id;
    this.target_url_ = target_url;
  }

  /**
   * Gets the source ID for the POST request.
   * @returns The source ID.
   */
  get_source_id(): string {
    return this.source_id_;
  }

  /**
   * Gets the target URL for the POST request.
   * @returns The target URL.
   */
  get_target_url(): string | TemplateStringExpr {
    return this.target_url_;
  }

  /**
   * Gets the command statement type.
   * @returns The command statement type.
   */
  get_cmd_type(): CommandStmtType {
    return CommandStmtType.POST_STMT;
  }

  /**
   * Gets the statement type.
   * @returns The statement type.
   */
  get_type(): StmtType {
    return StmtType.COMMAND_STMT;
  }
}
