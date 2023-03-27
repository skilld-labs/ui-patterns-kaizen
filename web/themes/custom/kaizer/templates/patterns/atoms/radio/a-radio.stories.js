import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import description from './a-radio.description.yml';
import './a-radio.src.css';
// import './a-radio.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
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
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Atoms/Radio',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
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

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
