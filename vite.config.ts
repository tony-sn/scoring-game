import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      app: resolve(__dirname, "src", "app"),
      components: resolve(__dirname, "src", "components"),
      contexts: resolve(__dirname, "src", "contexts"),
      hooks: resolve(__dirname, "src", "hooks"),
      interfaces: resolve(__dirname, "src", "interfaces"),
      pages: resolve(__dirname, "src", "pages"),
      styled: resolve(__dirname, "src", "styled"),
    },
  },
});
