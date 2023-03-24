import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import description from "./a-icon.description.yml";
import "./a-icon.src.css";
// import './a-icon.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  if (!args.icon) {
    data.icon = Object.keys(Object.values(description)[0].settings.icon.options)[0];
  }
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Atoms/Icon",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
