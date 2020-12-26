---
title: 'Dynamic heading levels in Eleventy'
summary: 'While looking around a repository at something else I discovered this clever approach.'
category: 'Articles'
date: '2020-12-26'
tags: ['Accessibility', 'Eleventy', 'The Site']
---

One of my favorite ways to learn is to look around repositories to see different approaches, or figure out how to do something. I picked up this helpful approach while looking at a repository to learn about something else.

After reading this [article by Tomas Pustelto on optimizing CSS](https://pustelto.com/blog/optimizing-css-for-faster-page-loads/) I was looking around the repository for his site to take a closer look at how he structured his CSS, and noticed he was dynamically assigning heading levels based on the layout. I made a note to take a closer look after [optimizing my CSS](http://localhost:8080/articles/manually-splitting-css-files-in-eleventy/), and now that I've implemented dynamic headings I wanted to share the approach since I haven't found any how-to articles already out there.

## What are heading levels and why are they important?
Heading levels refer to the [HTML heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) of <code>h1</code> - <code>h6</code>. Heading elements are important because they describe the structure of the content, and [using them in the correct order has several benefits](https://usability.yale.edu/web-accessibility/articles/headings#benefits). In addition to helping sighted users find what they're looking for more quickly, assistive technology users can also easily navigate between or skip headings.


## Why am I using dynamic header levels?
There are several places throughout the site where I list posts. I have a single partial to handle all the different post types that includes the post title, summary, the section if applicable ([Articles](/articles/) or [Notes](/notes/)), publish date and tags. It's used on the [homepage](/), the [Changelog](/changelog/), and listing pages for [Articles](/articles/), [Notes](/notes/), and tags (e.g., the [tag for Eleventy content](/tag/eleventy/)).

{% figure %}
  <picture>
    <source srcset="/img/article-summary.avif" type="image/avif">
    <source srcset="/img/article-summary.webp" type="image/webp">
    <img src="/img/article-summary.png" alt="An example of an article summary" loading="lazy" />
  </picture>
  {% figcaption %}
    The article summary that displays on the homepage, listing pages and the changelog. The title, summary and publish date are always displayed and the "Filed Under" section and tags are conditional.
  {% endfigcaption %}
{% endfigure %}

On all of these pages except the homepage the heading should be a <code>h2</code>. On the homepage the listing is within a section that has a <code>h2</code>, so those headings should be <code>h3</code>.

{% figure %}
  <picture>
    <source srcset="/img/document-outline.avif" type="image/avif">
    <source srcset="/img/document-outline.webp" type="image/webp">
    <img src="/img/document-outline.png" alt="The document outline of the homepage and the articles listing page" loading="lazy" />
  </picture>
  {% figcaption %}
    The document outline of the homepage and the Articles listing page. On the homepage the Articles listing is within a "Recent Writing" section that has a <code>h2</code>. Outlines via <a href="https://validator.w3.org/">W3C Validator</a>
  {% endfigcaption %}
{% endfigure %}

Fortunately this is relatively easy to do! I'm using Nunjucks [if expressions](https://mozilla.github.io/nunjucks/templating.html#if-expression) and [set variable](https://mozilla.github.io/nunjucks/templating.html#set), but I think you could use the same approach with Liquid [by using assign](https://shopify.github.io/liquid/tags/variable/).

## How to do it
Here's a diagram showing the relationship of the partial and layouts...

{% figure %}
  <picture>
    <source srcset="/img/dynamic-headers-template-structure.avif" type="image/avif">
    <source srcset="/img/dynamic-headers-template-structure.webp" type="image/webp">
    <img src="/img/dynamic-headers-template-structure.png" alt="A diagram showing how the partial and layouts work together." loading="lazy" />
  </picture>
  {% figcaption %}
    The partial is passed into two layouts, one for the homepage and one for the listing pages. If the variable is set in the layout then the conditional header uses the variable, if not it renders a <code>h2</code>. Created using <a href="https://excalidraw.com/">Excalidraw</a>.
  {% endfigcaption %}
{% endfigure %}

As the diagram above shows, the partial for the article summary contains a conditional header that sets the value, in this case the heading tag, to a variable titled <code>headingLevel</code>. If <code>headingLevel</code> is not present, then <code>h2</code> is used. This makes the default heading a <code>h2</code> but allows for variation where needed.

```html
<!-- article-summary.html -->
{% raw %}<{{ headingLevel if headingLevel else 'h2' }} class="promo-article-title">
 <a href="{{ item.url }}">{{ item.data.title }}</a>
</{{ headingLevel if headingLevel else 'h2' }}>{% endraw %}
```

On the Articles, Changelog, Notes and tag listing pages the conditional heading code turns into this...

```html
{% raw %}<h2 class="promo-article-title">
 <a href="{{ item.url }}">{{ item.data.title }}</a>{% endraw %}
</h2>
```

In the homepage layout <code>headingLevel</code> is set to <code>h3</code>...

```html
<!-- home.html -->
{% raw %}{% extends "layouts/base.html" %}

{% set headingLevel = 'h3' %}

{% block content %}{% endblock%}{% endraw %}
```

Which turns the conditional heading code in the partial to this...

```html
{% raw %}<h3 class="promo-article-title">
 <a href="{{ item.url }}">{{ item.data.title }}</a>{% endraw %}
</h3>
```

That's it! A straightforward way to efficiently use partials and ensure you're creating proper document outlines.


## Useful Resources
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
* [WebAIM](https://webaim.org/techniques/semanticstructure/#headings)
* [W3C Accessibility Initiative](https://www.w3.org/WAI/tutorials/page-structure/headings/)
* [Yale's Usability and Accessibility Section](https://usability.yale.edu/web-accessibility/articles/headings)
