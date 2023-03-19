(({ behaviors }, Splide) => {
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
    },
  };
})(Drupal, window.Splide);
