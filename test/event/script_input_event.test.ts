import test from 'ava';
import { ScriptInputEvent } from '../../src/event/script_input_event.js';

test('get_input should return the input string', (t) => {
    const input = 'test input';
    const scriptInputEvent = new ScriptInputEvent(input);
    t.is(scriptInputEvent.get_input(), input);
});

test('is_handled should return false if the event has not been handled', (t) => {
    const scriptInputEvent = new ScriptInputEvent('test input');
    t.false(scriptInputEvent.is_handled());
});

test('is_handled should return true if the event has been handled', (t) => {
    const scriptInputEvent = new ScriptInputEvent(undefined, true);
    t.true(scriptInputEvent.is_handled());
});