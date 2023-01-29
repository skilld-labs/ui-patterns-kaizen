import componentSource from './a-text.ui_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';

import './a-text.pcss.css';

export default {
  title: 'Atoms/Text',
  ...storyGenerator(componentSource),
};

export const Basic = {};

export const Heading1 = {
  ...Basic,
  args: {
    modifier: 'Heading 1',
  },
};

export const Heading2 = {
  ...Basic,
  args: {
    modifier: 'Heading 2',
  },
};

export const Heading3 = {
  ...Basic,
  args: {
    modifier: 'Heading 3',
  },
};

export const Heading4 = {
  ...Basic,
  args: {
    modifier: 'Heading 4',
  },
};

export const Heading5 = {
  ...Basic,
  args: {
    modifier: 'Heading 5',
  },
};

export const Label = {
  ...Basic,
  args: {
    modifier: 'Label',
  },
};

export const BigText = {
  ...Basic,
  args: {
    modifier: 'Big text',
  },
};

export const SmallText = {
  ...Basic,
  args: {
    modifier: 'Small text',
  },
};
