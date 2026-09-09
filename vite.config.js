import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// TODO: clean this up
export default defineConfig({
  plugins: [vue()],
  server: { port: 5173 },
});
