import test from 'ava';
import { ParseEvent } from '../../src/event/parse_event.js';
import { SessionEvent } from '../../src/event/session_event.js';
import { BreakStmt } from '../../src/stmt/command/break_stmt.js';
import { StmtMock } from '../../src/stmt/stmt.js';

const bot_name = 'bot';
const session_id = 'session';
const script = 'script';

test('get_session_event should return the session event', (t) => {
    const sessionEvent = new SessionEvent(bot_name, session_id, script);
    const parseEvent = new ParseEvent(sessionEvent);
    t.is(parseEvent.get_session_event(), sessionEvent);
});

test('set_stmt should set the statement', (t) => {
    const parseEvent = new ParseEvent(new SessionEvent(bot_name, session_id, script));
    const stmt = new StmtMock();
    parseEvent.set_stmt(stmt);
    t.is(parseEvent.get_stmt(), stmt);
});

test('get_stmt should return the statement if set', (t) => {
    const parseEvent = new ParseEvent(new SessionEvent(bot_name, session_id, script));
    const stmt = new StmtMock();
    parseEvent.set_stmt(stmt);
    t.is(parseEvent.get_stmt(), stmt);
});

test('get_stmt should return null if statement is not set', (t) => {
    const parseEvent = new ParseEvent(new SessionEvent(bot_name, session_id, script));
    t.is(parseEvent.get_stmt(), null);
});