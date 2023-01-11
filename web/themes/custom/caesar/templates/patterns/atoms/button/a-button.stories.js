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
  title: "Atoms/Button",
  render: (args) => componentRender('a_button', templates, args),
  ...paramsLoader('a_button'),
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
