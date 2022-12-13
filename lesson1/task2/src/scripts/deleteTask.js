import { deleteTaskAPI, getTasksListOfAPI } from './taskGateway.js';
import { setItem, storage } from './storage.js';
import { renderTasks } from './renderer.js';
//
export const onDeleteTask = event => {
  const taskId = event.target.dataset.id;

  deleteTaskAPI(taskId)
    .then(() => getTasksListOfAPI())
    .then(newTasksList => {
      setItem(storage, newTasksList);
      renderTasks();
    });
};

/**
 * узнать id елемента
 * обновить данные на сервере
 * обновить storage
 * отрисовать эл.
 */
