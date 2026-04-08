import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei", "@react-three/rapier", "@react-three/postprocessing"],
          gsap: ["gsap"],
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
