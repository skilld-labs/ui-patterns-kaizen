// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';

import componentSource from './o-slider5.ui_patterns.yml';

import './src/o-slider5.src';

export default {
  title: 'Organisms/Slider5(Webcomponent!!!)',
  ...storyGenerator(componentSource),
};

export const Basic = {};
