/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  behaviors.eshopgen_base_theme_storybook_m_details = {
    defaultEntry: () => {
      return {
        className: 'm-details',
        processingName: 'storybook-m-details',
      };
    },
    customEntry: () => {
      // If you need a custom entry (in case if for example in drupal
      // you have other classnames than in components) - you can create
      // a new .js file in src/js folder, and put into it the following
      // construction:
      //     (({ behaviors }) => {
      //       behaviors.eshopgen_base_theme_storybook_m_details.customEntry = () => {
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
        behaviors.eshopgen_base_theme_storybook_m_details.defaultEntry(),
      ];
      if (behaviors.eshopgen_base_theme_storybook_m_details.customEntry()) {
        entries.push(
          ...behaviors.eshopgen_base_theme_storybook_m_details.customEntry(),
        );
      }
      return entries;
    },
    attach: (context) => {
      behaviors.eshopgen_base_theme_storybook_m_details
        .entries()
        .forEach((entry) => {
          once(entry.processingName, `.${entry.className}`, context).forEach(
            (el) => {
              behaviors.eshopgen_base_theme_storybook_m_details.handler({
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
