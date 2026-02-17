import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(), 
    svgLoader({
      // vite-svg-loader compress and modifies your paths
      // here, we specify not to do it
      svgoConfig: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
          { name: 'convertShapeToPath', active: false },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/vite-graphologie/' // for Github pages or any other host solution
  // https://lorismat.github.io/vite-graphologie/
})