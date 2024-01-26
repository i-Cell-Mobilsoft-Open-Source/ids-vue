import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from 'url';
import path from 'path';

const filesNeedToExclude = ["src/demo/**", "src/pluggables/Comp2.vue"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "Icell Design System",
      // the name of the output files when the build is run
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        fileURLToPath(
          new URL(
            'src/main.ts',
            import.meta.url
          )
        ),
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        plugins: [
          //commonjs(),
        ]
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
  // loaderOptions: {
  //   scss: {
  //     prependData: `@import "./src/styles/ids.scss";`
  //   }
  // }
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `
  //       @import "@/assets/styles/_responsive.scss";
  //       @import "@/assets/styles/_element-variables.scss";
  //       `
  //     },
  //   }
  // }
})

