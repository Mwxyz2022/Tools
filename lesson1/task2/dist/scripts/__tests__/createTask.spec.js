import { createNewTask } from '../createTask';

it('create new task', () => {
  expect(createNewTask()).toEqual(undefined);
});
