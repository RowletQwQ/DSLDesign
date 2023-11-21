import { Stmt, StmtType } from "./stmt.ts";
import { CaseStmt } from "./command/case_stmt.ts";

export class ChatBoxStmt implements Stmt {
    private cases_: CaseStmt[]
    constructor(cases: CaseStmt[]) {
        this.cases_ = cases;
    }
    
    get_type(): StmtType {
        return StmtType.CHATBOX_STMT;
    }

    get_cases(): CaseStmt[] {
        return this.cases_;
    }

}