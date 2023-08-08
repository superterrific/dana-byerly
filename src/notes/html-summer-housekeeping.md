---
title: "Hot HTML Summer housekeeping"
summary: "The fun continues."
date: 2023-08-08T13:15:00Z
category: "Notes"
tags: ["HTML", "The Site", "WordPress"]
---

It's still summer, so I'm doing a bit of [Hot HTML Summer housekeeping](/notes/hot-html-summer-wrap-up/#things-to-check-on-my-sites) based on what I learned from taking the [web.dev Learn HTML course](https://web.dev/learn/html/). Earlier in the summer I  wrote a [series of posts](/tag/hot-html-summer/), one for each lesson in the course. In the I included a [list of things](/notes/hot-html-summer-wrap-up/#things-to-check-on-my-sites) to check on and update as necessary. I've made some good progress!

As [noted in the changelog](/changelog/2023-08-08/), around here I cleaned up my `<section>` usage, added a `<nav>` element to the footer links and added `rel="next"` and `rel="previous"` to some pagination links I missed the first time around. 

Over at the[ Junk Drawer ](https://danabyerly-junkdrawer.website/) I've made two major changes. One to address the incorrect usage of `<cite>` within the WordPress quote block, and adding the `lang` attribute to text where I've used different languages.

## WordPress quote block and `<cite>`
While learning about `<blockquote>` and `<cite>` in the [Text Basics module](https://web.dev/learn/html/text-basics/) of Learn HTML I discovered that the [WordPress quote block incorrectly applies the `<cite>` element](/notes/hot-html-summer-text-basics/#quotes-and-citations) if you use the "citation" feature.

As a refresher, `<cite>` belongs outside of the `<blockquote>` element. Since I've used this pretty extensively at the Junk Drawer I had to figure out to remove `<cite>` but still keep my design intact. It wasn't that hard, but making the updates was a bit of a pain.

I was using the `<cite>` element to set the style, so moved the styles to a new class selector. Then the fun began. I had to add a new paragraph in the quote, edit it as HTML to add my class selector to the paragraph tag, then convert it to an HTML block. Sounds easy, right?

{% figure %}
  <picture>
    <source srcset="/img/wp-block-error.avif" type="image/avif">
    <source srcset="/img/wp-block-error.webp" type="image/web">
    <img src="/img/wp-block-error.jpg" alt="A WordPress block error that reads: This block contains unexpected or invalid content. There is a blue button that reads Attempt Block Recovery. To the right of the button are three small dots indicating a menu." loading="lazy" />
  </picture>
  {% figcaption %}
    Do not click the button, click the tiny "meatball" menu to the right of the button.
  {% endfigcaption %}
{% endfigure %}

It would've been much easier if every time I  tried to preview the HTML or just click out of the HTML editing area I didn't get the above error. If this happens to you, don't click the "Attempt Block Recovery" button, it doesn't recover the block and you're back to step one. Click on the tiny, easy to miss, options menu to the right of the button  and select "convert to HTML". Now it's an HTML block.

Going forward it will be a lot easier as I made a reusable block that will place an HTML block within the content that includes a paragraph tag and my class selector. There's more information about [creating and using reusable blocks](https://wordpress.org/documentation/article/reusable-blocks/) in the WordPress documentation.

After all that, the kicker is that even if using `<cite>` within `<blockquote>` was the correct approach, I was still using it incorrectly! From the course...

> The content of the `<cite>` is the work, not the author.

Good thing all those references to the authors are no longer cite elements or attributes!

## Adding the `lang` attribute

In the [Document Structure module](https://web.dev/learn/html/document-structure/) of the course I made note of wanting to [add the language attribute at the Junk Drawer,](/notes/hot-html-summer-document-structure/#content-language). I mention non-US TV shows by their original title with some frequency, many times this is in a different language.

I thought I was going to have to go the "convert to HTML" route again, but found a really useful plugin called [Lang Attribute for the Block Editor](https://wordpress.org/plugins/lang-attribute/). This makes it easy to select text and apply the ISO language code. 

The only small issue I have is that is also applies class selector and `dir`, the direction attribute. The upside is that you can also change the text direction to match the language, but the selection is defaulted so it's always applied. 

{% figure %}
  <picture>
    <source srcset="/img/wp-lang-attr.avif" type="image/avif">
    <source srcset="/img/wp-lang-attr.webp" type="image/web">
    <img src="/img/wp-lang-attr.jpg" alt="A WordPress modal with an input for adding language attribute and a select for selecting text direction. The select is defaulted to left to right." loading="lazy" />
  </picture>
  {% figcaption %}
    Pick a direction, you can't have null.
  {% endfigcaption %}
{% endfigure %}

I'll probably add an issue and suggest that it would be a nice addition if the class selector and direction attribute were optional, but having the redundant attributes is a small price to pay for such a useful plugin!

You can see the results in action [in this post at the Junk Drawer,](https://danabyerly-junkdrawer.website/blog/what-i-watched-in-2022/) which may also be of interest if you like crime drama series. The first show in the list is a Swedish show (`lang="sv"`). 

I don't know if there's a definitively inclusive list of codes, but here are a couple of lists that I found useful. The Wikipedia list includes more languages but the Gist includes regions.

* [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), use the two letter 639-1 codes
* [Gist](https://gist.github.com/JamieMason/3748498), not a full list but includes regions 

## What's next
I still have one outstanding item on my Hot HTML Summer to list, and that's to try [markdown-it-table-captions](https://github.com/martinring/markdown-it-table-captions). I'll give that a shot on my starter project and if it works out well I'll integrate it here.

I'm hoping to come up with a submissions for this year's [HTMHell Advent Calendar](https://www.htmhell.dev/adventcalendar/). The deadline is a fast approaching August 24, you should definitely [consider submitting an idea](https://docs.google.com/forms/d/e/1FAIpQLSd1TaQ22c1dwXsLIvD9NhaWkbO26ay4rK4pm2HB5pSN92gOmQ/viewform)!

I have two whopper older WordPress sites that I'm in the process of archiving. That includes moving a slimmed down version of each to Eleventy. I've already spent a fair amount of time working out the process and overall design, but I'll probably be spending most of my time on that for the foreseeable future. 

Other than that I'll be doing my usual fiddling here and at the [Junk Drawer.](https://danabyerly-junkdrawer.website/) I'd like to clean up the Projects section of this site before the end of the year. Just saying that out loud to up the chances of it happening.



