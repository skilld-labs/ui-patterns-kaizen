(({ behaviors }, SlideScript, SliderControls) => {
  behaviors.caesarslider4 = {
    attach: (context) => {
      Array.prototype.forEach.call(
        context.querySelectorAll('.o-slider4'),
        (slider) => {
          new SlideScript(slider).mount({ SliderControls });
        },
      );
    },
  };
})(Drupal, window.caesarTheme.Glide, window.caesarTheme.Controls);
