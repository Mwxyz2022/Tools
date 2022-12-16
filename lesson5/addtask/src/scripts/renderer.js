import { storage, getItem } from './storage.js';
import { onDeleteTask } from './deleteTask.js';
import { checkboxChecked } from './checked.js';

export const renderTasks = () => {
  const listElem = document.querySelector('.list');

  const tasksList = getItem(storage) || [];

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.addEventListener('click', checkboxChecked);
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const textElem = document.createElement('span');
      textElem.classList.add('list__item_text');
      textElem.textContent = text;

      const deleteBtnElem = document.createElement('button');

      deleteBtnElem.classList.add('list__item__delete-btn');
      listItemElem.append(checkbox, textElem, deleteBtnElem);
      deleteBtnElem.dataset.id = id;
      deleteBtnElem.addEventListener('click', onDeleteTask);

      return listItemElem;
    });
  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};
