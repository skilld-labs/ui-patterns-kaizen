// import '@eshopgen_base_theme/components/helpers/body-scroll-locker/h-body-scroll-locker';
// import '@eshopgen_base_theme/components/helpers/smooth-scroll/h-smooth-scroll';

const rootVariablesHandler = () => {
  document.documentElement.style.setProperty("--viewport-width", `${document.documentElement.clientWidth}px`);
  document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);
};

(({ behaviors }) => {
  behaviors.skilldRootVariables = {
    attach: (context) => {
      const body = once("root-variables", document.documentElement, context).unshift();
      if (body) {
        rootVariablesHandler();
        ["DOMContentLoaded", "load", "resize"].forEach((event) => window.addEventListener(event, () => rootVariablesHandler()));
      }
    },
  };
})(Drupal);
