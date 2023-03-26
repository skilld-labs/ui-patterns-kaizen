(({ behaviors }) => {
  behaviors.skilldMoleculeRadios = {
    attach: (context) => {
      once('m-radios', '.m-radios', context).forEach((el) => {
        behaviors.skilldMoleculeRadios.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
