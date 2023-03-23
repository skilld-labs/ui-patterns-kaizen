/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  behaviors.eshopgen_base_theme_storybook_o_local_tasks = {
    attach: (context, settings) => {
      const customConfig =
        settings &&
        settings.behaviors &&
        settings.behaviors.eshopgen_base_theme_storybook_o_local_tasks &&
        settings.behaviors.eshopgen_base_theme_storybook_o_local_tasks.entries
          ? settings.behaviors.eshopgen_base_theme_storybook_o_local_tasks
              .entries
          : '';
      const config = {
        entries: [
          {
            className: 'o-local-tasks',
          },
          ...customConfig,
        ],
        processingName: 'o-local-tasks',
      };

      config.entries.forEach((entry) => {
        once(config.processingName, `.${entry.className}`, context).forEach(
          (el) => {
            behaviors.eshopgen_base_theme_storybook_o_local_tasks.handler(
              el,
              entry,
            );
          },
        );
      });
    },
    handler: (el, entry) => {
      // eslint-disable-next-line no-console
      console.log(el, entry);
    },
  };
})(Drupal);
