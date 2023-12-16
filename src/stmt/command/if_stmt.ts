import { Expression } from "../../expr/expression.js";
import { CommandStmt, CommandStmtType } from "../command_stmt.js";
import { StmtType } from "../stmt.js";

/**
 * Represents an If statement.
 */
export class IfStmt implements CommandStmt {
    private condition_: Expression;
    private command_seq_: CommandStmt[];
    private else_if_stmt_: IfStmt | null;
    private else_cmd_seq_: CommandStmt[] | null;

    /**
     * Constructs a new IfStmt object.
     * @param condition The condition expression of the If statement.
     * @param command_seq The sequence of commands to be executed if the condition is true.
     * @param else_if_stmt The nested If statement to be executed if the condition is false and there is another condition to check.
     * @param else_cmd_seq The sequence of commands to be executed if the condition is false and there is no nested If statement.
     */
    constructor(
        condition: Expression,
        command_seq: CommandStmt[],
        else_if_stmt: IfStmt | null = null,
        else_cmd_seq: CommandStmt[] | null = null
    ) {
        this.condition_ = condition;
        this.command_seq_ = command_seq;
        this.else_if_stmt_ = else_if_stmt;
        if (else_if_stmt !== null && else_cmd_seq !== null) {
            else_if_stmt.push_down_else(else_cmd_seq);
            else_cmd_seq = null;
        }
        this.else_cmd_seq_ = else_cmd_seq;
    }

    /**
     * Pushes down the else command sequence to the nested If statement or sets it if there is no nested If statement.
     * @param cmd_seq The sequence of commands to be executed if the condition of the nested If statement is false.
     */
    push_down_else(cmd_seq: CommandStmt[]): void {
        if (this.else_if_stmt_ !== null) {
            this.else_if_stmt_.push_down_else(cmd_seq);
        } else {
            this.else_cmd_seq_ = cmd_seq;
        }
    }

    /**
     * Gets the condition expression of the If statement.
     * @returns The condition expression.
     */
    get_condition(): Expression {
        return this.condition_;
    }

    /**
     * Gets the sequence of commands to be executed if the condition is true.
     * @returns The command sequence.
     */
    get_command_seq(): CommandStmt[] {
        return this.command_seq_;
    }

    /**
     * Gets the nested If statement to be executed if the condition is false and there is another condition to check.
     * @returns The nested If statement or null if there is none.
     */
    get_else_if_stmt(): IfStmt | null {
        return this.else_if_stmt_;
    }

    /**
     * Gets the sequence of commands to be executed if the condition is false and there is no nested If statement.
     * @returns The command sequence or null if there is none.
     */
    get_else_command_seq(): CommandStmt[] | null {
        return this.else_cmd_seq_;
    }

    /**
     * Gets the type of the command statement.
     * @returns The command statement type.
     */
    get_cmd_type(): CommandStmtType {
        return CommandStmtType.IF_STMT;
    }

    /**
     * Gets the type of the statement.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.COMMAND_STMT;
    }
}