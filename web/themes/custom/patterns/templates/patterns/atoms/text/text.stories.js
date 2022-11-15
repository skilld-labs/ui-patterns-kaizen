import drupalAttribute from "drupal-attribute";
import "./text.css";
const template = require("./pattern-text.html.twig");
import patterns from "./text.ui_patterns.yml";

const data = { svgSpritePath: window.svgSpritePath };

for (const [key, value] of Object.entries(patterns.text.fields)) {
  data[key] = value["preview"];
}

console.log(Object.values({ ...patterns.text.settings.modifier.options }))

export default {
  title: `${patterns.text.sb.level ?? "atoms"}/text`,
  // See here what is argTypes https://storybook.js.org/docs/react/essentials/controls,
  // uncomment next line if you want to define it.
  argTypes: {
    variant: {
      options: Object.keys({ ...patterns.text.variants }),
      control: { type: "radio" },
    },
    modifier: {
      options: Object.values({ ...patterns.text.settings.modifier.options }),
      control: "check",
    }
  },
};

export const basic = (args = {}) => {
  const attributes = new drupalAttribute();
  data.attributes = attributes;
  data.variant = args.variant[0] ?? 'default';

  return template({
    ...data,
    ...args,
  });
};


basic.args = {
  variant: "default",
};

