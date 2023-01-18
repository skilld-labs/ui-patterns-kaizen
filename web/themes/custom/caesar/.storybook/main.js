import content from "@originjs/vite-plugin-content";
const { mergeConfig } = require("vite");

module.exports = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../templates/patterns/",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        content(),
      ],
    });
  },
};
