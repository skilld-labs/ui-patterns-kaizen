import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename } from 'path';

const input = sync('js/**/*.src.js');

export default defineConfig({
  base: '',
  build: {
    minify: false,
    rollupOptions: {
      input: [
        ...input,
      ],
      output: {
        dir: '.',
        entryFileNames: ({ name }) => input.find((a) => a.includes(basename(name))).replace('.src', ''),
        chunkFileNames: () => 'js/chunks/[name].js',
      },
    },
  },
});
