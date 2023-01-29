import './m-form-element.css';
import './m-form-element.js';
import drupalAttribute from 'drupal-attribute';
import { useEffect } from '@storybook/client-api';
import yml from './m-form-element.yml';
import { basic as label } from '../form-element-label/m-form-element-label.stories';
import { basic as textField } from '../../atoms/text-field/a-text-field.stories';
import { basic as select } from '../../atoms/select/a-select.stories';
import { basic as textarea } from '../../atoms/textarea/a-textarea.stories';
import { basic as checkbox } from '../../atoms/input-checkbox/a-input-checkbox.stories';
import { basic as radio } from '../../atoms/input-radio/a-input-radio.stories';
import { noPreview as fileUpload } from '../file-upload/m-file-upload.stories';
const template = require('./m-form-element.html.twig');

export default {
  title: 'molecules/Form element',
  parameters: {
    // Uncomment next line if you need fullscreen mode
    // layout: 'fullscreen',
  },
  // See here what is argTypes https://storybook.js.org/docs/react/essentials/controls,
  // uncomment next line if you want to define it.
  argTypes: {
    type: {
      name: 'Label for which type',
      defaultValue: yml.types[0],
      options: yml.types,
      control: {
        type: 'radio',
      },
    },
    required: {
      name: 'Required',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'Disabled',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    label: {
      name: 'Show label',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    error: {
      name: 'Error',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    description: {
      name: 'Show description',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const basicRender = (args) => {
  const data = {};
  const attributes = new drupalAttribute();
  if (args.attributes) {
    for (const [attrName, attrValue] of Object.entries(args.attributes)) {
      if (attrName === 'class') {
        attributes.addClass(attrValue);
      }
      else {
        attributes.setAttribute(attrName, attrValue);
      }
    }

    delete args.attributes;
  }
  data.type = args.type || yml.types[0];
  if (args.label || args.labelContent) {
    data.label = label({
      title: args.labelContent || 'Lorem ipsum',
      required: args.required,
      type: data.type,
      for: args.id || 'm-form-element',
      title_display: ['checkbox', 'radio'].includes(data.type) ? 'after' : 'before',
    });
  }
  if (args.error) {
    data.errors = args.errorContent || 'Lorem ipsum';
  }
  if (args.description) {
    data.description = {
      attributes: new drupalAttribute(),
      content: args.descriptionContent || 'Lorem ipsum',
    };
  }
  switch (data.type) {
    case 'file':
      data.children = args.children || fileUpload();
      break;
    case 'textarea':
      data.children = textarea({
        required: args.required,
        placeholder: args.placeholder,
        value: args.value,
        error: args.error,
        id: args.id || 'm-form-element',
        disabled: args.disabled,
      });
      break;
    case 'select':
      data.children = select({
        required: args.required,
        error: args.error,
        id: args.id || 'm-form-element',
        options: args.options,
        disabled: args.disabled,
      });
      break;
    case 'checkbox':
      data.children = checkbox({
        name: args.name,
        required: args.required,
        checked: args.checked,
        error: args.error,
        id: args.id || 'm-form-element',
        disabled: args.disabled,
      });
      break;
    case 'radio':
      data.children = radio({
        name: args.name,
        required: args.required,
        checked: args.checked,
        error: args.error,
        id: args.id || 'm-form-element',
        disabled: args.disabled,
      });
      break;
    default:
      data.children = textField({
        required: args.required,
        placeholder: args.placeholder,
        value: args.value,
        error: args.error,
        id: args.id || 'm-form-element',
        type: data.type,
        readonly: args.readonly,
        disabled: args.disabled,
        attributes: args.inputAttributes,
      });
      break;
  }
  data.eshopgen_base_themeSvgSpritePath = window.eshopgen_base_themeSvgSpritePath;
  data.attributes = attributes;
  // useEffect(() => {
    // Uncomment next line if you need javascript in your component.
    // Drupal.behaviors.eshopgen_base_theme_storybook_m_form_element.attach();
  // }, [args]);
  return template(data)
};

export const basic = (args = {}) => {
  return basicRender(args);
};
