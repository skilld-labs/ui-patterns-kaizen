import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import { ResponsiveImage } from "@skilld_components/atoms/image/a-image.stories";
import { Basic as Text } from "@skilld_components/atoms/text/a-text.stories";
import { Basic as Button } from "@skilld_components/atoms/button/a-button.stories";
import description from "./m-banner.ui_patterns.yml";
import "./m-banner.src.css";
// import './m-banner.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.media = ResponsiveImage.render({
    group: "machine_name_of_responsive_image_group_1",
  });
  data.title = Text.render({
    content: "Banner title",
    tag: "h3",
    type: "a-text--h3",
  });
  data.cta = Button.render({
    content: "Click me",
    link: true,
  });
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Molecules/Banner",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
