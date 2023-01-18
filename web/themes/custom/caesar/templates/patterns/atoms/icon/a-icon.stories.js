import componentSource from "./a-icon.ui_patterns.yml";
import { storyGenerator } from "../../../../.storybook/plugins/caesar";

import "./atoms.icon.styles.css";

export default {
  title: "Atoms/Icon",
  ...storyGenerator(componentSource),
};

export const Basic = {};
