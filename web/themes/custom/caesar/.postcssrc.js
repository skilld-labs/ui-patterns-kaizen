const yaml = require('js-yaml');
const fs = require('fs');
const breakpoints = yaml.load(fs.readFileSync(__dirname + '/caesar.breakpoints.yml'));

module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-custom-media-generator')(
      Object.keys(breakpoints).reduce((a, i) => Object.assign(a, {
        [`db-${i.split('.').pop()}`]: breakpoints[i].mediaQuery,
      }), {})
    ),
    require('postcss-custom-media'),
    require('autoprefixer')({
      cascade: false,
    }),
    require('postcss-pxtorem')({
      propList: ['*'],
    }),
    require('stylelint')({
      fix: true,
    }),
  ]
}