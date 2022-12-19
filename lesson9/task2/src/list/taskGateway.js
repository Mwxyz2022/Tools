const baseUrl = 'https://638a2fb34eccb986e8a68dd4.mockapi.io/api/v1/tasks';

export const getTasksListOfAPI = () => {
  return fetch(baseUrl).then(resronse => resronse.json());
};

export const createTaskToAPI = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
};

export const updatedTaskAPI = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTaskAPI = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
