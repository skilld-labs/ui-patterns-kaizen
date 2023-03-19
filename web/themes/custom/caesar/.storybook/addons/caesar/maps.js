export const UI_PATTERN_TO_ARG_TYPES = {
  settings: [
    {
      key: 'argTypes',
      transform: (settngs) => {
        const argTypes = {};
        Object.entries(settngs).forEach(([argName, argValue]) => {
          argTypes[argName] = {
            ...(argValue.label && { name: argValue.label }),
            ...(argValue.type && {
              control: {
                type: transformUiPatternsControlToStorybook(argValue.type),
              },
            }),
            ...(argValue.options && {
              options: Object.keys(argValue.options),
            }),
          };
        });
        return argTypes;
      },
    },
  ],
};

export const UI_PATTERN_TO_ARGS = {
  fields: [
    {
      key: 'args',
      transform: (fields) => {
        const args = {};
        Object.entries(fields).forEach(([key, value]) => {
          args[key] = args[key] ?? value.preview;
        });
        return args;
      },
    },
  ],
};

export const COMPONENT_TO_ARG_TYPES = {
  properties: [
    {
      key: 'argTypes',
      transform: (properties) => {
        const argTypes = {};
        Object.entries(properties).forEach(([argName, argValue]) => {
          argTypes[argName] = {
            ...(argValue.title && { name: argValue.title }),
            ...(argValue.type && {
              control: {
                type: transformComponentControlToStorybook(argValue.type),
              },
            }),
            ...(argValue.enum && {
              options: Object.keys(argValue.enum),
            }),
          };
        });
        return argTypes;
      },
    },
  ],
};

export const COMPONENT_TO_ARGS = {
  properties: [
    {
      key: 'args',
      transform: (properties) => {
        const args = {};
        Object.entries(properties).forEach(([key, value]) => {
          if (value.examples) {
            args[key] = value.examples[0];
          }
        });
        return args;
      },
    },
  ],
};

// Transforms Drupal module style to storybook
// from:
// https://www.drupal.org/project/ui_patterns_settings
// to:
// https://storybook.js.org/docs/7.0/html/api/argtypes

const transformUiPatternsControlToStorybook = (type) => {
  switch (type) {
    case 'radios':
      return 'radio';
    case 'checkboxes':
      return 'check';
    case 'string':
      return 'text';
    case 'textfield':
      return 'text';
  }
  return type;
};

// Transforms Drupal module style to storybook
// from:
// https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/annotated-example-componentyml
// to:
// https://storybook.js.org/docs/7.0/html/api/argtypes

const transformComponentControlToStorybook = (type) => {
  switch (type) {
    case 'string':
      return 'text';
  }
  return type;
};
