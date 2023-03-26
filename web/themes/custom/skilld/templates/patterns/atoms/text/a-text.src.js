(({ behaviors }) => {
  behaviors.skilldAtomText = {
    attach: (context) => {
      once('a-text', '.a-text', context).forEach((el) => {
        behaviors.skilldAtomText.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
