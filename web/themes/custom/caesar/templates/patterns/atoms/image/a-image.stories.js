import { faker } from '@faker-js/faker';
import { useParameter } from '@storybook/client-api';

import imageStyles from './image-styles.yml';
import responsiveImageStyles from './responsive-image-styles.yml';

/* eslint-disable */
const FAKER_IMAGE_FUNCTION = import.meta.env.VITE_FAKER_IMAGE_FUNCTION;
/* eslint-enable */
const MIN_RATIO = 0.5;
const MAX_RATIO = 1.5;
const randomDimension = (base) =>
  Math.floor(
    Math.random() * (base * MIN_RATIO - base * MAX_RATIO) + base * MAX_RATIO,
  );

const getSrcFromLabel = (label) => {
  let [width, height] = label.split('x');
  if (height === 'auto' && width !== 'auto') {
    height = randomDimension(width);
  }
  if (width === 'auto' && height !== 'auto') {
    width = randomDimension(height);
  }
  return faker.image[FAKER_IMAGE_FUNCTION](width, height);
};

export default {
  title: 'Atoms/Image',
};

export const Image = {
  argTypes: {
    imageStyle: {
      control: {
        type: 'radio',
      },
      options: [...imageStyles],
    },
  },
  render: (args) => {
    if (args.imageStyle) {
      const image = document.createElement('img');
      image.src = getSrcFromLabel(args.imageStyle);
      return image.outerHTML;
    }
    return 'Check image style in controls panel';
  },
};

export const ResponsiveImage = {
  argTypes: {
    responsiveImageStyle: {
      control: {
        type: 'radio',
      },
      options: Object.keys(responsiveImageStyles),
    },
  },
  render: (args) => {
    if (args.responsiveImageStyle) {
      const breakpointsList = useParameter('breakpointsList');
      const style = responsiveImageStyles[args.responsiveImageStyle];
      const picture = document.createElement('picture');
      const image = document.createElement('img');
      Object.keys(style.image_style_mappings).forEach((breakpointStyle) => {
        const src = document.createElement('source');
        src.srcset = '';
        Object.keys(style.image_style_mappings[breakpointStyle]).forEach(
          (multiplier) => {
            src.srcset += `${getSrcFromLabel(
              style.image_style_mappings[breakpointStyle][multiplier],
            )} ${multiplier} ,`;
          },
        );
        src.media = breakpointsList[breakpointStyle];
        picture.appendChild(src);
      });
      image.src = getSrcFromLabel(style.fallback);
      picture.appendChild(image);
      return picture.outerHTML;
    }
    return 'Check responsive image style in controls panel';
  },
};
