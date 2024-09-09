import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // 本地开发服务端口
    proxy: {
      '/API': {
        target: 'http://localhost:7003', // 要代理的地址
        changeOrigin: true,
        followRedirects: true, // Cookie支持重定向
        rewrite: (path) => path.replace(/^\/API/, ''),
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入
      imports: ['vue'],
      dts: 'types/auto-imports.d.ts',
    }),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Views: path.resolve(__dirname, 'src/views'),
      API: path.resolve(__dirname, 'src/api'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Routes: path.resolve(__dirname, 'src/routes'),
      Store: path.resolve(__dirname, 'src/store'),
      Config: path.resolve(__dirname, 'src/config'),
      Plugins: path.resolve(__dirname, 'src/plugins'),
      Components: path.resolve(__dirname, 'src/components'),
      Utils: path.resolve(__dirname, 'src/utils'), // 工具类方法（新创建的）
    },
  },
})

