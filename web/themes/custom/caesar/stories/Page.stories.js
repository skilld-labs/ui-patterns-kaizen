import { within, userEvent } from "@storybook/testing-library";
import { createPage } from "./Page";
import twigSource from "./test.html.twig?raw";
import yamlSource from "./test.yml?raw"
import { twigLoader, yamlLoader } from "../.storybook/plugins/caesar";

const loadedTwig = twigLoader(twigSource);
const loadedYaml = yamlLoader(yamlSource);

export default {
  title: "Example/Page",
  render: () => createPage(),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/html/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/7.0/html/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
