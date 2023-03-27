import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import description from './a-button.description.yml';
import './a-button.src.css';
import kaizerSvgSprite from '../../../../images/sprite.svg';
// import './a-button.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.content = args.content || 'Lorem ipsum';
  if (args.link) {
    data.href = args.href || '#';
  }
  if (args.disabled) {
    args.link
      ? data.attributes.addClass('is-disabled')
      : data.attributes.setAttribute('disabled', '');
  }
  useEffect(() => {
    if (args.ajax) {
      const throbber = (type = 'full') => `
        <svg class="a-button__icon a-button__ajax a-button__ajax--${type}" aria-hidden="true">
          <use xlink:href="${data.kaizerSvgSprite}#svg-throbber-circle"></use>
        </svg>`;
      const btn = document.querySelector('.a-button');
      if (
        (btn.querySelector('.a-button__icon--start') &&
          btn.querySelector('.a-button__icon--end')) ||
        (!btn.querySelector('.a-button__icon--start') &&
          !btn.querySelector('.a-button__icon--end'))
      ) {
        btn.insertAdjacentHTML('afterbegin', throbber());
      } else if (btn.querySelector('.a-button__icon--start')) {
        btn.insertAdjacentHTML('afterbegin', throbber('start'));
      } else if (btn.querySelector('.a-button__icon--end')) {
        btn
          .querySelector('.a-button__icon--end')
          .insertAdjacentHTML('beforebegin', throbber('end'));
      }
    }
  }, [args]);
  return template.render(data);
};

export default {
  title: 'Atoms/Button',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    link: {
      name: 'Link',
      control: {
        type: 'boolean',
      },
    },
    ajax: {
      name: 'Ajax',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
