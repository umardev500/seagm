import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
const basePath = '/home/umar/Disk/Development/Web/Projects/FRONT/seagm'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': `${basePath}/src/hooks`,
      '@assets': `${basePath}/src/assets`,
      '@router': `${basePath}/src/router`,
      '@context': `${basePath}/src/context`,
      '@types': `${basePath}/src/types`,
      '@components': `${basePath}/src/components`,
    }
  }
})
