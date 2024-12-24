import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    base: '/web/',
    plugins: [react()],

    // Configure development server
    server: {
      host: '0.0.0.0', // Bind to all network interfaces to make it accessible
      port: 3003,

      proxy: {
        '/api/v2/ekuiper': {
          target: 'http://localhost:9081',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v2\/ekuiper/, '/'),
        },
        '/api': {
          target: process.env.VITE_APP_HOST, // Use Vite's env loader
          changeOrigin: true,
        },
      },
    },
  };
});
