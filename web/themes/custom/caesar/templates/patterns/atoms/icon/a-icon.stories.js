import { storyGenerator } from '@caesar_sb/plugins/caesar';
import componentSource from './a-icon.ui_patterns.yml';

import './a-icon.src.css';

export default {
  title: 'Atoms/Icon',
  ...storyGenerator(componentSource),
};

export const Basic = {};
