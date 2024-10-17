import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP',
  ssr: {
    noExternal: [
      'primereact'
    ]
  },
  plugins: [
    TanStackRouterVite(),
    react()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  assetsInclude: [
    'src/docs/**/*.md'
  ]
})
