import { CommandStmt, CommandStmtType } from "../command_stmt";
import { StmtType } from "../stmt";

export class GotoStmt implements CommandStmt {
    private target_: string;
    constructor(target: string) {
        this.target_ = target;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.GOTO_STMT;
    }

    get_target(): string {
        return this.target_;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}