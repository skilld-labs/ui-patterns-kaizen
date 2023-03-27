(({ behaviors }) => {
  behaviors.kaizerAtomText = {
    attach: (context) => {
      once('a-text', '.a-text', context).forEach((el) => {
        behaviors.kaizerAtomText.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
