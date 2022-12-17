import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: " http://localhost:3000/",
  integrations: [
    tailwind(),
    sitemap(),
    compress({
      html: true,
      css: true,
      js: true,
      img: true,
      svg: true,
      path: "./dist",
    }),
  ],
});
