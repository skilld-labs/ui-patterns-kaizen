const path = require("path");

module.exports = {
  stories: ["../templates/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.twig$/,
        use: ["twig-loader"],
      },
      {
        test: /\.ui_patterns.ya?ml$/,
        use: [
          path.resolve(__dirname, "./loaders/patterns-yaml-loader.js"),
          "yaml-loader",
        ],
      }
    );

    // Return the altered config
    return config;
  },
};
