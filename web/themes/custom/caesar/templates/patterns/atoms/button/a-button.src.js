(({ behaviors }, Splide) => {
  behaviors.caesarAtomButton = {
    attach: (context) => {
      console.log(Splide);
      once('a-button', '.a-button', context).forEach((el) => {
        behaviors.caesarAtomButton.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    },
  };
})(Drupal, window.Splide);
