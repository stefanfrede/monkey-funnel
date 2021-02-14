export default {
  render() {
    return `
      ${this.css()}
      ${this.html()}
    `;
  },

  mapDOM() {
    return {};
  },

  html() {
    return `
      <h2>Foobar!</h2>
    `;
  },

  css() {
    return `
      <style>
        :host {
          display: block;
        }

        :host *,
        :host *::after,
        :host *::before {
          box-sizing: border-box;
        }
      </style>
    `;
  },
};
