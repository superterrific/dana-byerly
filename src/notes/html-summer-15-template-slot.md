---
title: "Hot HTML Summer: Template, slot, and shadow"
summary: "Finally, an understanding."
date: 2023-07-24T13:00:00Z
htmlSection: "Template, slot, and shadow"
htmlLink: "https://web.dev/learn/html/template/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## Intro section

There's no anchor for this section, it's the first part of the module.

> The Web Component standard is made up of three parts—[HTML templates](https://developer.mozilla.org/docs/Web/Web_Components/Using_templates_and_slots), [Custom Elements](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements), and the [Shadow DOM](https://developer.mozilla.org/docs/Web/Web_Components/Using_shadow_DOM). Combined, they enable building customized, self-contained (encapsulated), reusable elements that can be seamlessly integrated into existing applications, like all the other HTML elements we've already covered.

Building web components is something I've been wanting to learn for some time. I've fiddled around here and there, but don't have a solid understanding. I don't think I'll learn everything in this module, but I'm excited to get a proper introduction and better understanding.

## The `<template>` element

Go to this [section at Learn HTML](https://web.dev/learn/html/template/#the-lesstemplategreater-element).

> The `<template>` element is used to declare fragments of HTML to be cloned and inserted into the DOM with JavaScript. The contents of the element are not rendered by default. Rather, they are instantiated using JavaScript.

This section steps through exactly what this means with code examples and CodePens. The description above is clear, but the further detail is worth looking through to illustrate the concept.

I did the example star rating component along with the module, and found it to be a good approach for grasping the concepts. Since the entire module was something I didn't know much about I'll summarize what I learned rather than listing each section with along with relevant quotes.

In no particular order...
* I finally have a solid understanding of the `<template>` element, the `<slot>` element (and attribute!), custom elements, and shadow DOM.
* Finally wrapped my head around how `<slot>` works. Before I learned [Eleventy]({{ tools.11ty }}) I played around with a [little SSG called Sergey](https://sergey.cool) that used slots. I kept stumbling on when slot was an element (in the template) and when to use the slot attribute (in the custom element).
* What the shadow DOM is and how it's created. What's included in it and what's not (e.g., slotted content within the custom element is not in the shadow-root and not encapsulated).

I tested out my new knowledge by reading a couple of posts I had saved in open tabs. Happy to report that I had a much better understanding. In [some of that reading](https://www.abeautifulsite.net/posts/a-web-components-primer/) I discovered that [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) can be used in the shadow DOM. And in further investigation that [constructible stylesheets](https://web.dev/constructable-stylesheets/) can be used to create reusable styles for the shadow DOM. The module also touched on using the [`part` attribute and `::part()` pseudo-element](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#part) to style elements within the shadow-tree from CSS that is not encapsulated (e.g., your global stylesheet).

No doubt there's a lot to learn, but now that I have a solid foundation it doesn't feel unsurmountable. In addition to doing the exercise in the module I [created a small little card component at CodePen](https://codepen.io/superterrific/pen/abQYEbN) as a test. It was nice to play around with a couple of different things and drill what I had learned into my head. Especially the slot element and attribute usage.










