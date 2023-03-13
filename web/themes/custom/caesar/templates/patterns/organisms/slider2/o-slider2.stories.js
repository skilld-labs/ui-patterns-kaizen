// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';

import componentSource from './o-slider2.ui_patterns.yml';

import './src/o-slider2.pcss.css';
import './src/o-slider2.src';

export default {
  title: 'Organisms/Slider2(Full Bundle)',
  ...storyGenerator(componentSource),
};

export const Basic = {};
