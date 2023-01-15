import componentSource from "./a-icon.ui_patterns.yml";
import { componentRender, paramsLoader } from "../../../../.storybook/plugins/caesar";

export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Icon",
  render: (args) => componentRender(componentSource, args),
  ...paramsLoader(componentSource),
};

export const Basic = {}
