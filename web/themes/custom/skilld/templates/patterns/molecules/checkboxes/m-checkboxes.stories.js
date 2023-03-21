import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import { useEffect } from '@storybook/client-api';
import description from './m-checkboxes.description.yml';
import './m-checkboxes.src.css';
import FormElement from '@skilld_components/molecules/form-element/m-form-element.stories';
// import './m-checkboxes.src.js';

export default {
  title: 'Molecules/Checkboxes',
  ...defaultPlay(),
  render: (args) => {
    const storyDefaultRender = defaultRenderSettings(args, description);
    const { data, template } = storyDefaultRender;
    data.children = args.children || [
      FormElement.render({
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-1',
      }),
      FormElement.render({
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-2',
      }),
      FormElement.render({
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-3',
      }),
    ].join('');
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
