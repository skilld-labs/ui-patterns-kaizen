import Splide from '@splidejs/splide';

(({ behaviors }) => {
  behaviors.atomButton = {
    attach(context, settings) {
      console.log(context, settings);
      const elements = once('a-button--processed', '.a-button');
    },
  };
})(Drupal);
