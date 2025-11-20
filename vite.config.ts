// Provide a simple ambient declaration so TypeScript won't error if
// the plugin's types are not installed.
declare module '@vitejs/plugin-react' {
  const content: any;
  export default content;
}

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 28081,
      host: '0.0.0.0',
      allowedHosts: ['www.tamochi.cn', 'tamochi.cn'],
    },
    plugins: [
      react(),
      {
        name: 'html-title-rewrite',
        transformIndexHtml(html) {
          return html.replace(/<title>tamochi'?page<\/title>/i, "<title>tamochi's home</title>");
        }
      }
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
