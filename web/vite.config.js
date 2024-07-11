

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
  // plugins: [react()],
//   server:{
//     port:5173,
//   },
  
// });

//  import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     port: 5173,
//     proxy: {
//       '/api': {
//         target: 'https://20bf-41-90-101-26.ngrok-free.app', // Replace with your active Ngrok tunnel URL
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://c646-41-90-101-26.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});


