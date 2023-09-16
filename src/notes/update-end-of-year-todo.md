---
title: 'Update on the end of the year to-do list'
summary: 'A quick update on the quick note about some work I&apos;d like to get done by the end of the year.'
category: 'Notes'
date: '2020-11-23'
tags: ['Side Projects', 'The Site']
---

Not long after [writing about the status of Horse Racing Datasets](/notes/end-of-the-year-to-do-list/) and how, after a couple of weeks of fiddling with a proof of concept, I had decided to transition it to use markdown files instead of [Airtable]({{ tools.airtable }}), I decided to give Airtable a proper shot. And in a surprising turn of events [figured out how to get it to work](https://twitter.com/superterrific/status/1329799958560649223).

Surprising because I'm not very good at Javascript, and there aren't any articles that I could find on using Airtable with Eleventy. I did [find a single repository](https://github.com/plloyd11/eat) which was the breakthrough moment I needed. I cloned it, played around with it and got my Airtable base to work with it. And thanks to [this Github issue](https://github.com/11ty/eleventy/issues/1122) and specifically [this comment](https://github.com/11ty/eleventy/issues/1122#issuecomment-622437989) I was able to make some improvements. This was all very exciting!

 I learned quite a bit too, and now I have an apples to apples comparison between using markdown and remote data. If I were starting [Horse Racing Datasets]({{ projectPages.hrds }}) from scratch I would probably go with markdown to take full advantage of [collections in Eleventy](https://www.11ty.dev/docs/collections/), especially considering that Airtable is [functioning more like a spreadsheet than a database](/notes/end-of-the-year-to-do-list/) for this project (and you can always [turn a collection into a JSON feed](https://piccalil.li/quick-tip/create-a-json-feed-with-11ty/) to easily share or back-up the data). Admittedly having beginner level Javascript skills certainly tips it towards markdown, but being able to natively use tags and easily control display order is a huge bonus using markdown.

Since I spent last week working on Airtable instead of design I'm pushing back my self-imposed soft deadline of the end of the year. I think mid-Feburary is more likely to have the site redesign fully implemented. But I'm going to add [an article on using Airtable with Eleventy](https://twitter.com/5t3ph/status/1329800237003796480) to the end-of-the-year list to make up for it.

[I did figure out how to filter on the data](https://twitter.com/superterrific/status/1329800837930119172), using a combination [Nunjucks]({{ tools.nunjucks }}) and markdown files to create tag pages. I also figured how to do an API call to grab a single, random record (because I'm not yet good enough at Javascript to figure out how to grab a random record from the data in the initial API call 🤓). Displaying a random item is another thing that's a little easier using collections, or at least [easier to find](https://www.raymondcamden.com/2020/10/26/selecting-random-posts-in-eleventy) [helpful resources](https://egghead.io/lessons/11ty-apply-a-filter-to-an-eleventy-11ty-collection)).

More to come on all this!
