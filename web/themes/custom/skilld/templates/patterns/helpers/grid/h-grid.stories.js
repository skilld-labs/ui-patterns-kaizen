import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './h-grid.description.yml';
import './h-grid.src.css';

const defContent = () => {
  let items = [];
  for (let i = 1; i <= 10; i++) {
    items.push(`<div style="text-align: center; padding: 16px; background-color: var(--color-grey)">Grid item ${i}</div>`);
  }
  return items;
};

export default {
  title: 'Helpers/Grid',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.items = args.items || defContent();
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
