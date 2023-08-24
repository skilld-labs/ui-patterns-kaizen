import '../css/styles.css';
import caesarSvgSpritePath from '../images/sprite.svg';
import breakpoints from '../caesar.breakpoints.yml';
import Twig from 'twig';
import once from '@drupal/once';

const allTwigPatternTemplates = import.meta.glob(
  ['../templates/patterns/**/*.html.twig', '../components/**/*.twig'],
  { as: 'raw', import: 'default', eager: true },
);

// here we initiate all twig templates to save them in cache of Twig.Templates.registry
// and get by reference in
// render of caesar.js
for (const [path, data] of Object.entries(allTwigPatternTemplates)) {
  Twig.twig({
    id: path
      .replace('../components/', '@sdc/')
      .replace('../templates/patterns/', '@patterns/'),
    data: data,
  });
}

const breakpointsList = Object.keys(breakpoints).reduce(
  (a, i) =>
    Object.assign(a, {
      [i]: breakpoints[i].mediaQuery,
    }),
  {},
);

export const parameters = {
  breakpointsList,
};

// Drupal + drupalSettings + once

window.Drupal = { behaviors: {} };
window.drupalSettings = {
  caesar: {
    caesarSvgSpritePath,
    // breakpoints: breakpointsList,
  },
};
window.once = once;

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
