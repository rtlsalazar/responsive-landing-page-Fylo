import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    publicDir: './public',
    define: {
      "process.env": env,
    },
    plugins: [react(), svgr()],
    loader: {
      ".js": "jsx",
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      }
    },
    build: {
      outDir: "build",
    },
    server: {
      port: 80,
      host: true
    },
  };
});
