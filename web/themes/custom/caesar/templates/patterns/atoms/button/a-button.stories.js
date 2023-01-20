import componentSource from './a-button.ui_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';

import './a-button.pcss.css';
import './a-button.script';

export default {
  title: 'Atoms/Button',
  ...storyGenerator(componentSource),
};

export const Basic = {};

export const Primary = {
  ...Basic,
  args: {
    content: 'F@ck yeah!',
    modifier: 'Second',
    icon: 'Close',
  },
};
