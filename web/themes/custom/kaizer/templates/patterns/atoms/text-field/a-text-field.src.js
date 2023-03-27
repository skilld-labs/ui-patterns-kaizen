(({ behaviors }) => {
  behaviors.kaizerAtomTextField = {
    attach: (context) => {
      once('a-text-field', '.a-text-field', context).forEach((el) => {
        behaviors.kaizerAtomTextField.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
