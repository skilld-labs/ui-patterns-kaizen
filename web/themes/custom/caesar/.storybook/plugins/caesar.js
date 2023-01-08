import Twig from "twig";
import themeInfo from "../../caesar.info.yml";

// a_button -> ./a-button.html.twig
const getTemplatePath = (componentName) =>
  `./${componentName.replace(/_/g, "-")}.html.twig`;

export const componentLoader = (src, templates, args) => {
  const component = Object.values(src)[0];
  const componentName = Object.keys(src)[0];

  // Not used for now. We need to compare `use property` with existing templates.
  // We should manage it with dynamic Vite imports
  // const file = getFile(component.use);

  const template = Twig.twig({
    data: templates[getTemplatePath(componentName)],
  });

  const templateOptions = {
    tag: "button",
  };

  for (const [key, value] of Object.entries(component.fields)) {
    templateOptions[key] = args[key] ?? value.preview;
  }

  return template.render(templateOptions);
};

export const paramsLoader = (src) => {
  return {
    argTypes: {
      content: {
        name: "Content",
        type: { name: "string", required: false },
        defaultValue: "Button Text",
        control: {
          type: "text",
        },
      },
    },
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