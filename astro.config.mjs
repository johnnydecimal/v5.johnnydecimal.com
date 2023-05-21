import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  scopedStyleStrategy: "class",
  site: "https://johnnydecimal.com",
  trailingSlash: "always",
});
