import componentSource from './a-icon.ui_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';

import './a-icon.src.css';

export default {
  title: 'Atoms/Icon',
  ...storyGenerator(componentSource),
};

export const Basic = {};
