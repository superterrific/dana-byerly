---
title: 'Omnisurface Stars Archive'
projectUrl: 'https://omnisurface-stars.com'
summary: 'An archive and upgrade of an old project.'
category: 'Projects'
launched: 'October 2020'
displayOrder: 7
projectImg:
 img: 'oss-860'
 alt: 'Won on all three surfaces page at Omnisurface Stars'
 blurb: 'The new archive features responsive and accessible data tables.'
stack: ['Eleventy']
role: ['code', 'design']
tags: ['Data', 'Eleventy']
---

This project is a redesign of an old project. Omnisurface Stars was a Wordpress blog active from 2009-2010. It was a labor of love for a small group of horse racing enthusiasts and friends aimed at tracking horses that had won on all three racing surfaces: dirt, synthetic and turf.

Compiling this data was no small task given that the American horse racing industry does not make basic data readily available in usable formats (still true in 2020, sadly). The information compiled is not complete, and probably has errors, but it felt worthwhile to preserve the effort. And there's still probably some value for those who follow racing to have it as a quick reference since there's no other way to easily find this information.

There were a handful of posts at the old site, but they were mostly about noting who had to potential to join the ranks of the Omnisurface Stars, so I did not bring those over to the new site. The original listings were embedded Google Sheets, which was fine at the time, but relatively easy to improve upon now.

{% figure %}
  <picture>
    <source srcset="/img/oss-original.avif" type="image/avif">
    <source srcset="/img/oss-original.webp" type="image/webp">
    <img src="/img/oss-original.png" class="img-center" alt="The original datasets at Wordpress" loading="lazy" />
  </picture>
  {% figcaption %}
    The original embedded Google Sheets datasets.
  {% endfigcaption %}
{% endfigure %}

Given my new found love of [Eleventy]({{ tools.11ty }}), and in particular its data cascade, it was an easy choice and implementation. I manually converted the Google Sheet data to JSON given that my current skill level does not include writing scripts for such things. It wasn't too terrible. I'm going to write up the process in the near future in hopes of helping anyone who might need to do the same.

Moving the JSON locally into the project was a nice performance boost. It also meant that I could use data tables instead of embedded Google Sheets, which provided more flexibility for responsiveness and accessibility.

{% figure %}
  <picture>
    <source srcset="/img/oss-mobile.avif" type="image/avif">
    <source srcset="/img/oss-mobile.webp" type="image/webp">
    <img src="/img/oss-mobile.png" class="img-center" alt="Responsive layout on small sized screens" loading="lazy" />
  </picture>
  {% figcaption %}
    Moving the data into JSON files made it easy to make the data tables responsive. Screenshot from <a href="{{ tools.sizzy }}">Sizzy App</a>
  {% endfigcaption %}
{% endfigure %}

I'll talk more about the data table implementation and decisions in the above mentioned write up, but for now it's nice to have a sustainable home for this project.
