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

    // Publication date for RSS & other
    pubDate: z.date(),

    // Prevent displaying of the BackNext component with `false`
    backNextDisplay: z.boolean().optional(),

    // Prevent rendering in the navbar with `true`
    excludeFromNav: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  site,
};
