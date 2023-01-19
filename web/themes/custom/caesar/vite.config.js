import { defineConfig } from 'vite';
import { sync } from 'glob';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@images': 'assets/images',
      '@fonts': 'assets/fonts',
      '@patterns': 'templates/patterns',
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      input: [
        ...sync('src/**/*.{css,js}', {}),
        ...sync('templates/patterns/**/*.styles.css', {}),
        ...sync('templates/patterns/**/*.script.js', {}),
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
      plugins: [
        // Copy patterns assets after writeBundle rollup hook
        // TODO Research `Transform file contents` of plugin
        // in case if component contains link on some image or chunk!!
        copy({
          targets: [
            {
              src: 'dist/css/*.styles.css',
              dest: 'templates/patterns/',
              rename: (name) => {
                const patternPath = name.split('.');
                return `${patternPath[0]}/${patternPath[1]}/dist/styles.css`;
              },
              transform: (contents) =>
                contents
                  .toString()
                  .replace('../images', '../../../../../dist/images/'),
            },
            {
              src: 'dist/js/*.script.js',
              dest: 'templates/patterns/',
              rename: (name) => {
                const patternPath = name.split('.');
                return `${patternPath[0]}/${patternPath[1]}/dist/script.js`;
              },
              transform: (contents) =>
                contents
                  .toString()
                  .replace('../chunks', '../../../../../dist/chunks/'),
            },
          ],
          hook: 'writeBundle',
          // Uncomment next to check how files copied
          verbose: true,
        }),
      ],
    },
  },
});
