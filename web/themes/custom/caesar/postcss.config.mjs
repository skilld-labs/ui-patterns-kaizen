import { CustomMedia } from 'open-props/src/media';
import { parse } from 'yaml';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';
import postcssNested from 'postcss-nested';
import postccCustomMedia from 'postcss-custom-media';
import postCssCustomMediaGenerator from 'postcss-custom-media-generator';
import autoprefixer from 'autoprefixer';
import postCssPxToRem from 'postcss-pxtorem';
import stylelint from 'stylelint';

const __dirname = dirname(fileURLToPath(import.meta.url));
const breakpoints = parse(
  readFileSync(resolve(__dirname, './caesar.breakpoints.yml'), 'utf8'),
);

const breakpointsLoaded = Object.keys(breakpoints).reduce(
  (a, i) =>
    Object.assign(a, {
      [`--${i.split('.').pop()}`]: breakpoints[i].mediaQuery,
    }),
  {},
);

export default {
  plugins: [
    postcssNested,
    postCssCustomMediaGenerator({
      ...CustomMedia,
      ...breakpointsLoaded,
    }),
    postcssJitProps(OpenProps),
    postccCustomMedia,
    autoprefixer({
      cascade: false,
    }),
    postCssPxToRem({
      propList: ['*'],
    }),
    // stylelint({
    //   configFile: __dirname + '/.stylelintrc',
    //   fix: true,
    // }),
  ],
};