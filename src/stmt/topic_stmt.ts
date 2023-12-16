import { CommandStmt } from "./command_stmt.js";
import { Stmt, StmtType } from "./stmt.js";

/**
 * Represents a topic statement.
 */
export class TopicStmt implements Stmt {
    private name_: string;
    private command_seq_: CommandStmt[];

    /**
     * Creates a new instance of the TopicStmt class.
     * @param name The name of the topic.
     * @param command_seq The sequence of command statements associated with the topic.
     */
    constructor(name: string, command_seq: CommandStmt | CommandStmt[]) {
        this.name_ = name;
        if (command_seq instanceof Array) {
            this.command_seq_ = command_seq;
        } else {
            this.command_seq_ = [command_seq];
        }
    }
    
    /**
     * Gets the name of the topic.
     * @returns The name of the topic.
     */
    get_name(): string {
        return this.name_;
    }

    /**
     * Gets the sequence of command statements associated with the topic.
     * @returns The sequence of command statements.
     */
    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    /**
     * Gets the type of the statement.
     * @returns The type of the statement.
     */
    get_type(): StmtType {
        return StmtType.TOPIC_STMT;
    }
}