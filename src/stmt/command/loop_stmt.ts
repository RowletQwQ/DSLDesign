import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";
import { WhenStmt } from "./when_stmt.ts";

export class LoopStmt implements CommandStmt {
    private command_seq_: CommandStmt[];
    private when_stmt_: WhenStmt | null;
    constructor(command_seq: CommandStmt[], 
                when_stmt: WhenStmt | null = null
                ) 
    {
        this.command_seq_ = command_seq;
        this.when_stmt_ = when_stmt;
    }

    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    get_when_stmt(): WhenStmt | null {
        return this.when_stmt_;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.LOOP_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}