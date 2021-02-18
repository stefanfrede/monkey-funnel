import Template from './template.js';

export default class Reel extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
  }
}

if (!customElements.get('mf-reel')) {
  customElements.define('mf-reel', Reel);
}
