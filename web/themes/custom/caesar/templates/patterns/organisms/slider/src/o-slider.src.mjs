import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';
import '@glidejs/glide/dist/css/glide.core.css';

(({ behaviors }, SlideScript, SliderControls) => {
  behaviors.caesarSlider = {
    attach: (context) => {
      Array.prototype.forEach.call(
        context.querySelectorAll('.o-slider'),
        (slider) => {
          new SlideScript(slider).mount({ SliderControls });
        },
      );
    },
  };
})(Drupal, Glide, Controls);
