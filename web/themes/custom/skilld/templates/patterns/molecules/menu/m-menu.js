/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(({ behaviors }) => {
  behaviors.skilldMoleculeMenu = {
    attach: (context) => {
      once('m-menu', '.m-menu', context).forEach((el) => {
        behaviors.skilldMoleculeMenu.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    },
  };
})(Drupal);
