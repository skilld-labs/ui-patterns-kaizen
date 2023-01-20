import componentSource from './a-inputtext.no_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';

import './a-inputtext.pcss.css';

export default {
  title: 'Atoms/Inputtext',
  ...storyGenerator(componentSource),
};

export const Basic = {};
