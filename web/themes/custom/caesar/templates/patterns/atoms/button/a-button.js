import Splide from '@splidejs/splide';

window.splide = Splide;

(({ behaviors }) => {
  behaviors.atomButton = {
    attach(context, settings) {
      console.log(context, settings);
    },
  };
})(Drupal);
