import componentSource from './m-grid.ui_patterns.yml';
import { storyGenerator } from '../../../../.storybook/plugins/caesar';

import './m-grid.src.css';

import {
  default as Button,
  Basic as BasicButton,
  Primary as PrimaryButton,
} from '../../atoms/button/a-button.stories';

import ResponsiveImage from '../responsive-image/m-responsive-image.stories';

import { ResponsiveImage as AnotherResponsiveImage } from '../../../../.storybook/images.stories';

export default {
  title: 'Molecules/Grid',
  ...storyGenerator(componentSource),
  args: {
    items: [
      () => Button.render({ extra_classes: 'm-grid__item' }),
      () =>
        Button.render({
          ...PrimaryButton.args,
          extra_classes: 'm-grid__item',
        }),
    ],
  },
};

export const Basic = {};

export const Images = {
  ...Basic,
  args: {
    items: [
      () => AnotherResponsiveImage.render({ responsiveImageStyle: 'card' }),
      () => ResponsiveImage.render({ name: 'banner' }),
      () => ResponsiveImage.render({ name: 'card' }),
      () => ResponsiveImage.render({ name: 'banner' }),
    ],
  },
};
