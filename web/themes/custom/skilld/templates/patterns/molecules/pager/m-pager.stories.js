import { defRender, defArgTypes } from "@skilld_storybook/plugins/skilld";
import { useEffect } from "@storybook/client-api";
import DrupalAttribute from "drupal-attribute";
import description from "./m-pager.description.yml";
import "./m-pager.src.css";
// import './m-pager.src.js';

const buildObject = (elements = []) => {
  const constructor = {
    href: '#',
    attributes: new DrupalAttribute(),
  }
  if (!elements) {
    return constructor;
  }
  let pages = {};
  elements.forEach((number) => {
    pages[number] = constructor;
  });
  return pages;
};

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.current = args.current;
  data.items = {};
  if (args.items) {
    if (args.items.first) {
      data.items.first = buildObject();
    }
    if (args.items.previous) {
      data.items.previous = buildObject();
    }
    if (args.items.pages) {
      data.items.pages = buildObject(args.items.pages);
    }
    if (args.items.next) {
      data.items.next = buildObject();
    }
    if (args.items.last) {
      data.items.last = buildObject();
    }
  }
  data.items = args.items;
  data.ellipses = args.ellipses;
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: "Molecules/Pager",
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => {
    args.current = '1';
    args.items = {
      pages: [1, 2, 3, 4, 5, 6],
      next: true,
      last: true,
    };
    args.ellipses = {
      next: true,
    };

    return BasicRender(args);
  },
};

export const LastActive = {
  render: (args = {}) => {
    args.current = '10';
    args.items = {
      first: true,
      previous: true,
      pages: [5, 6, 7, 8, 9, 10],
    };
    args.ellipses = {
      previous: true,
    };

    return BasicRender(args);
  },
}
