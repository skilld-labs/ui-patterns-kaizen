import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import { faker } from '@faker-js/faker';
import description from './m-details.description.yml';
import './m-details.src.css';

export default {
  title: 'Molecules/Details',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.summary_attributes = new DrupalAttribute();
    data.title = args.title || 'Lorem ipsum';
    data.children = args.children || faker.lorem.sentences();
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
