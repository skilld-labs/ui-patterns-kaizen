import {
  componentRender,
  paramsLoader,
} from "../../../../.storybook/plugins/caesar";
import componentSource from './a-icon.ui_patterns.yml';

export default {
  // TODO: Research Dynamic titles generation.
  title: 'Atoms/Icon',
  render: (args) => componentRender(componentSource, args),
  ...paramsLoader(componentSource),
};

export const Basic = {};
