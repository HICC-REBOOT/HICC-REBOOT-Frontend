import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgrPlugin()],
  define: {
    global: {},
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@libs', replacement: path.resolve(__dirname, 'src/libs') },
      { find: '@mocks', replacement: path.resolve(__dirname, 'src/mocks') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@query', replacement: path.resolve(__dirname, 'src/query') },
      { find: '@state', replacement: path.resolve(__dirname, 'src/state') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: './runtimeConfig', replacement: path.resolve(__dirname, 'runtimeConfig.browser') },
    ],
  },
});
