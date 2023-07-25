---
title: "Hot HTML Summer: HTML APIs"
summary: "More things I will eventually learn about."
date: 2023-07-25T13:00:00Z
htmlSection: "HTML APIs"
htmlLink: "https://web.dev/learn/html/apis/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## HTML Element APIs

Go to this [section at Learn HTML](https://web.dev/learn/html/apis/#html-element-apis).

> The browser provides numerous APIs providing natively supported methods, events, and property querying and updating. Element nodes contain information about all the attributes set on the element. You can use HTML interfaces to access information about an element's attributes. For example, we can use [`HTMLImageElement.alt`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/alt) get the `alt` attributes of all the images.

If I ever get around to properly learning JavaScript all of this going to be really helpful.

## Available element interfaces

Go to this [section at Learn HTML](https://web.dev/learn/html/apis/#available-element-interfaces).

> The base interface for all elements is aptly named [Element](https://developer.mozilla.org/docs/Web/API/Element). The [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) inherits from Element and all HTML element-specific interfaces inherit from it. Some element-specific interfaces are implemented by multiple, similar elements.

There's a list of all the interfaces with links to their respective pages at MDN. I'm adding "Familiarize myself with all the available element interfaces" to my Hot HTML Summer to-do list.

## The `Window` interface

Go to this [section at Learn HTML](https://web.dev/learn/html/apis/#the-window-interface).

> Every browser tab contains its own Window object. The Window interface can query the contents of the tab as well as the overall window and device.

What I lack in JavaScript skills I make up for in search engine skills. I've been working on archiving an old project and wanted a way to provide a link to the Internet Archive version of a page when there's a 404. 

I landed on using `window.location.href` to append the page url to the known Internet Archive link that has the entire site to create a "view this page at the Internet Archive" link. Once I validated that it worked  I was pretty pleased with myself, and almost felt like I knew JavaScript.

