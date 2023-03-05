import { resolve } from 'path';

export default {
  base: '',
  resolve: {
    alias: {
      '@images': resolve(__dirname, '/images'),
      '@fonts': resolve(__dirname, '/fonts'),
    },
  },
};
