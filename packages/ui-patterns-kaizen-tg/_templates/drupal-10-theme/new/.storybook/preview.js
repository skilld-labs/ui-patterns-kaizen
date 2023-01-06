---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/.storybook/preview.js
---
import '../color/colors.css';
import '../src/css/styles.css';
import config from '../<%= h.changeCase.lower(name) %>.breakpoints.yml';
import svgSpritePath from '../dist/assets/sprite.svg';
import Twig from 'twig';
import twigDrupalFilters from 'twig-drupal-filters';
import { addDrupalExtensions } from 'drupal-twig-extensions/twig';
import drupalAttribute from 'drupal-attribute';
import once from '@drupal/once';

window.themeBreakpoints = config;
window.<%= h.changeCase.lower(name) %>SvgSpritePath = svgSpritePath;
window.once = once;
window.Drupal = { behaviors: {} };
twigDrupalFilters(Twig);
addDrupalExtensions(Twig);

window.decodeArgType = (selectedArgs, componentArgs) => {
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
  }

  return decodedArgs;
};

window.generateBaseData = (selectedArgs) => {
  const attributes = new drupalAttribute();
  if (selectedArgs.attributes) {
    for (const [attrName, attrValue] of Object.entries(selectedArgs.attributes)) {
      if (attrName === 'class') {
        attributes.addClass(attrValue);
      }
      else {
        attributes.setAttribute(attrName, attrValue);
      }
    }

    delete selectedArgs.attributes;
  }
  return {
    attributes,
    <%= h.changeCase.lower(name) %>SvgSpritePath: svgSpritePath,
  };
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
