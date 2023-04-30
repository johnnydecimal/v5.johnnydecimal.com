import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get(context) {
  return rss({
    // `<title>` field in output xml
    title: "Johnny.Decimal - site feed",
    // `<description>` field in output xml
    description: "A system to organise projects.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(
      import.meta.glob(["/src/pages/**/*.{md,mdx}", "!/src/pages/test/*"])
    ),
    // (optional) inject custom xml
    customData: `<language>en-au</language>`,
    stylesheet: "/rss/styles.xsl",
  });
}
