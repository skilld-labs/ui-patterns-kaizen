(({ behaviors }) => {
  behaviors.skilldAtomIcon = {
    attach: (context) => {
      once("a-icon", ".a-icon", context).forEach((el) => {
        behaviors.skilldAtomIcon.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
