import test from 'ava';
import { PostExecutor } from '../../../src/executor/command/post_executor.js';
import { PostStmt } from '../../../src/stmt/command/post_stmt.js';
import { Context, ContextMock } from '../../../src/context/context.js';
import { ScriptInputEvent } from '../../../src/event/script_input_event.js';
import { AsycOp, ResultEvent, ResultType } from '../../../src/event/result_event.js';
import { TemplateStringExpr } from '../../../src/expr/template_string_expr.js';
import { ExecutorType } from '../../../src/executor/executor.js';
import nock from 'nock';
import fetch from 'node-fetch';
test('open should generate target URL based on URL expression', (t) => {
  
  const stmt = new PostStmt('source', 'https://example.com/api/123');
  const executor = new PostExecutor(stmt);

  const context = new ContextMock();
  context.enter_new_scope();
  context.set_local_symbol('source', { id: 123 });

  executor.open(context);

  t.is(executor.get_executor_type(), ExecutorType.POST);
  t.is(executor['target_url_'].toString(), 'https://example.com/api/123');
});

test('next should send a POST request and return a ResultEvent', async (t) => {
  const stmt = new PostStmt('source', 'https://example.com/api');
  const executor = new PostExecutor(stmt);

  const context = new ContextMock();
  context.enter_new_scope();
  context.set_local_symbol('source', { id: 123 });

  executor.open(context);
  // Mock the server
  const server = nock('https://example.com').post('/api', {id:123}).reply(200, 'OK');
  const inputEvent = new ScriptInputEvent(undefined);
  const resultEvent = executor.next(inputEvent);
  t.is(resultEvent.get_result_type(), ResultType.NEED_ASYNC);
  let payload = resultEvent.get_payload();
  t.false(payload == undefined);
  t.is(payload.op, AsycOp.POST);
  t.false(payload.data == undefined);
  t.is(payload.url.toString(), 'https://example.com/api');
  t.is(payload.data, '{"id":123}')
  let req = await fetch(payload.url, {
    method: 'POST',
    body: payload.data,
  });
  t.is(req.status, 200);
  let data = await req.text();
  t.is(data, 'OK');
  let input_event = new ScriptInputEvent(undefined);
  input_event.set_payload({ op:AsycOp.POST, url: payload.url, data: data });
  const result = executor.next(input_event);
  t.is(result.get_result_type(), ResultType.END);
  server.done();
});