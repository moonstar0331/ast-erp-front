import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_DEV_FRONT_NGINX_HOST,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''), //임시
          configure: (proxy, options) => {
            proxy.on('error', (err, req, res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req, res) => {
              console.log(
                'Sending Request to the Target:',
                req.method,
                req.url,
              );
            });
            proxy.on('proxyRes', (proxyRes, req, res) => {
              console.log(
                'Received Response from the Target:',
                proxyRes.statusCode,
                req.url,
              );
            });
          },
        },
      },
    },
  };
});
