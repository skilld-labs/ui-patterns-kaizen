---
  to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/loaders/patterns-yaml-loader.js
---
function prepareArgTypes(component) {
  if (component.settings) {
    const args = {};
    for (const [argName, argValue] of Object.entries(component.settings)) {
      args[argName] = {};
      if (argValue.label) {
        args[argName].name = argValue.label;
      }
      if (argValue.options) {
        if (argValue.default_value) {
          args[argName].defaultValue = argValue.options[argValue.default_value];
        }

        args[argName].options = Object.values(argValue.options);
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
        args[argName].control = {
          type,
        };
      }
    }
    return args;
  }
  return {};
}

module.exports = function (source) {
  const parsed = JSON.parse(source);
  const component = Object.keys(parsed)[0];
  if (component) {
    Object.keys(parsed)[0].story_settings = {
      default: {
        title: `${component.sb.category}/${component.sb.name}`,
        argTypes: prepareArgTypes(component),
      },
    };
  }
  return `export default ${JSON.stringify(parsed)}`;
};
