module.exports = {
  stories: [
    "../templates/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.twig$/,
        loader: 'twig-loader',
      },
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      },
    );

    // Return the altered config
    return config;
  },
};
