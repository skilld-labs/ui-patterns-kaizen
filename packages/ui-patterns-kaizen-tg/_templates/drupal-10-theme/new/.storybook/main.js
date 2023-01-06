---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/main.js
---
const path = require('path');

module.exports = {
  stories: [
    '../node_modules/@skilld/ui-patterns-kaizen-core/**/**/*.stories.@(ts|js)',
    '../templates/patterns/**/*.stories.@(ts|js)',
  ],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: [
          {
            loader: path.resolve(__dirname, "./loaders/patterns-yaml-loader.js"),
          },
          {
            loader: 'yaml-loader',
            options: {
              asJSON: true,
            },
          },
        ],
        exclude: [
          /\.breakpoints.yml$/,
        ],
      },
      {
        test: /\.breakpoints.yml$/,
        use: [
          {
            loader: '@skilld/ui-patterns-kaizen-breakpoints/loader',
          },
        ],
      },
      {
        test: /\.twig$/,
        loader: 'twig-loader-x',
        options: {
          namespaces: {
            '@<%= h.changeCase.lower(name) %>': '../../../',
          },
        },
      },
    );

    // Return the altered config
    return config;
  },
  core: {
    builder: 'webpack5',
  },
};
