import test from 'ava';

import { ExecutorType } from '../../../src/executor/executor.js';
import { CommandExecutor } from '../../../src/executor/command_executor.js';
import { CaseStmt } from '../../../src/stmt/command/case_stmt.js';
import { Context, ContextMock } from '../../../src/context/context.js';
import { CommandStmtMock, CommandStmtType } from '../../../src/stmt/command_stmt.js';
import { StmtMock, StmtType } from '../../../src/stmt/stmt.js';
import { CaseExecutor } from '../../../src/executor/command/case_executor.js';
import { ScriptInputEvent } from '../../../src/event/script_input_event.js';
import { ResultEvent, ResultType } from '../../../src/event/result_event.js';
import { InputExecutor } from '../../../src/executor/command/input_executor.js';
import { InputStmt } from '../../../src/stmt/command/input_stmt.js';
import { BreakStmt } from '../../../src/stmt/command/break_stmt.js';

test('CaseExecutor should throw an error if CaseStmt does not have at least one command', (t) => {
    const stmt = new CaseStmt([]);
    t.throws(() => new CaseExecutor(stmt), { message: 'CaseStmt should have at least one command' });
});

test('CaseExecutor should initialize the local context and open the first command executor', (t) => {
    const command1 = new BreakStmt();
    const command2 = new BreakStmt();
    const stmt = new CaseStmt([command1, command2]);
    const executor = new CaseExecutor(stmt);
    const context = new ContextMock();
    executor.open(context);
    t.is(executor.get_executor_type(), ExecutorType.CASE);
    t.is(executor.get_current_index(), 0);
    t.is(executor.get_context(), context);
    t.true(context.is_in_scope());
});

test('CaseExecutor should interrupt at correct index', (t) => {
    const command1 = new CommandStmtMock();
    const command2 = new InputStmt("test",null,null);
    const stmt = new CaseStmt([command1, command2]);
    const executor = new CaseExecutor(stmt);
    const context = new Context(new Map());
    executor.open(context);
    const input = new ScriptInputEvent(undefined);
    const result1 = new ResultEvent(0, "Need Input", ResultType.INPUT);

    const result = executor.next(input);

    t.deepEqual(result, result1);
    t.is(executor.get_current_index(), 1);
});

test('CaseExecutor should return the end result if all commands have been executed', (t) => {
    const command1  = new CommandStmtMock();
    const stmt = new CaseStmt([command1]);
    const executor = new CaseExecutor(stmt);
    const context = new ContextMock();
    executor.open(context);
    const input = new ScriptInputEvent('test input');
    const result1 = new ResultEvent(0, "", ResultType.END);

    const result = executor.next(input);
    t.deepEqual(result, result1);
    t.is(executor.get_current_index(), 1);
});

test('CaseExecutor should close the executor and exit the current scope', (t) => {
    const command1  = new CommandStmtMock();
    const stmt = new CaseStmt([command1]);
    const executor = new CaseExecutor(stmt);
    const context = new ContextMock();
    executor.open(context);

    executor.close();

    t.false(context.is_in_scope());
});