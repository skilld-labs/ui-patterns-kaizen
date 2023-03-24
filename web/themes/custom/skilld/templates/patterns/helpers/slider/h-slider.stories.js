import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import description from "./h-slider.ui_patterns.yml";
import "./h-slider.src.css";
import "./h-slider.src.js";

const defContent = () => {
  const items = [];
  for (let i = 1; i <= 10; i++) {
    items.push(`<div style="text-align: center; padding: 16px; background-color: var(--color-grey)">Slide ${i}</div>`);
  }
  return items;
};

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  if (args.label) {
    data.label = args.label !== true ? args.label : "Lorem ipsum";
  }
  data.items = args.items || defContent();
  if (!data.type) {
    data.type = Object.keys(Object.values(description)[0].settings.type.options)[0];
  }
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Helpers/Slider",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    label: {
      name: "Label",
      control: {
        type: "boolean",
      },
    },
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
