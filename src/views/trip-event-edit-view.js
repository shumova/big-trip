import {createElement} from '../render';
import {TYPES, DEFAULT_TRIP_EVENT} from '../const';
import {humanizeTripEventTime, isSomeAccepted, getAcceptedItems} from '../utils';

function createTripEventEditTimeTemplate(time) {
  return (
    `${time !== null ? `<div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeTripEventTime({time: time.start, format: 'DD/MM/YY HH:mm'})}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeTripEventTime({time: time.end, format: 'DD/MM/YY HH:mm'})}">
    </div>` : ''}`
  );
}

function createTripEventEditOffersTemplate(offers) {
  return (
    `${isSomeAccepted(offers) ? `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offers.map((offer) => `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.name}" type="checkbox" name="event-offer-${offer.name}" ${offer.acceptance ? 'checked' : ''}>
          <label class="event__offer-label" for="event-offer-${offer}">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </label>
        </div>`).join('')}
      </div>
    </section>` : ''}`
  );
}

function createTripEventEditTypeTemplate(currentType) {
  return `<div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${currentType}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>

        ${TYPES.map((type) => `<div class="event__type-item">
          <input id="event-type-${type}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${currentType === type ? 'checked' : ''}>
          <label class="event__type-label  event__type-label--${type}" for="event-type-${type}">${type[0].toUpperCase() + type.slice(1)}</label>
        </div>`).join('')}

      </fieldset>
    </div>
  </div>`;
}

function createTripEventEditDestinationTemplate(currentDestination) {
  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${currentDestination.description}</p>
      ${currentDestination.photos ? `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${currentDestination.photos.map((photo) => `<img class="event__photo" src="img/photos/${photo}.jpg" alt="Event photo">`).join('')}
        </div>
      </div>` : ''}
    </section>`
  );
}

function createTripEventEditTemplate(tripEvent) {
  const {time, offers, type, destination, price} = tripEvent;

  const timeTemplate = createTripEventEditTimeTemplate(time);

  const offersTemplate = createTripEventEditOffersTemplate(offers);

  const typeTemplate = createTripEventEditTypeTemplate(type);

  const currentDestination = getAcceptedItems(destination)[0] || false;

  const destinationTemplate = currentDestination ? createTripEventEditDestinationTemplate(currentDestination) : '';

  return (`<form class="event event--edit" action="#" method="post">
      <header class="event__header">

        ${typeTemplate}

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type[0].toUpperCase() + type.slice(1)}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${currentDestination ? currentDestination.title : ''}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        ${timeTemplate}

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${price}>
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">

        ${offersTemplate}

        ${destinationTemplate}

      </section>
    </form>`
  );
}

export default class TripEventEditView {
  constructor({tripEvent = DEFAULT_TRIP_EVENT}) {
    this.tripEvent = tripEvent;
  }

  getTemplate() {
    return createTripEventEditTemplate(this.tripEvent);
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
