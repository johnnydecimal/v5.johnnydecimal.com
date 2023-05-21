import { getCollection } from "astro:content";

const sitePages = await getCollection("site", ({ data }) => {
  return !data.excludeFromNav;
});

interface BackNext {
  pathname?: string;
  title?: string;
}
const backNextArray: BackNext[] = [];

sitePages.forEach((page) => {
  // Are we in the same area as the previous entry?
  // If *not*, drop in an `undefined`.

  // Type safety: does backNextArray[-1].pathname exist?
  if (backNextArray.length > 0) {
    if (
      backNextArray[backNextArray.length - 1].pathname?.substring(1, 6) !==
      page.slug.substring(0, 5) // no slashes on this one
    ) {
      backNextArray.push({ pathname: undefined });
    }
  }

  // We only push IDs to backNextArray: no areas, no categories.
  if (page.slug.split("/").length === 3) {
    backNextArray.push({
      pathname: "/" + page.slug.replace(/(\d\d)(\d\d)/, "$1.$2") + "/",
      title: page.data.title,
    });
  }
});

export default backNextArray;
