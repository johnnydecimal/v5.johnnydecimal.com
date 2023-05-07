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
    items: [
      {
        title: "Johnny.Decimal RSS feed under maintenance",
        link: "https://johnnydecimal.com/00-09-site-administration/02-send-and-receive/02.03-rss-feed",
        pubDate: "2023-05-07",
        content:
          "<h1>Johnny.Decimal RSS feed under maintenance</h1><p>The Johnny.Decimal site has been rebuilt and the RSS feed isn't quite ready yet.</p><p>I want the feed to be a full-featured, full-content replica of the site. I'm almost there - follow along at <a href='https://johnnydecimal.com/00-09-site-administration/02-send-and-receive/02.03-rss-feed'>02.03 RSS feed</a>, or just hang tight. I'm hoping to have it done this week.</p><p>&mdash; j.<br />2023-05-07</p>",
      },
    ],
    // (optional) inject custom xml
    customData: `<language>en-au</language>`,
    // stylesheet: "/rss/styles.xsl",
  });
}
