import { CommandStmt } from "./command_stmt";
import { Stmt, StmtType } from "./stmt";

export class TopicStmt implements Stmt {
    private name_: string;
    private command_seq_: CommandStmt[];
    constructor(name: string, command_seq: CommandStmt[]) {
        this.name_ = name;
        this.command_seq_ = command_seq;
    }
    
    get_name(): string {
        return this.name_;
    }

    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    get_type(): StmtType {
        return StmtType.TOPIC_STMT;
    }
}