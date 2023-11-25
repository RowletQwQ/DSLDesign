import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";
import { CaseStmt } from "./case_stmt.js";

export class MenuStmt implements CommandStmt {
    private cases_: CaseStmt[];
    
    constructor(cases: CaseStmt[]) {
        this.cases_ = cases;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.MENU_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

    get_cases(): CaseStmt[] {
        return this.cases_;
    }   
}