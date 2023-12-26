import test from 'ava';
import { FetchExecutor } from '../../../src/executor/command/fetch_executor.js';
import { FetchStmt } from '../../../src/stmt/command/fetch_stmt.js';
import { ExecutorType } from '../../../src/executor/executor.js';
import { ContextMock } from '../../../src/context/context.js';
import { AsycOp, ResultEvent, ResultType } from '../../../src/event/result_event.js';
import { ScriptInputEvent } from '../../../src/event/script_input_event.js';


test('FetchExecutor - get_executor_type', (t) => {
  const stmt = new FetchStmt('http://localhost:8080','test');
  const executor = new FetchExecutor(stmt);
  const executorType = executor.get_executor_type();
  t.is(executorType, ExecutorType.FETCH);
});


test('FetchExecutor - fetch value', (t) => {
    const stmt = new FetchStmt('http://localhost:8080','test');
    const executor = new FetchExecutor(stmt);
    const context = new ContextMock();
    context.enter_new_scope();
    executor.open(context);
    const input = new ScriptInputEvent(undefined);
    const result = executor.next(input);
    const correct_res = new ResultEvent(0, "", ResultType.NEED_ASYNC);
    correct_res.set_payload({
        op: AsycOp.GET,
        data: null,
        url: new URL('http://localhost:8080'),
    });
    t.deepEqual(result, correct_res);
    const fetch_input = new ScriptInputEvent(undefined);
    const json = {"test": "test"}
    fetch_input.set_payload({
        op: AsycOp.GET,
        data: json,
        url: new URL('http://localhost:8080'),
    });
    const fetch_result = executor.next(fetch_input);
    const result2 = new ResultEvent(0, "", ResultType.END);
    t.deepEqual(fetch_result, result2);
    const value = context.get_symbol('test');
    t.deepEqual(value, json);
});

