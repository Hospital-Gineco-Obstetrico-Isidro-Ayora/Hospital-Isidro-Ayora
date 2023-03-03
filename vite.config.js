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
    plugins: [
      copy({
        targets: [
          { src: './node_modules/bootstrap/dist/css/bootstrap.min.css', dest: 'dist' },
          { src: './node_modules/bootstrap/dist/js/bootstrap.min.js', dest: 'dist' },
        ],
      }),
    ],
    css: {
      include: ['bootstrap/dist/css/bootstrap.css']
    }
  }
});

