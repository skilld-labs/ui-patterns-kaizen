---
to: <%= h.src() %>/templates/patterns/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.js
---
/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %> = {
    attach: (context) => {
      const entry = {
        className: '<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
        processingName: 'storybook-<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>',
      };
      once(entry.processingName, `.${entry.className}`, context).forEach((el) => {
        behaviors.<%= h.changeCase.snakeCase(h.themeName) %>_storybook_<%= h.changeCase.lower(component_type).charAt(0) %>_<%= h.changeCase.snakeCase(h.inflection.dasherize(name)) %>.handler({ el, entry });
      });
    },
    handler: (obj) => {
      // eslint-disable-next-line no-console
      console.log(obj.el);
    },
  };
})(Drupal);
