(({ behaviors }) => {
  behaviors.skilldMoleculeCard = {
    attach: (context) => {
      once('m-card', '.m-card', context).forEach((el) => {
        behaviors.skilldMoleculeCard.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
