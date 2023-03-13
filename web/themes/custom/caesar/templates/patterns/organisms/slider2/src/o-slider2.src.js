import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

(({ behaviors }, SlideScript, SliderControls) => {
  behaviors.caesarSlider2 = {
    attach: (context) => {
      Array.prototype.forEach.call(
        context.querySelectorAll('.o-slider2'),
        (slider) => {
          new SlideScript(slider).mount({ SliderControls });
        },
      );
    },
  };
})(Drupal, Glide, Controls);
