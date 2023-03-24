(({ behaviors }) => {
  behaviors.skilldMoleculeFieldset = {
    attach: (context) => {
      once("m-fieldset", ".m-fieldset", context).forEach((el) => {
        behaviors.skilldMoleculeFieldset.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
