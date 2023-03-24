import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import description from "./a-select.description.yml";
import "./a-select.src.css";
import "./a-select.src.js";

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  if (args.id) {
    data.attributes.setAttribute("id", args.id);
  }
  if (args.disabled) {
    data.attributes.setAttribute("disabled", "");
  }
  if (args.required) {
    data.attributes.setAttribute("required", "");
  }
  if (args.error) {
    data.attributes.addClass("error");
  }
  data.options = args.options || [
    {
      type: "option",
      label: "Lorem ipsum",
      value: "",
    },
    {
      type: "option",
      label: "Value 1",
      value: "value_1",
    },
    {
      type: "option",
      label: "Value 2",
      value: "value_2",
    },
    {
      type: "option",
      label: "Value 3",
      value: "value_3",
    },
  ];
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Atoms/Select",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
    disabled: {
      name: "Disabled",
      control: {
        type: "boolean",
      },
    },
    error: {
      name: "Error",
      control: {
        type: "boolean",
      },
    },
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
