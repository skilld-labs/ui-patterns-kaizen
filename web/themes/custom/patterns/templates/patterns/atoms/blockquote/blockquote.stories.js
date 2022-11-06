import drupalAttribute from "drupal-attribute";
import "./blockquote.css";

const template = require("./pattern-blockquote.html.twig");

const data = {};

// TODO: Add custom loader for *.ui_patterns.yml parse and check libraries/argTypes etc
import blockquote from "./blockquote.ui_patterns.yml";

for (const [key, value] of Object.entries(blockquote.blockquote.fields)) {
  data[key] = value["preview"];
}

export default {
  title: "atoms/blockquote",
  // See here what is argTypes https://storybook.js.org/docs/react/essentials/controls,
  // uncomment next line if you want to define it.
  argTypes: {
    variant: {
      options: Object.keys({ ...blockquote.blockquote.variants }),
      control: { type: "check" },
    },
  },
};

export const basic = (args = {}) => {
  const attributes = new drupalAttribute();
  data.attributes = attributes;
  data.variant = args.variant[0];

  return template({
    ...data,
    // ...args,
  });
};

basic.args = {
  variant: "default",
};
