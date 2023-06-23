import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        page.search(/90-99/) === -1 &&
        page !== "https://johnnydecimal.com/test/style-guide/",
    }),
  ],
  scopedStyleStrategy: "class",
  site: "https://johnnydecimal.com",
  trailingSlash: "always",
});
