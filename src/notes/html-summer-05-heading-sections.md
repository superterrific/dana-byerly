---
title: "Hot HTML Summer: Headings and sections"
summary: "Sectioning is important."
date: 2023-07-03T13:00:00Z
htmlSection: "Headings and sections"
htmlLink: "https://web.dev/learn/html/headings-and-sections/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## Site `<footer>`

Go to this [section at Learn HTML](https://web.dev/learn/html/headings-and-sections/#site-lessfootergreater).

> The implicit `role` for the site footer is `contentinfo`.

Ha, answering a question I had in the [previous section](/notes/hot-html-summer-semantic-htmlml/)! And building on that information with more context...

> When a `<footer>` is a descendant of an `<article>`, `<aside>`, `<main>`, `<nav>`, or `<section>`, it's not a landmark. If the post appears on its own, depending on the markup, that footer might get promoted.

## Document structure 

Go to this [section at Learn HTML](https://web.dev/learn/html/headings-and-sections/#document-structure).

> A layout with a header, two sidebars, and a footer, is known as the [holy grail layout](https://web.dev/patterns/layout/holy-grail/). 

I did not know this had a name, although that layout was prominent during my time away from web dev. But I also didn't know [these patterns had these names](https://web.dev/patterns/layout/). A bit searching shows holy grail to be a commonly used name, but not so much for the other ones, like [Fluffy Center](https://web.dev/patterns/layout/fluffy-center/) and [Deconstructed Pancake](https://web.dev/patterns/layout/deconstructed-pancake/). I'll look them over more closely (Hot Layout Patterns Summer!), but [Every Layout](https://every-layout.dev/) is my go-to for layout patterns. Check it out if you haven't already.

## `<section>`

Go to this [section at Learn HTML](https://web.dev/learn/html/headings-and-sections/#lesssectiongreater).

> The `<section>` element is used to encompass generic standalone sections of a document when there is no more specific semantic element to use. Sections should have a heading, with very few exceptions.

Using the "should have a heading" guideline is a very easy and useful way to frame it. I can think of a few places where I'm using `<section>` incorrectly. 

## Headings: `<h1>`-`<h6>`

Go to this [section at Learn HTML](https://web.dev/learn/html/headings-and-sections/#headings-lessh1greater-lessh6greater).

> When a heading is nested in a document banner `<header>`, it is the heading for the application or site. When nested in `<main>`, whether or not it is nested within a `<header>` in `<main>`, it is the header for that page, not the whole site.

I didn't know this. I tend to keep my `<h1>` in `<main>` and treat it as a page title, but good to keep in mind for designs where it could be tempting to put the `<h1>` in `<header>`.


