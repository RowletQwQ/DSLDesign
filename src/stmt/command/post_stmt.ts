import { TemplateStringExpr } from "../../expr/template_string_expr.ts";
import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";

export class PostStmt implements CommandStmt {
    private source_id_: string;
    private target_url_: string | TemplateStringExpr;
    constructor(source_id: string, target_url: string | TemplateStringExpr) {
        this.source_id_ = source_id;
        this.target_url_ = target_url;
    }

    get_source_id(): string {
        return this.source_id_;
    }

    get_target_url(): string | TemplateStringExpr {
        return this.target_url_;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.POST_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

}