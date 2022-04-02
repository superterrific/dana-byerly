---
title: 'Random Replay Generator spiff up'
summary: 'Wrapping up the end of the year list by knocking off one final to-do.'
category: 'Notes'
date: '2020-12-31'
tags: ['Side Projects', 'The Site']
---
In keeping with my [end of the year to-do list](https://danabyerly.com/notes/end-of-the-year-to-do-list/#random-replay-generator) I was able to give the [Random Replay Generator](https://replaygenerator.com) a little spiffing up.

The update was mostly punching up the colors and a few other refinements. My design style is [one step above a wireframe](https://twitter.com/superterrific/status/1343664499069485056
), or "jazzing things down" as I like to call it, so I'm happy to have pushed beyond [a neutral color](https://replaygenerator.com/archive/01/) on a [grey background](https://replaygenerator.com/archive/02/).

{% figure %}
  <picture>
    <source srcset="/img/rrg-before-after.avif" type="image/avif">
    <source srcset="/img/rrg-before-after.webp" type="image/webp">
    <img src="/img/rrg-before-after.png" alt="Before and after in both light and dark mode" loading="lazy" />
  </picture>
  {% figcaption %}
    The before and after for both light and dark modes: Before on the right and after on the left.
  {% endfigcaption %}
{% endfigure %}

A few other updates include adding some [visually hidden text](https://piccalil.li/quick-tip/visually-hidden/) for screen reader users. Visually it's relatively easy to understand who the winner is based on the text treatments and spacing, and the the name of the track might be in the video still, but that context is lost when it's announced.

I added "Track:" and "Winner:" for extra clarification, and to match the label/value paring of the other data. There are a couple of instances of dead heat finishes, meaning the race officially has two winners. Visually the "winner" section is just repeated to display each winner plus their jockey and trainer. It could be confusing to hear the second winner announced, so I also added "This race was a dead heat and has two winners" before the first winner.

{% figure %}
  <picture>
    <source srcset="/img/dead-heat.avif" type="image/avif">
    <source srcset="/img/dead-heat.webp" type="image/webp">
    <img src="/img/dead-heat.png" alt="A screenshot of the 1992 Gotham Stakes showing a dead heat between Devil His Due and Lure" loading="lazy" />
  </picture>
  {% figcaption %}
    Visually it's somewhat easy to tell the repeated "winner" section means there are two winners, especially when the still shows the two horses head and head like the 1992 Gotham Stakes. That context is lacking for screen reader users so I've added visually hidden text before the first winner to indicate that the race is a dead heat and has two winners.
  {% endfigcaption %}
{% endfigure %}

I've also updated the [project page]({{ projectPages.rrg }}) at this site and moved The Generator to the top of the list on the [Projects listings](/projects/) and Featured Projects section of [the homepage](/).

I added a dark mode [in the last spiff up](https://twitter.com/superterrific/status/1226247966924660747) and had hoped to add a toggle this time around, but decided not to because I wanted to keep the effort limited to a weekend. Maybe next year for the toggle!

The next item on the list is to start the design of the [Horse Racing Datasets overhaul](/notes/update-on-the-end-of-the-year-to-do-list/). I've already got the [data hooked up and working with Eleventy](/articles/using-airtable-with-eleventy/). I've already started on some research and will probably do a few little updates along the way.

Until then, here's wishing you and yours a much improved 2021!
