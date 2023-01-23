import { defineConfig } from 'vite';
import { sync } from 'glob';
import { basename } from 'path';

export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      input: [...sync('*.pcss.css', {}), ...sync('*.script.js', {})],
      output: {
        preserveModules: true,
        dir: '.',
        entryFileNames: ({ name }) => {
          if (basename(name).includes('.script')) {
            return `${basename(name).replace('.script', '')}.js`;
          }
          return `libraries/${basename(name)}.js`;
        },
        assetFileNames: ({ name }) => {
          if (basename(name).includes('.pcss')) {
            return `${basename(name).replace('.pcss', '')}`;
          }
          return `libraries/${basename(name)}`;
        },
      },
      preserveEntrySignatures: 'strict',
    },
  },
});
