import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import { Basic as LocalTask } from "@skilld_components/molecules/local-task/m-local-task.stories";
import description from "./o-local-tasks.description.yml";
import "./o-local-tasks.src.css";
// import './o-local-tasks.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.content = "";
  ["View", "Test", "Results", "Edit", "Build", "Settings", "Export", "Translate", "Clone"].forEach((item) => {
    data.content += LocalTask.render({
      link: item,
    });
  });
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Organisms/Local tasks",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
