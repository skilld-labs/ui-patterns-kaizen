import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { faker } from '@faker-js/faker';
import { useParameter } from '@storybook/client-api';
import imageStyles from './image-styles.yml';
import responsiveImageGroups from './responsive-image-groups.yml';

const randomDimension = (base, maxRatio = 1.5, minRatio = 0.5) =>
  Math.floor(
    Math.random() * (base * minRatio - base * maxRatio) + base * maxRatio,
  );

const loadImageStyleData = (imageStyle) => {
  let width, height;
  if (imageStyles[imageStyle].effect === 'image_scale_and_crop') {
    width = imageStyles[imageStyle].width;
    height = imageStyles[imageStyle].height;
  }

  if (imageStyles[imageStyle].effect === 'image_scale') {
    if (imageStyles[imageStyle].width === 'auto') {
      width = randomDimension(imageStyles[imageStyle].height);
      height = imageStyles[imageStyle].height;
    }
    else if (imageStyles[imageStyle].height === 'auto') {
      width = imageStyles[imageStyle].width;
      height = randomDimension(imageStyles[imageStyle].width);
    }
    else {
      const random = Math.round(Math.random());
      if (random === 0) {
        width = imageStyles[imageStyle].width;
        height = randomDimension(imageStyles[imageStyle].width, 1);
      }
      else {
        width = randomDimension(imageStyles[imageStyle].height, 1);
        height = imageStyles[imageStyle].height;
      }
    }
  }
  return { width, height }
};

export default {
  title: 'Atoms/Image',
};

export const Image = {
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, {
      'a_image': {
        use: '@atoms/image/a-image.html.twig',
      },
    });
    const fakerProvider = args.fakerProvider || 'technics';
    const { data, template } = storyDefaultRender;
    const imageStyle = Object.keys(imageStyles).find((key) => imageStyles[key].label === args.style) || Object.keys(imageStyles)[0];
    const { width, height } = loadImageStyleData(imageStyle);
    data.attributes.setAttribute('storybook-image-style-name', imageStyle);
    data.attributes.setAttribute('width', width);
    data.attributes.setAttribute('height', height);
    data.attributes.setAttribute('src', faker.image[fakerProvider](width, height));

    if (args.alt) {
      data.attributes.setAttribute('alt', args.alt);
    }

    return template.render(data);
  },
  argTypes: {
    style: {
      name: 'Image styles',
      options: Object.values(imageStyles).map(e => e.label),
      control: {
        type: 'radio',
      },
    },
  },
};

export const ResponsiveImage = {
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, {
      'a_responsive_image_group': {
        use: '@atoms/image/a-responsive-image.html.twig',
      },
    });
    const fakerProvider = args.fakerProvider || 'technics';
    const { data, template } = storyDefaultRender;
    const responsiveImageGroup = Object.keys(responsiveImageGroups).find((key) => responsiveImageGroups[key].label === args.group) || Object.keys(responsiveImageGroups)[0];
    const fallback = loadImageStyleData(responsiveImageGroups[responsiveImageGroup].fallback);
    data.img_element = `<img storybook-fallback-image-style-name="${responsiveImageGroups[responsiveImageGroup].fallback}" ${args.alt ? `alt="${args.alt}"` : ''} src="${faker.image[fakerProvider](fallback.width, fallback.height)}"/>`;
    data.sources = [];
    const breakpoints = responsiveImageGroups[responsiveImageGroup].breakpoints;
    Object.keys(breakpoints).forEach((breakpoint) => {
      let srcset = '';
      let help = '';
      Object.keys(breakpoints[breakpoint]).forEach((multiplier, i) => {
        const breakpointImageStyle = loadImageStyleData(breakpoints[breakpoint][multiplier]);
        help += (i > 0 ? ' ' : '') + `storybook-image-style-name-for-${multiplier}-multiplier="${breakpoints[breakpoint][multiplier]}"`;
        srcset += (i > 0 ? ', ' : ' ') + `${faker.image[fakerProvider](breakpointImageStyle.width, breakpointImageStyle.height)} ${multiplier}`;
      });
      data.sources.push(`storybook-breakpoint-name="${breakpoint}" ${help} srcset="${srcset}" media="${window.drupalSettings.skilld.mediaBreakpoints[`skilld.${breakpoint}`]}"`);
    });
    data.picture_attributes = `storybook-responsive-image-group-name="${responsiveImageGroup}"`;
    return template.render(data);
  },
  argTypes: {
    group: {
      name: 'Responsive image groups',
      options: Object.values(responsiveImageGroups).map(e => e.label),
      control: {
        type: 'radio',
      },
    },
  },
};
