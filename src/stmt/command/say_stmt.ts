import { Expression } from "../../expr/expression.js";
import { CommandStmtType,CommandStmt } from "../command_stmt.js"
import { StmtType } from "../stmt.js";

export class SayStmt implements CommandStmt {
    private expr_: Expression;
    constructor(expr: Expression) {
        this.expr_ = expr;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.SAY_STMT;
    }

    get_expr(): Expression {
        return this.expr_;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}