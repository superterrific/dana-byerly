---
title: 'Paths to the Kentucky Derby Since 1990'
summary: 'Viewing prep race paths of Kentucky Derby winners over the years.'
projectUrl: 'http://helloracefans.com/races/kentucky-derby/paths-to-the-kentucky-derby-since-1990/'
category: 'Projects'
launched: 'February 2016'
displayOrder: 4
platform: ['Wordpress']
stack: ['Google Charts']
role: ['Code', 'Content', 'Dataviz', 'Design']
tags: ['Dataviz']
---
This is a post within the [Hello Race Fans]({{ projectPages.hrf }}) site. One of the things I've experimented with at that site is data visualization. In most cases it was embarrassing flailing, but I think this post is my best attempt.

The Kentucky Derby is one of those events that racing fans and horseplayers spend way too much time obsessing over. Admittedly [it's fun though](http://helloracefans.com/handicapping/patterns/geek-out-mining-derby-data/), mostly because the Derby is a rare racing event where it's somewhat easy to get your hands on data.

Not any horse can run in the Kentucky Derby. They must be a specific age and [earn points in designated prep races](https://www.americasbestracing.net/lifestyle/2020-how-horses-qualify-the-kentucky-derby-beginners-guide) in order to qualify. The point system, known as [The Road to the Kentucky Derby](https://en.wikipedia.org/wiki/Road_to_the_Kentucky_Derby), was started in 2012. Prior to that entry was based on earnings in [graded stakes races](https://en.wikipedia.org/wiki/Graded_stakes_race), which for the most part are the same as today's qualifying races.

[Which races produce Derby winners](http://helloracefans.com/handicapping/patterns/the-major-prep-factor/) is one of the many things people who nerd out on Derby data like to discuss. It's also one of the of topics bored horseplayers turn to as the prep races start to heat up in February.

I used a [sankey diagram](https://en.wikipedia.org/wiki/Sankey_diagram) to illustrate the [graded stakes](https://en.wikipedia.org/wiki/Graded_stakes_race) prep race path of Kentucky Derby winners in their 3-year-old year. There are points races for 2-year-olds but the Derby trail doesn't really heat up until February (the Derby is run in May [unless it's 2020!](https://www.kentuckyderby.com/horses/news/churchill-downs-incorporated-announces-the-rescheduling-of-the-146th-kentucky-derby-from-may-2-2020-to-september-5-2020)).

{% figure %}
  <picture>
    <source srcset="/img/derby-paths-sankey.avif" type="image/avif">
    <source srcset="/img/derby-paths-sankey.webp" type="image/webp">
    <img src="/img/derby-paths-sankey.png" alt="A sankey diagram how many Kentucky Derby winners passed through specific prep races." loading="lazy" />
  </picture>
  {% figcaption %}
    The sankey diagram illustrates the path and volume of Derby winners through the prep races. Hovering or touching each path shows information about the flow from the race to race, including the number of winners and each winner's name and the year they won. The additional information is also useful in instances where the paths cross, making it harder to see the size.
  {% endfigcaption %}
{% endfigure %}


Many winners also prepped in a mix of graded and non-graded races, but this would've been too hard to illustrate in the sankey diagram, so I created illustrations of each winner's full path.

{% figure %}
  <picture>
    <source srcset="/img/derby-paths-individuals.avif" type="image/avif">
    <source srcset="/img/derby-paths-individuals.webp" type="image/webp">
    <img src="/img/derby-paths-individuals.png" alt="Four visualizations showing how Kentucky Derby contenders training has changed through the decades trending towards fewer starts in prep races." loading="lazy" />
  </picture>
  {% figcaption %}
      Looking at each winner’s path over time is an easy way to see how training methods have changed in the time span. From 2015 to 2006 seven of the 10 winners made only two starts, whereas every winner from 2005 to 1990 made at least three starts. And in that same time span half of the winners made at least four starts.
  {% endfigcaption %}
{% endfigure %}

The individual paths add a layer of information that not only shows how training methods have changed over the years, but reveals plenty of unusual paths to the Kentucky Derby. There's also a table showing which Derby winners prepped in races at seven furlongs (just under one mile) or less as well as turf races. These two data points are notable for racing nerds because the Derby is run at one and a quarter miles on the dirt and contenders usually prep in races that are over a mile on the dirt.

This post is unlikely to help you pick a Derby winner, but it does provide a fun way to learn about one aspect of the Kentucky Derby.
