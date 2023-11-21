import { Executor } from "../executor/executor.ts";
import { Stmt } from "../stmt/stmt.ts";
import { SessionEvent } from "./session_event.ts";

export class ParseEvent {
    private session_event_: SessionEvent;
    private stmt_: Stmt | null = null;

    constructor(session_event: SessionEvent) {
        this.session_event_ = session_event;
    }

    get_session_event(): SessionEvent {
        return this.session_event_;
    }

    set_stmt(stmt: Stmt) {
        this.stmt_ = stmt;
    }

    get_stmt(): Stmt | null {
        return this.stmt_;
    }

    set_executor(executor: Executor) {
        this.session_event_.set_executor(executor);
    }
}