import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import Button from '@skilld_components/atoms/button/a-button.stories';
import description from './m-local-task.description.yml';
import './m-local-task.src.css';

export default {
  title: 'Molecules/Local task',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.link = Button.render({
      content: args.link || 'View',
      link: true,
    });
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
