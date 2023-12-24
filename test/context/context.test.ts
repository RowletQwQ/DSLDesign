import test from 'ava';
import { Context } from '../../src/context/context.js';

test('enter_new_scope should add a new symbol table to the stack', (t) => {
    const context = new Context(new Map<string, any>());
    context.enter_new_scope();
    t.is(context['symbol_table_stack_'].length, 1);
});

test('exit_current_scope should remove the top symbol table from the stack', (t) => {
    const context = new Context(new Map<string, any>());
    context.enter_new_scope();
    context.exit_current_scope();
    t.is(context['symbol_table_stack_'].length, 0);
});

test('set_local_symbol should set the value of a symbol in the current scope', (t) => {
    const context = new Context(new Map<string, any>());
    context.enter_new_scope();
    context.set_local_symbol('x', 10);
    t.is(context['symbol_table_stack_'][0].get('x'), 10);
});

test('set_global_symbol should set the value of a symbol in the global context', (t) => {
    const context = new Context(new Map<string, any>());
    context.set_global_symbol('x', 10);
    t.is(context['global_symbol_table_'].get('x'), 10);
});


test('set_global_symbol should throw an error if trying to set the value of a constant', (t) => {
    const context = new Context(new Map<string, any>([['PI', 3.14]]));
    t.throws(() => {
        context.set_global_symbol('PI', 3.14159);
    }, { instanceOf: Error });
});

test('assign_local_symbol should assign a value to a local symbol in the context', (t) => {
    const context = new Context(new Map<string, any>());
    context.enter_new_scope();
    context.set_local_symbol('x', 10);
    context.assign_local_symbol('x', 20);
    t.is(context['symbol_table_stack_'][0].get('x'), 20);
});

test('assign_local_symbol should throw an error if the symbol is not found in the local context', (t) => {
    const context = new Context(new Map<string, any>());
    t.throws(() => {
        context.assign_local_symbol('x', 10);
    }, { instanceOf: Error });
});

test('assign_global_symbol should assign a value to a global symbol', (t) => {
    const context = new Context(new Map<string, any>());
    context.set_global_symbol('x', 10);
    context.assign_global_symbol('x', 20);
    t.is(context['global_symbol_table_'].get('x'), 20);
});

test('assign_global_symbol should throw an error if the symbol is not found in the global context', (t) => {
    const context = new Context(new Map<string, any>());
    t.throws(() => {
        context.assign_global_symbol('x', 10);
    }, { instanceOf: Error });
});

test('assign_global_symbol should throw an error if trying to assign a value to a constant', (t) => {
    const context = new Context(new Map<string, any>([['PI', 3.14]]));
    t.throws(() => {
        context.assign_global_symbol('PI', 3.14159);
    }, { instanceOf: Error });
});

test('get_symbol should return the value of a symbol from the current scope', (t) => {
    const context = new Context(new Map<string, any>());
    context.enter_new_scope();
    context.set_local_symbol('x', 10);
    t.is(context.get_symbol('x'), 10);
});

test('get_symbol should return the value of a symbol from the global context', (t) => {
    const context = new Context(new Map<string, any>());
    context.set_global_symbol('x', 10);
    t.is(context.get_symbol('x'), 10);
});

test('get_symbol should return the value of a constant from the global context', (t) => {
    const context = new Context(new Map<string, any>());
    context.set_global_symbol('PI', 3.14);
    t.is(context.get_symbol('PI'), 3.14);
});

test('get_symbol should return undefined if the symbol is not found', (t) => {
    const context = new Context(new Map<string, any>());
    t.is(context.get_symbol('x'), undefined);
});