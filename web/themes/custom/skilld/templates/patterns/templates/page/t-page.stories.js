import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import { Basic as Button } from "@skilld_components/atoms/button/a-button.stories";
import { Basic as Text } from "@skilld_components/atoms/text/a-text.stories";
import { Basic as Menu } from "@skilld_components/molecules/menu/m-menu.stories";
import { Basic as StatusMessages } from "@skilld_components/molecules/status-messages/m-status-messages.stories";
import { Basic as Grid } from "@skilld_components/helpers/grid/h-grid.stories";
import { Basic as Branding } from "@skilld_components/organisms/branding/o-branding.stories";
import { Basic as Breadcrumb } from "@skilld_components/organisms/breadcrumb/o-breadcrumb.stories";
import { Basic as LocalTasks } from "@skilld_components/organisms/local-tasks/o-local-tasks.stories";
import description from "./t-page.description.yml";
import "./t-page.src.css";
// import './t-page.src.js';
import "./t-page--maintenance.src.css";

const BasicRender = (args) => {
  const storyDefaultRender = defRender(args, description);
  const { data, template } = storyDefaultRender;
  data.page = {};
  data.page.branding = Branding.render();
  data.page.main_navigation = Menu.render();
  data.page.user_actions = Button.render({
    content: args.authorised ? "Logout" : "Login",
    href: "#",
  });
  if (args.system) {
    data.page.system = args.system;
  }
  data.page.breadcrumb = Breadcrumb.render();
  data.page.main_content = args.main_content || Grid.render();
  data.page.copyright = Text.render({
    content: "@ Copyright",
  });
  data.page.secondary_navigation = Menu.render();
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Templates/Page",
  parameters: { layout: "fullscreen" },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Anonymous = {
  render: (args) => BasicRender(args),
};

export const Authorised = {
  render: (args) => {
    args.authorised = true;
    args.main_content = Grid.render({
      columns: "h-grid--three-columns",
      gap: "h-grid--gap-16",
    });
    return BasicRender(args);
  },
};

export const Administrator = {
  render: (args) => {
    args.system = [
      LocalTasks.render(),
      StatusMessages.render({
        type: args.system_messages_type,
      }),
    ].join("");
    args.authorised = true;
    args.main_content = Grid.render({
      columns: "h-grid--three-columns",
      gap: "h-grid--gap-16",
    });
    return BasicRender(args);
  },
};

Administrator.argTypes = {
  system_messages_type: {
    name: "Type of system message",
    options: ["Status", "Warning", "Error", "Information"],
    control: {
      type: "radio",
    },
  },
};
