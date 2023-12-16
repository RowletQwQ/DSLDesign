import { TemplateStringExpr } from "../../expr/template_string_expr.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents a Fetch statement.
 */
export class FetchStmt implements CommandStmt {
    private url_: string | TemplateStringExpr;
    private target_id_: string;

    /**
     * Creates a new FetchStmt instance.
     * @param url The URL to fetch data from.
     * @param id The target ID to store the fetched data.
     */
    constructor(url: string| TemplateStringExpr, id: string) {
        this.url_ = url;
        this.target_id_ = id;
    }

    /**
     * Gets the command statement type.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.FETCH_STMT;
    }

    /**
     * Gets the target ID.
     * @returns The target ID.
     */
    get_target_id(): string {
        return this.target_id_;
    }

    /**
     * Gets the URL.
     * @returns The URL.
     */
    get_url(): string | TemplateStringExpr {
        return this.url_;
    }

    /**
     * Gets the statement type.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}