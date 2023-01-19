import componentSource from './a-inputtext.no_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';

import './atoms.inputtext.styles.css';

export default {
  title: 'Atoms/Inputtext',
  ...storyGenerator(componentSource),
};

export const Basic = {};
