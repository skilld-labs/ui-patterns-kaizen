import { componentRender, paramsLoader } from "../../../../.storybook/plugins/caesar";
const templates = import.meta.glob(`./*.html.twig`, {
  as: "raw",
  import: "default",
  eager: true,
});

export default {
  // TODO: Research Dynamic titles generation.
  title: "Atoms/Icon",
  render: (args) => componentRender('a_icon', templates, args),
  ...paramsLoader('a_icon'),
};

export const Basic = {}
