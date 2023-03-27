(({ behaviors }) => {
  behaviors.kaizerMoleculeFormElement = {
    attach: (context) => {
      once('m-form-element', '.m-form-element', context).forEach((el) => {
        behaviors.kaizerMoleculeFormElement.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
