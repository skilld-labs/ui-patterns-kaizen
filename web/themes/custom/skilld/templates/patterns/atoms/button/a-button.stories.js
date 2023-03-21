import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './a-button.description.yml';
import './a-button.src.css';
import './a-button.src.js';

export default {
  title: 'Atoms/Button',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    data.content = args.content || 'Lorem ipsum';
    if (args.link) {
      data.href = args.href || '#';
    }
    if (args.disabled) {
      args.link ? data.attributes.addClass('is-disabled') : data.attributes.setAttribute('disabled', '');
    }
    useEffect(() => {
      if (args.ajax) {
        const throbber = (type = 'full') => `
        <svg class="a-button__icon a-button__ajax a-button__ajax--${type}" aria-hidden="true">
          <use xlink:href="${data.skilld_svg_sprite}#svg-throbber-circle"></use>
        </svg>`;
        const btn = document.querySelector('.a-button');
        if (
          (btn.querySelector('.a-button__icon--start') && btn.querySelector('.a-button__icon--end')) ||
          (!btn.querySelector('.a-button__icon--start') &&
            !btn.querySelector('.a-button__icon--end'))
        ) {
          btn.insertAdjacentHTML('afterbegin', throbber());
        } else if (btn.querySelector('.a-button__icon--start')) {
          btn.insertAdjacentHTML('afterbegin', throbber('start'));
        } else if (btn.querySelector('.a-button__icon--end')) {
          btn.querySelector('.a-button__icon--end').insertAdjacentHTML('beforebegin', throbber('end'));
        }
      }
    }, [args]);
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
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

export const Basic = {};

// export const Primary = {
//   ...Basic,
//   args: {
//     modifier: 'Second',
//   },
// };
//
// export const Tretiary = {
//   ...Basic,
//   args: {
//     modifier: 'Third',
//   },
// };
//
// export const Fourth = {
//   ...Basic,
//   args: {
//     modifier: 'Fourth',
//   },
//   parameters: {
//     backgrounds: { default: 'dark' },
//   },
// };
