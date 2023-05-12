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
    return slug !== "index" && !data.excludeFromNavAndRss;
  });

  /* 
  console.log(
    "🆚 rss.xml.js/sitePages[18]:",
    sanitizeHtml(
      parser.render(
        sitePages[18].body
          .replaceAll(
            /<.* \/>/g,
            "> On the website there is a component here: it might render an image, a graphic, a table, or something else. The RSS feed doesn't have these yet. I'm sorry - it's something I'll get round to but it's not trivial."
          )
          .replaceAll(/import.*;/g, "")
      )
    )
  );
  */

  /*
  console.log(
    "🆚 rss.xml.js/sanitizeHtml(parser.render(page.body)),:",
    sanitizeHtml(
      parser
        .render(sitePages[18].body)
        .replaceAll(/<p>import.*?<\/p>/gs, "")
        .replace(/<h1>{frontmatter.title}<\/h1>\n/, "")
        .replaceAll(
          /<p>&lt;.* \/&gt;<\/p>/g,
          "<blockquote>On the website there is a component here: it might render an image, a graphic, a table, or something else. The RSS feed doesn't have these yet. I'm sorry - it's something I'll get round to but it's not trivial.</blockquote>\n"
        )
    )
  );
  */

  return rss({
    title: "Johnny.Decimal",
    description: "A system to organise projects - full site feed",
    site: context.site,
    items: sitePages.map((page) => {
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
              .replaceAll(
                /<.* \/>/g,
                "> On the website there is a component here: it might render an image, a graphic, a table, or something else. The RSS feed doesn't have these yet. I'm sorry - it's something I'll get round to but it's not trivial."
              )
              .replaceAll(/import.*;/g, "")
          )
        ),
      };
    }),
    // stylesheet: "/rss/styles.xsl",
  });
}
