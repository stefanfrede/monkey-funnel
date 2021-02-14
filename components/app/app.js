import Template from './template.js';

export default class App extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = Template.render();
    this.dom = Template.mapDOM(this.shadowRoot);

    console.log(this.dom.foobar);
  }
}

if (!customElements.get('mf-app')) {
  customElements.define('mf-app', App);
}
