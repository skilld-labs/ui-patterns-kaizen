import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import description from "./a-text.description.yml";
import "./a-text.src.css";
// import './a-text.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.content = args.content || "Lorem ipsum";
  if (args.tag === "a" || args.link) {
    data.attributes.setAttribute("href", args.href || "#");
  }
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Atoms/Text",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
