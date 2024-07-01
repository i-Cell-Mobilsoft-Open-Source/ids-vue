import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from 'url';
import path from 'path';

const filesNeedToExclude = ["src/demo/**"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    cssMinify: true,
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "Icell Design System",
      // the name of the output files when the build is run
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: [
        "vue",
      ],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: "Vue",
        },
        plugins: [
          //commonjs(),
        ]
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: { 
        additionalData: `@import "@i-cell/ids-tokens/css/tokens.css";` 
     },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@models': path.resolve(__dirname, './src/models'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  server: {
    port: 1234,
  },
})

