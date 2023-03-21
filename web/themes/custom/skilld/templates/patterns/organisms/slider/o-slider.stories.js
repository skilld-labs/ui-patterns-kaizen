// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@skilld_storybook/plugins/skilld';

import componentSource from './o-slider.ui_patterns.yml';

import './o-slider.src.css';

export default {
  title: 'Organisms/Slider(Js Module)',
  ...storyGenerator(componentSource),
};

export const Basic = {};
