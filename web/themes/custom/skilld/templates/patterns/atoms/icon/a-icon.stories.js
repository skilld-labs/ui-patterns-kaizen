import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './a-icon.description.yml';
import './a-icon.src.css';
import './a-icon.src.js';

export default {
  title: 'Atoms/Icon',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    if (!args.icon) {
      data.icon = Object.keys(Object.values(description)[0].settings.icon.options)[0];
    }
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
