import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import { faker } from '@faker-js/faker';
import description from './m-details.description.yml';
import './m-details.src.css';
// import './m-details.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.summary_attributes = new DrupalAttribute();
  data.title = args.title || 'Lorem ipsum';
  data.children = args.children || faker.lorem.sentences();
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules/Details',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
