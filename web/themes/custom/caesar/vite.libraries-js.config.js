import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename } from 'path';

const input = sync('libraries/**/*.src.js');

export default defineConfig({
  base: '',
  build: {
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: [...input],
      output: {
        dir: '.',
        entryFileNames: ({ name }) =>
          input.find((a) => a.includes(basename(name))).replace('.src', ''),
      },
    },
  },
});
