import { defaultRenderSettings, argTypesLoader, defaultPlay } from '@skilld_storybook/plugins/skilld';
import DrupalAttribute from 'drupal-attribute';
import description from './o-branding.description.yml';
import LogoPath from '../../../../logo.svg';
import './o-branding.src.css';

export default {
  title: 'Organisms/Branding',
  ...defaultPlay(),
  render: (args) => {
    const { data, template } = defaultRenderSettings(args, description);
    data.site_logo = LogoPath;
    data.site_name = 'Company name';
    data.site_slogan = 'Company slogan';
    return template.render(data);
  },
  argTypes: {
    ...argTypesLoader(description),
  },
};

export const Basic = {};
