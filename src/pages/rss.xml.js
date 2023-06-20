import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function get(context) {
  /**
   * As at `JDNavigation`, only get what we need to get.
   */
  const sitePages = await getCollection("site", ({ slug, data }) => {
    return slug !== "index" && !data.excludeFromRss && data.publish;
  });

  const blogPosts = await getCollection("blog", ({ data }) => {
    return data.publish;
  });

  const allPages = [...sitePages, ...blogPosts];
  allPages.sort((a, b) => {
    return a.data.pubDate - b.data.pubDate;
  });

  return rss({
    title: "Johnny.Decimal",
    description: "A system to organise projects - full site feed",
    site: context.site,
    items: allPages.map((page) => {
      return {
        title: `${page.data.number} ${page.data.title}`,
        pubDate: page.data.pubDate,
        // description: page.data.description,
        // customData: page.data.customData,

        /**
         * Create our link from `post.slug`. Again as at `JDNavigation` we need
         * to regex the decimal back in to our slug as Astro has removed it.
         */
        link: `/${page.slug.replace(/(\/\d\d)(\d\d)/, "$1.$2")}/`,
        content: sanitizeHtml(
          parser.render(
            page.body
              // Replace # {frontmatter.title}
              .replace("# {frontmatter.title}", "")
              // Replace all component imports
              .replaceAll(/import.*;/g, "")
              // Replace all <Components />
              .replaceAll(
                /<.* \/>/g,
                " {{ see [the note at 02.03 RSS feed](https://johnnydecimal.com/00-09-site-administration/02-send-and-receive/02.03-rss-feed/) regarding the display of additional components in this feed }} "
              )
          )
        ),
      };
    }),
    // stylesheet: "/rss/styles.xsl",
  });
}
