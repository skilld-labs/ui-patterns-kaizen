import componentSource from "./a-menu.ui_patterns.yml";
import drupalAttribute from "drupal-attribute";
import {
  componentRender,
  paramsLoader,
} from "../../../../.storybook/plugins/caesar";

export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Menu",
  render: (args) =>
    componentRender(componentSource, {
      ...args,
      items: [
        {
          attributes: new drupalAttribute(),
          url: "#",
          title: "First menu link",
        },
        {
          attributes: new drupalAttribute(),
          url: "#",
          title: "Second menu link",
        },
      ],
    }),
  ...paramsLoader(componentSource),
};

export const Basic = {};
