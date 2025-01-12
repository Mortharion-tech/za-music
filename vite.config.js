import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      exclude: "",
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/genre": {
        target: "https://api.deezer.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/genre/, "/genre"),
      },
      "/chart": {
        // Add this new proxy rule
        target: "https://api.deezer.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chart/, "/chart"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
