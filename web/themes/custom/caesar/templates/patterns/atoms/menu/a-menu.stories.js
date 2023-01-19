import componentSource from './a-menu.ui_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';
import DrupalAttribute from 'drupal-attribute';

import './atoms.menu.script';

export default {
  title: 'Atoms/Menu',
  ...storyGenerator(componentSource, {}),
  args: {
    items: [
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'First menu link',
      },
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'Second menu link',
      },
    ],
  },
};

export const Basic = {};
