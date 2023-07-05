---
title: "Hot HTML Summer: Text basics"
summary: "We've reached the 'made a CodePen' stage."
date: 2023-07-05T14:00:00Z
htmlSection: "Text basics"
htmlLink: "https://web.dev/learn/html/text-basics/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## Headings, revisited

Go to this [section at Learn HTML](https://web.dev/learn/html/text-basics/#headings,-revisited).

> There are six section heading elements, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`, with `<h1>` being most important and `<h6>` the least. For many years, developers were told that headings were used by browsers to outline documents. That was originally a goal, but browsers haven't implemented outlining features.

More tea spilling, and indeed still a point of consternation. Just today Manual Matuzović [posted an example](https://mastodon.social/@matuzo@front-end.social/110660416471629911) of "how to prove that there is no document outline algorithm even though user agent styles are telling a different story". The resulting discussion illustrates the frustation.

> However, screen reader users do use headings as an exploration strategy to learn about the content of the page, navigating through headings with the `h` key. So ensuring that heading levels are implemented as you would outline a document makes your content accessible and is still very much encouraged.

I knew this, but wanted to highlight this because it's important!

> Interestingly, browsers by default also decrement the `<h1>` font size based on how many `<article>`, `<aside>`, `<nav>`, or `<section>` elements it is nested in.

This I didn't know! There's an image example that's worth checking out. I also did a [quick CodePen example](https://codepen.io/superterrific/pen/QWJvNwe) to see for myself.

> In HTML, paragraphs are marked up with the `<p>` tag; the closing tag is optional but always advised.

Optional? I didn't know that one either. [I tried it](https://codepen.io/superterrific/pen/XWyRddp), but I didn't like it, although nothing horrible happened.

## Quotes and citations
Go to this [section at Learn HTML](https://web.dev/learn/html/text-basics/#quotes-and-citations).

> The information about the quote author, or citation, is not part of the quote and therefore not in the `<blockquote>`, but comes after the quote.

Whoops! I'm doing this wrong in at least a few places. One of those places is the [Junk Drawer](https://danabyerly-junkdrawer.website/), which uses [headless WordPress as a CMS with Eleventy](/tag/wordpress/). The default WordPress quote block offers the ability to add a citation below the quote. The citation is wrapped in `<cite>` and is part of the `<blockquote>`, which is not valid. 

There's no mention of the citation in the current [WordPress quote block documentation](https://wordpress.org/documentation/article/quote-block/). Perhaps I'll add "Hot Learn How to Make WordPress Blocks Summer" to the list. In the meantime I have a plan on how to manually fix these that may or may not warrant a post.

> If the review (in the example, [view at CodePen](https://codepen.io/web-dot-dev/pen/LYrqKMq)) was pulled from a review website, book, or other work, the `<cite>` element could be used for the title of a source. The content of the `<cite>` can be the title of a book, the name of a website or TV show, or even the name of a computer program. The `<cite>` encapsulation can be used whether the source is being mentioned in passing or if the source is being quoted or referenced. The content of the `<cite>` is the work, not the author.

At MDN there's a [long list of examples](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite#usage_notes) of potential uses for `<cite>`.

> To provide credit where credit is due when you can't make the content visible, there is the `cite` attribute which takes as its value the URL of the source document or message for the information quoted. This attribute is valid on both `<q>` and `<blockquote>`. While it's a URL, it is machine readable but not visible to the reader.

In other words, adding a link to the `cite` attribute does not make the element, for example a `<blockquote>`, a clickable link. I can confirm since I've used it! But I will be checking my sites to make sure I'm using `<cite>` or `cite` correctly with `<blockquote>` (or `<quote>`!). The good news it that both WordPress and [Eleventy]({{ tools.11ty }}) by way of [markdown-it](https://www.npmjs.com/package/markdown-it) correctly apply paragraph tags within a `<blockquote>`. 








