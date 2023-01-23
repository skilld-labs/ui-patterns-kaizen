(({ behaviors }) => {
  behaviors.atomMenu = {
    attach(context, settings) {
      console.log(context, settings);
      once('a-menu--processed', '.a-menu');
    },
  };
})(Drupal);
