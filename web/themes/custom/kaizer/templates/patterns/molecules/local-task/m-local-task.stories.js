import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import { Basic as Button } from '@kaizer-components/atoms/button/a-button.stories';
import description from './m-local-task.description.yml';
import './m-local-task.src.css';
// import './m-local-task.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.link = Button.render({
    content: args.link || 'View',
    link: true,
  });
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules/Local task',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
