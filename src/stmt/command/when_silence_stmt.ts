import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";

export class WhenSilenceStmt implements CommandStmt {
    private timeout_: number;
    private command_seq_: CommandStmt[];
    constructor(timeout: number, command_seq: CommandStmt[]) {
        this.timeout_ = timeout;
        this.command_seq_ = command_seq;
    }

    get_timeout(): number {
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