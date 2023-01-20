(({ behaviors }) => {
  behaviors.atomMenu = {
    attach(context, settings) {
      console.log(context, settings);
      const elements = once('a-menu--processed', '.a-menu');
    },
  };
})(Drupal);
