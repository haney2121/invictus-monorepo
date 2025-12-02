import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@invictus/utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@invictus/ui': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
  server: { port: 3000 },
});
