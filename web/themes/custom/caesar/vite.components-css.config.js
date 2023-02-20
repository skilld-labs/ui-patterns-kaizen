import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename, extname } from 'path';

const input = sync('templates/patterns/**/*.src.css');

export default defineConfig({
  base: '',
  build: {
    emptyOutDir: false,
    minify: false,
    assetsInlineLimit: 10000000000,
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
          return `dist/[name].[ext]`;
        },
      },
    },
  },
});
