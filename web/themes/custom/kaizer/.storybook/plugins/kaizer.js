import { useParameter } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import kaizerSvgSprite from '../../images/sprite.svg';

export const argsDecoder = (setting, selected) => {
  if (setting.options) {
    if (typeof selected === 'object') {
      return selected.map((value) => findValueInObject(setting.options, value));
    }
    return findValueInObject(setting.options, selected);
  }
  return selected;
};

const findValueInObject = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value || key === value);
};

export const defArgTypes = (src) => {
  const component = Object.values(src)[0];
  const argTypes = {};
  if (component.settings) {
    Object.entries(component.settings).forEach(([argName, argValue]) => {
      argTypes[argName] = {
        ...(argValue.label && { name: argValue.label }),
        ...(argValue.type && {
          control: { type: transformDrupalControlToStorybook(argValue.type) },
        }),
        ...(argValue.options && {
          options: Object.values(argValue.options),
        }),
        ...(argValue.default_value && {
          defaultValue: argValue.default_value,
        }),
      };
    });
  }
  return argTypes;
};

// This is default storygenerator
// still possible to use `componentRender` and `paramsLoader` as is

export const defRender = (args, componentDescription) => {
  const component = Object.values(componentDescription)[0];
  const template = useParameter('Twig').twig({
    ref: component.use,
    allowInlineIncludes: true,
  });
  const data = {
    attributes: new DrupalAttribute(),
    kaizer_svg_sprite: kaizerSvgSprite,
    kaizerSvgSprite,
  };
  Object.entries(args).forEach(([argName, argValue]) => {
    if (argName === 'attributes') {
      Object.entries(args[argName]).forEach(([attrName, attrValue]) => {
        if (attrName === 'class') {
          data[argName].addClass(attrValue);
        } else {
          data[argName].setAttribute(attrName, attrValue);
        }
      });
    }
    if (component.settings && component.settings[argName]) {
      data[argName] = argsDecoder(component.settings[argName], argValue);
    }
  });
  return {
    template,
    data,
  };
};

// Transforms Drupal module style to storybook
// from:
// https://www.drupal.org/project/ui_patterns_settings
// to:
// https://storybook.js.org/docs/7.0/html/api/argtypes

const transformDrupalControlToStorybook = (type) => {
  switch (type) {
    case 'radios':
      return 'radio';
    case 'checkboxes':
      return 'check';
    case 'textfield':
      return 'text';
  }
  return type;
};
