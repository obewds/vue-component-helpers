/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
      alias: {
          '@': resolve(__dirname, 'src'),
      },
  },
  server: {
      open: true,
  },
  test: {
      globals: true,
  },
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueComponentHelpers',
      formats: ['es','cjs','umd','iife'],
      fileName: (format: string) => `vue-component-helpers.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
        },
        //sourcemap: true,
      },
      plugins: [
        typescript({
          include: ['index.js'],
          exclude: ['node_modules', 'tests/**/*'],
        }),
      ],
    },
  },
})
