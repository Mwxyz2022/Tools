import { renderTasks } from './renderer.js';
import { storage, getItem, setItem } from './storage.js';
import { listElem } from './elements.js';
import { updatedTaskAPI, getTasksListOfAPI } from './taskGateway.js';

export const checkboxChecked = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) return;

  const taskId = event.target.dataset.id;
  const tasksList = getItem(storage);
  const { text } = tasksList.find(task => task.id === taskId);
  const done = event.target.checked;

  const updatedTaskData = {
    id: taskId,
    text,
    done,
  };

  updatedTaskAPI(taskId, updatedTaskData)
    .then(() => getTasksListOfAPI())
    .then(newTasksList => {
      setItem(storage, newTasksList);
      renderTasks();
    });
};

// 1. подготовить данные.
// 2. записать на сервер
// 3. считать с сервера обновить Storage
// 4. обновить ЮА
