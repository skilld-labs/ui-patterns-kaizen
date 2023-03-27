(({ behaviors }) => {
  behaviors.kaizerOrganismBranding = {
    attach: (context) => {
      once('o-branding', '.o-branding', context).forEach((el) => {
        behaviors.kaizerOrganismBranding.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
