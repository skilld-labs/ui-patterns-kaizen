import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import description from './o-branding.description.yml';
import LogoPath from '../../../../logo.svg';
import './o-branding.src.css';
// import './o-branding.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.site_logo = LogoPath;
  data.site_name = 'Company name';
  data.site_slogan = 'Company slogan';
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Organisms/Branding',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
