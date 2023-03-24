(({ behaviors }) => {
  behaviors.skilldOrganismBreadcrumb = {
    attach: (context) => {
      once("o-breadcrumb", ".o-breadcrumb", context).forEach((el) => {
        behaviors.skilldOrganismBreadcrumb.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
