import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents a case statement in a DSL program.
 */
export class CaseStmt implements CommandStmt {
    private commands_: CommandStmt[];
    private pattren_: string;
    private is_default_: boolean;

    /**
     * Creates a new instance of the CaseStmt class.
     * @param commands The commands associated with the case statement.
     * @param pattren The pattern to match against.
     * @param is_default Specifies whether this case statement is the default case.
     */
    constructor(commands: CommandStmt[], pattren: string = "", is_default: boolean = false) {
        this.commands_ = commands;
        this.pattren_ = pattren;
        this.is_default_ = is_default;
    }

    /**
     * Gets the type of the command statement.
     * @returns The type of the command statement.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.CASE_STMT;
    }

    /**
     * Gets the commands associated with the case statement.
     * @returns The commands associated with the case statement.
     */
    get_commands(): CommandStmt[] {
        return this.commands_;
    }

    /**
     * Gets the pattern to match against.
     * @returns The pattern to match against.
     */
    get_pattren(): string {
        return this.pattren_;
    }

    /**
     * Checks if this case statement is the default case.
     * @returns True if this case statement is the default case, false otherwise.
     */
    is_default(): boolean {
        return this.is_default_;
    }

    /**
     * Gets the type of the statement.
     * @returns The type of the statement.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}