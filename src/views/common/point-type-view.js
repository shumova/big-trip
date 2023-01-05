import View from '../view';
import {html} from '../../utils';
import {TYPES} from '../../const';

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
        <img class="event__type-icon" width="17" height="17" src="img/icons/${this.currentType}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          ${TYPES.map((type) => `<div class="event__type-item">
            <input id="event-type-${type}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${this.currentType === type ? 'checked' : ''}>
            <label class="event__type-label  event__type-label--${type}" for="event-type-${type}">${type[0].toUpperCase() + type.slice(1)}</label>
          </div>`).join('')}
      </fieldset>
    `;
  }
}

customElements.define(String(PointTypeView), PointTypeView);
