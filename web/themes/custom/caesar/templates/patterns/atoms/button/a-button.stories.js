import componentSource from "./a-button.ui_patterns.yml";
import { componentLoader, paramsLoader } from "../../../../.storybook/plugins/caesar";
import drupalAttribute from 'drupal-attribute';
const templates = import.meta.glob(`./*.html.twig`, {
  as: "raw",
  import: "default",
  eager: true,
});

export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Button",
  render: (args) => componentLoader(componentSource, templates, {
    ...args,
    wrapper_attributes: new drupalAttribute(),
  }),
  argTypes: {
    ...paramsLoader(componentSource),
  },
};

export const Basic = {}

export const Primary = {
  ...Basic,
  args: {
    content: 'F@ck yeah!',
  }
}