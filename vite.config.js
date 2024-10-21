import { resolve } from 'path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/

export default defineConfig(({ isSsrBuild }) => {
  const config = {
    define: {
      'process.env': {}
    },
    envPrefix: 'APP',
    plugins: [
      TanStackRouterVite(),
      react()
    ],
    ssr: {
      external: [

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
  };

  if (!isSsrBuild) {
    config.build = {};
    config.build.lib = {
      entry: resolve(__dirname, 'src/entry-client.jsx'),
      name: 'ZestyFinance',
      fileName: 'entry-client',
    };
  }
  return config;
});
