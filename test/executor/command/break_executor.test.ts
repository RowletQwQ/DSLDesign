import test from 'ava';
import { BreakExecutor } from '../../../src/executor/command/break_executor.js';
import { BreakStmt } from '../../../src/stmt/command/break_stmt.js';
import { Context } from '../../../src/context/context.js';
import { ExecutorType } from '../../../src/executor/executor.js';
import { ScriptInputEvent } from '../../../src/event/script_input_event.js';
import { ResultEvent,ResultType } from '../../../src/event/result_event.js';

test('get_executor_type should return the executor type', (t) => {
    const stmt = new BreakStmt();
    const executor = new BreakExecutor(stmt);
    t.is(executor.get_executor_type(), ExecutorType.BREAK);
});

test('open should set the upper context', (t) => {
    const stmt = new BreakStmt();
    const executor = new BreakExecutor(stmt);
    const context = new Context(new Map());
    executor.open(context);
    t.is(executor['upper_context_'], context);
});

test('next should return a ResultEvent with ResultType.BREAK', (t) => {
    const stmt = new BreakStmt();
    const executor = new BreakExecutor(stmt);
    const input = new ScriptInputEvent('test input');
    const result = executor.next(input);
    t.true(result instanceof ResultEvent);
    t.is(result.get_result_type(), ResultType.BREAK);
});

test('close should do nothing', (t) => {
    const stmt = new BreakStmt();
    const executor = new BreakExecutor(stmt);
    executor.close();
    t.pass();
});