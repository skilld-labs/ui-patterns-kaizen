/**
 * @file
 * This is component script template.
 */

(({ behaviors }, Choices) => {
  behaviors.skilldAtomSelect = {
    attach: (context, settings) => {
      if (!Choices) {
        return;
      }
      once("a-select", ".a-select", context).forEach((el) => {
        behaviors.skilldAtomSelect.handler(el, settings);
      });
    },
    handler: (el, settings) => {
      const element = el.querySelector(".a-select__element");
      if (element) {
        // eslint-disable-next-line no-unused-vars
        const choices = new Choices(element, {
          classNames: {
            containerOuter: "a-select__js-select",
            containerInner: "a-select__js-select-inner",
            input: "a-select__element",
            inputCloned: "a-select__js-select-search",
            list: "a-select__js-select-list",
            listItems: "a-select__js-select-list--multiple",
            listSingle: "a-select__js-select-single",
            listDropdown: "a-select__js-select-list--dropdown",
            item: "a-select__js-select-item",
            itemSelectable: "a-select__js-select-item--selectable",
            itemDisabled: "a-select__js-select-item--disabled",
            itemChoice: "a-select__js-select-item--choice a-text",
            placeholder: "a-select__js-select-placeholder",
            group: "a-select__js-select-group",
            groupHeading: "a-select__js-select-group-heading",
            button: "a-select__js-select-button",
            activeState: "is-active",
            focusState: "is-focused",
            openState: "is-open",
            disabledState: "is-disabled",
            highlightedState: "is-highlighted",
            selectedState: "is-selected",
            flippedState: "is-flipped",
            loadingState: "is-loading",
            noResults: "has-no-results",
            noChoices: "has-no-choices",
          },
          shouldSort: false,
          itemSelectText: "",
          callbackOnCreateTemplates: (template) => {
            return {
              item: ({ classNames }, data) => {
                return template(`
                  <div
                    class="a-select__element a-select__js-preview-item ${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} ${data.placeholder ? classNames.placeholder : ""}"
                    data-item
                    data-id="${data.id}"
                    data-value="${data.value}"
                    ${data.active ? 'aria-selected="true"' : ""}
                    ${data.disabled ? 'aria-disabled="true"' : ""}
                  >${data.label}<svg class="a-select__chevron" aria-hidden="true">
                    <use xlink:href="${settings.skilld.skilld_svg_sprite}#svg-add"></use>
                  </svg></div>
                `);
              },
              choice: ({ classNames }, data) => {
                return template(`
                  <div class="${!data.label ? "a-select__js-select-item--default-value" : ""} ${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
                    data-choice
                    ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"}
                    ${data.selected ? 'data-option-selected="true"' : ""}
                    data-id="${data.id}"
                    data-value="${data.value}"
                    ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}
                  >
                   ${data.label}
                  </div>
                `);
              },
            };
          },
        });
      }
    },
  };
})(Drupal, window.Choices);
