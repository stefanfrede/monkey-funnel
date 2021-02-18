import Template from './template.js';

export default class ReelItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
  }
}

if (!customElements.get('mf-reel-item')) {
  customElements.define('mf-reel-item', ReelItem);
}
