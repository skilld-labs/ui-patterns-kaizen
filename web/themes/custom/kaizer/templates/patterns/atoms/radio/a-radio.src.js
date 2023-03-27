(({ behaviors }) => {
  behaviors.kaizerAtomRadio = {
    attach: (context) => {
      once('a-radio', '.a-radio', context).forEach((el) => {
        behaviors.kaizerAtomRadio.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
