import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";
import { WhenStmt } from "./when_stmt.js";

/**
 * Represents a loop statement.
 */
export class LoopStmt implements CommandStmt {
    private command_seq_: CommandStmt[];
    private when_stmt_: WhenStmt | null;

    /**
     * Creates a new LoopStmt instance.
     * @param command_seq The sequence of command statements within the loop.
     * @param when_stmt The optional when statement associated with the loop.
     */
    constructor(command_seq: CommandStmt[], when_stmt: WhenStmt | null = null) {
        this.command_seq_ = command_seq;
        this.when_stmt_ = when_stmt;
    }

    /**
     * Gets the sequence of command statements within the loop.
     * @returns An array of command statements.
     */
    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    /**
     * Gets the when statement associated with the loop.
     * @returns The when statement or null if not present.
     */
    get_when_stmt(): WhenStmt | null {
        return this.when_stmt_;
    }

    /**
     * Gets the type of the command statement.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.LOOP_STMT;
    }

    /**
     * Gets the type of the statement.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}