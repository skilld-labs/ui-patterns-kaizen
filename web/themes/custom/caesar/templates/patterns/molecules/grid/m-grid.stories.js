import { componentRender, paramsLoader } from "../../../../.storybook/plugins/caesar";
import * as Button from '../../atoms/button/a-button.stories';
const templates = import.meta.glob(`./*.html.twig`, {
  as: "raw",
  import: "default",
  eager: true,
});

export default {
  // TODO: Research Dynamic titles generation.
  title: "Molecules/Grid",
  render: (args) => {
    return componentRender('m_grid', templates, args)
  },
  ...paramsLoader('m_grid'),
};

export const Basic = {
  args: {
    items: [Button.Basic],
  },
}
