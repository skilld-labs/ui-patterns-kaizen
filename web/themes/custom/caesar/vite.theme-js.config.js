import { basename } from 'path';
import { defineConfig } from 'vite';
import { sync } from 'glob';
import viteGlobals from './vite.globals-config';

const input = sync('js/**/*.src.js');

export default defineConfig({
  ...viteGlobals,
  build: {
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: [...input],
      output: {
        dir: '.',
        banner: `
          /**
            * DO NOT EDIT THIS FILE.
            * It's generated automatically by 'yarn build' command.
            * @preserve
          **/
        `,
        entryFileNames: ({ name }) =>
          input.find((a) => a.includes(basename(name))).replace('.src', ''),
        chunkFileNames: () => 'js/chunks/[name].js',
      },
    },
  },
});
