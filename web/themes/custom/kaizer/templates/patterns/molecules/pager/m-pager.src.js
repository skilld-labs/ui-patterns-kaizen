(({ behaviors }) => {
  behaviors.kaizerMoleculePager = {
    attach: (context) => {
      once('m-pager', '.m-pager', context).forEach((el) => {
        behaviors.kaizerMoleculePager.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
