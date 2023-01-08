import View from '../view';
import {html} from '../../utils';

export default class PointTypeView extends View {
  constructor() {
    super();

    this.classList.add('event__type-wrapper');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
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
    `;
  }
}

customElements.define(String(PointTypeView), PointTypeView);
