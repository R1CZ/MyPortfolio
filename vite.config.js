import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increases warning limit from 500KB to 1MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Creates separate chunks for each node_modules package
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
    // Minimize output for production builds (you can adjust this as needed)
    minify: 'esbuild', // Use esbuild for faster builds in production
  },
  server: {
    // HMR settings (ensure it works with dev tools)
    hmr: {
      overlay: true, // Show errors in browser overlay
    },
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster development build times
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  define: {
    // Set global variables or flags if needed (optional)
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
