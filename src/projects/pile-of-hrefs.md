---
title: 'Pile of hrefs'
projectUrl: 'https://pile-of-hrefs.com'
summary: 'A hastily thrown together project, prompted by a moment of thinking "Maybe I would use Pinboard more if it was responsive?"'
category: 'Projects'
launched: 'April 2020'
displayOrder: 3
projectImg:
 img: 'pile'
 alt: 'Pile of hrefs CSS section'
stack: ['Airtable', 'Eleventy', 'Pocket']
role: ['code', 'curation', 'design']
tags: ['Airtable', 'Eleventy']
---

My approach to saving links about dev and design is all over the place. I have some saved in my RSS reader of choice ([Feedly]({{ tools.feedly }})), I have a collection of links in [Notion]({{ tools.notion }}) and another older collection in [Pinboard](http://pinboard.in/). I also have a couple of collections in [Standard Notes]({{ tools.standardNotes }}).

One morning as I scanned my various Monday morning newsletters looking for articles I wanted to read later, I had my usual thought of "I wonder if I would use Pinboard more if it was responsive?". Followed quickly by "I'll just start throwing links in [Airtable]({{ tools.airtable }}) and then figure out what to do with them". Followed quickly by mocking up a little prototype using [Vue]({{ tools.vue }}).

It took me approximately a week to build the original version of the site, and initially it was easy to maintain. Eventually I found that I wasn't keeping up with adding articles because the process was a bit too manual. I knew I wanted to address that but needed time to figure out how to handle it.

Just over a year later (July 2021) I migrated the site from Vue to [Eleventy]({{ tools.11ty }}) leaving the original design mostly intact. I'm still using [Airtable]({{ tools.airtable }}) but have starting using [Pocket](https://getpocket.com/) as a way to streamline saving urls. I don't love reading in Pocket but it's very easy to add articles with a single click and there's an API.

I'll write up how I set it up and what I learned in the very near future.
