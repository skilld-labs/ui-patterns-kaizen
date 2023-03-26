/**
 * @file
 * This is simple js for management of color module display.
 */

((Drupal) => {
  Drupal.color = {
    logoChanged: false,
    callback: function callback(context, settings, form) {
      const colorPreview = form[0].querySelectorAll(
        '.color-preview .colors__item > div:first-of-type',
      );
      const colorPalette = form[0].querySelector('.js-color-palette');

      if (colorPreview.length && colorPalette) {
        for (let i = 0; i < colorPreview.length; i++) {
          colorPreview[i].style.backgroundColor = colorPalette.querySelector(
            `input[name="palette[${colorPreview[i].getAttribute('class')}]"]`,
          ).value;
        }
      }
    },
  };
})(Drupal);
