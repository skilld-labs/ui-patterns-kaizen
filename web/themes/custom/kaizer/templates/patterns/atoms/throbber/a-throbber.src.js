(({ behaviors }) => {
  behaviors.kaizerAtomThrobber = {
    attach: (context) => {
      once('a-throbber', '.a-throbber', context).forEach((el) => {
        behaviors.kaizerAtomThrobber.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
