import drupalAttribute from "drupal-attribute";

const template = require("./pattern-blockquote.html.twig");

export default {
  title: "atoms/blockquote",
  parameters: {
    // Uncomment next line if you need fullscreen mode
    // layout: 'fullscreen',
  },
  // See here what is argTypes https://storybook.js.org/docs/react/essentials/controls,
  // uncomment next line if you want to define it.
  // argTypes: {},
};

export const basic = (args = {}) => {
  const attributes = new drupalAttribute();
  attributes.addClass(["a-quote"]);
  if (args.attributes) {
    for (const [attrName, attrValue] of Object.entries(args.attributes)) {
      if (attrName === "class") {
        attributes.addClass(attrValue);
      } else {
        attributes.setAttribute(attrName, attrValue);
      }
    }

    delete args.attributes;
  }
  // data.attributes = attributes;
  return template({
    // ...data,
    ...args,
  });
};
