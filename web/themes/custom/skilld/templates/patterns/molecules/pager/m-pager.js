/**
  * DO NOT EDIT THIS FILE.
  * It's generated automatically by 'yarn build' command.
  * @preserve
**/
(({ behaviors }) => {
  behaviors.skilldMoleculePager = {
    attach: (context) => {
      once("m-pager", ".m-pager", context).forEach((el) => {
        behaviors.skilldMoleculePager.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    }
  };
})(Drupal);
