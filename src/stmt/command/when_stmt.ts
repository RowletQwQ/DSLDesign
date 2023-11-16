import { Expression } from "../../expr/expression";
import { CommandStmt, CommandStmtType } from "../command_stmt";
import { StmtType } from "../stmt";

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