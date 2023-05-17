# How will the blog be generated?

- A page `22.01-blog.mdx` holds our place in the regular structure.

  - It has a JDNav entry and all that.
  - It renders its content in <JDPage /> like everything else.

- So we have this window in to which we need to 'inject' our blog content.

  - [ ] Hmm think about how permalinks to blog posts work in this scenario.
  - You also need to render them out as pages; those pages just aren't in
    the JDNav.
