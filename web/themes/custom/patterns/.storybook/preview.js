import "../css/styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Import sprite.
import svgSpritePath from "../images/sprite.svg";
window.svgSpritePath = svgSpritePath;

window.Drupal = { behaviors: {} };
window.drupalSettings = {};

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
      if (typeof behaviors[i].attach === "function") {
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
