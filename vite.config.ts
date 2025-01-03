import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Use '/' for root deployment (Vercel auto-detects the root)
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for static assets (JS/CSS/images)
  },
  server: {
    host: "127.0.0.1",
    port: 8000, // Optional: Set a specific port for local development
  },
});

