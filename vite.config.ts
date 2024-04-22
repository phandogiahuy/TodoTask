import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
base: "/TodoTaskGeekup-Frontend/",
plugins: [react()],
resolve: {
},
build: {
  rollupOptions: {
      output:{
          manualChunks(id:any) {
              if (id.includes('node_modules')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
      }
  }
}
});