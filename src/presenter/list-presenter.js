import ListFilterView from '../view/list-filter-view.js';
import ListSortView from '../view/list-sort-view.js';
import ListContainerView from '../view/list-container-view.js';
import EditPointView from '../view/edit-point-view.js';
import ItemView from '../view/item-view.js';
import {render} from '../render.js';
import {filtersContainer, mainContainer} from '../main.js';

export default class ListPresenter {
  listComponent = new ListContainerView();

  constructor({pointsModel}) {
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];

    render(new ListFilterView(), filtersContainer);
    render(new ListSortView(), mainContainer);
    render(this.listComponent, mainContainer);

    render(new EditPointView({
      destinations: this.pointsModel.getDestinations(),
      offers: this.pointsModel.getOffers(),
    }), this.listComponent.getElement());

    render(new EditPointView({
      point: this.listPoints[0],
      destination: this.pointsModel.getDestinationById(
        this.listPoints[0].destination),
      destinations: this.pointsModel.getDestinations(),
      offers: this.pointsModel.getOffers()
    }), this.listComponent.getElement());

    this.listPoints.forEach((point) => {
      render(new ItemView({
        point,
        destination: this.pointsModel.getDestinationById(
          point.destination),
        offers: this.pointsModel.getOfferById(
          point.type,
          point.offers
        )
      }), this.listComponent.getElement());
    });
  }
}
