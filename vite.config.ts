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
      hooks: resolve(__dirname, "src", "hooks"),
    },
  },
});
