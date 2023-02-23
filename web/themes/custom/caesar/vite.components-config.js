import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename } from 'path';

export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      input: [...sync('*.src.css', {}), ...sync('*.src.js', {})],
      output: {
        preserveModules: true,
        dir: '.',
        entryFileNames: ({ name }) => {
          if (basename(name).includes('.src')) {
            return `${basename(name).replace('.src', '')}.js`;
          }
          return `${basename(name)}.js`;
        },
        assetFileNames: ({ name }) => {
          console.log(basename(name));
          if (basename(name).includes('.src')) {
            return `${basename(name).replace('.src', '')}`;
          }
          return `${basename(name)}`;
        },
      },
      preserveEntrySignatures: 'strict',
    },
  },
});
