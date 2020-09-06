---
title: 'Random Replay Generator'
summary: 'Making it easy to binge-watch Thoroughbred horse racing replays.'
projectUrl: 'http://replaygenerator.com'
category: 'Projects'
launched: 'December 2018'
displayOrder: 2
projectImg:
 img: '/img/projects/RRG-hero_kp6ozu_c_scale,w_1380.png.png'
 srcset: '/img/projects/RRG-hero_kp6ozu_c_scale,w_480.png 480w,
          /img/projects/RRG-hero_kp6ozu_c_scale,w_713.png 713w,
          /img/projects/RRG-hero_kp6ozu_c_scale,w_909.png 909w,
          /img/projects/RRG-hero_kp6ozu_c_scale,w_1088.png 1088w,
          /img/projects/RRG-hero_kp6ozu_c_scale,w_1380.png 1380w'
 alt: 'Airtable base that powers the Random Replay Generator'
 blurb: 'Part of the extensive Airtable base that powers the Random Replay Generator.'
stack: ['Airtable', 'Vue']
role: ['Code', 'Curation', 'Design']
tags: ['Airtable', 'Curation', 'Randomization']
---
I came up with this idea about four years ago but didn't have the chops to build it. Enter [Airtable]({{ tools.airtable }}) and enough [Vue]({{ tools.vue }}) skills cobbled together via search engine and the Random Replay Generator was finally born. If you're looking for an easy way to binge-watch Thoroughbred racing replays, you might like this site!

The [initial version](http://replaygenerator.com/archive/01/) was built with [Bootstrap](https://getbootstrap.com). In February 2020 I gave it a little update, moving away from Bootstrap and coding the CSS myself. Other improvements include a dark mode for those who have their OS set to dark mode, and an explicit non-javascript experience. [Details can be found in this Twitter thread](https://twitter.com/superterrific/status/1223416466965508098).

The most of fun of this site for me is curating, it also happens to be the most work. I launched the site with 250 replays and am current at 725. I'll come back and add some stats about the content, or maybe I'll make it a separate article, but one item worth noting is that there are 56 renditions of the Kentucky Derby in the Generator. The earliest is from 1934, won by Cavalcade. Triple Crown winners Omaha (1935) and Whirlaway (1941) are included as well as every rendition from 1970 to the most recently run.

{% figure %}
  <img src="/img/RRG-omaha.png" alt="Replay of the 1935 Kentucky Derby, won by Omaha, the third Triple Crown winner" loading="lazy" />
  {% figcaption %}
    Replay of the 1935 Kentucky Derby, won by <a href="https://en.wikipedia.org/wiki/Omaha_(horse)">Omaha</a>, the third Triple Crown winner.
  {% endfigcaption %}
{% endfigure %}

I've also added information that you're unlikely to find at YouTube. In addition to name, year and winner of the race each replay includes the winning trainer and jockey. American races run from 1991 onwards include what's called a racing chart that provides a good amount of information about the race. [Equibase](https://www.equibase.com/), the system of record for American horse racing, makes charts available via PDF, and we link to those where available. I've also included the announcer, which is not easy to determine outside of the big races, but is one of those things that should be more prevalent.

I'm hoping to come back and add implementation details and information about the the Airtable set-up, and maybe talk about the curation process.
