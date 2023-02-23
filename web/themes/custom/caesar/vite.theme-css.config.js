import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename, extname } from 'path';
import viteGlobals from './vite.globals-config';

const input = sync('css/**/*.src.css', {
  ignore: ['css/**/_*.src.css'],
});

export default defineConfig({
  ...viteGlobals,
  build: {
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: [...input],
      output: {
        dir: '.',
        assetFileNames: ({ name }) => {
          const ext = extname(name);
          if (ext === '.css') {
            return input
              .find((a) => a.includes(basename(name)))
              .replace('.src', '');
          }
          if (['.woff2', '.woff', '.ttf', '.otf', '.eot'].includes(ext)) {
            return `fonts/[name].[ext]`;
          }
          if (
            [
              '.svg',
              '.png',
              '.jpeg',
              '.jpg',
              '.gif',
              '.avif',
              '.webp',
            ].includes(ext)
          ) {
            return `images/[name].[ext]`;
          }
          return `dist/[name].[ext]`;
        },
      },
    },
  },
});
