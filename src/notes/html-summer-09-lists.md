---
title: "Hot HTML Summer: Lists"
summary: "Lists!"
date: 2023-07-07T13:00:00Z
htmlSection: "Lists"
htmlLink: "https://web.dev/learn/html/lists/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## Ordered lists

Go to this [section at Learn HTML](https://web.dev/learn/html/lists/#ordered-lists).

> The `<ol>` has three element-specific attributes: `type`, `reversed`, and `start`.
>
> (code example at site)
>
> The enumerated `type` attribute sets the numbering type. There are five valid values for `type`, the default being `1` for numbers, but you can also use a, A, i, or I, for lower and upper case letters or roman numerals.

I don't use ordered lists very often, when I do use them it's straightforward and doesn't stray from the default behavior. Pretty sure I've used `reversed` and `start`, but not `type`.

## List items

Go to this [section at Learn HTML](https://web.dev/learn/html/lists/#list-items).

> There is only one element-specific `<li>` attribute: `value`, an integer. The `value` is only useful on an `<li>` when the `<li>` is nested within an ordered list and has no meaning for unordered lists or menus. It overrides the value of the `<ol>`'s start if there is a conflict.

More ordered list mysteries revealed.

> The `value` is the number of the list item within an ordered list. With subsequent list items, continue the numbering from the value set, unless that item also has a `value` attribute set. The value doesn't have to be in order; though if it isn't in order, there should be a good reason.

There's an [example CodePen](https://codepen.io/web-dot-dev/pen/WNyPmrv) worth checking out that illustrates the behavior. I can't think of an occasion where this would've been useful, but maybe there's a use case out there where this would solve the problem. If so, make sure to consider if or how this could be confusing to assistive technology users and be sure to provide proper context.

## Description lists

Go to this [section at Learn HTML](https://web.dev/learn/html/lists/#description-lists).

> A description list is a [description list](https://developer.mozilla.org/docs/Web/HTML/Element/dl) (`<dl>`) element containing a series of (zero or more) [description terms](https://developer.mozilla.org/docs/Web/HTML/Element/dt) (`<dt>`) and their [description details](https://developer.mozilla.org/docs/Web/HTML/Element/dd) (`<dd>`). The original names for these three elements were "definition list," "definition term," and "definition definition." The [name changed](https://www.w3.org/TR/html4/struct/lists.html#h-10.3) in the living standard.

I was not using my front-end skills in a meaningful way when HTML 5 was released, so I missed this name change. And, in my prior web dev life I don't recall ever using the definition list, but I did know of it. 

Fast forward to not too long ago when I found myself thinking that I had somehow remembered the element name incorrectly, like when you meet someone new and get their name wrong, and the wrong name sticks. Sometimes missing a crucial transition can result in scenarios like this! 

Ben Meyers has a [great in-depth article](https://benmyers.dev/blog/on-the-dl/) on the ~~~definition~~~ description list that's full of useful examples.



