import Twig from 'twig';
import yaml from 'js-yaml';

export const twigLoader = (src) => {
  var template = Twig.twig({
    data: src,
  });
  console.log(template.render({ title: "My title" }));
}

export const yamlLoader = (src) => {
  console.log(yaml.load(src));
}