import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // global: "globalThis",
    "process.env": {},
  },
  optimizeDeps: {
    esbuildOptions: {
      target: ['es2020', 'safari14'],
    },
  },
});