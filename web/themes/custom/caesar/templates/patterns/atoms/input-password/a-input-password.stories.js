import './a-input-password.css';
import './a-input-password.js';
import drupalAttribute from 'drupal-attribute';
import { useEffect } from '@storybook/client-api';
const template = require('./a-input-password.html.twig');

export default {
  title: 'atoms/Inputs/Password',
  parameters: {
    // Uncomment next line if you need fullscreen mode
    // layout: 'fullscreen',
  },
  // See here what is argTypes https://storybook.js.org/docs/react/essentials/controls,
  // uncomment next line if you want to define it.
  argTypes: {
    error: {
      name: 'Error',
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
  attributes.setAttribute('id', args.id || 'a-text-field-id');
  attributes.setAttribute('type', 'password');
  data.eshopgen_base_themeSvgSpritePath = window.eshopgen_base_themeSvgSpritePath;
  data.attributes = attributes;
  data.attributes.type = 'password';
  useEffect(() => {
    Drupal.behaviors.eshopgen_base_theme_storybook_a_text_field_password.attach();
  }, [args]);
  return template(data)
}

export const basic = (args = {}) => {
  return basicRender(args);
};
