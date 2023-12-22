---
title: 'Random Replay Generator'
summary: 'Making it easy to binge-watch Thoroughbred horse racing replays.'
category: 'Projects'
date: 2020-09-07
launched: 'December 2018'
img: 'RRG-hero'
projectImg:
 img: 'RRG-hero'
 alt: 'Airtable base that powers the Random Replay Generator'
 blurb: 'Part of the extensive Airtable base that powers the Random Replay Generator.'
stack: ['Airtable', 'Vue']
role: ['Code', 'Curation', 'Design']
tags: ['Airtable', 'Curation', 'Randomization']
eleventyExcludeFromCollections: true
---
I came up with this idea about four years before I had the chops to build it. Enter [Airtable]({{ tools.airtable }}) and enough [Vue]({{ tools.vue }}) skills cobbled together via search engine and the Random Replay Generator was finally born. If you're looking for an easy way to binge-watch Thoroughbred racing replays, you might like this site!

The initial version was built with [Bootstrap](https://getbootstrap.com) and launched in late 2018. In February 2020 I gave it an update, moving away from Bootstrap and coding the CSS myself. Other improvements included a dark mode for those who have their OS set to dark mode, and an explicit non-javascript experience. [Details can be found in this archived Twitter thread](https://tweets.danabyerly.com/1223416466965508098/). In [December 2020](/notes/random-replay-generator-spiff-up/) I gave it a little spruce up, updating the colors and making a few accessibility improvements, also moving it to [Netlify]({{ tools.netlify }}).

The most of fun of this site for me is curating, it also happens to be the most work. I launched the site with 250 replays and am current at 725. I'll come back and add some stats about the content, or maybe I'll make it a separate article, but one item worth noting is that there are 56 renditions of the Kentucky Derby in the Generator. The earliest is from 1934, won by Cavalcade. Triple Crown winners Omaha (1935) and Whirlaway (1941) are included as well as every rendition from 1970 to the most recently run.

{% figure %}
  <picture>
    <source srcset="/img/RRG-omaha.avif" type="image/avif">
    <source srcset="/img/RRG-omaha.webp" type="image/webp">
    <img src="/img/RRG-omaha.png" alt="Replay of the 1935 Kentucky Derby, won by Omaha, the third Triple Crown winner" loading="lazy" />
  </picture>
  {% figcaption %}
    Replay of the 1935 Kentucky Derby, won by <a href="https://en.wikipedia.org/wiki/Omaha_(horse)">Omaha</a>, the third Triple Crown winner.
  {% endfigcaption %}
{% endfigure %}

I've also added information that you're unlikely to find at YouTube. In addition to name, year and winner of the race each replay includes the winning trainer and jockey. American races run from 1991 onwards include what's called a racing chart that provides a good amount of information about the race. [Equibase](https://www.equibase.com/), the system of record for American horse racing, makes charts available via PDF, and we link to those where available. I've also included the announcer, which is not easy to determine outside of the big races, but is one of those things that should be more prevalent.

**Update**: I retired this site in December of 2023 and it's no longer available online. 
