import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import { faker } from '@faker-js/faker';
import description from './m-fieldset.description.yml';
import './m-fieldset.src.css';
// import './m-fieldset.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.legend = {
    attributes: new DrupalAttribute(),
    title: args.title || 'Lorem ipsum',
  };
  data.legend_span = {
    attributes: new DrupalAttribute(),
  };
  data.children = args.children || faker.lorem.sentences();
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules/Fieldset',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
