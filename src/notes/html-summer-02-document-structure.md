---
title: "Hot HTML Summer: Document structure"
summary: "Foundational knowledge abounds in this section of the course."
date: 2023-06-28T13:30:00Z
htmlSection: "Document structure"
htmlLink: "https://web.dev/learn/html/document-structure/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## `<!DOCTYPE html>`

Go to this [section at Learn HTML](https://web.dev/learn/html/document-structure/#lessdoctype-htmlgreater).

> If omitted, browsers will use a different rendering mode known as [quirks mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

I didn't know this. And, I can't say that I could explain quirks mode in detail if asked about it, so off to the [quirks mode page](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)...

> There are now three modes used by the layout engines in web browsers: quirks mode, limited-quirks mode, and no-quirks mode. In **quirks mode**, layout emulates behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards. In **no-quirks mode**, the behavior is (hopefully) the desired behavior described by the modern HTML and CSS specifications. In **limited-quirks mode**, there are only a very small number of quirks implemented.

Fascinating. Off to the[ history section of the WHATWG quirks spec](https://quirks.spec.whatwg.org/#history) to learn more...

> Browsers have several rendering modes to render HTML documents. The reason for this is basically a historical accident. The CSS specification was incompatible with the behavior of existing browsers which existing Web content relied on. In order to comply with the specification while not breaking existing content, browsers introduced a new rendering mode (no-quirks mode).

It's great to know the backstory of how things came about. The particulars of the [spec for quirks mode](https://quirks.spec.whatwg.org/) are worth a look if you've never read it, or had to deal with it directly.

## Content language

Go to  this [section at Learn HTML](https://web.dev/learn/html/document-structure/#content-language).

> The `lang` attribute is not limited to the `<html>`tag. If there is text within the page that is in a language different from the main document language, the `lang` attribute should be used to identify exceptions to the main language within the document.

I only recently learned this because some smart person somewhere included it in article I was reading, or mentioned it on Mastodon, although I can't remember who or where. But I do remember thinking I should make note and check some of my sites to see where to add it, specifically in my [TV posts at the Junk Drawer](https://danabyerly-junkdrawer.website/tag/tv/) where I try to use the language of the country of origin for the title of non-US shows.

## Other uses of the `<link>` element

Go to this [section at Learn HTML](https://web.dev/learn/html/document-structure/#other-uses-of-the-lesslinkgreater-element).

> There are currently [25 available values for the `rel` attribute](https://html.spec.whatwg.org/multipage/links.html#linkTypes) that can be used with `<link>`, `<a>` and `<area>`, or `<form>`, with a few that can be used with all.

I've used around 10 or so of the 25, and after [reviewing them all more closely at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel) I will be on the lookout for examples of `rel="author"` and `rel="bookmark"` in the wild.

## Scripts

Go to this [section at Learn HTML](https://web.dev/learn/html/document-structure/#scripts).

> With `defer`, HTML rendering is not blocked during the download, and the JavaScript only executes after the document has otherwise finished rendering. With `async`, rendering isn't blocked during the download either, but once the script has finished downloading, the rendering is paused while the JavaScript is executed.

There's a good image illustrating the difference in rendering between the `defer` and `async` attributes of `<script>`.  The written description above is good too, but the illustration locked it in for me.







