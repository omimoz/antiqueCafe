import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Antique Cafe",
        short_name: "Antique Cafe",
        start_url: ".",
        display: "standalone",
        background_color: "#fff",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        icons: [
          {
            src: "48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "168.png",
            sizes: "168x168",
            type: "image/png",
          },
          {
            src: "192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
