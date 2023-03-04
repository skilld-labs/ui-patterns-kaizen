// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';
import componentSource from './a-icon.ui_patterns.yml';

import './src/a-icon.pcss.css';

export default {
  title: 'Atoms/Icon',
  ...storyGenerator(componentSource),
};

export const Basic = {};
