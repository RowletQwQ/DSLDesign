import { Stmt, StmtType } from "./stmt.js";

export class ScriptStmt implements Stmt {
    private hello_stmt_: Stmt | null;
    private chatbox_stmt_: Stmt;
    private topic_stmt_: Stmt[];
    private constance_stmt_: Stmt | null;
    constructor(hello_stmt: Stmt | null,
                chatbox_stmt: Stmt,
                topic_stmt: Stmt[],
                constance_stmt: Stmt | null = null
                ) 
    {
        this.hello_stmt_ = hello_stmt;
        this.chatbox_stmt_ = chatbox_stmt;
        this.topic_stmt_ = topic_stmt;
        this.constance_stmt_ = constance_stmt;
    }

    get_hello_stmt(): Stmt | null {
        return this.hello_stmt_;
    }

    get_chatbox_stmt(): Stmt {
        return this.chatbox_stmt_;
    }

    get_topic_stmts(): Stmt[] {
        return this.topic_stmt_;
    }

    get_constance_stmt(): Stmt | null {
        return this.constance_stmt_;
    }

    get_type(): StmtType {
        return StmtType.SCRIPT_STMT;
    }
}