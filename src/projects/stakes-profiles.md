---
title: 'Stakes Profiles'
summary: 'Data visualizations of trends for specific Thoroughbred stakes races since 1991.'
projectUrl: 'https://stakes-profiles.com/'
category: 'Projects'
date: 2020-09-07
launched: 'Feburary 2018'
displayOrder: 6
landingImg: "stakes-profile"
landingAlt: "An example of charts with a bar chart showing the field size and the how the winner ranked with bettors. There are two stacked horizontal bar charts. One shows how often favorites won and one shows how often favorites finished in the money, or no worse than third."
stack: ['Eleventy', 'Google Charts']
role: ['Code', 'Content', 'Dataviz', 'Design']
tags: ['Dataviz', 'Eleventy']
---
This project originally was a section within in the [Hello Race Fans](/projects/hello-race-fans) site. It was also a ticking time bomb of a bad implementation, mixing markup within the content of a WordPress site. When the layout started to do all sorts of unfortunate things I created a standalone site for the project using [Eleventy]({{ tools.11ty }}). There is [more about that process here](/notes/the-accidental-project/).


Stakes Profiles are data visualization posts that show trends for a particular [stakes race](https://en.wikipedia.org/wiki/Graded_stakes_race) since 1991. I created them to answer simple questions like “how have favorites performed in this race historically?” and “what kind of running styles have performed well, or not?” using garden variety bar and line charts. I [wrote about this project](http://www.exactamundo.org/2019/03/13/in-other-racing-data-conversations/) within the wider topic of the racing industry at my racing blog.

{% figure %}
  <picture>
    <source srcset="/img/stakes-profiles-running-style-bar.avif" type="image/avif">
    <source srcset="/img/stakes-profiles-running-style-bar.webp" type="image/webp">
    <img src="/img/stakes-profiles-running-style-bar.jpg" alt="Bar graph showing types of running styles that have won the Florida Derby since 1991" loading="lazy" />
  </picture>
  {% figcaption %}
    A stacked bar chart illustrating how the various running styles have performed in the Florida Derby. The key defines each running style by the location of the winner relative to the leader at the half mile point of the race. For example, 37.9% of the winners were within three lengths of the leader at the half mile mark.
  {% endfigcaption %}
{% endfigure %}

I got the [first glimmer for the idea a few years earlier](https://twitter.com/superterrific/status/964523437019549696) when I was working on [Cheat Sheets for televised Breeders' Cup races](https://web.archive.org/web/20150831075810/https://challenge.breederscup.com/travers-cheat-sheet), as a hook I’d lead with how favorites had performed over the last ten years. It was disheartening how much work was required to answer what seemed like a basic question.

Always in search of a new project, I started thinking about what kinds of questions should be easy to answer and working on how to visualize the data. Initially I thought that of course it would all be “actionable” and useful for wagering. Ultimately I don’t think it turned out that way.

Is it interesting to know these sorts of things of about a graded stakes race? Yes, definitely. Is it actionable for wagering on today’s rendition? Probably not, but I do think there are occasions where some of it can be used that way depending on the context. For example, the charts below from the Florida Derby are a good example of potentially "actionable" information.

{% figure %}
  <picture>
    <source srcset="/img/stakes-profiles-favorites.avif" type="image/avif">
    <source srcset="/img/stakes-profiles-favorites.webp" type="image/webp">
    <img src="/img/stakes-profiles-favorites.jpg" alt="Charts showing average field size, bettors' choice and how favorites have performed in the Florida Derby since 1991" loading="lazy">
  </picture>
  {% figcaption %}
    Historically the Florida Derby is a good race to play against the favorite or the play the favorite underneath (not to win). Generally favorites win around <a href="http://agameofskill.com/how-well-do-horse-racing-favorites-perform/">35% of the time</a>, and most graded stakes are close to that the average, but in the Florida Derby favorites have only won 27.5% of the time on average.
  {% endfigcaption %}
{% endfigure %}

Even though Stakes Profiles weren't "successful" in the way I imagined they would be, they turned out to be a useful way to provide context and narrative to the wider notion of racing. Ultimately they took more upkeep than I was able to carry forward, but they still provide easy to digest information that wouldn't be available otherwise. And now they have a proper home as a standalone archive.
