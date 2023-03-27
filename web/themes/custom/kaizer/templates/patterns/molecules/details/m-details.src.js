(({ behaviors }) => {
  behaviors.kaizerMoleculeDetails = {
    attach: (context) => {
      once('m-details', '.m-details', context).forEach((el) => {
        behaviors.kaizerMoleculeDetails.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
