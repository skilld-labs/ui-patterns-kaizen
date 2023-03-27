/**
 * @file
 * This javascript can be used to simulate
 * link wrapper around whole entity.
 */

(({ behaviors }) => {
  behaviors.kaizerContainerAsLink = {
    attach: (context) => {
      once(
        'container-as-link',
        '[container-as-link-container]',
        context,
      ).forEach((el) => {
        // It's not expected to have multiple different links in your container,
        // since simulation of link will be done on the whole container,
        // so you can lose your other links.
        // You can have several links with same [href] in your container.
        const link =
          el.querySelector(`a[container-as-link-target][href]`) ||
          el.querySelector('a[href]');
        if (link) {
          behaviors.kaizerContainerAsLink.handler(el, link);
        }
      });
    },
    handler: (el, link) => {
      el.setAttribute('container-as-link-built', '');
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'link');
      el.setAttribute('container-as-link-href', link.getAttribute('href'));
      el.setAttribute(
        'aria-label',
        link.hasAttribute('title')
          ? link.getAttribute('title')
          : link.textContent.replace(/\s+/g, ' ').trim(),
      );
      el.setAttribute(
        'container-as-link-target',
        link.hasAttribute('target') ? link.getAttribute('target') : '_self',
      );
      Array.prototype.forEach.call(el.querySelectorAll('a'), (innerLink) => {
        innerLink.setAttribute('tabindex', '-1');
      });

      el.addEventListener('click', (e) => {
        behaviors.kaizerContainerAsLink.fakeLinkEvents(el, e);
      });

      el.addEventListener('keydown', (e) => {
        behaviors.kaizerContainerAsLink.fakeLinkEvents(el, e);
      });
    },
    fakeLinkEvents: (el, e) => {
      if (e.type === 'click' || e.key === 'Enter') {
        const ref = e.target != null ? e.target : e.srcElement;
        if (ref && ref.tagName !== 'A') {
          window.open(
            el.getAttribute('container-as-link-href'),
            el.getAttribute('container-as-link-target'),
          );
        }
      }
    },
  };
})(Drupal);
