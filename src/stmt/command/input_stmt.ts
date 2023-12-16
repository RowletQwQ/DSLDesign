import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";
import { AssertStmt } from "./assert_stmt.js";
import { WhenSilenceStmt } from "./when_silence_stmt.js";

/**
 * Represents an input statement in the DSL.
 */
export class InputStmt implements CommandStmt {
    private when_silence_stmt_: WhenSilenceStmt | null;
    private assert_stmt_: AssertStmt | null;
    private target_id_: string;

    /**
     * Creates a new InputStmt instance.
     * @param target_id The ID of the target.
     * @param when_silence_stmt The when silence statement associated with the input statement.
     * @param assert_stmt The assert statement associated with the input statement.
     */
    constructor(target_id: string, 
                when_silence_stmt: WhenSilenceStmt | null, 
                assert_stmt: AssertStmt | null) 
    {
        this.target_id_ = target_id;
        this.when_silence_stmt_ = when_silence_stmt;
        this.assert_stmt_ = assert_stmt;
    }

    /**
     * Gets the ID of the target.
     * @returns The target ID.
     */
    get_target_id(): string {
        return this.target_id_;
    }

    /**
     * Gets the when silence statement associated with the input statement.
     * @returns The when silence statement or null if not present.
     */
    get_when_silence_stmt(): WhenSilenceStmt | null {
        return this.when_silence_stmt_;
    }

    /**
     * Gets the assert statement associated with the input statement.
     * @returns The assert statement or null if not present.
     */
    get_assert_stmt(): AssertStmt | null {
        return this.assert_stmt_;
    }

    /**
     * Gets the command statement type.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.INPUT_STMT;
    }

    /**
     * Gets the statement type.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}