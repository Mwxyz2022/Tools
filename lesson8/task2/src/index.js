import { createNewTask } from './list/createTask.js';
import { renderTasks } from './list/renderer.js';

import { inputBtnElem } from './list/elements.js';
import { getTasksListOfAPI } from './list/taskGateway.js';
import { setItem, storage } from './list/storage.js';
import './index.scss';

inputBtnElem.addEventListener('click', createNewTask);

document.addEventListener('DOMContentLoaded', () => {
  getTasksListOfAPI().then((tasksList) => {
    setItem(storage, tasksList);
    renderTasks();
  });
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// взять данные с сервера
// обновить storage
