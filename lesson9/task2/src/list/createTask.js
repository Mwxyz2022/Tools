import { renderTasks } from './renderer';
import { storage, setItem } from './storage';
import { inputTaskElem } from './elements';
import { createTaskToAPI, getTasksListOfAPI } from './taskGateway';

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
    .then((newTasksList) => {
      setItem(storage, newTasksList);
      renderTasks();
    });
};
