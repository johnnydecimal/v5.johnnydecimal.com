import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
// import tailwind from "@astrojs/tailwind";

/**
 * TODO: you'd like to set the `trailingSlash: 'always'` option so that local
 *       build behaviour matches Netlify. You've had to hack around here and
 *       there because it doesn't. But doing that breaks the building of
 *       JDNavItem. So fix that later once the site is up.
 */

export default defineConfig({
  site: "https://johnnydecimal.com",
  integrations: [
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    // tailwind(),
  ],
});
