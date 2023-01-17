import { useParameter } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import svgSpritePath from '../../assets/images/sprite.svg';

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
  return result;
};

export const componentRender = (src, args) => {
  const Twig = useParameter("Twig");
  const component = Object.values(src)[0];

  const refTemplate =  Twig.twig({
    ref: component.use,
    allowInlineIncludes: true,
  });

  const templateOptions = {
    attributes: new DrupalAttribute(),
  };

  for (const [argName, argValue] of Object.entries(args)) {
    if (component.settings && component.settings[argName]) {
      templateOptions[argName] = argsDecoder(
        component.settings[argName],
        argValue
      );
    }
  }

  for (const [key, value] of Object.entries(component.fields)) {
    templateOptions[key] = args[key] ?? value.preview;
  }
  templateOptions.svgSpritePath = svgSpritePath;

  return refTemplate.render(templateOptions);
};

const findValueInObject = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);

export const paramsLoader = (src) => {
  const component = Object.values(src)[0];
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
  }
  return {
    argTypes,
  };
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
