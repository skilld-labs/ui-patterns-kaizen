// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';

import componentSource from './o-slider3.ui_patterns.yml';

import './src/glide.src';
import './src/o-slider3.pcss.css';
import './src/o-slider3.src';

export default {
  title: 'Organisms/Slider3(Component namespace)',
  ...storyGenerator(componentSource),
};

export const Basic = {};
