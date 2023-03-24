(({ behaviors }) => {
  behaviors.skilldAtomRadio = {
    attach: (context) => {
      once("a-radio", ".a-radio", context).forEach((el) => {
        behaviors.skilldAtomRadio.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
