import Twig from "twig";
import themeInfo from "../../caesar.info.yml";
import drupalAttribute from 'drupal-attribute';
// a_button -> ./a-button.html.twig
const getTemplatePath = (componentName) =>
  `./${componentName.replace(/_/g, "-")}.html.twig`;

const argsDecoder = (selectedArgs, componentArgs) => {
  if (!selectedArgs || !componentArgs) {
    return {}
  }

  const decodedArgs = {};
  for (const [argName, argValue] of Object.entries(selectedArgs)) {
    if (componentArgs[argName]) {
      if (typeof argValue === 'object') {
        decodedArgs[argName] = [];
        argValue.forEach((singleValue) => {
          const optionMatched = Object.keys(componentArgs[argName].options).find(
            (key) =>
              componentArgs[argName].options[key] === singleValue,
          );
          decodedArgs[argName].push(optionMatched ? optionMatched : singleValue);
        });
      }
      else {
        if (componentArgs[argName].options) {
          const optionMatched = Object.keys(componentArgs[argName].options).find(
            (key) =>
              componentArgs[argName].options[key] === argValue,
          );
          decodedArgs[argName] = optionMatched ? optionMatched : argValue;
        }
        else {
          decodedArgs[argName] = argValue;
        }
      }
    }
    else {
      decodedArgs[argName] = argValue;
    }
  }

  return decodedArgs;
};

export const componentLoader = (src, templates, args) => {
  const component = Object.values(src)[0];
  const componentName = Object.keys(src)[0];

  // Not used for now. We need to compare `use property` with existing templates.
  // We should manage it with dynamic Vite imports
  // const file = getFile(component.use);

  const template = Twig.twig({
    data: templates[getTemplatePath(componentName)],
    allowInlineIncludes: true,
    namespaces: {
      // TODO: how to set namespaces correctly to support {% include () %}
      atoms: '../../../templates/patterns/atoms',
    },
  });

  const templateOptions = {
    ...argsDecoder(args, component.settings),
    attributes: new drupalAttribute(),
  };

  for (const [key, value] of Object.entries(component.fields)) {
    templateOptions[key] = args[key] ?? value.preview;
  }

  return template.render(templateOptions);
};

export const paramsLoader = (src) => {
  const component = Object.values(src)[0];
  const argTypes = {};
  if (component.settings) {
    for (const [argName, argValue] of Object.entries(component.settings)) {
      argTypes[argName] = {};
      if (argValue.label) {
        argTypes[argName].name = argValue.label;
      }
      if (argValue.options) {
        if (argValue.default_value) {
          argTypes[argName].defaultValue = argValue.options[argValue.default_value];
        }

        argTypes[argName].options = Object.values(argValue.options);
      }
      if (argValue.type) {
        let type = argValue.type;
        switch (argValue.type) {
          case 'radios':
            type = 'radio';
            break;
          case 'checkboxes':
            type = 'check';
            break;
          case 'textfield':
            type = 'text';
        }
        argTypes[argName].control = {
          type,
        };
      }
    }
    return argTypes;
  }
  return argTypes;
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