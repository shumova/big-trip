import View from './view';
import {html} from '../utils';

export default class ListView extends View {
  constructor() {
    super();
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <ul></ul>
    `;
  }
}

customElements.define(String(ListView), ListView);
