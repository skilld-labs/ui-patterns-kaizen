import { defineConfig } from 'vite';
import { sync } from 'glob';
import { extname, resolve } from 'path';

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@images': resolve(__dirname, '/assets/images'),
      '@fonts': resolve(__dirname, '/assets/fonts'),
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      input: [...sync('src/**/*.{css,js}', {})],
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: ({ name }) => {
          const ext = extname(name);
          if (ext === 'css') {
            return `css/[name].[ext]`;
          }
          if (['woff2', 'woff', 'ttf', 'otf', 'eot'].includes(ext)) {
            return `fonts/[name].[ext]`;
          }
          if (
            ['svg', 'png', 'jpeg', 'jpg', 'gif', 'avif', 'webp'].includes(ext)
          ) {
            return `images/[name].[ext]`;
          }
          return `[name].[ext]`;
        },
      },
    },
  },
});
