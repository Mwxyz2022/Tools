import { createNewTask } from './list/createTask';
import { renderTasks } from './list/renderer';

import { inputBtnElem } from './list/elements';
import { getTasksListOfAPI } from './list/taskGateway';
import { setItem, storage } from './list/storage';
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
