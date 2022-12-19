import { deleteTaskAPI, getTasksListOfAPI } from './taskGateway';
import { setItem, storage } from './storage';
import { renderTasks } from './renderer';
//
export const onDeleteTask = (event) => {
  const taskId = event.target.dataset.id;

  deleteTaskAPI(taskId)
    .then(() => getTasksListOfAPI())
    .then((newTasksList) => {
      setItem(storage, newTasksList);
      renderTasks();
    });
};
