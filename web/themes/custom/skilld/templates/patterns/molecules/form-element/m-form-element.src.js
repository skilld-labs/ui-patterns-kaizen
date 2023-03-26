(({ behaviors }) => {
  behaviors.skilldMoleculeFormElement = {
    attach: (context) => {
      once('m-form-element', '.m-form-element', context).forEach((el) => {
        behaviors.skilldMoleculeFormElement.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);