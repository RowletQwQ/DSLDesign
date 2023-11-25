import { TemplateStringExpr } from "../../expr/template_string_expr.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

export class FetchStmt implements CommandStmt {
    private url_: string | TemplateStringExpr;
    private target_id_: string;
    constructor(url: string| TemplateStringExpr, id: string) {
        this.url_ = url;
        this.target_id_ = id;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.FETCH_STMT;
    }

    get_target_id(): string {
        return this.target_id_;
    }

    get_url(): string | TemplateStringExpr {
        return this.url_;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

    
}