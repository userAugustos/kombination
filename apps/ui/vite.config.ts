import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import biomePlugin from 'vite-plugin-biome';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), biomePlugin({
    mode: 'lint',
    files: '.'
  }), tailwindcss(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
