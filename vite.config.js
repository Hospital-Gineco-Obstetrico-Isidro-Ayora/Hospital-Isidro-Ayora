import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  assetsInclude: ['**/*.html'],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',

      },
    },
    
    css: {
      include: ['./node_modules/bootstrap/dist/css/bootstrap.css']
    }
  }
});

