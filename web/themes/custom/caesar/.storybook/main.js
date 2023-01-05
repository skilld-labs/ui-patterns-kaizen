const path = require("path");
const { mergeConfig } = require("vite");
import twig from "@vituum/vite-plugin-twig";
module.exports = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
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
      // assetsInclude: "**/*.twig",
      plugins: [
        twig({
          filetypes: {
            html: /.(json.html|twig.json.html|twig.html|html.twig)$/,
          },
        }),
      ],
    });
  },
};
