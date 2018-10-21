'use strict';

const { name } = require('./package.json');
const vue = require('rollup-plugin-vue').default;
const css = require('rollup-plugin-css-only');

module.exports = {
  input: 'src/BurgerButton.vue',
  banner: true,
  format: ['umd', 'umd-min', 'cjs', 'es'],
  filename: `${name}[suffix].js`,
  moduleName: 'VueBurgerButton',
  plugins: [
    vue({ css: false }),
    css({ output: `dist/${name}.css` })
  ]
};
