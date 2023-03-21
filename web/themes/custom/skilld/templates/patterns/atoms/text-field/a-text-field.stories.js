import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './a-text-field.description.yml';
import './a-text-field.src.css';
import './a-text-field.src.js';

export default {
  title: 'Atoms/Text field',
  ...defaultPlay(),
  render: (args) => {
    Object.values(description)[0].use = args.type === 'search' ? '@atoms/text-field/a-text-field--search.html.twig' : '@atoms/text-field/a-text-field.html.twig';
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
    if (args.placeholder) {
      data.attributes.setAttribute('placeholder', args.placeholder !== true ? args.placeholder : 'Placeholder lorem ipsum');
    }
    if (args.value) {
      data.attributes.setAttribute('value', args.value !== true ? args.value : 'Value lorem ipsum');
    }
    data.attributes.setAttribute('type', args.type || 'text');
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
    type: {
      name: 'Type',
      options: [
        'text',
        'email',
        'search',
        'password',
        'number',
        'tel',
        'date',
        'time',
      ],
      control: {
        type: 'radio',
      },
    },
    placeholder: {
      name: 'Placeholder',
      control: {
        type: 'boolean',
      },
    },
    value: {
      name: 'Value',
      control: {
        type: 'boolean',
      },
    },
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
