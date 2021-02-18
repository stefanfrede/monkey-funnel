export default {
  render() {
    return `
      ${this.css()}
      ${this.html()}
    `;
  },

  html() {
    return `
      <div class="reel">
        <slot></slot>
      </div>
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

        .reel {
          display: flex;
          height: auto;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-color: var(--color-100) var(--color-900);
        }

        .reel::-webkit-scrollbar {
          height: 1rem;
        }

        .reel::-webkit-scrollbar-track {
          background-color: var(--color-900);
        }

        .reel::-webkit-scrollbar-thumb {
          background-color: var(--color-900);
          background-image: linear-gradient(var(--color-900) 0, var(--color-900) 0.25rem, var(--color-100) 0.25rem, var(--color-100) 0.75rem, var(--color-900) 0.75rem);
        }

        .reel > ::slotted(mf-reel-item) {
          flex: 0 0 auto;
        }

        .reel > ::slotted(mf-reel-item) {
          margin-left: 1rem;
        }

        .reel > ::slotted(mf-reel-item:first-child) {
          margin-left: 0;
        }
      </style>
    `;
  },
};
