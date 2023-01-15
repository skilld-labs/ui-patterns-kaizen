import componentSource from "./m-grid.ui_patterns.yml";
import {
  componentRender,
  paramsLoader,
} from "../../../../.storybook/plugins/caesar";

import {
  default as Button,
  Basic as BasicButton,
  Primary as PrimaryButton,
} from "../../atoms/button/a-button.stories";

export default {
  // TODO: Research Dynamic titles generation.
  title: "Molecules/Grid",
  render: (args) =>
    componentRender(componentSource, {
      ...args,
      items: [
        Button.render({ extra_classes: "m-grid__item" }),
        Button.render({
          ...PrimaryButton.args,
          extra_classes: "m-grid__item",
        }),
      ],
    }),
  ...paramsLoader(componentSource),
};

export const Basic = {};
