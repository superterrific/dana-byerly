---
title: 'The sprucing party continues'
summary: 'The homepage and Projects landing page get a freshening.'
date: 2021-09-03
category: 'Notes'
tags: ['The Site']
---

Keeping the momentum of the [updated footer](/notes/a-bit-of-sprucing-up/) going, I've also updated the [homepage](/) and the [Projects](/projects/) page. Party popper emoji! Much like the footer, I've wanted to update these for awhile.

## The homepage
This is more fine tuning than overhaul. The original spacing and rhythm were too tight, and the Project cards felt like a first draft, mostly because they were.

{% figure %}
  <picture>
    <source srcset="/img/HP-old-2021-08-31.avif" type="image/avif">
    <source srcset="/img/HP-old-2021-08-31.webp" type="image/webp">
    <img src="/img/HP-old-2021-08-31.jpg" alt="Original version of the homepage showing tight spacing." loading="lazy" />
  </picture>
  {% figcaption %}
    Not a lot of breathing room between the Recent Writing and Featured Projects section. And the project cards are just a bit too much.
  {% endfigcaption %}
{% endfigure %}

A few small updates made a big difference...

* Removed blurbs under section headings
* Changed section header color
* Simplified the Featured Projects cards

{% figure %}
  <picture>
    <source srcset="/img/HP-new.avif" type="image/avif">
    <source srcset="/img/HP-new.webp" type="image/webp">
    <img src="/img/HP-new.jpg" alt="The current version of the homepage showing improved spacing." loading="lazy" />
  </picture>
  {% figcaption %}
    Better spacing and rhythm with less clutter.
  {% endfigcaption %}
{% endfigure %}

The updated project card is specific to the homepage. The previous version used the same layout as the Projects landing page, allowing a visitor to view the project page or visit the project directly. I left that option on the Projects landing but stripped it out here for simplicity, thinking that if someone is really interested in [my projects](/projects/) it might make more sense to scan them all and decide whether to read more or just visit it.

Since I don't current use a stats package, mostly for mental hygiene, I have no idea if anyone ever went directly to a project from the homepage. A trade off I'm willing to make!


{% figure %}
  <picture>
    <source srcset="/img/featured-projects-hover-focus.avif" type="image/avif">
    <source srcset="/img/featured-projects-hover-focus.webp" type="image/webp">
    <img src="/img/featured-projects-hover-focus.jpg" alt="The featured projects cards showing the hover and focus state with a glowing magenta background" loading="lazy" />
  </picture>
  {% figcaption %}
    This is as close to delight as I get.
  {% endfigcaption %}
{% endfigure %}

If you've ever looked around this site you may have noticed I'm a boring designer. My work is frequently devoid of all the little nice touches that put some polish on a UI. The hover and focus state on the Project card is one such detail that could be considered a nice touch, even trending towards delight. The overall approach for the card came from Adrian Roselli's [Block Links, Cards, Clickable Regions, Rows, etc](https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html).


## Projects landing page
Once I got the Featured Project card done this was a quick update, basically just changing colors and leaving the original structure in place.

{% figure %}
  <picture>
    <source srcset="/img/project-card-old.avif" type="image/avif">
    <source srcset="/img/project-card-old.webp" type="image/webp">
    <img src="/img/project-card-old.jpg" alt="The original project card with the text on a dark blue background with light text." loading="lazy" />
  </picture>
  {% figcaption %}
    The original cards. <a href="/img/projects-old-all.png">View the full page (1.9 MB)</a>
  {% endfigcaption %}
{% endfigure %}

{% figure %}
  <picture>
    <source srcset="/img/project-card-new.avif" type="image/avif">
    <source srcset="/img/project-card-new.webp" type="image/webp">
    <img src="/img/project-card-new.jpg" alt="The new project card with the text on a light blue/gray background." loading="lazy" />
  </picture>
  {% figcaption %}
    The new cards. <a href="/img/projects-new-all.png">View the full page (1.9 MB)</a>
  {% endfigcaption %}
{% endfigure %}

In isolation I liked the original project cards, but a [big long page of them](/img/projects-old-all.png) was a bit much. The new toned-down design is a bit more boring (hello!) but overall easier to scan. And if ever get around to making a dark mode for this site that design will be coming back!

There are a few unsavory image sizing things that happen as the screen is resized. I'm going to come back and redo most of the images and standardize the sizing or aspect ratio a bit more to help with that.


I also found a bug that's been out there this whole time. The grid container I used for the cards had the minimum width set at 18rem, which meant that on the smallest screens it was too wide. I fixed that by setting the minimum to 16rem.

## What's next
It's been a year [since I launched this version of the site](/articles/finally-a-new-site/), and I've been doing some thinking about what I've learned and what to do next with the site. More on that in a bit.
