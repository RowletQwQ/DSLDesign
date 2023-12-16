import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";
import { CaseStmt } from "./case_stmt.js";

/**
 * Represents a menu statement.
 */
export class MenuStmt implements CommandStmt {
    private cases_: CaseStmt[];
    
    /**
     * Creates a new MenuStmt instance.
     * @param cases The cases of the menu statement.
     */
    constructor(cases: CaseStmt[]) {
        this.cases_ = cases;
    }

    /**
     * Gets the command statement type.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.MENU_STMT;
    }

    /**
     * Gets the statement type.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }

    /**
     * Gets the cases of the menu statement.
     * @returns The cases of the menu statement.
     */
    get_cases(): CaseStmt[] {
        return this.cases_;
    }   
}