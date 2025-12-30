import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // 1. 指定根目錄為 src
  root: 'src',

  // 2. 設定別名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },

  // 3. 設定打包輸出路徑 (因為 root 變成了 src，輸出預設會跑進 src/dist，所以要退回一層)
  build: {
    outDir: '../dist',
    emptyOutDir: true, // 確保每次打包都會清空舊檔案
  },

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  }
});