(({ behaviors }) => {
  behaviors.kaizerAtomCheckbox = {
    attach: (context) => {
      once('a-checkbox', '.a-checkbox', context).forEach((el) => {
        behaviors.kaizerAtomCheckbox.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
