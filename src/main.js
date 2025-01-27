import ListPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model.js';

export const filtersContainer = document.querySelector('.trip-controls__filters');
export const mainContainer = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const listPresenter = new ListPresenter({
  pointsModel,
});

listPresenter.init();
