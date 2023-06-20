// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a schema for each collection you'd like to validate.
const site = defineCollection({
  schema: z.object({
    // The JD number: must be "quoted" e.g. "00.00"
    number: z.string(),

    // The page title: `Introduction`
    title: z.string(),

    // The page's full area: `10-19 Concepts`
    area: z.string(),

    // Area pages don't have a category; otherwise like `11 Core`
    category: z.string().optional(),

    // Publish the page? If false it won't render anywhere
    publish: z.boolean(),

    // Prevent rendering in the navbar with `true`
    // Un-published pages also don't appear
    excludeFromNav: z.boolean().optional(),

    // Prevent displaying of the BackNext component with `false`
    backNextDisplay: z.boolean().optional(),

    // Prevent rendering in the RSS feed with `true`
    // Un-published pages also don't appear
    excludeFromRss: z.boolean().optional(),
    // Publication date for RSS & other
    pubDate: z.date().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    number: z.string(),

    author: z.enum(["Johnny Noble", "Lucy Butcher"]),

    pubDate: z.date(),
    publish: z.boolean(), // must be 'true' to publish
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  site,
  blog,
};
