import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";

export class ContinueStmt implements CommandStmt {
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.CONTINUE_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}