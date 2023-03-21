import { defineConfig } from 'vite';
import { cssBuild } from './vite.globals-config';

export default defineConfig(
  cssBuild('libraries')
);
