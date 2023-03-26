(({ behaviors }) => {
  behaviors.skilldMoleculeDetails = {
    attach: (context) => {
      once('m-details', '.m-details', context).forEach((el) => {
        behaviors.skilldMoleculeDetails.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
