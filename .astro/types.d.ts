declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"site": {
"00-09-site-administration/01-about/01.01-colophon.mdx": {
  id: "00-09-site-administration/01-about/01.01-colophon.mdx",
  slug: "00-09-site-administration/01-about/0101-colophon",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/01-about/01.02-licence.mdx": {
  id: "00-09-site-administration/01-about/01.02-licence.mdx",
  slug: "00-09-site-administration/01-about/0102-licence",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/01-about/01.03-privacy.mdx": {
  id: "00-09-site-administration/01-about/01.03-privacy.mdx",
  slug: "00-09-site-administration/01-about/0103-privacy",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/01-about/01.04-version.mdx": {
  id: "00-09-site-administration/01-about/01.04-version.mdx",
  slug: "00-09-site-administration/01-about/0104-version",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/01-about/index.mdx": {
  id: "00-09-site-administration/01-about/index.mdx",
  slug: "00-09-site-administration/01-about",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/02-send-and-receive/02.01-contact-me.mdx": {
  id: "00-09-site-administration/02-send-and-receive/02.01-contact-me.mdx",
  slug: "00-09-site-administration/02-send-and-receive/0201-contact-me",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/02-send-and-receive/02.02-mailing-list.mdx": {
  id: "00-09-site-administration/02-send-and-receive/02.02-mailing-list.mdx",
  slug: "00-09-site-administration/02-send-and-receive/0202-mailing-list",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/02-send-and-receive/02.03-rss-feed.mdx": {
  id: "00-09-site-administration/02-send-and-receive/02.03-rss-feed.mdx",
  slug: "00-09-site-administration/02-send-and-receive/0203-rss-feed",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/02-send-and-receive/02.04-github.mdx": {
  id: "00-09-site-administration/02-send-and-receive/02.04-github.mdx",
  slug: "00-09-site-administration/02-send-and-receive/0204-github",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/02-send-and-receive/index.mdx": {
  id: "00-09-site-administration/02-send-and-receive/index.mdx",
  slug: "00-09-site-administration/02-send-and-receive",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/03-settings/03.01-theme.mdx": {
  id: "00-09-site-administration/03-settings/03.01-theme.mdx",
  slug: "00-09-site-administration/03-settings/0301-theme",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/03-settings/03.02-language.mdx": {
  id: "00-09-site-administration/03-settings/03.02-language.mdx",
  slug: "00-09-site-administration/03-settings/0302-language",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/03-settings/index.mdx": {
  id: "00-09-site-administration/03-settings/index.mdx",
  slug: "00-09-site-administration/03-settings",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/04-give-me-money/04.01-support-me.mdx": {
  id: "00-09-site-administration/04-give-me-money/04.01-support-me.mdx",
  slug: "00-09-site-administration/04-give-me-money/0401-support-me",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/04-give-me-money/04.02-consulting.mdx": {
  id: "00-09-site-administration/04-give-me-money/04.02-consulting.mdx",
  slug: "00-09-site-administration/04-give-me-money/0402-consulting",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/04-give-me-money/index.mdx": {
  id: "00-09-site-administration/04-give-me-money/index.mdx",
  slug: "00-09-site-administration/04-give-me-money",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"00-09-site-administration/index.mdx": {
  id: "00-09-site-administration/index.mdx",
  slug: "00-09-site-administration",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.01-introduction.mdx": {
  id: "10-19-concepts/11-core/11.01-introduction.mdx",
  slug: "10-19-concepts/11-core/1101-introduction",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.02-areas-and-categories.mdx": {
  id: "10-19-concepts/11-core/11.02-areas-and-categories.mdx",
  slug: "10-19-concepts/11-core/1102-areas-and-categories",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.03-ids.mdx": {
  id: "10-19-concepts/11-core/11.03-ids.mdx",
  slug: "10-19-concepts/11-core/1103-ids",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.04-philosophy.mdx": {
  id: "10-19-concepts/11-core/11.04-philosophy.mdx",
  slug: "10-19-concepts/11-core/1104-philosophy",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.05-the-index.mdx": {
  id: "10-19-concepts/11-core/11.05-the-index.mdx",
  slug: "10-19-concepts/11-core/1105-the-index",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.06-saving-files.mdx": {
  id: "10-19-concepts/11-core/11.06-saving-files.mdx",
  slug: "10-19-concepts/11-core/1106-saving-files",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.07-keeping-notes.mdx": {
  id: "10-19-concepts/11-core/11.07-keeping-notes.mdx",
  slug: "10-19-concepts/11-core/1107-keeping-notes",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/11.08-the-librarian.mdx": {
  id: "10-19-concepts/11-core/11.08-the-librarian.mdx",
  slug: "10-19-concepts/11-core/1108-the-librarian",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/11-core/index.mdx": {
  id: "10-19-concepts/11-core/index.mdx",
  slug: "10-19-concepts/11-core",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/12-advanced/12.01-managing-email.mdx": {
  id: "10-19-concepts/12-advanced/12.01-managing-email.mdx",
  slug: "10-19-concepts/12-advanced/1201-managing-email",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/12-advanced/12.02-exceptions-to-the-rules.mdx": {
  id: "10-19-concepts/12-advanced/12.02-exceptions-to-the-rules.mdx",
  slug: "10-19-concepts/12-advanced/1202-exceptions-to-the-rules",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/12-advanced/12.03-what-about-00-09.mdx": {
  id: "10-19-concepts/12-advanced/12.03-what-about-00-09.mdx",
  slug: "10-19-concepts/12-advanced/1203-what-about-00-09",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/12-advanced/12.04-working-at-the-command-line.mdx": {
  id: "10-19-concepts/12-advanced/12.04-working-at-the-command-line.mdx",
  slug: "10-19-concepts/12-advanced/1204-working-at-the-command-line",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/12-advanced/12.05-acid-notation.mdx": {
  id: "10-19-concepts/12-advanced/12.05-acid-notation.mdx",
  slug: "10-19-concepts/12-advanced/1205-acid-notation",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/12-advanced/index.mdx": {
  id: "10-19-concepts/12-advanced/index.mdx",
  slug: "10-19-concepts/12-advanced",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/13-multiple-projects/13.01-introduction.mdx": {
  id: "10-19-concepts/13-multiple-projects/13.01-introduction.mdx",
  slug: "10-19-concepts/13-multiple-projects/1301-introduction",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/13-multiple-projects/index.mdx": {
  id: "10-19-concepts/13-multiple-projects/index.mdx",
  slug: "10-19-concepts/13-multiple-projects",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/14-build-your-system/14.01-introduction.mdx": {
  id: "10-19-concepts/14-build-your-system/14.01-introduction.mdx",
  slug: "10-19-concepts/14-build-your-system/1401-introduction",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/14-build-your-system/index.mdx": {
  id: "10-19-concepts/14-build-your-system/index.mdx",
  slug: "10-19-concepts/14-build-your-system",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"10-19-concepts/index.mdx": {
  id: "10-19-concepts/index.mdx",
  slug: "10-19-concepts",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"20-29-community/21-forums-and-chat/21.01-the-forum.mdx": {
  id: "20-29-community/21-forums-and-chat/21.01-the-forum.mdx",
  slug: "20-29-community/21-forums-and-chat/2101-the-forum",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"20-29-community/21-forums-and-chat/21.02-discord.mdx": {
  id: "20-29-community/21-forums-and-chat/21.02-discord.mdx",
  slug: "20-29-community/21-forums-and-chat/2102-discord",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"20-29-community/21-forums-and-chat/index.mdx": {
  id: "20-29-community/21-forums-and-chat/index.mdx",
  slug: "20-29-community/21-forums-and-chat",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"20-29-community/index.mdx": {
  id: "20-29-community/index.mdx",
  slug: "20-29-community",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"404.md": {
  id: "404.md",
  slug: "404",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".md"] },
"90-99-behind-the-scenes/98-hidden-website-pages/98.11-in-a-future-post.mdx": {
  id: "90-99-behind-the-scenes/98-hidden-website-pages/98.11-in-a-future-post.mdx",
  slug: "90-99-behind-the-scenes/98-hidden-website-pages/9811-in-a-future-post",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"90-99-behind-the-scenes/98-hidden-website-pages/index.mdx": {
  id: "90-99-behind-the-scenes/98-hidden-website-pages/index.mdx",
  slug: "90-99-behind-the-scenes/98-hidden-website-pages",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"90-99-behind-the-scenes/index.mdx": {
  id: "90-99-behind-the-scenes/index.mdx",
  slug: "90-99-behind-the-scenes",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"index.mdx": {
  id: "index.mdx",
  slug: "index",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"test/blank.mdx": {
  id: "test/blank.mdx",
  slug: "test/blank",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"test/style-guide.mdx": {
  id: "test/style-guide.mdx",
  slug: "test/style-guide",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
"test/test-page.mdx": {
  id: "test/test-page.mdx",
  slug: "test/test-page",
  body: string,
  collection: "site",
  data: InferEntrySchema<"site">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
