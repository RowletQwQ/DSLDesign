import { Expression } from "../../expr/expression.ts";
import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";

export class SetStmt implements CommandStmt {
    private var_name_: string;
    private value_expr_: Expression;
    private is_global_: boolean;
    constructor(var_name: string, value_expr: Expression, is_global: boolean = false) {
        this.var_name_ = var_name;
        this.value_expr_ = value_expr;
        this.is_global_ = is_global;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.SET_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

    get_var_name(): string {
        return this.var_name_;
    }

    get_value_expr(): Expression {
        return this.value_expr_;
    }

    is_global(): boolean {
        return this.is_global_;
    }
}