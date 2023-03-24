import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import description from "./m-status-messages.description.yml";
import "./m-status-messages.src.css";
// import './m-status-messages.src.js';

const BasicRender = (args) => {
  const storyDefaultRender = defRender(args, description);
  const { data, template } = storyDefaultRender;
  if (args.type === "Information") {
    data.type = "info";
  } else {
    data.type = args.type ? args.type.toLowerCase() : "status";
  }
  data.message_list = {};
  data.message_list[data.type] = args.list || ["Lorem ipsum dolor"];
  data.status_headings = {
    status: "Status message",
    warning: "Warning message",
    error: "Error message",
    info: "Information message",
  };
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Molecules/Status messages",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
    type: {
      name: "Chosee a type of message",
      options: ["Status", "Warning", "Error", "Information"],
      control: {
        type: "radio",
      },
    },
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};

export const Multiple = {
  render: (args = {}) => {
    args.list = args.list || ["Lorem ipsum dolor 1", "Lorem ipsum dolor 2", "Lorem ipsum dolor 3"];
    return BasicRender(args);
  },
};
