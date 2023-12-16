import { Stmt, StmtType } from "./stmt.js";
import { CaseStmt } from "./command/case_stmt.js";

/**
 * Represents a ChatBox statement.
 */
export class ChatBoxStmt implements Stmt {
    private cases_: CaseStmt[];

    /**
     * Creates a new instance of ChatBoxStmt.
     * @param cases The cases of the ChatBox statement.
     */
    constructor(cases: CaseStmt[]) {
        this.cases_ = cases;
    }
    
    /**
     * Gets the type of the statement.
     * @returns The type of the statement.
     */
    get_type(): StmtType {
        return StmtType.CHATBOX_STMT;
    }

    /**
     * Gets the cases of the ChatBox statement.
     * @returns The cases of the ChatBox statement.
     */
    get_cases(): CaseStmt[] {
        return this.cases_;
    }
}