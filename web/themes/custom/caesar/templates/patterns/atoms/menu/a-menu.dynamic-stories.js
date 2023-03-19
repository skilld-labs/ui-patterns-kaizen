import DrupalAttribute from 'drupal-attribute';

import './src/a-menu.pcss.css';

export default {
  title: 'Atoms/Menu',
};

export const Basic = {};

export const Main = {
  ...Basic,
  args: {
    modifier: 'a-menu--main',
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
