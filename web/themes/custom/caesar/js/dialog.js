((Drupal2, $) => {
  if (Drupal2.Ajax) {
    const { beforeSerialize } = Drupal2.Ajax.prototype;
    Drupal2.Ajax.prototype.beforeSerialize = function(element, options) {
      if (options.data && options.data.dialogOptions && $(element).closest(".o-dialog").length) {
        $(".o-dialog--visible .o-dialog__content").dialog("close");
        window.clearAllBodyScrollLocks();
      }
      beforeSerialize.call(this, element, options);
    };
  }
  Drupal2.behaviors.eshopgen_base_theme_dialog = {
    attach: (context, settings) => {
      $(window).once("eshopgen-base-theme-dialog").on({
        "dialog:beforecreate": (event, dialog, $modal, dialogSettings) => {
          if (Drupal2.behaviors.eshopgen_base_theme_dialog.hasSpecificClass(
            dialogSettings,
            "o-dialog"
          )) {
            dialogSettings.autoResize = false;
            dialogSettings.resizable = false;
            dialogSettings.buttons = [];
            dialogSettings.drupalAutoButtons = false;
            $.ui.dialog.prototype.options.height = null;
            $.ui.dialog.prototype.options.width = null;
            $.ui.dialog.prototype.options.minWidth = null;
            $.ui.dialog.prototype.options.minHeight = null;
            $.ui.dialog.prototype.options.position = null;
            $.ui.dialog.prototype.options.resizable = false;
            $.ui.dialog.prototype.options.showTitlebar = false;
            $.ui.dialog.prototype._position = function() {
            };
            $.ui.dialog.prototype._focusTabbable = function() {
            };
          }
        },
        "dialog:aftercreate": (event, dialog, $modal, dialogSettings) => {
          if (Drupal2.behaviors.eshopgen_base_theme_dialog.hasSpecificClass(
            dialogSettings,
            "o-dialog"
          )) {
            const $dialog = $modal.parent();
            if (typeof $dialog.attr("class") !== "undefined" && $dialog.attr("class") !== false) {
              $.each($dialog.attr("class").split(/\s+/), (i, className) => {
                if (className.indexOf("ui-") >= 0) {
                  $dialog.removeClass(className);
                }
              });
            }
            $dialog.removeAttr("style");
            if (typeof $modal.attr("class") !== "undefined" && $modal.attr("class") !== false) {
              $.each($modal.attr("class").split(/\s+/), (i, className) => {
                if (className.indexOf("ui-") >= 0) {
                  $modal.removeClass(className);
                }
              });
            }
            $modal.removeAttr("style");
            $modal.addClass("o-dialog__content");
            const $closeBtn = `
                 <button type="button" class="o-dialog__close-button">
                   <span class="visually-hidden">${Drupal2.t(
              "Close dialog window"
            )}</span>
                   <svg class="o-dialog__close-icon" aria-hidden="true">
                     <use xlink:href="${settings.eshopgen_base_themeSvgSpritePath}#svg-close"></use>
                   </svg>
                 </button>
              `;
            $modal.parent().prepend($closeBtn);
            if (dialogSettings.title && dialogSettings.title !== "") {
              $modal.parent().prepend(`
                  <div class="o-dialog__titlebar">
                    <div class="a-text a-text--header-5-bold a-text--uppercase a-text--color-text-stroke-primary">${dialogSettings.title}</div>
                  </div>
                `);
            }
            $dialog.find(".ui-dialog-titlebar").remove();
            const buttons = $modal.find(
              '.form-actions input[type=submit][style*="display: none"], .form-actions a.button[style*="display: none"]'
            );
            for (let i = 0; i < buttons.length; i++) {
              $(buttons[i]).css({ display: "" });
            }
            $modal.parent().find(".o-dialog__close-button").on("click", () => {
              Drupal2.behaviors.eshopgen_base_theme_dialog.closeDialog(
                $dialog,
                dialogSettings,
                $modal
              );
            });
            $(".ui-widget-overlay").addClass("o-dialog-overlay").removeAttr("style").on("click", () => {
              Drupal2.behaviors.eshopgen_base_theme_dialog.closeDialog(
                $dialog,
                dialogSettings,
                $modal
              );
            });
            setTimeout(() => {
              if (document.body.classList.contains(
                "o-header-brand-switcher-shown"
              )) {
                document.body.classList.remove(
                  "o-header-brand-switcher-shown"
                );
              }
              if (document.querySelector(
                ".m-brand-switcher--active .m-brand-switcher__selected"
              )) {
                document.querySelector(
                  ".m-brand-switcher--active .m-brand-switcher__selected"
                ).click();
              }
              $dialog.addClass("o-dialog--visible");
              window.disableBodyScroll($modal);
            }, 10);
            const resizeEvent = window.document.createEvent("UIEvents");
            resizeEvent.initUIEvent("resize", true, false, window, 0);
            window.dispatchEvent(resizeEvent);
          }
        },
        "dialog:afterclose": (event, dialog, $modal) => {
          if ($modal.closest(".o-dialog")) {
            window.clearAllBodyScrollLocks();
          }
        }
      });
    },
    hasSpecificClass: (dialogSettings, className) => {
      if (dialogSettings.dialogClass) {
        if (typeof dialogSettings.dialogClass === "string" && dialogSettings.dialogClass.indexOf(className) >= 0) {
          return true;
        }
        if (typeof dialogSettings.dialogClass === "object" && $.inArray(className, dialogSettings.dialogClass)) {
          return true;
        }
      }
      if (dialogSettings.classes && dialogSettings.classes["ui-dialog"] && dialogSettings.classes["ui-dialog"].indexOf(className) >= 0) {
        return true;
      }
    },
    closeDialog: ($dialog, dialogSettings, $modal) => {
      const $modalId = $modal.attr("id");
      if ($dialog.is(":visible")) {
        const modalIdElement = $(`#${$modalId}`);
        if (modalIdElement.dialog("isOpen")) {
          $dialog.removeClass("o-dialog--visible");
          setTimeout(() => {
            $(modalIdElement).dialog("close");
          }, 350);
        }
      }
    }
  };
})(Drupal, jQuery);
