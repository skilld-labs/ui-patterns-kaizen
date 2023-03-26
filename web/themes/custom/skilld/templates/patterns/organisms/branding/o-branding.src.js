(({ behaviors }) => {
  behaviors.skilldOrganismBranding = {
    attach: (context) => {
      once('o-branding', '.o-branding', context).forEach((el) => {
        behaviors.skilldOrganismBranding.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
