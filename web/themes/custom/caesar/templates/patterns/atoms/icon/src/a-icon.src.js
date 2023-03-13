(({ behaviors }) => {
  behaviors.caesarAtomIcon = {
    attach: (context) => {
      once('a-icon', '.a-icon', context).forEach((el) => {
        Drupal.behaviors.caesarAtomIcon.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
