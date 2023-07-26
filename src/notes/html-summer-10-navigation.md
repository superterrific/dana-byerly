---
title: "Hot HTML Summer: Navigation"
summary: "All the ways to get around."
date: 2023-07-10T12:45:00Z
htmlSection: "Navigation"
htmlLink: "https://web.dev/learn/html/navigation/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## "Skip to content" link

Go to this [section at Learn HTML](https://web.dev/learn/html/navigation/#skip-to-content-link).

> The link text reads "skip to main." This is the link's accessible name. This is a technical site, and users probably know what "main" means. Like all link text, the accessible name should clearly indicate where the link takes the user.

This is a nice usability tip. Even though readers of this site are likely to know what "Skip to main" means, I use "Skip to main content". The only [mention of wording best practices for skip links](https://webaim.org/techniques/skipnav/#wording) that I could find was at WebAIM. The suggestions are all variations on either "Skip navigation" or "Skip to main content" with the following explanation:

> Any of these may be sufficient so long as the purpose of the link is clearly described. In general, we prefer "Skip to main content" as it explains where the user is navigating to versus what they are navigating past.

I wonder if using "Skip to article" on content pages and "Skip to main content" other types of pages, such as landing pages or a homepage, would be a nice contextual improvement or confusing? If the goal of link text is to be as specific as possible, using a mixed approach could be an improvement. If anyone has done user testing I'd love to know! 

## Table of contents

Go to this [section at Learn HTML](https://web.dev/learn/html/navigation/#table-of-contents).

> When providing an accessible name on an element, don't include the name of the element. Screen readers provide that information to the user. For example, when using the `<nav>` element, don't include "navigation"; that information is included when using semantic elements.

I knew this one too, but wanted to highlight it. It's hard to pull quotes out of this section because they're specifically related to the examples. It's worth reading the section to see the examples in context, but to illustrate the above passage the primary navigation of this site uses:

```html
<nav class="site-nav" aria-label="Primary">
```

Since the screen reader will announce that it's navigation based on the element, I only needed to add "Primary" for the additional context. This will be announced along the lines of "Navigation, primary" (which may vary by screen reader). I don't currently have my footer links in a `<nav>` element and am adding that to my Hot HTML Summer to-do list. I'll use `aria-label="Secondary"` when I do add it.

## Page breadcrumbs

Go to this [section at Learn HTML](https://web.dev/learn/html/navigation/#page-breadcrumbs).

> Between links there are CSS-generated content separators. The separators come before each list item starting with the second `<li>`.
> 
> (example CSS at site)
> 
> Screen readers will not "see" them, which is best practice: separators between breadcrumb links should be hidden from screen readers. They must also have enough contrast against their background, the same as regular text.

Another nice tip! Come for all the things you don't know about HTML, stay for the tips on how do it more effectively.



