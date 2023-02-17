import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename, extname, resolve } from 'path';

const input = sync('css/**/*.src.css', {
  ignore: [
    'css/**/_*.src.css',
  ],
});

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@images': resolve(__dirname, '/images'),
      '@fonts': resolve(__dirname, '/fonts'),
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      input: [
        ...input
      ],
      output: {
        dir: '.',
        assetFileNames: ({ name }) => {
          const ext = extname(name);
          if (ext === '.css') {
            return input.find((a) => a.includes(basename(name))).replace('.src', '');
          }
          if (['.woff2', '.woff', '.ttf', '.otf', '.eot'].includes(ext)) {
            return `fonts/[name].[ext]`;
          }
          if (
            ['.svg', '.png', '.jpeg', '.jpg', '.gif', '.avif', '.webp'].includes(ext)
          ) {
            return `images/[name].[ext]`;
          }
          return `dist/[name].[ext]`;
        },
      },
    },
  },
});
