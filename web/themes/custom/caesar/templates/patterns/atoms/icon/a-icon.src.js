(({ behaviors }) => {
  behaviors.caesarAtomIcon = {
    attach: (context) => {
      once('a-icon', '.a-icon', context).forEach((el) => {
        Drupal.behaviors.caesarAtomIcon.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    },
  };
})(Drupal);
