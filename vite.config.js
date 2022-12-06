import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // plugins
  plugins: [
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
    react()
  ],
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
    },
  },
});
