---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/patterns/helpers/root-variables/h-root-variables.stories.js
---
import './h-root-variables';
Drupal.behaviors.<%= h.changeCase.lower(name) %>_storybook_h_root_variables.attach();
