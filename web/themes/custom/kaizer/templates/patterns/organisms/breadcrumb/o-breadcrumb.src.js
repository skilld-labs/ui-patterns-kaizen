(({ behaviors }) => {
  behaviors.kaizerOrganismBreadcrumb = {
    attach: (context) => {
      once('o-breadcrumb', '.o-breadcrumb', context).forEach((el) => {
        behaviors.kaizerOrganismBreadcrumb.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
