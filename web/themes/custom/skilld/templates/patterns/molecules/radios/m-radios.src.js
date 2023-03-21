/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  behaviors.eshopgen_base_theme_storybook_m_checkboxes = {
    defaultEntry: () => {
      return {
        className: 'm-checkboxes',
        processingName: 'storybook-m-checkboxes',
      };
    },
    customEntry: () => {
      // If you need a custom entry (in case if for example in drupal
      // you have other classnames than in components) - you can create
      // a new .js file in src/js folder, and put into it the following
      // construction:
      //     (({ behaviors }) => {
      //       behaviors.eshopgen_base_theme_storybook_m_checkboxes.customEntry = () => {
      //         return [
      //           {
      //             ...your configuration,
      //           },
      //           ...etc
      //         ];
      //       };
      //     })(Drupal);
      //
      // Then, you have to attach compiled version of your newly created
      // js file to drupal. Be sure you have attached it before original
      // component's js file -> because only in this case component's
      // js can catch your custom entry.
    },
    entries: () => {
      const entries = [
        behaviors.eshopgen_base_theme_storybook_m_checkboxes.defaultEntry(),
      ];
      if (behaviors.eshopgen_base_theme_storybook_m_checkboxes.customEntry()) {
        entries.push(
          ...behaviors.eshopgen_base_theme_storybook_m_checkboxes.customEntry(),
        );
      }
      return entries;
    },
    attach: (context) => {
      behaviors.eshopgen_base_theme_storybook_m_checkboxes
        .entries()
        .forEach((entry) => {
          once(entry.processingName, `.${entry.className}`, context).forEach(
            (el) => {
              behaviors.eshopgen_base_theme_storybook_m_checkboxes.handler({
                el,
                entry,
              });
            },
          );
        });
    },
    handler: (obj) => {
      // eslint-disable-next-line no-console
      console.log(obj.el);
    },
  };
})(Drupal);
