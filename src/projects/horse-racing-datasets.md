---
title: "Horse Racing Datasets"
summary: "Shared datasets for Thoroughbred horse racing."
projectUrl: 'https://horseracingdatasets.com'
category: 'Projects'
date: 2020-09-07
launched: 'January 2015'
displayOrder: 2
landingImg: "hrds"
landingAlt: "Homepage featuring a hero value proposition, a random dataset of the day and a tag cloud of available categories."
projectImg:
 img: 'hrds-v4'
 alt: 'Datasets available at Horse Racing Datasets'
stack: ['Airtable', 'Eleventy']
role: ['Code', 'Curation', 'Design']
tags: ['Airtable', 'Curation']
---

Usable data is quizzically hard to come by in American Thoroughbred horse racing, so I created a way to aggregate datasets that people or organizations were willing to share.

This site started as a static single page site with ten datasets in 2015 and is currently on its fourth version with 69 datasets and growing. The first two versions were flat file, single page listings using Bootstrap. The third version was major update that moved the data to [Airtable]({{ tools.airtable }}) and used a combination of [Sergey static site generator]({{ tools.sergey }}), [Vue]({{ tools.vue }}) for templating and Tailwind CSS. The current version continues to use Airtable but now uses [Eleventy]({{ tools.11ty }}) and handwritten CSS.

Here's the timeline and versions...

* 2015 - Launch - Bootstrap
* 2018 - Minor update - Bootstrap
* 2019 - Major update - Airtable, Sergey SSG, Vue, Tailwind
* 2021 - Major update - Airtable, Eleventy, Handwritten CSS


Moving the data to Airtable was big step forward that made maintaining the site much easier. It also meant that the data could be viewed by category, making it easy to browse or hone in on a particular topic. One of the enhancements of the current version is that each dataset also has its own page, making it easier to share or reference individual datasets.

Prior to redesigning the current version I said the following on this page...


> I might come back and add more detail about the implementation, or I might just redo the whole thing and then talk about that! {% nowrap %}&mdash; Dana Byerly{% endnowrap %}


Since I went the "redo the whole thing" route I feel obligated to fulfill the "then talk about that" part. But instead of repeating myself, I'll direct you to a few of the places I have already talked about it!

Most recently I did what functions as a wrap-up entitled [Horse Racing Datasets redesigned](/notes/horse-racing-datasets-redesigned/) that also links to several other "along the way" notes. I also posted a lengthy article on [Using Airtable with Eleventy](/articles/using-airtable-with-eleventy/) that goes into detail about a proof of concept for the site. As mentioned elsewhere, next on my to do list is to update that article with a few refinements I made post-publish, but the majority of article still holds true.

There's also some detail in the project's [About page](https://horseracingdatasets.com/about/) and [colophon](https://horseracingdatasets.com/colophon/).


{% figure %}
  <picture>
    <source srcset="/img/hrds-light-dark.avif" type="image/avif">
    <source srcset="/img/hrds-light-dark.webp" type="image/webp">
    <img src="/img/hrds-light-dark.png" alt="Horse Racing Datasets homepage in light and dark modes" loading="lazy" />
  </picture>
  {% figcaption %}
    Light and dark mode, one of the improvements of the current version.
  {% endfigcaption %}
{% endfigure %}


Since you might not feel like clicking a bunch of links, here's a quick recap of the enhancements of the current version.

* There is now pagination on the All Datasets listing to make navigating the growing list easier.
* Each dataset now has its own page to make sharing easier.
* Links now have visible focus states.
* There is a light and dark mode that respects the visitor's system level preference. I have plans to add a toggle to allow for more flexibility.
* Color contrast in both light and dark modes meets WCAG AA standards.
* There are no screen reflow issues up to 500% zoom.
* The site is fully functional if JavaScript is disabled or fails to load.

In addition to adding a user controlled light and dark toggle, I'm going to investigate adding search to the site.
