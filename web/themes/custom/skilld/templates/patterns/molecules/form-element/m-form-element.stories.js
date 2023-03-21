import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './m-form-element.description.yml';
import './m-form-element.src.css';
import DrupalAttribute from 'drupal-attribute';
import Label from '../form-element-label/m-form-element-label.stories';
import TextField from '../../atoms/text-field/a-text-field.stories';
import Select from '../../atoms/select/a-select.stories';
import Textarea from '../../atoms/textarea/a-textarea.stories';
import Checkbox from '../../atoms/checkbox/a-checkbox.stories';
import Radio from '../../atoms/radio/a-radio.stories';

export default {
  title: 'Molecules/Form element',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    const id = args.id || 'm-form-element';
    const type = args.type || 'text';
    const { name, error, value, placeholder, disabled, required, checked, options, readonly } = args;
    data.type = type;
    if (args.label) {
      data.label = Label.render({
        title: args.label !== true ? args.label : 'Lorem ipsum',
        required: required,
        type: type,
        title_display: ['checkbox', 'radio'].includes(type) ? 'after' : 'before',
        attributes: {
          for: id,
        },
      });
    }
    if (args.error) {
      data.errors = args.error !== true ? args.error : 'Lorem ipsum';
    }
    if (args.description) {
      data.description = {
        attributes: new DrupalAttribute(),
        content: args.description !== true ? args.description : 'Lorem ipsum',
      };
    }
    switch (type) {
      case 'textarea':
        data.children = Textarea.render({
          required,
          placeholder,
          value,
          error,
          id,
          disabled,
        });
        break;
      case 'select':
        data.children = Select.render({
          required,
          error,
          id,
          options,
          disabled,
        });
        break;
      case 'checkbox':
        data.children = Checkbox.render({
          name,
          required,
          checked,
          error,
          id,
          disabled,
        });
        break;
      case 'radio':
        data.children = Radio.render({
          name,
          required,
          checked,
          error,
          id,
          disabled,
        });
        break;
      default:
        data.children = TextField.render({
          required,
          placeholder,
          value,
          error,
          id,
          type,
          readonly,
          disabled,
        });
        break;
    }
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
    type: {
      name: 'Label for which type',
      options: [
        'text',
        'email',
        'search',
        'password',
        'number',
        'tel',
        'date',
        'time',
        'textarea',
        'select',
        'checkbox',
        'radio',
      ],
      control: {
        type: 'radio',
      },
    },
    required: {
      name: 'Required',
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
    label: {
      name: 'Label',
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
    description: {
      name: 'Description',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {};
