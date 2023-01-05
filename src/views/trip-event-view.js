import {createElement} from '../render';
import {humanizeTripEventTime, getAcceptedItems, isSomeAccepted} from '../utils';

function createTripEventTemplate(tripEvent) {
  const {time, type, destination, price, offers} = tripEvent;

  const datetime = humanizeTripEventTime({time: time.start, format: 'YYYY-MM-DD'}),
    shortDate = humanizeTripEventTime({time: time.start, format: 'MMM DD'}),
    startTime = humanizeTripEventTime({time: time.start, format: 'HH:mm'}),
    endTime = humanizeTripEventTime({time: time.end, format: 'HH:mm'}),
    startFullTime = humanizeTripEventTime({time: time.start, format: 'YYYY-MM-DDTHH:mm'}),
    endFullTime = humanizeTripEventTime({time: time.end, format: 'YYYY-MM-DDTHH:mm'});

  const currentDestination = getAcceptedItems(destination)[0] || false;

  return (`<div class="event">
      <time class="event__date" datetime="${datetime}">${shortDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type[0].toUpperCase() + type.slice(1)} ${currentDestination.title}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${startFullTime}">${startTime}</time>
          —
          <time class="event__end-time" datetime="${endFullTime}">${endTime}</time>
        </p>
      </div>
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${isSomeAccepted(offers) ? `${offers.map((offer) => offer.acceptance ? `<li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </li>` : '').join('')}` : `<li class="event__offer">
          <span class="event__offer-title">No additional offers</span>
        </li>`}

      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>}`
  );
}

export default class TripEventView {
  constructor({tripEvent}) {
    this.tripEvent = tripEvent;
  }

  getTemplate() {
    return createTripEventTemplate(this.tripEvent);
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
}
