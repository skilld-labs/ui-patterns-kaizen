// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';
import componentSource from './a-inputtext.no_patterns.yml';

import './src/a-inputtext.pcss.css';

export default {
  title: 'Atoms/Inputtext',
  ...storyGenerator(componentSource),
};

export const Basic = {};
