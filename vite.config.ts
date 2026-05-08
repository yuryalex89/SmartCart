import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages: https://<user>.github.io/SmartCart/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/SmartCart/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
