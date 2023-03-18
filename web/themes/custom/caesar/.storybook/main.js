import content from '@originjs/vite-plugin-content';
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../templates/patterns/'],
  addons: [
    '@storybook/addon-essentials',
    './addons/caesar/manager.js',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [content()],
      resolve: {
        alias: {
          '@caesar_sb': __dirname,
        },
      },
    });
  },
};
