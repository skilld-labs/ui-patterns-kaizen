import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './a-radio.description.yml';
import './a-radio.src.css';
// import './a-radio.src.js';

export default {
  title: 'Atoms/Radio',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    data.attributes.setAttribute('type', 'radio');
    if (args.id) {
      data.attributes.setAttribute('id', args.id);
    }
    if (args.name) {
      data.attributes.setAttribute('name', args.name);
    }
    if (args.disabled) {
      data.attributes.setAttribute('disabled', '');
    }
    if (args.required) {
      data.attributes.setAttribute('required', '');
    }
    if (args.error) {
      data.attributes.addClass('error');
    }
    if (args.checked) {
      data.attributes.setAttribute('checked', '');
    }
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
    checked: {
      name: 'Checked',
      control: {
        type: 'boolean',
      },
    },
    error: {
      name: 'Error',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {};
