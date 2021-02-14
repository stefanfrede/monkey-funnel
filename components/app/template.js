import '../foobar/foobar.js';

export default {
  render() {
    return `
      ${this.css()}
      ${this.html()}
    `;
  },

  mapDOM(scope) {
    return {
      foobar: scope.querySelector('mf-foobar'),
    };
  },

  html() {
    return `
      <div class="stack">
        <h1>Monkey Funnel</h1>
        <p>A sales funnel web component.</p>
        <mf-foobar></mf-foobar>
      </div>
    `;
  },

  css() {
    return `
      <style>
        :host {
          display: block;
          border-color: var(--color-100);
          border-style: solid;
          border-width: var(--border-thin);
          outline: var(--border-thin) solid transparent;
          outline-offset: calc(var(--border-thin) * -1);
          padding: var(--s1);

          box-shadow:
            rgba(107, 114, 128, 0.4) 5px 5px,
            rgba(107, 114, 128, 0.3) 10px 10px,
            rgba(107, 114, 128, 0.2) 15px 15px,
            rgba(107, 114, 128, 0.1) 20px 20px,
            rgba(107, 114, 128, 0.05) 25px 25px;
        }

        :host *,
        :host *::after,
        :host *::before {
          box-sizing: border-box;
          color: inherit;
        }

        h1 {
          font-weight: 700;
          font-size: var(--s5);
          hyphens: auto;
          line-height: var(--line-height-small);
        }

        .stack {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .stack > * {
          margin-bottom: 0;
          margin-top: 0;
        }

        .stack > * + * {
          margin-top: var(--s1);
        }
      </style>
    `;
  },
};
