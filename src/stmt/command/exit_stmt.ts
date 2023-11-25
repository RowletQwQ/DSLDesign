import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

export class ExitStmt implements CommandStmt {
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.EXIT_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}