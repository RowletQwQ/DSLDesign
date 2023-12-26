import test from 'ava';
import { InputStmt } from '../../../src/stmt/command/input_stmt.js';
import { InputExecutor } from '../../../src/executor/command/input_executor.js';
import { Context, ContextMock } from '../../../src/context/context.js';
import { ScriptInputEvent } from '../../../src/event/script_input_event.js';
import { WhenSilenceStmt } from '../../../src/stmt/command/when_silence_stmt.js';
import { ValueExpr } from '../../../src/expr/value_expr.js';
import { CommandStmtMock } from '../../../src/stmt/command_stmt.js';
import { ResultType } from '../../../src/event/result_event.js';


test('InputExecutor - Assignment Test', (t) => {
  const stmt = new InputStmt('target', null, null);
  const executor = new InputExecutor(stmt);
  const context = new ContextMock();
  context.enter_new_scope();
  executor.open(context);
  const inputEvent = new ScriptInputEvent('10');
  const resultEvent = executor.next(inputEvent);
  t.is(resultEvent.get_result_type(), ResultType.END);
  t.is(context.get_symbol('target'), 10);
});

test('InputExecutor - Timeout Test', (t) => {
  const when_silence_stmt = new WhenSilenceStmt(new ValueExpr(10), [new CommandStmtMock()]);
  const stmt = new InputStmt('target',when_silence_stmt, null);
  const executor = new InputExecutor(stmt);
  const context = new ContextMock();
  executor.open(context);
  context.enter_new_scope();
  const inputEvent = new ScriptInputEvent(undefined, true);
  const resultEvent = executor.next(inputEvent);

  t.is(resultEvent.get_result_type(), ResultType.END);
  t.is(context.get_symbol('target'), undefined);
});