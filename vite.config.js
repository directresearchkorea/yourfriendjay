import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths work seamlessly on GitHub Pages
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false
  }
});
