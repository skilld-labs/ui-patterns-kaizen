/**
  * DO NOT EDIT THIS FILE.
  * It's generated automatically by 'yarn build' command.
  * @preserve
**/
(({ behaviors }) => {
  behaviors.caesarAtomIcon = {
    attach: (context) => {
      once("a-icon", ".a-icon", context).forEach((el) => {
        Drupal.behaviors.caesarAtomIcon.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    }
  };
})(Drupal);