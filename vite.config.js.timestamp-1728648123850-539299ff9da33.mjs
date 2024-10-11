// vite.config.js
import { defineConfig } from "file:///C:/Users/User/Documents/Hi%20world/npm/facu-ui/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/User/Documents/Hi%20world/npm/facu-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve, relative, extname } from "path";
import { glob } from "file:///C:/Users/User/Documents/Hi%20world/npm/facu-ui/node_modules/glob/dist/esm/index.js";
import { fileURLToPath } from "node:url";
import dts from "file:///C:/Users/User/Documents/Hi%20world/npm/facu-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///C:/Users/User/Documents/Hi%20world/npm/facu-ui/node_modules/vite-plugin-lib-inject-css/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\User\\Documents\\Hi world\\npm\\facu-ui";
var __vite_injected_original_import_meta_url = "file:///C:/Users/User/Documents/Hi%20world/npm/facu-ui/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({ exclude: ["./stories"] }),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/main.ts"),
      name: "facu-ui",
      formats: ["es"],
      fileName: "facu-ui"
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(glob.sync("src/**/*.{ts,tsx}").map(function(file) {
        return [
          relative("src", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ];
      })),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERvY3VtZW50c1xcXFxIaSB3b3JsZFxcXFxucG1cXFxcZmFjdS11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEb2N1bWVudHNcXFxcSGkgd29ybGRcXFxcbnBtXFxcXGZhY3UtdWlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VzZXIvRG9jdW1lbnRzL0hpJTIwd29ybGQvbnBtL2ZhY3UtdWkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgcmVzb2x2ZSwgcmVsYXRpdmUsIGV4dG5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XHJcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJztcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICByZWFjdCgpLFxyXG4gICAgICAgIGR0cyh7IGV4Y2x1ZGU6IFsnLi9zdG9yaWVzJ10gfSksXHJcbiAgICAgICAgbGliSW5qZWN0Q3NzKCksXHJcbiAgICBdLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHMnKSxcclxuICAgICAgICAgICAgbmFtZTogJ2ZhY3UtdWknLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ10sXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnZmFjdS11aScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXHJcbiAgICAgICAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoZ2xvYi5zeW5jKCdzcmMvKiovKi57dHMsdHN4fScpLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmUoJ3NyYycsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBleHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxyXG4gICAgICAgICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgICAgICAgIF07IH0pKSxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV1bZXh0bmFtZV0nLFxyXG4gICAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVSxTQUFTLG9CQUFvQjtBQUNuVyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLFlBQVk7QUFDckIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBTjdCLElBQU0sbUNBQW1DO0FBQW9LLElBQU0sMkNBQTJDO0FBTzlQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLElBQUksRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7QUFBQSxJQUM5QixhQUFhO0FBQUEsRUFDakI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNkO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsU0FBUyxtQkFBbUI7QUFBQSxNQUN2QyxPQUFPLE9BQU8sWUFBWSxLQUFLLEtBQUssbUJBQW1CLEVBQUUsSUFBSSxTQUFVLE1BQU07QUFBRSxlQUFPO0FBQUEsVUFDbEYsU0FBUyxPQUFPLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxRQUFRLElBQUksRUFBRSxNQUFNLENBQUM7QUFBQSxVQUNqRSxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxRQUNoRDtBQUFBLE1BQUcsQ0FBQyxDQUFDO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
