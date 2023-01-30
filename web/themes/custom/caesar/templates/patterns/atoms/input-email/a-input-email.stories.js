import './a-input-email.css';
import drupalAttribute from 'drupal-attribute';
import { useEffect } from '@storybook/client-api';
import yml from './a-input-email.yml';
const template = require('./a-input-email.html.twig');

export default {
  title: 'atoms/Inputs/Email',
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
  attributes.setAttribute('type', 'email');
  data.eshopgen_base_themeSvgSpritePath = window.eshopgen_base_themeSvgSpritePath;
  data.attributes = attributes;
  data.attributes.type = 'email';
  return template(data)
}

export const basic = (args = {}) => {
  return basicRender(args);
};
