---
title: "Hot HTML Summer: Semantic HTML"
summary: "Portending of a Hot Aria Role Summer to come."
date: 2023-06-30T13:15:00Z
htmlSection: "Semantic HTML"
htmlLink: "https://web.dev/learn/html/semantic-html/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## Accessibility object model (AOM)

Go to this [section at Learn HTML](https://web.dev/learn/html/semantic-html/#accessibility-object-model-aom).

The thing I learned here is how detailed Chrome's version of the accessibility tree is DevTools. By default you can only view one expanded node at a time, but there's an explainer with video of the two-step process to enable the full tree view [in this Chrome Blog post](https://developer.chrome.com/blog/full-accessibility-tree/#full-accessibility-tree-in-devtools).

Also, after poking around with the accessibility tree in both Chrome and Firefox (my primary browser), I was wondering why the `<footer>` was displaying as `contentinfo` rather than `footer` when `<main>` displays as `main`. 

I discovered the [answer at MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role)...

> The `contentinfo` role defines a footer, containing identifying information such as copyright information, navigation links, and privacy statements, found on every document within a site. This section is commonly called a footer.

I should probably improve my [aria role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) understanding with a Hot Aria Role Summer too.

I've decided to not to publish on weekends, the next post will be on Monday. Enjoy your Hot HTML Weekend!