import Twig from "twig";
import { addDrupalExtensions } from 'drupal-twig-extensions/twig';
import DrupalAttributes from "drupal-attribute";
addDrupalExtensions(Twig, {
  // Optionally, set options to configure how the Drupal
});

const allTwigPatternTemplates = import.meta.glob(
  "../templates/patterns/**/*.html.twig",
  { as: "raw", import: "default", eager: true }
);

// here we initiate all twig templates to save them in cache of Twig.Templates.registry
// and get by reference in
// componentRender of caesar.js
for (const [path, data] of Object.entries(allTwigPatternTemplates)) {
  Twig.twig({
    attributes: new DrupalAttributes(),
    id: path.replace("../templates/patterns/", "@"),
    data: data,
    allowInlineIncludes: true,
  });
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Maybe load only Twig.Template.Registry somehow here.
  Twig: { ...Twig },
};
