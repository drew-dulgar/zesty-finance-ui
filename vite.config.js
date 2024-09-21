import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP',
  ssr: {
    noExternal: [
      'primereact'
    ]
  },
  plugins: [
    react()
  ]
})
