---
title: 'Logical Junk Drawer'
summary: 'I used logical properties for a new site, and I liked it.'
date: 2022-10-02
category: 'Notes'
tags: ['CSS', 'Side Projects']
---

A couple of weeks ago Jeremy Keith had a [post on refactoring an existing site](https://adactio.com/journal/19457) to use logical properties. Not entirely sure about logical properties? web.dev has a [nice summation](https://web.dev/learn/css/logical-properties/)...

> Logical, flow relative properties and values are linked to the flow of text, rather than the physical shape of the screen.

Instead of using `margin-top: 1rem;` it would be `margin-block-start: 1rem;`, using a relative "start" instead of physical "top" to indicate direction. Using relative direction better supports language translation and multi-lingual sites. The post at web.dev has a [good overview that includes examples](https://web.dev/learn/css/logical-properties/). MDN also has a [good overview](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) that includes links to all the properties.

Jeremy's refactor seemed to go well, including some interesting observations. He had a nice follow-up post on [browser support and progressive enhancement using feature queries](https://adactio.com/journal/19487) that should be noted, especially for the how-to on using `@supports`.

Around these parts I went (almost!) all in on logical properties for my new blog thingie, affectionately known as the [Junk Drawer](https://danabyerly-junkdrawer.website/). Initially I wrote all the styles using logical properties, but after reading Jeremy's posts I realized that the styles from my [Eleventy]({{ tools.11ty }}) starter needed to be converted. Feel free to [take a peak at Github](https://github.com/superterrific/danabyerly-junkdrawer/tree/main/src/_includes/css).

The one thing I didn't convert were units, they were [mentioned in the web.dev post](https://web.dev/learn/css/logical-properties/#units) but upon further investigation [vi (view inline)](https://caniuse.com/mdn-css_types_length_vi) and [vb (view block)](https://caniuse.com/mdn-css_types_length_vb) are not yet as widely supported as [sizing](https://caniuse.com/?search=block-size), [spacing](https://caniuse.com/?search=margin-block) and [borders](https://caniuse.com/?search=border-block).

Overall it was easier than I thought to remap my mind to write logical properties, at least for spacing. No doubt using flexbox and grid made the mental leap easier. In the flurry of new CSS things to keep up with I missed [sizing](https://web.dev/learn/css/logical-properties/#sizing), [borders](https://web.dev/learn/css/logical-properties/#borders) and [text-align start end](https://web.dev/learn/css/logical-properties/#start-and-end).

Borders and `text-align` were easy enough to absorb, but something about sizing (width and height) didn't easily fit in my head. It's like when you meet someone and get their name slightly wrong, and then they're always the wrong name to you. My mind wants to type max-size-inline or size-block instead of the correct `max-inline-size` or `block-size`. I regret even typing the incorrect examples! But I'm sure I can make them mental muscle memory in good time.

Another thing I noticed is that the shorthand  for "start" and "end" can be used within the spacing logical shorthand. Let's say your original padding is this...

```css
/* shorthand order is top right bottom left */
.my-class {
  padding: 1rem 2rem 3rem .5rem;
}
```

According to the [examples at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block) you can use the shorthand to include both the start and end values within the overall logical shorthand. Making your original example...

```css
/* shorthand order is start end */
.my-class {
  padding-block: 1rem 3rem;
  padding-inline: .5rem 2rem;
}
```

I made a [quick Pen to validate this example](https://codepen.io/superterrific/pen/vYjjgMW) because I tripped up on the order for inline. I was looking at the physical example while typing and initially put the "end" value first, but the logical shorthand order is "start end".

Back to [Jeremy's second post](https://adactio.com/journal/19487) about browser support. The Junk Drawer is a very, very low traffic personal site, which makes for a great low stakes way to get used to using logical properties. I checked my stats to see if I've had any visitors using browsers that don't support the logical properties I used, and I haven't had any yet.

The current version of the new [DuckDuckGo Mac browser](https://spreadprivacy.com/introducing-duckduckgo-for-mac/) doesn't support yet them, and the only visitor I've had using it was me while doing my test. I sent feedback about it! None of the DuckDuckGo browsers are listed at [Can I Use](https://caniuse.com/css-logical-props) but my test of the iOS version shows support, at least for spacing, sizing and borders. Best guess is that the Android versions support it too?

At any rate, I found logical properties easy to use and am look forward to using them more in the future. And speaking of the future, Miriam Suzanne [had a good reply post](https://www.miriamsuzanne.com/2022/09/16/tpac-logical/) to Jeremy's original post to discuss longer terms plans from the CSS and Internationalization working groups. If you have any opinions on the matter you should let them know.
