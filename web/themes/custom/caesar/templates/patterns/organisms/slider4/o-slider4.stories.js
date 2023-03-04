// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';

import componentSource from './o-slider4.ui_patterns.yml';

import './src/o-slider4.pcss.css';
import './src/o-slider4.src';

export default {
  title: 'Organisms/Slider4(Theme namespace)',
  ...storyGenerator(componentSource),
};

export const Basic = {};
