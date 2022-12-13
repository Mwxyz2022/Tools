import { renderTasks } from './renderer.js';
import { storage, setItem } from './storage.js';
import { inputTaskElem } from './elements.js';
import { createTaskToAPI, getTasksListOfAPI } from './taskGateway.js';

export const createNewTask = () => {
  const text = inputTaskElem.value;

  if (!text) {
    return;
  }

  inputTaskElem.value = '';

  const newTask = {
    text,
    done: false,
  };

  createTaskToAPI(newTask)
    .then(() => getTasksListOfAPI())
    .then(newTasksList => {
      setItem(storage, newTasksList);
      renderTasks();
    });
};
