import View from './view';
import {html} from '../utils';
import PointView from './point-view';

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

  /**
   * @param {PointViewState[]} states
   */
  setItems(states) {
    const views = states.map((state) => new PointView(state));

    this.replaceChildren(...views);
  }
}

customElements.define(String(ListView), ListView);
