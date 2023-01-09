import componentSource from "./a-icon.ui_patterns.yml";
import { componentLoader, paramsLoader } from "../../../../.storybook/plugins/caesar";
import drupalAttribute from 'drupal-attribute';
const templates = import.meta.glob(`./*.html.twig`, {
  as: "raw",
  import: "default",
  eager: true,
});

export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Icon",
  render: (args) => componentLoader(componentSource, templates, args),
  argTypes: {
    ...paramsLoader(componentSource),
  },
};

export const Basic = {}
