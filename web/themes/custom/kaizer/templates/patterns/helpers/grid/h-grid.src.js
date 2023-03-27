(({ behaviors }) => {
  behaviors.kaizerHelperGrid = {
    attach: (context) => {
      once('h-grid', '.h-grid', context).forEach((el) => {
        behaviors.kaizerHelperGrid.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
