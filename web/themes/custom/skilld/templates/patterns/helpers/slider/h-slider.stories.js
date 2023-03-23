import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './h-slider.description.yml';
import './h-slider.src.css';
import './h-slider.src.js';

const defContent = () => {
  let items = [];
  for (let i = 1; i <= 10; i++) {
    items.push(`<div style="text-align: center; padding: 16px; background-color: var(--color-grey)">Slide ${i}</div>`);
  }
  return items;
};

export default {
  title: 'Helpers/Slider',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.items = args.items || defContent();
    if (!data.type) {
      data.type = Object.keys(Object.values(description)[0].settings.type.options)[0];
    }
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
