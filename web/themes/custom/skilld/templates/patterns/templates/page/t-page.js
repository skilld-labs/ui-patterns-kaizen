/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(({ behaviors }) => {
  behaviors.skilldTemplatePage = {
    attach: (context) => {
      once('t-page', '.t-page', context).forEach((el) => {
        behaviors.skilldTemplatePage.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    },
  };
})(Drupal);