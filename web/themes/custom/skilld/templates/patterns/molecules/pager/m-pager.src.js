(({ behaviors }) => {
  behaviors.skilldMoleculePager = {
    attach: (context) => {
      once('m-pager', '.m-pager', context).forEach((el) => {
        behaviors.skilldMoleculePager.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
