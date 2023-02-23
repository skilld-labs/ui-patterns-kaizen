import { storyGenerator } from '@caesar_sb/plugins/caesar';
import componentSource from './a-inputtext.no_patterns.yml';

import './a-inputtext.src.css';

export default {
  title: 'Atoms/Inputtext',
  ...storyGenerator(componentSource),
};

export const Basic = {};
