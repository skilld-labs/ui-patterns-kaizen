(({ behaviors }) => {
  behaviors.skilldAtomTextField = {
    attach: (context) => {
      once('a-text-field', '.a-text-field', context).forEach((el) => {
        behaviors.skilldAtomTextField.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
