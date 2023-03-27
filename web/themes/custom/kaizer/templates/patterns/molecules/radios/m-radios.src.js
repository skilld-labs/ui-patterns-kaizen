(({ behaviors }) => {
  behaviors.kaizerMoleculeRadios = {
    attach: (context) => {
      once('m-radios', '.m-radios', context).forEach((el) => {
        behaviors.kaizerMoleculeRadios.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
