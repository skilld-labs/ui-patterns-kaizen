import content from '@originjs/vite-plugin-content';
import {resolve} from "path";
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['./', '../templates/patterns/'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [content()],
      resolve: {
        alias: {
          '@images': '../images',
          '@fonts': '../fonts',
          '@skilld_storybook': __dirname,
          '@skilld_components': '../templates/patterns',
        },
      },
    });
  },
};
