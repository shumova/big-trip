import View from './view';
import PointView from './point-view';

export default class ListView extends View {
  constructor() {
    super();

    this.setAttribute('role', 'list');
  }

  /**
   * @param {PointViewState[]} states
   */
  setItems(states) {
    const views = states.map((state) => new PointView(state));

    this.replaceChildren(...views);
  }

  /**
   * @param {string} id
   */
  findById(id) {
    return this.querySelector(`${PointView}[data-id="${id}"]`);
  }
}

customElements.define(String(ListView), ListView);
