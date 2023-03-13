// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';
import componentSource from './a-inputtext.no_patterns.yml';

import './src/a-inputtext.pcss.css';

export default {
  title: 'Atoms/Inputtext',
  ...storyGenerator(componentSource),
  args: {
    attributes: {
      type: 'text',
    },
  },
};

export const Basic = {
  argTypes: {
    DRUPAL_ATTRIBUTE_disabled: {
      name: 'Disabled',
      type: 'boolean',
    },
    DRUPAL_ATTRIBUTE_required: {
      name: 'Required',
      type: 'boolean',
    },
    DRUPAL_ATTRIBUTE_maxlength: {
      name: 'Max Length',
      type: 'number',
    },
  },
};
