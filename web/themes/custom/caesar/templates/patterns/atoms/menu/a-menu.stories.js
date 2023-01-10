import drupalAttribute from "drupal-attribute";
import componentSource from "./a-menu.yml";
import {
  componentRender,
  paramsLoader,
} from "../../../../.storybook/plugins/caesar";
const templates = import.meta.glob(`./*.html.twig`, {
  as: "raw",
  import: "default",
  eager: true,
});

export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Menu",
  render: (args) => componentRender(componentSource, templates, {
    ...args,
    items: [
      {
        attributes: new drupalAttribute(),
        url: '#',
        title: 'First menu link',
      },
      {
        attributes: new drupalAttribute(),
        url: '#',
        title: 'Second menu link',
      },
    ],
  }),
  ...paramsLoader(componentSource),
};

export const Basic = {};
