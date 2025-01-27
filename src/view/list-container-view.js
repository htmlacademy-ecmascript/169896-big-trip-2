
import {createElement} from '../render.js';

function createListContainerTemplate() {
  return '<ul class="trip-events__list"></ul>';
};

export default class ListContainerView {
  getTemplate() {
    return createListContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
};
