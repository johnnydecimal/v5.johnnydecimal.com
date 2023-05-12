import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  /**
   * As at `JDNavigation`, only get what we need to get.
   */
  const sitePages = await getCollection("site", ({ slug, data }) => {
    return slug !== "index" && !data.excludeFromNavAndRss;
  });

  return rss({
    title: "Johnny.Decimal",
    description: "A system to organise projects - full site feed",
    site: context.site,
    items: sitePages.map((page) => {
      // console.log("🆚 rss.xml.js/page:", page);
      console.log(
        "🆚 rss.xml.js/page:",
        page.slug.replace(/(\/\d\d)(\d\d)/, "$1.$2")
      );
      return {
        title: page.data.title,
        pubDate: page.data.pubDate,
        // description: page.data.description,
        // customData: page.data.customData,

        /**
         * Create our link from `post.slug`. Again as at `JDNavigation` we need
         * to regex the decimal back in to our slug as Astro has removed it.
         */
        link: `/${page.slug.replace(/(\/\d\d)(\d\d)/, "$1.$2")}/`,
      };
    }),
  });
}
