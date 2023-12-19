import { Executor } from "../executor/executor.js";
import { Stmt } from "../stmt/stmt.js";
import { SessionEvent } from "./session_event.js";

/**
 * Represents a ParseEvent.
 */
export class ParseEvent {
  private session_event_: SessionEvent;
  private stmt_: Stmt | null = null;

  /**
   * Creates a new ParseEvent instance.
   * @param session_event The session event.
   */
  constructor(session_event: SessionEvent) {
    this.session_event_ = session_event;
  }

  /**
   * Gets the session event.
   * @returns The session event.
   */
  get_session_event(): SessionEvent {
    return this.session_event_;
  }

  /**
   * Sets the statement.
   * @param stmt The statement to set.
   */
  set_stmt(stmt: Stmt) {
    this.stmt_ = stmt;
  }

  /**
   * Gets the statement.
   * @returns The statement, or null if not set.
   */
  get_stmt(): Stmt | null {
    return this.stmt_;
  }
}
