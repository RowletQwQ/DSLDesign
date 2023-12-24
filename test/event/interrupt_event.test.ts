import test from 'ava';
import { InterruptEvent, InterruptReason } from '../../src/event/interrupt_event.js';

test('get_reason should return the interrupt reason', (t) => {
    const reason = InterruptReason.EXIT;
    const description = 'Exit reason';
    const event = new InterruptEvent(reason, description);
    t.is(event.get_reason(), reason);
});

test('get_description should return the interrupt description', (t) => {
    const reason = InterruptReason.INPUT;
    const description = 'Input reason';
    const event = new InterruptEvent(reason, description);
    t.is(event.get_description(), description);
});

test('set_menu should set the menu options for the interrupt event', (t) => {
    const reason = InterruptReason.OUTPUT;
    const description = 'Output reason';
    const event = new InterruptEvent(reason, description);
    const menu = ['Option 1', 'Option 2', 'Option 3'];
    event.set_menu(menu);
    t.deepEqual(event.get_menu(), menu);
});

test('is_exit should return true if the interrupt reason is EXIT', (t) => {
    const reason = InterruptReason.EXIT;
    const description = 'Exit reason';
    const event = new InterruptEvent(reason, description);
    t.true(event.is_exit());
});

test('is_input should return true if the interrupt reason is INPUT', (t) => {
    const reason = InterruptReason.INPUT;
    const description = 'Input reason';
    const event = new InterruptEvent(reason, description);
    t.true(event.is_input());
});

test('is_output should return true if the interrupt reason is OUTPUT', (t) => {
    const reason = InterruptReason.OUTPUT;
    const description = 'Output reason';
    const event = new InterruptEvent(reason, description);
    t.true(event.is_output());
});

test('is_error should return true if the interrupt reason is ERROR', (t) => {
    const reason = InterruptReason.ERROR;
    const description = 'Error reason';
    const event = new InterruptEvent(reason, description);
    t.true(event.is_error());
});

test('is_show_menu should return true if the interrupt reason is SHOW_MENU', (t) => {
    const reason = InterruptReason.SHOW_MENU;
    const description = 'Show menu reason';
    const event = new InterruptEvent(reason, description);
    t.true(event.is_show_menu());
});