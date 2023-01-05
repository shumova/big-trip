
import TripEventView from '../views/trip-event-view';
import TripEventEditView from '../views/trip-event-edit-view';
import TripEventAddView from '../views/trip-event-add-view';
import {render} from '../render';
import ListItemView from '../views/list-item-view';

export default class TripEventsPresenter {
  constructor({tripEventsModel}) {
    this.tripEventsModel = tripEventsModel;
  }

  init() {
    const tripEventsElement = document.querySelector('.trip-events');
    const tripEventsListElement = tripEventsElement.querySelector('.trip-events__list');

    this.tripEvents = [...this.tripEventsModel.getTripEvents()];

    for (let i = 0; i < this.tripEvents.length; i++) {
      const tripEventsListItemComponent = new ListItemView;
      tripEventsListElement.insertAdjacentElement('beforeend', tripEventsListItemComponent);
      switch (i) {
        case 0:
          render(new TripEventEditView({tripEvent: this.tripEvents[i]}), tripEventsListItemComponent.children[0]);
          break;
        case 1:
          render(new TripEventAddView({tripEvent: this.tripEvents[i]}), tripEventsListItemComponent.children[0]);
          break;
        default:
          render(new TripEventView({tripEvent: this.tripEvents[i]}), tripEventsListItemComponent.children[0]);
      }
    }
  }
}
