import Button, {
  Primary as PrimaryButton,
} from '@caesar/a-button/a-button.dynamic-stories';

import './src/m-grid.pcss.css';

export default {
  title: 'Molecules/Grid',
  args: {
    items: [
      Button.render({ content: 'one' }),
      Button.render({ ...PrimaryButton.args, content: 'two' }),
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
