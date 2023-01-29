/**
 * @file
 * This is component script template.
 */

(({ behaviors }) => {
  behaviors.eshopgen_base_theme_storybook_a_text_field_password = {
    defaultEntry: () => {
      return {
        className: 'a-text-field--password',
        elementClassName: 'a-text-field__element',
        showPassBtnClassName: 'a-text-field__show-password-btn',
        processingName: 'storybook-a-text-field-password',
      };
    },
    customEntry: () => {
      // If you need a custom entry (in case if for example in drupal
      // you have other classnames than in components) - you can create
      // a new .js file in src/js folder, and put into it the following
      // construction:
      //     (({ behaviors }) => {
      //       behaviors.eshopgen_base_theme_storybook_a_text_field_password.customEntry = () => {
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
        behaviors.eshopgen_base_theme_storybook_a_text_field_password.defaultEntry(),
      ];
      if (
        behaviors.eshopgen_base_theme_storybook_a_text_field_password.customEntry()
      ) {
        entries.push(
          ...behaviors.eshopgen_base_theme_storybook_a_text_field_password.customEntry(),
        );
      }
      return entries;
    },
    attach: (context) => {
      behaviors.eshopgen_base_theme_storybook_a_text_field_password
        .entries()
        .forEach((entry) => {
          once(entry.processingName, `.${entry.className}`, context).forEach(
            (el) => {
              behaviors.eshopgen_base_theme_storybook_a_text_field_password.handler(
                {
                  el,
                  entry,
                },
              );
            },
          );
        });
    },
    handler: (obj) => {
      const element = obj.el.querySelector(`.${obj.entry.elementClassName}`);
      const showPassBtn = obj.el.querySelector(
        `.${obj.entry.showPassBtnClassName}`,
      );
      if (element && showPassBtn) {
        showPassBtn.addEventListener('click', () => {
          if (element.type === 'password') {
            element.type = 'text';
            showPassBtn.setAttribute('aria-pressed', 'true');
            obj.el.classList.add('a-text-field--password-shown');
          } else {
            element.type = 'password';
            showPassBtn.setAttribute('aria-pressed', 'false');
            obj.el.classList.remove('a-text-field--password-shown');
          }
        });
      }
    },
  };

})(Drupal);
