---
title: 'Horse Racing Datasets'
summary: 'Shared datasets for Thoroughbred horse racing.'
projectUrl: 'http://horseracingdatasets.com'
category: 'Projects'
launched: 'January 2015'
displayOrder: 3
projectImg:
 img: 'hrds'
 alt: 'Kentucky Derby datasets available at Horse Racing Datasets'
stack: ['Airtable', 'Sergey SSG', 'Vue']
role: ['Code', 'Curation', 'Design']
tags: ['Airtable', 'Curation']
---

Usable data is bizarrely hard to come by in American Thoroughred horse racing, so I created a way to share datasets.

This site started as a static one page site with about ten datasets in 2015. In 2018 I migrated it to [Airtable]({{ tools.airtable }}) and [Vue]({{ tools.vue }}) leaving the original design mostly intact. In July of 2019 I overhauled the site with a big redesign.

The main upgrade was adding the ability to browse datasets by category or data type, which was useful as the site had grown to approximately 50 datasets by this point. The original design also used Bootstrap and I gave [Tailwind CSS](https://tailwindcss.com/) a try. Developing with a utility-first framework is great for designing in the browser, but after not looking at for awhile I have no idea what's going on! Hopefully I can do a CSS overhaul and re-write it from scratch.

When I set out to do the current design I thought I'd use Vue routing, but I couldn't get it to work how I envisioned. So I gave [Sergey]({{ tools.sergey }}), a simple static site generator, a try and it did exactly what I wanted with very low overhead. If/when redo the CSS I might also move it to [Eleventy]({{ tools.11ty }}) and see if I can improve some of the data handling.

{% figure %}
  <picture>
    <source srcset="/img/HRDS-static.webp" type="image/webp">
    <img src="/img/HRDS-static.png" alt="Static listing page at Horse Racing Datasets" loading="lazy" />
  </picture>
  {% figcaption %}
    When a visitor doesn't have Javascript enabled, or if Javascript doesn't load, they get a static version of the site.
  {% endfigcaption %}
{% endfigure %}


Another feature of the current design is the addition of a [static listing page](http://horseracingdatasets.com/static/) in the event that Javascript doesn't work or is turned off. It's really not that much more work to maintain and it provides a nice alternative experience when ye olde JS doesn't work or when a visitor would prefer a zippier low-bandwidth experience.

I might come back and add more detail about the implementation, or I might just redo the whole thing and then talk about that!
