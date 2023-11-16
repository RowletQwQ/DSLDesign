import { CommandStmt, CommandStmtType } from "../command_stmt";
import { StmtType } from "../stmt";

export class ContinueStmt implements CommandStmt {
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.CONTINUE_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}