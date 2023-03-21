import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './m-menu.description.yml';
import DrupalAttribute from 'drupal-attribute';
import './m-menu.src.css';
import './m-menu.src.js';

export default {
  title: 'Molecules/Menu',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    data.items = args.items || [
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'Lorem ipsum 1',
        below: [
          {
            attributes: new DrupalAttribute(),
            url: '#',
            title: 'Lorem ipsum 1 1',
          },
          {
            attributes: new DrupalAttribute(),
            url: '#',
            title: 'Lorem ipsum 1 2',
          },
        ]
      },
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'Lorem ipsum 2',
      },
      {
        attributes: new DrupalAttribute(),
        url: '#',
        title: 'Lorem ipsum 3',
      },
    ];
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};
export const Basic = {};
