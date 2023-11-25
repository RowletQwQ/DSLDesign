import { Expression } from "../../expr/expression.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

export class WhenSilenceStmt implements CommandStmt {
    private timeout_: Expression;
    private command_seq_: CommandStmt[];
    constructor(timeout: Expression, command_seq: CommandStmt[]) {
        this.timeout_ = timeout;
        this.command_seq_ = command_seq;
    }

    get_timeout(): Expression {
        return this.timeout_;
    }

    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.WHEN_SILENCE_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}