import View from '../view';
import {html} from '../../utils';

export default class OffersView extends View {
  constructor() {
    super();

    this.classList.add('event__section', 'event__section--offers');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
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
    `;
  }
}

customElements.define(String(OffersView), OffersView);
