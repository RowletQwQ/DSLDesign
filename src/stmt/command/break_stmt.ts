import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";

export class BreakStmt implements CommandStmt {
    
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.BREAK_STMT;
    }
    
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
    
}