---
title: 'Migrating the Pile'
summary: 'Using Pocket, Airtable and Eleventy
 for a personal bookmarking site.'
date: 2021-07-19
category: 'Notes'
tags: ['Airtable', 'Eleventy', 'Side Projects']
---

Early in the pandemic I threw together [Pile of hrefs](https://pile-of-hrefs.com), a personal bookmarking site. I had a number of different ways to save links but they were disjointed and none them worked well enough that I used them consistently.

Pinboard seemed like the most likely candidate as it's easy to add and tag links, but the lack of responsiveness meant I wasn't using it beyond adding items. There are several Pinboard apps that offer a better viewing experience, but I didn't love any of them either. So I used the nervous "what the hell is going on??" energy of Spring 2020 to build the Pile in a week.

## Original version
The initial version was built before I [learned how to use Eleventy](https://piccalil.li/course/learn-eleventy-from-scratch/) and used a [Rube Goldberg-esque](https://en.wikipedia.org/wiki/Rube_Goldberg_machine) mash-up of static site generator [Sergey]({{ tools.sergey }}) with [Vue]({{ tools.vue }}) as a templating language and to grab the links from [Airtable]({{ tools.airtable }}). I did an [extensive write up](https://www.notion.so/superterrific/Pile-of-hrefs-Project-80f1667163bd41a2ac69fb3c1b4326e7) for the curious among you.

Part of the [original write up](https://www.notion.so/superterrific/Pile-of-hrefs-Project-80f1667163bd41a2ac69fb3c1b4326e7) details how to save links into Airtable. At first the workflow was fine but eventually I found that I wasn't keeping up with adding links because there was too much manual entry. I needed to figure out if there was an easier way. I thought about just using [Pinboard and its API](https://www.pinboard.in/api/v2/overview) directly but the reason I chose Airtable was that I like having an explicit field for source and two date fields (published and added).

I remembered that I had a [Pocket](https://getpocket.com) account and started using it to save links. This turned out to be ideal for saving but not for browsing links. One problem is that's it doesn't link directly to the original article, but provides a reading view within Pocket. It's fine as a reading experience, but I'd rather give my traffic to the authors directly and skip Pocket all together, especially considering that Pocket is [letting Google track its users around the web](https://themarkup.org/blacklight?url=getpocket.com).

## Enter Eleventy and Pocket
If you're trying to figure out how to do something with Eleventy there's a good chance  someone in the Eleventy community has written about it! In fact I remembered that I had a Pocket account after seeing Michael Scharnagl's [Integrate Pocket in Eleventy](https://justmarkup.com/articles/2021-01-19-integrate-pocket-in-eleventy/) post earlier in the year.

I started by using Scharnagl's approach in hopes that I could just do one step of saving and tagging in Pocket, create a daily build and forget the rest. Unfortunately there are a few things not available in the Pocket API that I find useful, so the next step was moving things from Pocket to Airtable, and then to Eleventy. I've already used [Airtable and Eleventy together](https://danabyerly.com/articles/using-airtable-with-eleventy/) so I needed to figure out the Pocket to Airtable part.

## Zapped
[Zapier]({{ tools.zapier }}) is my workflow tool of choice for Rube Goldberg Machine implementations, and it was pretty straightforward to get links from Pocket to Airtable.

I set it up to trigger on tagging an item with "pile". This will bring most of the information I was already collecting into Airtable, but I'll still need to add a few things. I'll have to kick the tires to see if it's an enough of an improvement to sustain regular usage but the first impression is mildly optimistic.

I'm currently using a [Netlify build hook](https://docs.netlify.com/configure-builds/build-hooks/) to trigger builds via command line. This will pick up any updates in Airtable, but I plan on setting up a scheduled build using Zapier once I work out a good flow.

## Fingers crossed!
I've been using the new set up for almost two weeks and so far it's much easier to add links. And one benefit is that I can save links in Pocket when I see them and then come back to tag them and add info in Airtable later. In the last version I frequently didn't save thing because it wasn't the right time to do multiple steps, so the flexibility in the current set up feels like a nice improvement.

If you're curious about using Airtable with Eleventy I wrote up [a detailed post](https://danabyerly.com/articles/using-airtable-with-eleventy/). It's pretty straightforward to [set up the API call](https://danabyerly.com/articles/using-airtable-with-eleventy/#api-call-and-listing-records) and I used the method to [set up the tag pages](https://danabyerly.com/articles/using-airtable-with-eleventy/#listing-by-tag).

Another benefit is that moving Eleventy makes the site super zippy. I also added pagination, which makes navigating the full set more manageable. And, I really like working with Eleventy (in case that wasn't already apparent!).

You can also learn more about [The Pile](https://pile-of-hrefs.com) at its [project page](/projects/pile-of-hrefs/).
