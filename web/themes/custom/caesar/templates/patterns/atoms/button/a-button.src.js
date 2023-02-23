(({ behaviors }, Splide, disableBodyScroll) => {
  behaviors.caesarAtomButton = {
    attach: (context) => {
      console.log(Splide);
      once('a-button', '.a-button', context).forEach((el) => {
        behaviors.caesarAtomButton.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
      disableBodyScroll(el);
    },
  };
})(Drupal, window.Splide, window.disableBodyScroll);
