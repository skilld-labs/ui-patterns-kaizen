(({ behaviors }) => {
  behaviors.caesarContainerAtomButton = {
    attach: (context) => {
      once("a-button", ".a-button", context).forEach((el) => {
        Drupal.behaviors.caesarContainerAtomButton.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    }
  };
})(Drupal);
