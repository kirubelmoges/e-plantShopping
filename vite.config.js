import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/e-plantShopping", // <-- repository name as a string
  plugins: [react()],
});

