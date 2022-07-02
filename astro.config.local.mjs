import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3210',
  integrations: [vue(), sitemap()],
  server: {
    port: 3210,
    host: false
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/**']
      },
      hmr: {}
    }
  }
})