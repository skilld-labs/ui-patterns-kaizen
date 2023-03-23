import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import description from './o-local-tasks.description.yml';
import LocalTask from '@skilld_components/molecules/local-task/m-local-task.stories';
import './o-local-tasks.src.css';

export default {
  title: 'Organisms/Local tasks',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.content = '';
    [
      'View',
      'Test',
      'Results',
      'Edit',
      'Build',
      'Settings',
      'Export',
      'Translate',
      'Clone',
    ].forEach((item) => {
      data.content += LocalTask.render({
        link: item,
      });
    });
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
