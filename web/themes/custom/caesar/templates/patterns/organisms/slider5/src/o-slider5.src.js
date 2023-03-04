import { LitElement, html, css } from 'lit';
import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

// eslint-disable-next-line import/prefer-default-export
export class OSlider extends LitElement {
  static styles = css`
    .glide {
      position: relative;
      width: 100%;
      box-sizing: border-box;
    }
    .glide * {
      box-sizing: inherit;
    }
    .glide__track {
      overflow: hidden;
    }
    .glide__slides {
      position: relative;
      width: 100%;
      list-style: none;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform-style: preserve-3d;
      touch-action: pan-Y;
      overflow: hidden;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      display: flex;
      flex-wrap: nowrap;
      will-change: transform;
    }
    .glide__slides--dragging {
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .glide__slide {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
      white-space: normal;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
    }
    .glide__slide a {
      -webkit-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
    .glide__arrows {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .glide__bullets {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .glide--rtl {
      direction: rtl;
    }
    .o-slider {
      background-color: var(--color-light-accent);
      max-width: 800px;
    }
  `;

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  firstUpdated() {
    const slider = this.renderRoot.querySelector('.glide');
    new Glide(slider).mount({ Controls });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <div class="glide o-slider">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide-slide">
              <slot name="item1"></slot>
            </li>
            <li class="glide-slide">
              <slot name="item2"></slot>
            </li>
            <li class="glide-slide">
              <slot name="item3"></slot>
            </li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            prev
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            next
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('o-slider', OSlider);
