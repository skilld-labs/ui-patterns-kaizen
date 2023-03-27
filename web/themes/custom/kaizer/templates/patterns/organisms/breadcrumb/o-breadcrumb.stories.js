import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import description from './o-breadcrumb.description.yml';
import './o-breadcrumb.src.css';
// import './o-breadcrumb.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.breadcrumb = args.items
    ? args.items
    : [
        {
          text: 'Trailing breadcrumb',
          url: '#',
        },
        {
          text: 'Trailing breadcrumb',
          url: '#',
        },
        {
          text: 'Current page',
        },
      ];
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Organisms/Breadcrumb',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
