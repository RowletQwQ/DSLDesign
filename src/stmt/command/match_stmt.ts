import { CommandStmt, CommandStmtType } from "../command_stmt.ts";
import { StmtType } from "../stmt.ts";
import { CaseStmt } from "./case_stmt.ts";
import { WhenSilenceStmt } from "./when_silence_stmt.ts";

export class MatchStmt implements CommandStmt {
    private patterns_: string[];
    private cases_: CaseStmt[];
    private default_case_: CaseStmt | null;
    private when_silence_stmt_: WhenSilenceStmt | null;
    constructor(patterns: string[], 
                cases: CaseStmt[], 
                default_case: CaseStmt | null = null,
                when_silence_stmt: WhenSilenceStmt | null = null
                ) 
    {
        this.patterns_ = patterns;
        this.cases_ = cases;
        this.default_case_ = default_case;
        this.when_silence_stmt_ = when_silence_stmt;
    }

    get_patterns(): string[] {
        return this.patterns_;
    }

    get_cases(): CaseStmt[] {
        return this.cases_;
    }

    get_default_case(): CaseStmt | null {
        return this.default_case_;
    }

    get_when_silence_stmt(): WhenSilenceStmt | null {
        return this.when_silence_stmt_;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.MATCH_STMT;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}