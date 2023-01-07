import View from '../view';
import {html} from '../../utils';

export default class DestinationDetailsView extends View {
  constructor() {
    super();

    this.classList.add('event__section', 'event__section--destination');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">Geneva is&nbsp;a&nbsp;city in&nbsp;Switzerland that lies at&nbsp;the southern tip of&nbsp;expansive Lac Léman (Lake Geneva). Surrounded by&nbsp;the Alps and Jura mountains, the city has views of&nbsp;dramatic Mont Blanc.</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          <img class="event__photo" src="img/photos/1.jpg" alt="Event photo"><img class="event__photo" src="img/photos/2.jpg" alt="Event photo"><img class="event__photo" src="img/photos/3.jpg" alt="Event photo"><img class="event__photo" src="img/photos/4.jpg" alt="Event photo"><img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
        </div>
      </div>
    `;
  }
}

customElements.define(String(DestinationDetailsView), DestinationDetailsView);
