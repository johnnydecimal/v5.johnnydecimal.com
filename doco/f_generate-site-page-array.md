# f/generate-site-page-array

## Requirements

This generated array? of pages should be the only file that any other component references.

Need to know what's next? The URL of the next page? It should all come from this file. Or one of its methods?

You should be able to use this file to do e2e clickthrough testing of the site.

- pathname
- title
- html id (lowercase, no spaces, no periods)

## Cypress' requirements

## What we're replacing

Current `pages.js` looks like this.

```js
export const pages = [
  {
    pathname: "/00-09-site-administration/01-about/01.01-colophon/",
    title: "Colophon",
  },
  {
    pathname: "/00-09-site-administration/01-about/01.02-licence/",
    title: "Licence",
  },
];
```
