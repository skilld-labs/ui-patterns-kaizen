(({ behaviors }) => {
  behaviors.skilldHelperGrid = {
    attach: (context) => {
      once('h-grid', '.h-grid', context).forEach((el) => {
        behaviors.skilldHelperGrid.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
