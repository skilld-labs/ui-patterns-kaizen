/**
  * DO NOT EDIT THIS FILE.
  * It's generated automatically by 'yarn build' command.
  * @preserve
**/
(({ behaviors }) => {
  behaviors.skilldOrganismBranding = {
    attach: (context) => {
      once("o-branding", ".o-branding", context).forEach((el) => {
        behaviors.skilldOrganismBranding.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    }
  };
})(Drupal);
