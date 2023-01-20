import { defineConfig } from 'vite';
import { sync } from 'glob';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: '',
  build: {
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      input: [...sync('*.pcss.css', {}), ...sync('*.script.js', {})],
      output: {
        dir: '.',
        entryFileNames: ({ name }) => `${name.replace('.script', '')}.js`,
        assetFileNames: ({ name }) => `${name.replace('.pcss', '')}`,
      },
    },
  },
});
