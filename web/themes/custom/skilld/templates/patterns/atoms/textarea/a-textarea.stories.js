import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import description from "./a-textarea.description.yml";
import "./a-textarea.src.css";
// import './a-textarea.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.wrapper_attributes = new DrupalAttribute();
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
  if (args.placeholder) {
    data.attributes.setAttribute("placeholder", args.placeholder !== true ? args.placeholder : "Placeholder lorem ipsum");
  }
  if (args.value) {
    data.value = args.value !== true ? args.value : "Value lorem ipsum";
  }
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Atoms/Textarea",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
    placeholder: {
      name: "Placeholder",
      control: {
        type: "boolean",
      },
    },
    value: {
      name: "Value",
      control: {
        type: "boolean",
      },
    },
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
