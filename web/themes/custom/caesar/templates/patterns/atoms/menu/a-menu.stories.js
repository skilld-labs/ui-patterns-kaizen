import componentSource from './a-menu.ui_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';
import DrupalAttribute from 'drupal-attribute';

import './a-menu.src.css';

export default {
  title: 'Atoms/Menu',
  ...storyGenerator(componentSource, {}),
};

export const Basic = {};

export const Main = {
  ...Basic,
  args: {
    modifier: 'Main',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const SbOverridenItems = {
  ...Basic,
  args: {
    items: [
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'About',
      },
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'Services',
      },
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'Pricing',
      },
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'Blog',
      },
    ],
  },
};
