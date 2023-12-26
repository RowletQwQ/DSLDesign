import test from 'ava';
import { IfExecutor } from '../../../src/executor/command/if_executor.js';
import { IfStmt } from '../../../src/stmt/command/if_stmt.js';

import { Context, ContextMock } from '../../../src/context/context.js';

import { ScriptInputEvent } from '../../../src/event/script_input_event.js';
import { ResultEvent, ResultType } from '../../../src/event/result_event.js';

import { ValueExpr } from '../../../src/expr/value_expr.js';
import { CommandStmtMock } from '../../../src/stmt/command_stmt.js';
import { ExecutorMock, ExecutorType } from '../../../src/executor/executor.js';
import { CommandExecutor } from '../../../src/executor/command_executor.js';

test('IfExecutor should have the correct executor type', (t) => {
    const true_value = new ValueExpr(true);
    const stmt = new IfStmt(true_value,[new CommandStmtMock()]);
    const executor = new IfExecutor(stmt);
    t.is(executor.get_executor_type(), ExecutorType.IF);
});

test('IfExecutor should open and execute the if branch if the condition is true', (t) => {
    const true_value = new ValueExpr(true);
    const stmt = new IfStmt(true_value,[new CommandStmtMock()]);
    const commandExecutor = new ExecutorMock();
    const context = new ContextMock();
    const executor = new IfExecutor(stmt);
    executor['this_command_seq_'] = [commandExecutor];
    executor.open(context);
    t.false(executor['in_branch_']);
});

test('IfExecutor should open and execute the else branch if the condition is false and there is no else if branch', (t) => {
    const false_value = new ValueExpr(false);
    const stmt = new IfStmt(false_value,[new CommandStmtMock()], null,[new CommandStmtMock()]);
    const commandExecutor = new ExecutorMock();
    const context = new ContextMock();
    const executor = new IfExecutor(stmt);
    executor['this_command_seq_'] = [commandExecutor];
    executor.open(context);
    t.false(executor['in_branch_']);
});

test('IfExecutor should open and execute the else if branch if the condition is false and there is an else if branch', (t) => {
    const true_value = new ValueExpr(true);
    const false_value = new ValueExpr(false);
    
    const elseIfStmt = new IfStmt(true_value,[new CommandStmtMock()]);
    const stmt = new IfStmt(false_value,[new CommandStmtMock()], elseIfStmt);
    const context = new ContextMock();
    const executor = new IfExecutor(stmt);
    executor['branch_executor_'] = new IfExecutor(elseIfStmt);
    executor.open(context);
    t.true(executor['in_branch_']);
});

test('IfExecutor should return the result event with END type if there are no child executors', (t) => {
    const true_value = new ValueExpr(true);
    const stmt = new IfStmt(true_value,[new CommandStmtMock()]);
    const context = new ContextMock();
    const executor = new IfExecutor(stmt);
    const input = new ScriptInputEvent(undefined);
    executor.open(context);
    const result = executor.next(input);
    t.is(result.get_result_type(), ResultType.END);
});

test('IfExecutor should exit the current scope when closed', (t) => {
    const true_value = new ValueExpr(true);
    const stmt = new IfStmt(true_value,[new CommandStmtMock()]);
    const context = new ContextMock();
    const executor = new IfExecutor(stmt);
    executor.open(context);
    executor.close();
    t.false(context.is_in_scope());
});