import { createNewTask } from './createTask.js';
import { renderTasks } from './renderer.js';

import { inputBtnElem } from './elements.js';
import { getTasksListOfAPI } from './taskGateway.js';
import { setItem, storage } from './storage.js';

inputBtnElem.addEventListener('click', createNewTask);

document.addEventListener('DOMContentLoaded', () => {
  getTasksListOfAPI().then(tasksList => {
    setItem(storage, tasksList);
    renderTasks();
  });
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// взять данные с сервера
// обновить storage
