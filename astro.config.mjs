import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { h } from "hastscript";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behaviour: "append",
          content: h("span.header-link-icon", { ariaHidden: "true" }),
        },
      ],
    ],
    syntaxHighlight: false,
  },
  scopedStyleStrategy: "class",
  site: "https://johnnydecimal.com",
  trailingSlash: "always",
});
