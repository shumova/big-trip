import {createElement} from '../render';

function createTripEventEditTimeTemplate() {
  return (
    ` <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
      —
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 13:35">
    </div>`
  );
}

function createTripEventEditOffersTemplate() {
  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage" type="checkbox" name="event-offer-luggage" checked="">
          <label class="event__offer-label" for="event-offer-[object Object]">
            <span class="event__offer-title">Add luggage</span>
            +€&nbsp;
            <span class="event__offer-price">50</span>
          </label>
        </div><div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort" type="checkbox" name="event-offer-comfort">
          <label class="event__offer-label" for="event-offer-[object Object]">
            <span class="event__offer-title">Switch to comfort</span>
            +€&nbsp;
            <span class="event__offer-price">80</span>
          </label>
        </div><div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal" type="checkbox" name="event-offer-meal" checked="">
          <label class="event__offer-label" for="event-offer-[object Object]">
            <span class="event__offer-title">Add meal</span>
            +€&nbsp;
            <span class="event__offer-price">15</span>
          </label>
        </div><div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats" type="checkbox" name="event-offer-seats" checked="">
          <label class="event__offer-label" for="event-offer-[object Object]">
            <span class="event__offer-title">Choose seats</span>
            +€&nbsp;
            <span class="event__offer-price">5</span>
          </label>
        </div><div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-train" type="checkbox" name="event-offer-train">
          <label class="event__offer-label" for="event-offer-[object Object]">
            <span class="event__offer-title">Travel by train</span>
            +€&nbsp;
            <span class="event__offer-price">40</span>
          </label>
        </div>
      </div>
    </section>`
  );
}

function createTripEventEditTypeTemplate() {
  return (
    `<div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          <div class="event__type-item">
            <input id="event-type-flight" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked="">
            <label class="event__type-label  event__type-label--flight" for="event-type-flight">Flight</label>
          </div><div class="event__type-item">
            <input id="event-type-taxi" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi">Taxi</label>
          </div><div class="event__type-item">
            <input id="event-type-bus" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
            <label class="event__type-label  event__type-label--bus" for="event-type-bus">Bus</label>
          </div><div class="event__type-item">
            <input id="event-type-train" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
            <label class="event__type-label  event__type-label--train" for="event-type-train">Train</label>
          </div><div class="event__type-item">
            <input id="event-type-ship" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
            <label class="event__type-label  event__type-label--ship" for="event-type-ship">Ship</label>
          </div><div class="event__type-item">
            <input id="event-type-drive" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
            <label class="event__type-label  event__type-label--drive" for="event-type-drive">Drive</label>
          </div><div class="event__type-item">
            <input id="event-type-check-in" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in">Check-in</label>
          </div><div class="event__type-item">
            <input id="event-type-sightseeing" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing">Sightseeing</label>
          </div><div class="event__type-item">
            <input id="event-type-restaurant" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>`
  );
}

function createTripEventEditDestinationTemplate() {
  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac Léman (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          <img class="event__photo" src="img/photos/1.jpg" alt="Event photo"><img class="event__photo" src="img/photos/2.jpg" alt="Event photo"><img class="event__photo" src="img/photos/3.jpg" alt="Event photo"><img class="event__photo" src="img/photos/4.jpg" alt="Event photo"><img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
        </div>
      </div>
    </section>`
  );
}

function createTripEventEditTemplate() {
  const timeTemplate = createTripEventEditTimeTemplate();

  const offersTemplate = createTripEventEditOffersTemplate();

  const typeTemplate = createTripEventEditTypeTemplate();

  const destinationTemplate = createTripEventEditDestinationTemplate();

  return (`<form class="event event--edit" action="#" method="post">
      <header class="event__header">

        ${typeTemplate}

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
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
            €
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="120">
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

  getTemplate() {
    return createTripEventEditTemplate();
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
