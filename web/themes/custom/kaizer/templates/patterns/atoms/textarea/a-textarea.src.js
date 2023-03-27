(({ behaviors }) => {
  behaviors.kaizerAtomTextarea = {
    attach: (context) => {
      once('a-textarea', '.a-textarea', context).forEach((el) => {
        behaviors.kaizerAtomTextarea.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
