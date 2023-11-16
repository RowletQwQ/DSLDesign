import { Expression } from "../../expr/expression";
import { CommandStmt, CommandStmtType } from "../command_stmt";
import { StmtType } from "../stmt";

export class IfStmt implements CommandStmt {
    private condition_: Expression;
    private command_seq_: CommandStmt[];
    private else_if_stmt_: IfStmt | null;
    private else_cmd_seq_: CommandStmt[] | null;

    constructor(condition: Expression, 
                command_seq: CommandStmt[], 
                else_if_stmt: IfStmt | null = null, 
                else_cmd_seq: CommandStmt[] | null = null
                ) 
    {
        this.condition_ = condition;
        this.command_seq_ = command_seq;
        this.else_if_stmt_ = else_if_stmt;
        this.else_cmd_seq_ = else_cmd_seq;
    }

    get_condition(): Expression {
        return this.condition_;
    }

    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    get_else_if_stmt(): IfStmt | null {
        return this.else_if_stmt_;
    }

    get_else_command_seq(): CommandStmt[] | null {
        return this.else_cmd_seq_;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.IF_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}