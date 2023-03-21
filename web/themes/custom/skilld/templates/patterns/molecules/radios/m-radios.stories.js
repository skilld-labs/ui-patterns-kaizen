import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './m-radios.description.yml';
import './m-radios.src.css';
import FormElement from '@skilld_components/molecules/form-element/m-form-element.stories';
// import './m-radios.src.js';

export default {
  title: 'Molecules/Radios',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    data.children = args.children || [
      FormElement.render({
        label: true,
        type: 'radio',
        name: 'm-radios',
        id: 'm-radios-1',
      }),
      FormElement.render({
        label: true,
        type: 'radio',
        name: 'm-radios',
        id: 'm-radios-2',
      }),
      FormElement.render({
        label: true,
        type: 'radio',
        name: 'm-radios',
        id: 'm-radios-3',
      }),
    ].join('');
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
