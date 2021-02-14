import Template from './template.js';

import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export default class Foobar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
    this.dom = Template.mapDOM(this.shadowRoot);

    confetti();
  }
}

if (!customElements.get('mf-foobar')) {
  customElements.define('mf-foobar', Foobar);
}
