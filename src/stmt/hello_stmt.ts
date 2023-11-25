import { CommandStmt } from "./command_stmt.js";
import { Stmt, StmtType } from "./stmt.js";

export class HelloStmt implements Stmt {
    private command_seq_: CommandStmt[];
    constructor(command_seq: CommandStmt[]) {
        this.command_seq_ = command_seq;
    }

    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    get_type(): StmtType {
        return StmtType.HELLO_STMT;
    }
}