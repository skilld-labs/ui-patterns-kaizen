// eslint-disable-next-line import/no-unresolved
import { storyGenerator } from '@caesar_sb/plugins/caesar';
import Button, {
  Primary as PrimaryButton,
} from '@caesar/a-button/a-button.stories';
import componentSource from './m-grid.ui_patterns.yml';

import './m-grid.src.css';

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

// export const Images = {
//   ...Basic,
//   args: {
//     items: [
//       () => AnotherResponsiveImage.render({ responsiveImageStyle: 'card' }),
//       () => ResponsiveImage.render({ name: 'banner' }),
//       () => ResponsiveImage.render({ name: 'card' }),
//       () => ResponsiveImage.render({ name: 'banner' }),
//     ],
//   },
// };
