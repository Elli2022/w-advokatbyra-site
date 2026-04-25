import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/news": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true,
        rewrite: () => "/.netlify/functions/news-proxy",
      },
    },
  },
});
