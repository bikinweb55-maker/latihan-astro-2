import { defineConfig, svgoOptimizer } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. UBAH KE URL CLOUDFLARE PAGES ANDA (Wajib HTTPS agar tidak dianggap berbahaya)
  site: "https://latihan-astro-2.pages.dev", 
  
  // 2. KOSONGKAN BASE (Ubah dari "/space-ahead" menjadi "/")
  // Karena di Cloudflare Pages, website Anda berada di root/halaman utama, bukan di dalam folder sub-direktori.
  base: "/", 

  integrations: [
    swup({
      theme: ["overlay", { direction: "to-top" }],
      cache: true,
      progress: true,
    }),
    preact(),
    sitemap(),
  ],

  image: {
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});

//swup theme variations:
// theme: "fade"
// theme: ["overlay", { direction: "to-top"}]
//
// for overlay and fade, further customization can be done in animate.css file
// To know about swup, visit https://swup.js.org/