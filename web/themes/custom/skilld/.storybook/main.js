import content from "@originjs/vite-plugin-content";
const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
  stories: ["./", "../templates/patterns/"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [content()],
      resolve: {
        alias: {
          "@images": path.join(__dirname, "../", "images"),
          "@fonts": path.join(__dirname, "../", "fonts"),
          "@skilld_storybook": __dirname,
          "@skilld_components": path.join(__dirname, "../", "templates/patterns"),
        },
      },
    });
  },
};
