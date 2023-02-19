import { useParameter } from '@storybook/client-api';
import { faker } from '@faker-js/faker';

export default {
  title: 'Protons/Images',
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
      const [width, height] = args.imageStyle.split('x');
      const image = document.createElement('img');
      image.src = faker.image.dataUri(width, height);
      return image;
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
        const [width, height] = breakpointStyle.image_mapping.split('x');
        src.srcset = faker.image.dataUri(width, height);
        src.media = breakpointsList[breakpointStyle.breakpoint_id];
        picture.appendChild(src);
      });
      const [width, height] = style.fallback_image_style.split('x');
      image.src = faker.image.dataUri(width, height);
      picture.appendChild(image);
      return picture;
    } else {
      return 'Check responsive image style in controls panel';
    }
  },
};
