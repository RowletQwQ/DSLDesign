import test from 'ava';
import { SessionEvent } from '../../src/event/session_event.js';
import { InterruptEvent } from '../../src/event/interrupt_event.js';
import { MockInstance } from '../../src/runtime/instance.js';
import { ExecutorMock } from '../../src/executor/executor.js';

const bot_name = 'bot';
const session_id = 'session';
const script = 'script';

test('get_bot_name should return the name of the bot', (t) => {
    const sessionEvent = new SessionEvent(bot_name, session_id, script);
    t.is(sessionEvent.get_bot_name(), bot_name);
});

test('get_session_id should return the ID of the session', (t) => {
    const sessionEvent = new SessionEvent(bot_name, session_id, script);
    t.is(sessionEvent.get_session_id(), session_id);
});

test('get_script should return the script content', (t) => {
    const sessionEvent = new SessionEvent(bot_name, session_id, script);
    t.is(sessionEvent.get_script(), script);
});

test('get_instance should return null if instance is not set', (t) => {
    const sessionEvent = new SessionEvent(bot_name, session_id, script);
    t.is(sessionEvent.get_instance(), null);
});

test('set_instance should set the instance', (t) => {
    const sessionEvent = new SessionEvent(bot_name, session_id, script);
    const instance = new MockInstance("test",new ExecutorMock());
    sessionEvent.set_instance(instance);
    t.is(sessionEvent.get_instance(), instance);
});