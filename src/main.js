import SiteMenuComponent from './components/site-menu.js';
import FilterComponent from './components/filter.js';
import BoardComponent from './components/board.js';
import TaskComponent from './components/task.js';
import TaskEditComponent from './components/task-edit.js';
import LoadMoreButtonComponent from './components/load-more-button.js';
import TasksComponent from './components/tasks.js';

import {generateFilters} from './mock/filter.js';
import {generateTasks} from './mock/task.js';
import {render, RenderPosition} from "./utils.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (taskListElement, task) => {
  const onEditButtonClick = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const taskComponent = new TaskComponent(task);
  const editButton = taskComponent.getElement().querySelector('.card__btn--edit');
  editButton.addEventListener('click', onEditButtonClick);

  const taskEditComponent = new TaskEditComponent(task);
  const editForm = taskEditComponent.getElement().querySelector('form');
  editForm.addEventListener('submit', onEditFormSubmit);

  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderBoard = () => {};


const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);


// render(siteControlElement, createSiteMenuTemplate());
// render(siteMainElement, createFilterTemplate(filters));
// render(siteMainElement, createBoardTemplate());
//
// const taskListElement = siteMainElement.querySelector('.board__tasks');
// const boardElement = siteMainElement.querySelector('.board');
//
// render(taskListElement, createTaskEditTemplate(tasks[0]));
//
// let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
//
// tasks.slice(1, showingTasksCount)
//   .forEach((task) => render(taskListElement,
//     createTaskTemplate(task), 'beforeend'));
//
// render(boardElement, createLoadMoreButtonTemplate());
//
// const loadMoreButton = boardElement.querySelector('.load-more');
//
// loadMoreButton.addEventListener('click', () => {
//   const prevTasksCount = showingTasksCount;
//   showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
//
//   tasks.slice(prevTasksCount, showingTasksCount)
//     .forEach((task) => render(taskListElement,
//       createTaskTemplate(task), 'beforeend'));
//
//   if(showingTasksCount >= tasks.length) {
//     loadMoreButton.remove();
//   }
// });

render(siteHeaderElement, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
