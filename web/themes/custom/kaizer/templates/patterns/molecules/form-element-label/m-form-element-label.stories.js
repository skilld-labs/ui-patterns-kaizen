import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import description from './m-form-element-label.description.yml';
import './m-form-element-label.src.css';
// import './m-form-element-label.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.title = args.title || 'Lorem ipsum';
  data.title_display = args.title_display || 'before';
  data.required = args.required;
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules/Form element label',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
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
      options: ['before', 'after', 'invisible'],
      control: {
        type: 'radio',
      },
    },
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
