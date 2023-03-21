import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './a-text.description.yml';
import './a-text.src.css';
import './a-text.src.js';

export default {
  title: 'Atoms/Text',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    data.content = args.content || 'Lorem ipsum';
    if (args.tag === 'a' || args.link) {
      data.attributes.setAttribute('href', args.href || '#');
    }
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
