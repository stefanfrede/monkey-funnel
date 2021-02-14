module.exports = {
  mount: {
    components: '/components',
    public: '/',
  },
  plugins: ['@snowpack/plugin-postcss'],
  packageOptions: {
    NODE_ENV: true,
    source: 'remote',
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    clean: true,
    out: 'dist',
  },
};
