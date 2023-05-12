// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a schema for each collection you'd like to validate.
const site = defineCollection({
  schema: z.object({
    number: z.string(),
    title: z.string(),
    area: z.string(),
    category: z.string().optional(),
    pubDate: z.date(),
    backNextDisplay: z.boolean().optional(),
    excludeFromNav: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  site,
};
