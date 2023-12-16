import { Stmt, StmtType } from "./stmt.js";

/**
 * Represents a script statement.
 */
export class ScriptStmt implements Stmt {
    private hello_stmt_: Stmt | null;
    private chatbox_stmt_: Stmt;
    private topic_stmt_: Stmt[];
    private constance_stmt_: Stmt | null;

    /**
     * Creates a new instance of ScriptStmt.
     * @param hello_stmt The hello statement.
     * @param chatbox_stmt The chatbox statement.
     * @param topic_stmt The topic statements.
     * @param constance_stmt The constance statement.
     */
    constructor(
        hello_stmt: Stmt | null,
        chatbox_stmt: Stmt,
        topic_stmt: Stmt[],
        constance_stmt: Stmt | null = null
    ) {
        this.hello_stmt_ = hello_stmt;
        this.chatbox_stmt_ = chatbox_stmt;
        this.topic_stmt_ = topic_stmt;
        this.constance_stmt_ = constance_stmt;
    }

    /**
     * Gets the hello statement.
     * @returns The hello statement.
     */
    get_hello_stmt(): Stmt | null {
        return this.hello_stmt_;
    }

    /**
     * Gets the chatbox statement.
     * @returns The chatbox statement.
     */
    get_chatbox_stmt(): Stmt {
        return this.chatbox_stmt_;
    }

    /**
     * Gets the topic statements.
     * @returns The topic statements.
     */
    get_topic_stmts(): Stmt[] {
        return this.topic_stmt_;
    }

    /**
     * Gets the constance statement.
     * @returns The constance statement.
     */
    get_constance_stmt(): Stmt | null {
        return this.constance_stmt_;
    }

    /**
     * Gets the type of the statement.
     * @returns The statement type.
     */
    get_type(): StmtType {
        return StmtType.SCRIPT_STMT;
    }
}