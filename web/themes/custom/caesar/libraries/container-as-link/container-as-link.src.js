/**
 * @file
 * This javascript can be used to simulate
 * link wrapper around whole entity.
 */

(({ behaviors }) => {
  behaviors.caesarContainerAsLink = {
    attach: (context) => {
      once('library-container-as-link', '[data-entity-fake-link-container]', context).forEach(
        (el) => {
          // It's not expected to have multiple different links in your container,
          // since simulation of link will be done on the whole container,
          // so you can lose your other links.
          // You can have several links with same [href] in your container.
          let link = el.querySelector(`a[data-entity-fake-link-target][href]`);
          if (!link) {
            // Fallback search. If targetData is not defined, then let's try
            // to catch just first matched link.
            link = el.querySelector('a[href]');
          }
          if (link) {
            behaviors.caesarContainerAsLink.handler({ el, link });
          }
        },
      );
    },
    handler: (obj) => {
      const { el } = obj;
      const { link } = obj;
      el.setAttribute('data-entity-fake-link-built', '');
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
        behaviors.caesarContainerAsLink.fakeLinkEvents({ el, e });
      });

      el.addEventListener('keydown', (e) => {
        behaviors.caesarContainerAsLink.fakeLinkEvents({ el, e });
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
