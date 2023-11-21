import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";
import { CaseStmt } from "./case_stmt.ts";

export class MenuStmt implements CommandStmt {
    private cases_: CaseStmt[];
    private default_case_: CaseStmt | null;
    
    constructor(cases: CaseStmt[], default_case: CaseStmt | null = null) {
        this.cases_ = cases;
        this.default_case_ = default_case;
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

    get_default_case(): CaseStmt | null {
        return this.default_case_;
    }
    
}