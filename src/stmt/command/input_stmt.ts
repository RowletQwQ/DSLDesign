import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";
import { AssertStmt } from "./assert_stmt.js";
import { WhenSilenceStmt } from "./when_silence_stmt.js";

export class InputStmt implements CommandStmt {
    private when_silence_stmt_: WhenSilenceStmt | null;
    private assert_stmt_: AssertStmt | null;
    private target_id_: string;

    constructor(target_id: string, 
                when_silence_stmt: WhenSilenceStmt | null, 
                assert_stmt: AssertStmt | null) 
    {
        this.target_id_ = target_id;
        this.when_silence_stmt_ = when_silence_stmt;
        this.assert_stmt_ = assert_stmt;
    }

    get_target_id(): string {
        return this.target_id_;
    }

    get_when_silence_stmt(): WhenSilenceStmt | null {
        return this.when_silence_stmt_;
    }

    get_assert_stmt(): AssertStmt | null {
        return this.assert_stmt_;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.INPUT_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}