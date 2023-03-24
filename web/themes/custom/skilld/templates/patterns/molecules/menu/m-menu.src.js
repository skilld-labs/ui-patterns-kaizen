(({ behaviors }) => {
  behaviors.skilldMoleculeMenu = {
    attach: (context) => {
      once("m-menu", ".m-menu", context).forEach((el) => {
        behaviors.skilldMoleculeMenu.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
