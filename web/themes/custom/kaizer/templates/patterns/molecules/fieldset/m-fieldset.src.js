(({ behaviors }) => {
  behaviors.kaizerMoleculeFieldset = {
    attach: (context) => {
      once('m-fieldset', '.m-fieldset', context).forEach((el) => {
        behaviors.kaizerMoleculeFieldset.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
