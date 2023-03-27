(({ behaviors }) => {
  behaviors.kaizerTemplatePage = {
    attach: (context) => {
      once('t-page', '.t-page', context).forEach((el) => {
        behaviors.kaizerTemplatePage.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
