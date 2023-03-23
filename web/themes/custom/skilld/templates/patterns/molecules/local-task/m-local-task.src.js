/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  behaviors.eshopgen_base_theme_storybook_m_local_task = {
    attach: (context, settings) => {
      const customConfig =
        settings &&
        settings.behaviors &&
        settings.behaviors.eshopgen_base_theme_storybook_m_local_task &&
        settings.behaviors.eshopgen_base_theme_storybook_m_local_task.entries
          ? settings.behaviors.eshopgen_base_theme_storybook_m_local_task
              .entries
          : '';
      const config = {
        entries: [
          {
            className: 'm-local-task',
          },
          ...customConfig,
        ],
        processingName: 'm-local-task',
      };

      config.entries.forEach((entry) => {
        once(config.processingName, `.${entry.className}`, context).forEach(
          (el) => {
            behaviors.eshopgen_base_theme_storybook_m_local_task.handler(
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
