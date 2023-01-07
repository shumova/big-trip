import View from './view';
import {html} from '../utils';

export default class PointView extends View {
  constructor() {
    super();

    this.classList.add('event');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <time class="event__date" datetime="2019-03-18">Mar 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Event type icon">
      </div>
      <h3 class="event__title">Check-in Chamonix</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T16:20">16:20</time>
          —
          <time class="event__end-time" datetime="2019-03-19T17:20">17:20</time>
        </p>
      </div>
      <p class="event__price">
        €&nbsp;<span class="event__price-value">600</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Add breakfast</span>
          +€&nbsp;
          <span class="event__offer-price">50</span>
        </li><li class="event__offer">
          <span class="event__offer-title">King-size bed</span>
          +€&nbsp;
          <span class="event__offer-price">150</span>
        </li>

      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `;
  }
}

customElements.define(String(PointView), PointView);
