---
to: <%= h.src() %>/templates/patterns/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.js
---
import './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.css';
import './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js';
import <%= h.changeCase.lower(component_type).charAt(0) %><%= h.changeCase.pascalCase(h.inflection.dasherize(name)) %>Yml from <% if (is_pattern === 'yes') { %>'./<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.ui_patterns.yml'<% } else { %>'./<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.yml'<% } %>;
import { useEffect } from '@storybook/client-api';
const template = require('./<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.html.twig');

export default {
  ...<%= h.changeCase.lower(component_type).charAt(0) %><%= h.changeCase.pascalCase(h.inflection.dasherize(name)) %>Yml.story_settings.default,
  parameters: {
    // Uncomment next line if you need fullscreen mode
    // layout: 'fullscreen',
  },
};

const basicRender = (args) => {
  const data = {
    ...window.generateBaseData(args),
    ...window.decodeArgType(args, <%= h.changeCase.lower(component_type).charAt(0) %><%= h.changeCase.pascalCase(h.inflection.dasherize(name)) %>Yml.<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.settings),
  };
  data.content = args.content || <%= h.changeCase.lower(component_type).charAt(0) %><%= h.changeCase.pascalCase(h.inflection.dasherize(name)) %>Yml.<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.fields.content.preview;
  useEffect(() => {
    // Uncomment next line if you need javascript in your component.
    // Drupal.behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.attach();
  }, [args]);
  return template(data)
};

export const basic = (args = {}) => {
  return basicRender(args);
};
