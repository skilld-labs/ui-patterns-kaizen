import DrupalAttribute from 'drupal-attribute';
import { useParameter } from '@storybook/client-api';
import componentSource from './a-image.yml';
import { faker } from '../../../../.storybook/plugins/caesar';
import './a-image.pcss.css';

const attributes = new DrupalAttribute();
const randomVal = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getImageProperties = (obj) => {
  let props = {};
  props.width = obj.width;
  props.height = obj.height;
  if (obj.effect === 'image_scale') {
    if (obj.width === 'auto') {
      props.width = randomVal(Math.floor(obj.height * 0.65), Math.floor(obj.height * 1.35));
      props.height = obj.height;
    }
    else if (obj.height === 'auto') {
      props.width = obj.width;
      props.height = randomVal(Math.floor(obj.width * 0.65), Math.floor(obj.width * 1.35));
    }
  }
  props.src = faker.image.abstract(props.width, props.height);
  return props;
}

export default {
  title: 'Atoms/Image',
  render: (args) => {
    let matched;
    componentSource.styles.every(style => {
      if ((args.style && style.label === args.style) || (args.name && style.name === args.name)) {
        matched = style;
        return false;
      }
      return true;
    });
    if (matched) {
      const props = getImageProperties(matched);
      attributes.setAttribute('width', props.width);
      attributes.setAttribute('height', props.height);
      attributes.setAttribute('src', props.src);
      attributes.setAttribute('image-style-name', matched.name);
      if (args.alt) {
        attributes.setAttribute('alt', args.alt);
      }
    }
    else {
      console.log(`Image style "${args.style}" not found.`);
    }
    return useParameter('Twig').twig({
      ref: '@atoms/image/a-image.html.twig',
    }).render({
      attributes,
    });
  },
  argTypes: {
    style: {
      name: 'Choose image style',
      control: {
        type: 'radio',
      },
      options: componentSource.styles.map((value) => value.label),
      defaultValue: componentSource.styles[0].label,
    },
  },
};

export const Basic = {};
