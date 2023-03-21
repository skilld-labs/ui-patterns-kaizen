import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './a-select.description.yml';
import './a-select.src.css';
import './a-select.src.js';

export default {
  title: 'Atoms/Select',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    if (args.id) {
      data.attributes.setAttribute('id', args.id);
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
    data.options = args.options || [
      {
        type: 'option',
        label: 'Lorem ipsum',
        value: ''
      },
      {
        type: 'option',
        label: 'Value 1',
        value: 'value_1',
      },
      {
        type: 'option',
        label: 'Value 2',
        value: 'value_2',
      },
      {
        type: 'option',
        label: 'Value 3',
        value: 'value_3',
      }
    ];
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
    error: {
      name: 'Error',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {};
