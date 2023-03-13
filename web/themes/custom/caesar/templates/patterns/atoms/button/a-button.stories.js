// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';
import componentSource from './a-button.ui_patterns.yml';

import './src/a-button.pcss.css';
// eslint-disable-next-line import/extensions
import './src/a-button.src.js';

export default {
  title: 'Atoms/Button',
  ...storyGenerator(componentSource),
};

export const Basic = {};

export const Primary = {
  ...Basic,
  args: {
    modifier: 'Second',
  },
};

export const Tretiary = {
  ...Basic,
  args: {
    modifier: 'Third',
  },
};

export const Fourth = {
  ...Basic,
  args: {
    modifier: 'Fourth',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
