import { useParameter } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import caesarSvgSpritePath from '../../images/sprite.svg';

const argsDecoder = (setting, selected) => {
  if (setting.options) {
    if (typeof selected === 'object') {
      return selected.map((value) => findValueInObject(setting.options, value));
    }
    return findValueInObject(setting.options, selected);
  }
  return selected;
};

export const componentRender = (src, args) => {
  const Twig = useParameter('Twig');
  const component = Object.values(src)[0];

  const refTemplate = Twig.twig({
    ref: component.use,
    allowInlineIncludes: true,
  });

  const templateOptions = {
    attributes: new DrupalAttribute(),
    caesarSvgSpritePath,
  };

  Object.entries(args).forEach(([argName, argValue]) => {
    if (argName === 'attributes') {
      Object.entries(args[argName]).forEach(([attrName, attrValue]) => {
        if (attrName === 'class') {
          templateOptions[argName].addClass(attrValue);
        } else {
          templateOptions[argName].setAttribute(attrName, attrValue);
        }
      });
    }
    if (component.settings && component.settings[argName]) {
      templateOptions[argName] = argsDecoder(
        component.settings[argName],
        argValue,
      );
    }
  });

  if (component.fields) {
    Object.entries(component.fields).forEach(([key, value]) => {
      templateOptions[key] = args[key] ?? value.preview;
    });
  }

  return refTemplate.render(templateOptions);
};

const findValueInObject = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);

export const paramsLoader = (src) => {
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
  return {
    argTypes,
  };
};

// This is default storygenerator
// still possible to use `componentRender` and `paramsLoader` as is

export const storyGenerator = (componentSource) => {
  return {
    render: (args) => componentRender(componentSource, args),
    ...paramsLoader(componentSource),
    // global attachment of Drupal Behaviors
    play: async ({ canvasElement }) => {
      Drupal.attachBehaviors(canvasElement, drupalSettings);
    },
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
