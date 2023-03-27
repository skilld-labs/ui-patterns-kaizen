/**
 * @file
 * This is component script template.
 */

(({ behaviors }, Splide) => {
  behaviors.kaizerHelperSlider = {
    attach: (context) => {
      if (!Splide) {
        return;
      }
      once('h-slider', '.h-slider', context).forEach((el) => {
        const sliderEl = el.querySelector('.h-slider__slider');
        if (sliderEl) {
          if (el.classList.contains('h-slider--banner')) {
            behaviors.kaizerHelperSlider.bannerSlider(el, sliderEl);
          }
          if (el.classList.contains('h-slider--cards')) {
            behaviors.kaizerHelperSlider.cardsSlider(el, sliderEl);
          }
        }
      });
    },
    bannerSlider: (el, sliderEl) => {
      const slider = new Splide(sliderEl, {
        type: 'loop',
        arrows: false,
        pagination: false,
      });
      slider.mount();
    },
    cardsSlider: (el, sliderEl) => {
      const slider = new Splide(sliderEl, {
        type: 'loop',
        arrows: false,
        pagination: false,
        perPage: 1,
        gap: 30,
        mediaQuery: 'min',
        breakpoints: {
          769: {
            perPage: 2,
          },
          1025: {
            perPage: 3,
          },
        },
      });
      slider.mount();
    },
  };
})(Drupal, window.kaizerSplide);
