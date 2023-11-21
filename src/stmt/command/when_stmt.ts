import { Expression } from "../../expr/expression.ts";
import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";

export class WhenStmt implements CommandStmt {
    private expr_: Expression;
    
    constructor(expr: Expression) {
        this.expr_ = expr;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.WHEN_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

    get_expr(): Expression {
        return this.expr_;
    }

}