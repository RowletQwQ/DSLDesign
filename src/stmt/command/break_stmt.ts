import { CommandStmt, CommandStmtType } from "../command_stmt";
import { StmtType } from "../stmt";

export class BreakStmt implements CommandStmt {
    
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.BREAK_STMT;
    }
    
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
    
}