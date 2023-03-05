(({ behaviors }, Splide, disableBodyScroll) => {
  behaviors.caesarAtomButton = {
    attach: (context) => {
      // eslint-disable-next-line no-console
      console.log(Splide);
      once('a-button', '.a-button', context).forEach((el) => {
        behaviors.caesarAtomButton.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
      disableBodyScroll(el);
    },
  };
})(Drupal, window.Splide, window.disableBodyScroll);
