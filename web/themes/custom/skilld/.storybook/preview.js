import '../color/colors.css';
import '../css/styles.src.css';
import skilld_svg_sprite from '../images/sprite.svg';
import breakpoints from '../skilld.breakpoints.yml';
import Twig from 'twig';
import { addDrupalExtensions } from 'drupal-twig-extensions/twig';
import DrupalAttributes from 'drupal-attribute';
import once from '@drupal/once';
window.once = once;
addDrupalExtensions(Twig, {
  // Optionally, set options to configure how the Drupal
});
const allTwigPatternTemplates = import.meta.glob(
  '../templates/patterns/**/*.html.twig',
  { as: 'raw', import: 'default', eager: true },
);

import.meta.glob(['../libraries/**/*.css', '!../libraries/**/*.src.css'], { import: 'default', eager: true });
const librariesJS = import.meta.glob(['../libraries/**/*.js', '!../libraries/**/*.src.js']);
for (const path in librariesJS) {
  librariesJS[path]();
}

// here we initiate all twig templates to save them in cache of Twig.Templates.registry
// and get by reference in
// render of skilld.js
for (const [path, data] of Object.entries(allTwigPatternTemplates)) {
  Twig.twig({
    attributes: new DrupalAttributes(),
    id: path.replace('../templates/patterns/', '@'),
    data: data,
    allowInlineIncludes: true,
  });
}

const mediaBreakpoints = Object.keys(breakpoints).reduce(
  (a, i) =>
    Object.assign(a, {
      [i]: breakpoints[i].mediaQuery,
    }),
  {},
);


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Maybe load only Twig.Template.Registry somehow here.
  Twig: { ...Twig },
  mediaBreakpoints,
};

// Drupal + drupalSettings

window.Drupal = { behaviors: {} };
window.drupalSettings = {
  skilld: {
    skilld_svg_sprite,
    mediaBreakpoints,
  },
};

((Drupal, drupalSettings) => {
  // Simplified Drupal.t() function just to be able to use such constructions
  // directly from component's js behaviors.
  Drupal.t = function (str) {
    return str;
  };

  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
})(Drupal, window.drupalSettings);
