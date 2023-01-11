import themeInfo from "../../caesar.info.yml";
import Twig from "twig";
import drupalAttribute from "drupal-attribute";
import twigDrupal from "twig-drupal-filters";
import { addDrupalExtensions } from 'drupal-twig-extensions/twig';
const ymlData = import.meta.glob('../../templates/**/*.yml', { import: 'default', eager: true });
twigDrupal(Twig);

const normalizedYmlData = Object.values(ymlData).reduce((a, i) => Object.assign(a, i), {});
addDrupalExtensions(Twig);

const argsDecoder = (setting, selected) => {
  let result;

  if (setting.options) {
    if (typeof selected === "object") {
      result = [];
      Array.prototype.forEach.call(selected, (value) => {
        const key = findValueInObject(setting.options, value);
        result.push(key);
      });
    } else {
      result = findValueInObject(setting.options, selected);
    }
  } else {
    result = selected;
  }
  return result
};

export const componentRender = (componentName, templates, args) => {
  console.log(templates);
  const component = normalizedYmlData[componentName];

  // Not used for now. We need to compare `use property` with existing templates.
  // We should manage it with dynamic Vite imports
  // const file = getFile(component.use);
  const template = Twig.twig({
    data: templates[getTemplatePath(componentName)],
    allowInlineIncludes: true,
    namespaces: {
      // TODO: how to set namespaces correctly to support {% include () %}
      atoms: '../../templates/patterns/atoms/',
    },
  });

  const templateOptions = {
    attributes: new drupalAttribute(),
  };

  if (component) {
    for (const [argName, argValue] of Object.entries(args)) {
      if (component.settings && component.settings[argName]) {
        templateOptions[argName] = argsDecoder(
          component.settings[argName],
          argValue,
        );
      }
      if (component.extends) {
        component.extends.forEach((extend) => {
          const extendedComponentName = normalizedYmlData[extend.split('.').shift()];
          if (extendedComponentName && extendedComponentName.settings[argName]) {
            templateOptions[argName] = argsDecoder(
              extendedComponentName.settings[argName],
              argValue,
            );
          }
        });
      }
    }

    for (const [key, value] of Object.entries(component.fields)) {
      templateOptions[key] = args[key] ?? value.preview;
    }
  }

  return template.render(templateOptions);
};

// a_button -> ./a-button.html.twig
const getTemplatePath = (componentName) =>
  `./${componentName.replace(/_/g, "-")}.html.twig`;

const findValueInObject = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);

const generateArgTypes = (component) => {
  const argTypes = {};
  if (component.settings) {
    for (const [argName, argValue] of Object.entries(component.settings)) {
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
    }
    return argTypes;
  }
};

export const paramsLoader = (componentName) => {
  const component = normalizedYmlData[componentName];
  let argTypes = {};
  if (component) {
    if (component.extends) {
      component.extends.forEach((extend) => {
        argTypes = {
          ...generateArgTypes(normalizedYmlData[extend.split('.').shift()])};
      });
    }
    argTypes = {
      ...argTypes,
      ...generateArgTypes(component),
    };
  }
  return {
    argTypes,
  };
};

// To merge themeInfo.info.yml with pattern template path with
// components:
//   namespaces:
//     atoms:
//       - templates/patterns/atoms
// and
// a_button:
//   use: "@atoms/button/a-button.html.twig"
const getFile = (use) => {
  const namespace = use.substr(1).split("/")[0];
  const filePath = use.substr(namespace.length + 1);
  return themeInfo.components.namespaces[namespace] + filePath;
};

// Transforms Drupal module style to storybook
// from:
// https://www.drupal.org/project/ui_patterns_settings
// to:
// https://storybook.js.org/docs/7.0/html/api/argtypes

const transformDrupalControlToStorybook = (type) => {
  switch (type) {
    case "radios":
      return "radio";
    case "checkboxes":
      return "check";
    case "textfield":
      return "text";
  }
  return type;
};
