import {html} from '../utils';
import View from './view';

export default class ListItemView extends View {
  constructor() {
    super();
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <li></li>
    `;
  }
}

customElements.define(String(ListItemView), ListItemView);
