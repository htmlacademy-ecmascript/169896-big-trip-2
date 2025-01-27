import {points} from '../mocks/points.js';
import {destinations} from '../mocks/destinations.js';
import {offers} from '../mocks/offers.js';

export default class PointsModel {
  constructor() {
    this.points = points;
    this.offers = offers;
    this.destinations = destinations;
  }

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }

  getOfferByType(type) {
    return this.getOffers()
      .find((offer) => offer.type === type);
  }

  getOfferById(type, itemsId) {
    return this.getOfferByType(type).offers
      .filter((item) => itemsId
        .find((id) => id === item.id));
  }

  getDestinationById(id) {
    return this.getDestinations()
      .find((item) => item.id === id);
  }
};
