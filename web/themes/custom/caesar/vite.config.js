import { defineConfig } from 'vite';

const glob = require('glob');

const options = {};
options.project = __dirname;
options.dist = `${options.project}/dist`;
options.storybook = `${options.project}/templates/patterns`;
options.css = {
  drupal: `${options.project}/src/css/**/*.css`,
  drupalIgnore: `${options.project}/src/css/**/_*.css`,
  storybook: `${options.storybook}/**/*.css`,
  storybookIgnore: `${options.storybook}/**/_*.css`,
};
options.js = {
  drupal: `${options.project}/src/js/**/*.js`,
  storybook: `${options.storybook}/**/*.js`,
  storybookIgnore: `${options.storybook}/**/*.stories.js`,
};
options.images = `${options.project}/assets/images`;
options.fonts = `${options.project}/assets/fonts`;

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@images': 'assets/images',
      '@fonts': 'assets/fonts',
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      input: [
        ...glob.sync(`${options.js.drupal}`, {}),
        ...glob.sync(`${options.js.storybook}`, {
          ignore: `${options.js.storybookIgnore}`,
        }),
        ...glob.sync(`${options.css.drupal}`, {
          ignore: `${options.css.drupalIgnore}`,
        }),
        ...glob.sync(`${options.css.storybook}`, {
          ignore: `${options.css.storybookIgnore}`,
        }),
      ],
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: ({ name }) => {
          const ext = name.split('.').pop();
          if (ext === 'css') {
            return `css/[name].[ext]`;
          }
          if (['woff2', 'woff', 'ttf', 'otf', 'eot'].includes(ext)) {
            return `fonts/[name].[ext]`;
          }
          if (
            ['svg', 'png', 'jpeg', 'jpg', 'gif', 'avif', 'webp'].includes(ext)
          ) {
            return `images/[name].[ext]`;
          }
          return `[name].[ext]`;
        },
      },
    },
  },
  plugins: [],
});
