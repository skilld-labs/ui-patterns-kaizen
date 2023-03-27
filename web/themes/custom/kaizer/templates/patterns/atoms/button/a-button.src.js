(({ behaviors }) => {
  behaviors.kaizerAtomButton = {
    attach: (context) => {
      once('a-button', '.a-button', context).forEach((el) => {
        behaviors.kaizerAtomButton.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
