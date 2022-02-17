import BoardComponent from './components/board.js';
import BoardController from "./controllers/board.js"
import FilterComponent from './components/filter.js';
import SiteMenuComponent from './components/site-menu.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';



const TASK_COUNT = 22;

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);

