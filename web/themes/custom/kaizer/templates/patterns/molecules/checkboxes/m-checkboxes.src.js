(({ behaviors }) => {
  behaviors.kaizerMoleculeCheckboxes = {
    attach: (context) => {
      once('m-checkboxes', '.m-checkboxes', context).forEach((el) => {
        behaviors.kaizerMoleculeCheckboxes.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
