export default {
  render() {
    return `
      ${this.css()}
      ${this.html()}
    `;
  },

  html() {
    return `
      <div>Item</div>
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

        div {
          align-items: center;
          background-color: var(--color-100);
          color: var(--color-900);
          display: flex;
          font-weight: bold;
          height: calc((var(--measure) - (var(--s2) * 2)) / 3);
          justify-content: center;
          padding: var(--s1);
          text-transform: uppercase;
          width: calc(var(--measure) - (var(--s2) * 2));
        }
      </style>
    `;
  },
};
