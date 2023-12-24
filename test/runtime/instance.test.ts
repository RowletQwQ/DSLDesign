import test from 'ava';
import { Instance } from '../../src/runtime/instance.js';
import { ExecutorMock } from '../../src/executor/executor.js';


test('is_running should return the correct value', (t) => {
  const executor = new ExecutorMock();
  const instance = new Instance('instance1', executor);
  t.false(instance.is_running());
});

test('start should set is_running to true', (t) => {
  const executor = new ExecutorMock();
  const instance = new Instance('instance1', executor);
  instance.start();
  t.true(instance.is_running());
});

test('close should set is_running to false', (t) => {
  const executor = new ExecutorMock();
  const instance = new Instance('instance1', executor);
  instance.start();
  instance.close();
  t.false(instance.is_running());
});

test('push_input should add input to the input buffer', (t) => {
  const executor = new ExecutorMock();
  const instance = new Instance('instance1', executor);
  instance.push_input('input1');
  t.deepEqual(instance['input_buffer_'], ['input1']);
});

test('get_instance_id should return the instance ID', (t) => {
  const executor = new ExecutorMock();
  const instance = new Instance('instance1', executor);
  t.is(instance.get_instance_id(), 'instance1');
});