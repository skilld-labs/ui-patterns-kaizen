import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename } from 'path';

export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      input: [...sync('*.pcss.css', {}), ...sync('*.src.js', {})],
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
          if (basename(name).includes('.pcss')) {
            return `${basename(name).replace('.pcss', '')}`;
          }
          return `${basename(name)}`;
        },
      },
      preserveEntrySignatures: 'strict',
    },
  },
});
