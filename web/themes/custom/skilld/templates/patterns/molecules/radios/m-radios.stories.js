import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import { Basic as FormElement } from "@skilld_components/molecules/form-element/m-form-element.stories";
import description from "./m-radios.description.yml";
import "./m-radios.src.css";
// import './m-radios.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.children =
    args.children ||
    [
      FormElement.render({
        label: true,
        type: "radio",
        name: "m-radios",
        id: "m-radios-1",
      }),
      FormElement.render({
        label: true,
        type: "radio",
        name: "m-radios",
        id: "m-radios-2",
      }),
      FormElement.render({
        label: true,
        type: "radio",
        name: "m-radios",
        id: "m-radios-3",
      }),
    ].join("");
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Molecules/Radios",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
