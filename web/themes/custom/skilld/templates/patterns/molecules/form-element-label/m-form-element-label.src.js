(({ behaviors }) => {
  behaviors.skilldMoleculeFormElementLabel = {
    attach: (context) => {
      once("m-form-element-label", ".m-form-element-label", context).forEach((el) => {
        behaviors.skilldMoleculeFormElementLabel.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
