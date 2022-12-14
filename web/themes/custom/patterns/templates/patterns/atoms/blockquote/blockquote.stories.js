import drupalAttribute from "drupal-attribute";
import "./blockquote.css";
const template = require("./pattern-blockquote.html.twig");
import patterns from "./blockquote.ui_patterns.yml";

const data = { svgSpritePath: window.svgSpritePath };

for (const [key, value] of Object.entries(patterns.blockquote.fields)) {
  data[key] = value["preview"];
}

export default {
  title: `${patterns.blockquote.sb.level ?? "atoms"}/blockquote`,
  // See here what is argTypes https://storybook.js.org/docs/react/essentials/controls,
  // uncomment next line if you want to define it.
  argTypes: {
    variant: {
      options: Object.keys({ ...patterns.blockquote.variants }),
      control: { type: "radio" },
    },
  },
};

export const basic = (args = {}) => {
  const attributes = new drupalAttribute();
  data.attributes = attributes;
  data.variant = args.variant[0];

  return template({
    ...data,
    ...args,
  });
};

basic.args = {
  variant: "default",
};
