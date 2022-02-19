import AbstractComponent from './abstract-component.js';

export const SortType = {
  DATE_DOWN: 'date-down',
  DATE_UP: 'date-up',
  DEFAULT: 'default',
};


const createSortTemplate = () => {
  return (
    `<div class="board__sort-list">
        <a href="#" data-sort-type="${SortType.DEFAULT}" class="board__sort-item">SORT BY DEFAULT</a>
        <a href="#" data-sort-type="${SortType.DATE_UP}" class="board__sort-item">SORT BY DATE up</a>
        <a href="#" data-sort-type="${SortType.DATE_DOWN}" class="board__sort-item">SORT BY DATE down</a>
    </div>`
  );
};

export default class Sort extends AbstractComponent {
  constructor(currentSortType) {
    super();

    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortChangeHandler(handler) {
    this.getElement().addEventListener('click', (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== 'A') {
        return;
      }

      const sortType = evt.target.dataset.getSortType;

      if(this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    });
  }
}
