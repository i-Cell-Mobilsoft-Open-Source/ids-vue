// vite.config.ts
import { defineConfig } from "file:///C:/Users/Innovitech/Documents/ids/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.8_sass@1.77.6/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Innovitech/Documents/ids/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.8_sass@1.77.6__vue@3.4.21_typescript@5.5.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///C:/Users/Innovitech/Documents/ids/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.8_rollup@4.13.1_typescript@5.5.2_vite@5.3.1_@types+node@20.14.8_sass@1.77.6_/node_modules/vite-plugin-dts/dist/index.mjs";
import { fileURLToPath } from "url";
import path from "path";
import svgLoader from "file:///C:/Users/Innovitech/Documents/ids/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.4.21_typescript@5.5.2_/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Innovitech\\Documents\\ids";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Innovitech/Documents/ids/vite.config.ts";
var filesNeedToExclude = ["src/demo/**"];
var filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, __vite_injected_original_import_meta_url));
});
var vite_config_default = defineConfig({
  plugins: [vue(), dts(), svgLoader()],
  build: {
    cssMinify: true,
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "Icell Design System",
      // the name of the output files when the build is run
      fileName: "index"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: [
        "vue"
      ],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: "Vue"
        },
        plugins: [
          //commonjs(),
        ]
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@core": path.resolve(__vite_injected_original_dirname, "./src/core"),
      "@models": path.resolve(__vite_injected_original_dirname, "./src/models")
    }
  },
  server: {
    port: 1234
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxJbm5vdml0ZWNoXFxcXERvY3VtZW50c1xcXFxpZHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXElubm92aXRlY2hcXFxcRG9jdW1lbnRzXFxcXGlkc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSW5ub3ZpdGVjaC9Eb2N1bWVudHMvaWRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXHJcblxyXG5jb25zdCBmaWxlc05lZWRUb0V4Y2x1ZGUgPSBbXCJzcmMvZGVtby8qKlwiXTtcclxuXHJcbmNvbnN0IGZpbGVzUGF0aFRvRXhjbHVkZSA9IGZpbGVzTmVlZFRvRXhjbHVkZS5tYXAoKHNyYykgPT4ge1xyXG4gIHJldHVybiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoc3JjLCBpbXBvcnQubWV0YS51cmwpKTtcclxufSk7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKSwgZHRzKCksIHN2Z0xvYWRlcigpXSxcclxuICBidWlsZDoge1xyXG4gICAgY3NzTWluaWZ5OiB0cnVlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIC8vIHNyYy9pbmRleHQudHMgaXMgd2hlcmUgd2UgaGF2ZSBleHBvcnRlZCB0aGUgY29tcG9uZW50KHMpXHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXHJcbiAgICAgIG5hbWU6IFwiSWNlbGwgRGVzaWduIFN5c3RlbVwiLFxyXG4gICAgICAvLyB0aGUgbmFtZSBvZiB0aGUgb3V0cHV0IGZpbGVzIHdoZW4gdGhlIGJ1aWxkIGlzIHJ1blxyXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxyXG4gICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgIFwidnVlXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogXCJWdWVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgIC8vY29tbW9uanMoKSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgJ0Bhc3NldHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXHJcbiAgICAgICdAY29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJyksXHJcbiAgICAgICdAY29yZSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb3JlJyksXHJcbiAgICAgICdAbW9kZWxzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL21vZGVscycpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAxMjM0LFxyXG4gIH0sXHJcbn0pXHJcblxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStSLFNBQVMsb0JBQXFCO0FBQzdULE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGVBQWU7QUFOdEIsSUFBTSxtQ0FBbUM7QUFBMEksSUFBTSwyQ0FBMkM7QUFRcE8sSUFBTSxxQkFBcUIsQ0FBQyxhQUFhO0FBRXpDLElBQU0scUJBQXFCLG1CQUFtQixJQUFJLENBQUMsUUFBUTtBQUN6RCxTQUFPLGNBQWMsSUFBSSxJQUFJLEtBQUssd0NBQWUsQ0FBQztBQUNwRCxDQUFDO0FBR0QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDO0FBQUEsRUFDbkMsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxRQUVOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQSxTQUFTO0FBQUE7QUFBQSxRQUVUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2pELGVBQWUsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ3pELFNBQVMsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUM3QyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
