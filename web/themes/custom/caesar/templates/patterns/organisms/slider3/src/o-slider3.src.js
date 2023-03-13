(({ behaviors }, SlideScript, SliderControls) => {
  behaviors.caesarSlider3 = {
    attach: (context) => {
      Array.prototype.forEach.call(
        context.querySelectorAll('.o-slider3'),
        (slider) => {
          new SlideScript(slider).mount({ SliderControls });
        },
      );
    },
  };
})(Drupal, window.oSlider3.Glide, window.oSlider3.Controls);
