(({ behaviors }) => {
  behaviors.kaizerMoleculeBanner = {
    attach: (context) => {
      once('m-banner', '.m-banner', context).forEach((el) => {
        behaviors.kaizerMoleculeBanner.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
