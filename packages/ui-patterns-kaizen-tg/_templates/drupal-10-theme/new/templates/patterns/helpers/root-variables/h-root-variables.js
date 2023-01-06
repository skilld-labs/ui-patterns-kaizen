---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/patterns/helpers/root-variables/h-root-variables.js
---
/**
 * @file
 * This component calculates viewport's width and height,
 * which is useful for Safari browser, because in this
 * browser 100vh or 100vw CSS values returns a bit incorrect
 * dimensions.
 */

const hRootVariablesHandler = () => {
  document.documentElement.style.setProperty(
    '--viewport-width',
    `${document.documentElement.clientWidth}px`,
  );
  document.documentElement.style.setProperty(
    '--viewport-height',
    `${window.innerHeight}px`,
  );
};

(({ behaviors }) => {
  behaviors.<%= h.changeCase.lower(name) %>_storybook_h_root_variables = {
    attach: (context) => {
      const body = once(
        'h-root-variables',
        document.documentElement,
        context,
      ).unshift();
      if (body) {
        hRootVariablesHandler();
        ['DOMContentLoaded', 'load', 'resize'].forEach((event) =>
          window.addEventListener(event, () => hRootVariablesHandler()),
        );
      }
    },
  };
})(Drupal);
