import './src/a-button.pcss.css';
import './src/a-button.src';

export default {
  title: 'Atoms/Button',
};

export const Basic = {};

export const Primary = {
  ...Basic,
  args: {
    modifier: 'a-button--second',
  },
};

export const Tretiary = {
  ...Basic,
  args: {
    modifier: 'a-button--third',
  },
};

export const Fourth = {
  ...Basic,
  args: {
    modifier: 'a-button--fourth',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
