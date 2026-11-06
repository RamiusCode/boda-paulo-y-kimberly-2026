// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dirección pública: la usan las etiquetas og: para la vista previa de WhatsApp
  site: 'https://boda-paulo-y-kimberly-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});