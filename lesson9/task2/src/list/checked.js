import { renderTasks } from './renderer';
import { storage, getItem, setItem } from './storage';

import { updatedTaskAPI, getTasksListOfAPI } from './taskGateway';

export const checkboxChecked = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) return;

  const taskId = event.target.dataset.id;
  const tasksList = getItem(storage);
  const { text } = tasksList.find((task) => task.id === taskId);
  const done = event.target.checked;

  const updatedTaskData = {
    id: taskId,
    text,
    done,
  };

  updatedTaskAPI(taskId, updatedTaskData)
    .then(() => getTasksListOfAPI())
    .then((newTasksList) => {
      setItem(storage, newTasksList);
      renderTasks();
    });
};
