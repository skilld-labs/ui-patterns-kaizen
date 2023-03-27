(({ behaviors }) => {
  behaviors.kaizerMoleculeCard = {
    attach: (context) => {
      once('m-card', '.m-card', context).forEach((el) => {
        behaviors.kaizerMoleculeCard.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
