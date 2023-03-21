(({ behaviors }) => {
  behaviors.skilldAtomButton = {
    attach: (context) => {
      // eslint-disable-next-line no-console
      // console.log(Splide);
      once('a-button', '.a-button', context).forEach((el) => {
        behaviors.skilldAtomButton.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      // console.log(el);
      // disableBodyScroll(el);
    },
  };
})(Drupal);
