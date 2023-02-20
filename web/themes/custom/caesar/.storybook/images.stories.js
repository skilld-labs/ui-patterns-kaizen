import { useParameter } from '@storybook/client-api';
import { faker } from '@faker-js/faker';

export default {
  title: 'Protons/Images',
};

const FAKER_IMAGE_FUNCTION = import.meta.env.VITE_FAKER_IMAGE_FUNCTION;
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

export const Image = {
  argTypes: {
    imageStyle: {
      table: {
        disable: false,
      },
    },
  },
  render: (args) => {
    if (args.imageStyle) {
      const image = document.createElement('img');
      image.src = getSrcFromLabel(args.imageStyle);
      return image.outerHTML;
    } else {
      return 'Check image style in controls panel';
    }
  },
};

export const ResponsiveImage = {
  argTypes: {
    responsiveImageStyle: {
      table: {
        disable: false,
      },
    },
  },
  render: (args) => {
    if (args.responsiveImageStyle) {
      const responsiveImageStyles = useParameter('responsiveImageStyles');
      const breakpointsList = useParameter('breakpointsList');
      const style = responsiveImageStyles.get(args.responsiveImageStyle);
      const picture = document.createElement('picture');
      const image = document.createElement('img');
      style.image_style_mappings.forEach((breakpointStyle) => {
        const src = document.createElement('source');
        const multiplier = breakpointStyle.multiplier
          ? ` ${breakpointStyle.multiplier}`
          : '';
        src.srcset = `${getSrcFromLabel(
          breakpointStyle.image_mapping,
        )}${multiplier}`;
        src.media = breakpointsList[breakpointStyle.breakpoint_id];
        picture.appendChild(src);
      });
      image.src = getSrcFromLabel(style.fallback_image_style);
      picture.appendChild(image);
      return picture.outerHTML;
    } else {
      return 'Check responsive image style in controls panel';
    }
  },
};
