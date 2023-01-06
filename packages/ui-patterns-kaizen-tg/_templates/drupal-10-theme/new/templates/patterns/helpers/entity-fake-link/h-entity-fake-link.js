---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/patterns/helpers/entity-fake-link/h-entity-fake-link.js
---
/**
 * @file
 * This javascript can be used to simulate
 * link wrapper around whole entity.
 */

(({ behaviors }) => {
  behaviors.<%= h.changeCase.lower(name) %>_storybook_h_entity_fake_link = {
    attach: (context) => {
      const entry = {
        wrapperData: '[data-h-entity-fake-link-container]',
        targetData: '[data-h-entity-fake-link-target]',
        processingName: 'storybook-h-entity-fake-link',
      };
      once(entry.processingName, `${entry.wrapperData}`, context).forEach(
        (el) => {
          // Multiple links inside of element you want to wrap is not expected
          // with this script. So it searches only the first matched.
          let link = el.querySelector(`a${entry.targetData}[href]`);
          if (!link) {
            // Fallback search. If targetData is not defined, then let's try
            // to catch just first matched link.
            link = el.querySelector('a[href]');
          }
          if (link) {
            behaviors.<%= h.changeCase.lower(name) %>_storybook_h_entity_fake_link.handler({ el, link });
          }
        },
      );
    },
    handler: (obj) => {
      const { el } = obj;
      const { link } = obj;
      el.setAttribute('data-h-entity-fake-link-built', '');
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'link');
      el.setAttribute('data-href', link.getAttribute('href'));
      el.setAttribute(
        'aria-label',
        link.hasAttribute('title')
          ? link.getAttribute('title')
          : link.textContent.replace(/\s+/g, ' ').trim(),
      );
      el.setAttribute(
        'data-target',
        link.hasAttribute('target') ? link.getAttribute('target') : '_self',
      );
      Array.prototype.forEach.call(el.querySelectorAll('a'), (innerLink) => {
        innerLink.setAttribute('tabindex', '-1');
      });

      el.addEventListener('click', (e) => {
        behaviors.<%= h.changeCase.lower(name) %>_storybook_h_entity_fake_link.fakeLinkEvents({ el, e });
      });

      el.addEventListener('keydown', (e) => {
        behaviors.<%= h.changeCase.lower(name) %>_storybook_h_entity_fake_link.fakeLinkEvents({ el, e });
      });
    },
    fakeLinkEvents: (obj) => {
      if (obj.e.type === 'click' || obj.e.key === 'Enter') {
        const ref = obj.e.target != null ? obj.e.target : obj.e.srcElement;
        if (ref && ref.tagName !== 'A') {
          window.open(obj.el.getAttribute('data-href'), obj.el.getAttribute('data-target'));
        }
      }
    },
  };
})(Drupal);
