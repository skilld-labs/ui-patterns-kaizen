/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
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
