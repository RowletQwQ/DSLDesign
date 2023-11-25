import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

export class CaseStmt implements CommandStmt {
    private commands_: CommandStmt[];
    private pattren_: string;
    private is_default_: boolean;
    constructor(commands: CommandStmt[], pattren: string = "", is_default: boolean = false) {
        this.commands_ = commands;
        this.pattren_ = pattren;
        this.is_default_ = is_default;
    }

    get_cmd_type(): CommandStmtType {
        return CommandStmtType.CASE_STMT;
    }

    get_commands(): CommandStmt[] {
        return this.commands_;
    }

    get_pattren(): string {
        return this.pattren_;
    }

    is_default(): boolean {
        return this.is_default_;
    }

    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}