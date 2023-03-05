// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';
import DrupalAttribute from 'drupal-attribute';
import componentSource from './a-menu.ui_patterns.yml';

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
