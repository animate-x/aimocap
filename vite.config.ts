import { defineConfig } from "vite";

export default defineConfig({
  base: "/aimocap/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
