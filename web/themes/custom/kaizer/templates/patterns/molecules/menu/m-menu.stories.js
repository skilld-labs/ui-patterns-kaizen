import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import description from './m-menu.description.yml';
import './m-menu.src.css';
// import './m-menu.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
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
      ],
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
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules/Menu',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};
export const Basic = {
  render: (args = {}) => BasicRender(args),
};
