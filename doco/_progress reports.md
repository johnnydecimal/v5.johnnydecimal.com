# Progress reports

## dev branch, 2023-01-04 14:13

You just got the JDNavItem highlighting working. It's a bit hacky and might need cleaning up but it works.

After deploying to Netlify, you had to fix the `import '@fontsource/Bitter'`, making it lower case. Now fonts just aren't showing up. So let's do some reading on font handling and fix that properly.

## A note just so we can push

Though there must be a better way to do this?

---

# Looking at JD code blocks

Okay so it's not as simple as you had hoped. The Astro code blocks are highly custom. You do _not_ want to replicate that code.

So you're going to have to make your own component, and use MDX where you need to use it.

- [ ] Add & test MDX to the current site.

But then what does this component of yours need to look like? Go through each of the existing code blocks on the site and pull out all of the features that you need it to support.

Just a list of stuff.

```
23.24    31.70
22.39    13.04
31.71    21.02
22.38    13.03
23.21    23.22
32.56    12.34
12.35    21.01
32.55    23.23
```

Organising it a bit. (Or do we do this visually, with emoji?)

```
The 12 numbers    The 13 numbers
		12.34  12.35      13.03  13.04

The 21 numbers    The 22 numbers
		21.01  21.02      22.38  22.39

The 23 numbers    The 31 numbers
		23.21  23.22      31.70  31.71
		23.23  23.24

The 32 numbers
		32.55  32.56
```

And the final organisation.

```
The 10-19 numbers
	 The 12 numbers
			 12.34  12.35
	 The 13 numbers
			 13.03  13.04

The 20-29 numbers
	 The 21 numbers
			 21.01  21.02
	 The 22 numbers
			 22.38  22.39
	 The 23 numbers
			 23.21  23.22
			 23.23  23.24

The 30-39 numbers
	 The 31 numbers
			 31.70  31.71
	 The 32 numbers
			 32.55  32.56
```

So all of that stuff was really ad-hoc. There's no scriptable rules in there, other than that you might want something underlined.

What you want to _avoid_ is the manual mess you were in last time. You basically constructed each block by hand, and you vowed that you'd never do that again.

This is also a barrier to just banging up more posts. **You must be able to just bang up more posts.** Including example systems.

Let's have a look at Astro's code blocks for some inspiration.

- [ ] Draw this out in Draw.io!

So the TextMate language grammar thing looks _complicated_. Do you really need something that complicated? Or should you start simple and chip away at it if you feel like you need more?

## Side note: `<wbr>`

The 'word break opportunity'!

http://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr

## Back to business

So this thing needs to be super flexible. You won't know what you want until later. So build it with that in mind.

Let's convert to MDX mode and bang up the simplest component in the world just to get in the mood.

# JD code blocks v1.0 complete

Rudimentary, sure. But they work. Let's copy over a bunch of real content now and make it look A-OK.
