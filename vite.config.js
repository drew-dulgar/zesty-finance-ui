import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/



export default defineConfig(({ isSsrBuild }) => ({
  envPrefix: 'APP',
  plugins: [
    TanStackRouterVite(),
    react()
  ],
  ssr: {
    noExternal: [
      '@tanstack/react-query', 
      //'@tanstack/router'
    ]
  },
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
}));
