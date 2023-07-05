---
title: "Hot HTML Summer: Metadata"
summary: "Interesting backstories, flexibility, and social cards."
date: 2023-06-29T13:15:00Z
htmlSection: "Metadata"
htmlLink: "https://web.dev/learn/html/metadata/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## The required `<meta>` tags, revisited

Go to this [section at Learn HTML](https://web.dev/learn/html/metadata/#the-required-lessmetagreater-tags,-revisited).

> The `charset` attribute of the `<meta>` element came about in a unique manner. Originally the character set meta data was written as `<meta http-equiv="Content-Type" content="text/html; charset=<characterset>" />`, but so many developers mis-typed the `content` attribute as `content="text/html" charset="<characterset>"` that browsers began supporting charset as an attribute. It is standardized now in the HTML living standard as `<meta charset=<charset>" />`, where, for HTML,`<charset>` is the case-insensitive string "utf-8".

I'm enjoying the history and tea spilling aspects of this series.

## Pragma directives

Go to this [section at Learn HTML](https://web.dev/learn/html/metadata/#pragma-directives).

> The `http-equiv` attribute has as its value a pragma directive. These directives describe how the page should be parsed. Supported `http-equiv` values enable setting directives when you are unable to set HTTP headers directly.

What interests me about this is the flexibility. 

> The specification defines seven [pragma directives](https://html.spec.whatwg.org/multipage/semantics.html#pragma-directives), most of which have other methods of being set. For example, while you can include a language directive with `<meta http-equiv="content-language" content="en-us" />`, we have already discussed using the lang attribute on the HTML element, which is what should be used instead.

For example, if you don't have access to `<html>` to set the language at the site level (using the [language attribute](https://web.dev/learn/html/document-structure/#content-language), e.g., `<html lang="en">`), but you had the ability to add a `meta` tag, you could use `<meta http-equiv="content-language" content="en" />`.

## Open Graph 

Go to this [section at Learn HTML](https://web.dev/learn/html/metadata/#open-graph).

> You can have different card images, titles, and descriptions for different social media sites or for different link parameters. For example, [https://perfmattersconf.com](https://perfmattersconf.com) sets different values for `og:image`, `og:title`, and `og:description` based on the parameter of the URL.

Neat! I didn't know about the URL parameter. Examples...

> If you enter [https://perfmattersconf.com?name=erica](https://perfmattersconf.com?name=erica) and [https://perfmattersconf.com?name=melanie](https://perfmattersconf.com?name=melanie) in [Twitter's Card Validator](https://cards-dev.twitter.com/validator), you will see these two different cards; we provided different content even though they both link to the same conference home page.

The Twitter Card Validator no longer works, but you can take a peak in DevTools to see the difference. Developer browsers such as [PolyPane](https://polypane.app/) or [Sizzy](https://sizzy.co/) include handy social card views as well.

I was pleased with myself that I didn't find any surprises in the [Open Graph section](https://web.dev/learn/html/metadata/#open-graph) (other than the URL parameter), or in the [Other useful meta information section](https://web.dev/learn/html/metadata/#other-useful-meta-information). They're worth checking out if you haven't worked with social cards or mobile icons often. Or even if you have! 





