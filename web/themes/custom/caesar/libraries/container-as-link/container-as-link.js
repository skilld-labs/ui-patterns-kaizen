(({ behaviors }) => {
  behaviors.caesarContainerAsLink = {
    attach: (context) => {
      once("library-container-as-link", "[data-entity-fake-link-container]", context).forEach(
        (el) => {
          let link = el.querySelector(`a[data-entity-fake-link-target][href]`);
          if (!link) {
            link = el.querySelector("a[href]");
          }
          if (link) {
            behaviors.caesarContainerAsLink.handler({ el, link });
          }
        }
      );
    },
    handler: (obj) => {
      const { el } = obj;
      const { link } = obj;
      el.setAttribute("data-entity-fake-link-built", "");
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "link");
      el.setAttribute("data-href", link.getAttribute("href"));
      el.setAttribute(
        "aria-label",
        link.hasAttribute("title") ? link.getAttribute("title") : link.textContent.replace(/\s+/g, " ").trim()
      );
      el.setAttribute(
        "data-target",
        link.hasAttribute("target") ? link.getAttribute("target") : "_self"
      );
      Array.prototype.forEach.call(el.querySelectorAll("a"), (innerLink) => {
        innerLink.setAttribute("tabindex", "-1");
      });
      el.addEventListener("click", (e) => {
        behaviors.caesarContainerAsLink.fakeLinkEvents({ el, e });
      });
      el.addEventListener("keydown", (e) => {
        behaviors.caesarContainerAsLink.fakeLinkEvents({ el, e });
      });
    },
    fakeLinkEvents: (obj) => {
      if (obj.e.type === "click" || obj.e.key === "Enter") {
        const ref = obj.e.target != null ? obj.e.target : obj.e.srcElement;
        if (ref && ref.tagName !== "A") {
          window.open(obj.el.getAttribute("data-href"), obj.el.getAttribute("data-target"));
        }
      }
    }
  };
})(Drupal);