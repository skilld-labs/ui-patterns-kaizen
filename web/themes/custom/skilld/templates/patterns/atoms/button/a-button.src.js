(({ behaviors }) => {
  behaviors.skilldAtomButton = {
    attach: (context) => {
      once('a-button', '.a-button', context).forEach((el) => {
        behaviors.skilldAtomButton.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
