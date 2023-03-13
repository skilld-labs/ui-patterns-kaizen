// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';

import componentSource from './o-slider.ui_patterns.yml';

import './src/o-slider.pcss.css';
import './src/o-slider.src';

export default {
  title: 'Organisms/Slider(Js Module)',
  ...storyGenerator(componentSource),
};

export const Basic = {};
