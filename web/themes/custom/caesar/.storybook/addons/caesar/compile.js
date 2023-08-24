import { dedent } from 'ts-dedent';
import { builders, generateCode, parseModule } from 'magicast';
import { load } from 'js-yaml';
import { existsSync, readFileSync } from 'fs';
import objectMapper from 'object-mapper';
import {
  COMPONENT_TO_ARGS,
  COMPONENT_TO_ARG_TYPES,
  UI_PATTERN_TO_ARGS,
  UI_PATTERN_TO_ARG_TYPES,
} from './maps';

const prepareStory = (story) => {
  // FIXME: need arrow function support
  // const { decorators, loaders, render, play, ...rest } = story;
  // const prepared = { ...rest } as any;
  // if (decorators) prepared.decorators = decorators.map((d) => parseExpression(d));
  // if (loaders) prepared.loaders = loaders.map((l) => parseExpression(l));
  // if (render) prepared.render = parseExpression(render);
  // if (play) prepared.play = parseExpression(play);
  return story;
};

export const compile = async (fileName, opts) => {
  const { src, type } =
    checkAndGetYamlFileContent(
      fileName.replace('.dynamic-stories.js', '.ui_patterns.yml'),
      'pattern',
    ) ||
    checkAndGetYamlFileContent(
      fileName.replace('.dynamic-stories.js', '.no_patterns.yml'),
      'pattern',
    ) ||
    checkAndGetYamlFileContent(
      fileName.replace('.dynamic-stories.js', '.component.yml'),
      'component',
    ) ||
    false;

  if (!src) return;

  const { args, argTypes, template } = getComponent(src, type, fileName);

  const result =
    dedent`
  import { addDrupalExtensions } from 'drupal-twig-extensions/twig';
  import Twig from 'twig';
  addDrupalExtensions(Twig);
  import { path, ctx, globals, settings } from '${template}';
  import DA from 'drupal-attribute';
  const twg = Twig.twig({
    data: ctx,
    allowInlineIncludes: true,
  });
  const render = (args) => {
    const attributes = new DA();
    return twg.render({ attributes, ...args })
  };
  const play = async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, drupalSettings);
  }

  ` + readFileSync(fileName, 'utf8');

  const parsed = parseModule(result);

  parsed.exports.default.args ||= {};
  if (args) {
    parsed.exports.default.args = Object.assign(
      args,
      parsed.exports.default.args,
    );
  }

  parsed.exports.default.argTypes ||= {};
  if (argTypes) {
    parsed.exports.default.argTypes = Object.assign(
      argTypes,
      parsed.exports.default.argTypes,
    );
  }

  parsed.exports.default.render = builders.raw(`render`);
  parsed.exports.default.play = builders.raw(`play`);

  const { code } = generateCode(parsed);
  return code;
};

const checkAndGetYamlFileContent = (fileName, type) => {
  if (existsSync(fileName)) {
    return {
      src: load(readFileSync(fileName, 'utf8')),
      type,
    };
  }
};

const getComponent = (yaml, type, fileName) => {
  if (type === 'pattern') {
    const component = Object.values(yaml)[0];
    return {
      ...objectMapper(component, UI_PATTERN_TO_ARG_TYPES),
      ...objectMapper(component, UI_PATTERN_TO_ARGS),
      template: component.use,
    };
  } else if (type === 'component') {
    const component = yaml;
    return {
      ...objectMapper(component.props, COMPONENT_TO_ARG_TYPES),
      ...objectMapper(component.props, COMPONENT_TO_ARGS),
      template: fileName.replace('.dynamic-stories.js', '.twig'),
    };
  }
};
