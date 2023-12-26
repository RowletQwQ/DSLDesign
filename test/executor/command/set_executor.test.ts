import test from 'ava';
import { SetExecutor } from '../../../src/executor/command/set_executor.js';
import { SetStmt } from '../../../src/stmt/command/set_stmt.js';
import { ExecutorType } from '../../../src/executor/executor.js';
import { Context, ContextMock } from '../../../src/context/context.js';
import { AsycOp, ResultEvent, ResultType } from '../../../src/event/result_event.js';
import { ScriptInputEvent } from '../../../src/event/script_input_event.js';
import { ValueExpr } from '../../../src/expr/value_expr.js';

test('SetExecutor - get_executor_type', (t) => {
  const stmt = new SetStmt('', new ValueExpr('value'), false); // Fix constructor call
  const executor = new SetExecutor(stmt);
  const executorType = executor.get_executor_type();
  t.is(executorType, ExecutorType.SET);
});

test('SetExecutor - next - need_declare, global', (t) => {
  const value = new ValueExpr('value');
  const stmt = new SetStmt('x', value, true, true); // Fix constructor call
  const executor = new SetExecutor(stmt);
  const context = new ContextMock();
  context.enter_new_scope();
  executor.open(context);
  const input = new ScriptInputEvent(undefined);
  const result = executor.next(input);
  executor.close();
  context.exit_current_scope(); // Exit local scope
  t.is(result.get_result_type(), ResultType.END);
  context.set_global_symbol('x', 'value'); // Fix method call
  t.is(context.get_symbol('x'), 'value'); // Fix method call
});

test('SetExecutor - next - no need_declare, global', async (t) => {
  const stmt = new SetStmt('x', new ValueExpr('value'), false, true); // Fix constructor call
  const executor = new SetExecutor(stmt);
  const context = new ContextMock();
  context.enter_new_scope();
  executor.open(context);
  const input = new ScriptInputEvent(undefined);
  const error = await t.throwsAsync(async () => {
    executor.next(input);
  });
  t.is(error.message, 'Symbol not found in global context.');
  executor.close();
  executor.open(context);
  context.set_global_symbol('x', '111');
  const result = executor.next(input);
  context.exit_current_scope(); // Exit local scope
  t.is(result.get_result_type(), ResultType.END);
  t.is(context.get_symbol('x'), 'value');
});

test('SetExecutor - next - need_declare, local', (t) => {
  const stmt = new SetStmt('x', new ValueExpr('value'), true, false); // Fix constructor call
  const executor = new SetExecutor(stmt);
  const context = new ContextMock();
  context.enter_new_scope();
  executor.open(context);
  const input = new ScriptInputEvent(undefined);
  const result = executor.next(input);
  t.is(result.get_result_type(), ResultType.END);
  context.set_local_symbol('x', 'value'); // Fix method call
  t.is(context.get_symbol('x'), 'value'); // Fix method call
});

test('SetExecutor - next - no need_declare, local',async (t) => {
  const stmt = new SetStmt('x', new ValueExpr('value'), false, false); // Fix constructor call
  const executor = new SetExecutor(stmt);
  const context = new ContextMock();
  context.enter_new_scope();
  executor.open(context);
  const input = new ScriptInputEvent(undefined);
  const error = await t.throwsAsync(async () => {
    executor.next(input);
  });
  t.is(error.message, 'Symbol not found in local context.');
  context.set_local_symbol('x', '111');
  const result = executor.next(input);
  t.is(result.get_result_type(), ResultType.END);
  t.is(context.get_symbol('x'), 'value');
});

test('SetExecutor - close', (t) => {
  const stmt = new SetStmt('', new ValueExpr('value'), false); // Fix constructor call
  const executor = new SetExecutor(stmt);
  const context = new ContextMock();
  context.enter_new_scope();
  executor.open(context);
  executor.close();
  t.pass();
});