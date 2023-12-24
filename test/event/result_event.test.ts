import test from 'ava';
import { ResultEvent,ResultType } from '../../src/event/result_event.js';


test('set_menu should set the menu', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.MENU);
  const menu = ['Option 1', 'Option 2', 'Option 3'];
  resultEvent.set_menu(menu);
  t.deepEqual(resultEvent.get_menu(), menu);
});

test('get_return_code should return the return code', (t) => {
  const returnCode = 0;
  const resultEvent = new ResultEvent(returnCode, 'result', ResultType.END);
  t.is(resultEvent.get_return_code(), returnCode);
});

test('get_result should return the result', (t) => {
  const result = 'result';
  const resultEvent = new ResultEvent(0, result, ResultType.END);
  t.is(resultEvent.get_result(), result);
});

test('get_result_type should return the result type', (t) => {
  const resultType = ResultType.END;
  const resultEvent = new ResultEvent(0, 'result', resultType);
  t.is(resultEvent.get_result_type(), resultType);
});

test('get_timer should return the timer', (t) => {
  const timer = 1000;
  const resultEvent = new ResultEvent(0, 'result', ResultType.END, timer);
  t.is(resultEvent.get_timer(), timer);
});

test('is_menu should return true if the result type is MENU', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.MENU);
  t.true(resultEvent.is_menu());
});

test('is_finished should return true if the result type is END', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.END);
  t.true(resultEvent.is_finished());
});

test('is_exit should return true if the result type is EXIT', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.EXIT);
  t.true(resultEvent.is_exit());
});

test('is_continue should return true if the result type is CONTINUE', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.CONTINUE);
  t.true(resultEvent.is_continue());
});

test('is_input should return true if the result type is INPUT', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.INPUT);
  t.true(resultEvent.is_input());
});

test('is_output should return true if the result type is OUTPUT', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.OUTPUT);
  t.true(resultEvent.is_output());
});

test('is_break should return true if the result type is BREAK', (t) => {
  const resultEvent = new ResultEvent(0, 'result', ResultType.BREAK);
  t.true(resultEvent.is_break());
});