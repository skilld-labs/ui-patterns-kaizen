/* empty css                               */ import { Splide } from './libraries/splide.esm.js';

(({ behaviors }) => {
  behaviors.atomButton = {
    attach(context, settings) {
      console.log(context, settings);
      once('a-button--processed', '.a-button');
      console.log(Splide);
    },
  };
})(Drupal);
