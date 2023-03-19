import './src/a-text.pcss.css';

export default {
  title: 'Atoms/Text',
};

export const Basic = {};

export const Heading1 = {
  ...Basic,
  args: {
    modifier: 'a-text--h1',
  },
};

export const Heading2 = {
  ...Basic,
  args: {
    modifier: 'a-text--h2',
  },
};

export const Heading3 = {
  ...Basic,
  args: {
    modifier: 'a-text--h3',
  },
};

export const Heading4 = {
  ...Basic,
  args: {
    modifier: 'a-text--h4',
  },
};

export const Heading5 = {
  ...Basic,
  args: {
    modifier: 'a-text--h5',
  },
};

export const Label = {
  ...Basic,
  args: {
    modifier: 'a-text--label',
  },
};

export const BigText = {
  ...Basic,
  args: {
    modifier: 'a-text--big',
  },
};

export const SmallText = {
  ...Basic,
  args: {
    modifier: 'a-text--small',
  },
};
