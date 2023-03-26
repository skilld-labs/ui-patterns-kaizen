(({ behaviors }) => {
  behaviors.skilldAtomTextarea = {
    attach: (context) => {
      once('a-textarea', '.a-textarea', context).forEach((el) => {
        behaviors.skilldAtomTextarea.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
