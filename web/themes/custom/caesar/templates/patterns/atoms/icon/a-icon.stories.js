import componentSource from "./a-icon.ui_patterns.yml";
import { componentRender, paramsLoader } from "../../../../.storybook/plugins/caesar";
const templates = import.meta.glob(`./*.html.twig`, {
  as: "raw",
  import: "default",
  eager: true,
});

export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Icon",
  render: (args) => componentRender(componentSource, templates, args),
  ...paramsLoader(componentSource),
};

export const Basic = {}
