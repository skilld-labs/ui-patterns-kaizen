import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import { faker } from '@faker-js/faker';
import description from './m-fieldset.description.yml';
import './m-fieldset.src.css';

export default {
  title: 'Molecules/Fieldset',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.legend = {
      attributes: new DrupalAttribute(),
      title: args.title || 'Lorem ipsum',
    };
    data.legend_span = {
      attributes: new DrupalAttribute(),
    };
    data.children = args.children || faker.lorem.sentences();
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
