import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import biomePlugin from 'vite-plugin-biome';
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path';
import TanStackRouterVite from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite({
    target: 'react',
    autoCodeSplitting: true
  }), biomePlugin({
    mode: 'lint',
    files: '.'
  }), tailwindcss(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
