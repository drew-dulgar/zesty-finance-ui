import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import vikeNode from 'vike-node/plugin';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    server: {
      port: 3050,
    },
    envPrefix: 'APP',
    plugins: [
      react(),
      vike(),
      vikeNode({
        entry: 'server/index.js',
        standalone: true
      }),
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
  };

  return config;
});
