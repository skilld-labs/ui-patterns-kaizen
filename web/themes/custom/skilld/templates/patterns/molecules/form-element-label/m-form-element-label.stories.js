import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './m-form-element-label.description.yml';
import './m-form-element-label.src.css';

export default {
  title: 'Molecules/Form element label',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.title = args.title || 'Lorem ipsum';
    data.title_display = args.title_display || 'before';
    data.required = args.required;
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
    required: {
      name: 'Required',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    title_display: {
      name: 'Label display',
      defaultValue: 'before',
      options: [
        'before',
        'after',
        'invisible',
      ],
      control: {
        type: 'radio',
      },
    }
  },
};

export const Basic = {};
