import componentSource from "./a-button.ui_patterns.yml";
import {
  componentRender,
  paramsLoader,
} from "../../../../.storybook/plugins/caesar";
import './a-button.css';
import './a-button.js';
export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Button",
  render: (args) => componentRender(componentSource, args),
  ...paramsLoader(componentSource),
};

export const Basic = {};

export const Primary = {
  ...Basic,
  args: {
    content: "F@ck yeah!",
    modifier: "Second",
    icon: "Close",
  },
};
