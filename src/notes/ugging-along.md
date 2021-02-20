---
title: 'Ugging along'
summary: 'A brief catch up on slow progress and other items of note.'
date: 2021-02-19
category: 'Notes'
tags: ['Side Projects']
---

I was going to title this 'Chugging long' but inadvertently saved the markdown file as ugging-along, so ugging along it is. Who am I to disagree with the unconscious?

## Horse Racing Datasets
I've been making slow progress on Horse Racing Datasets. A few months ago I knocked out a [proof of concept](https://danabyerly.com/notes/update-on-the-end-of-the-year-to-do-list/) to move an existing project backed by [Airtable]({{ tools.airtable }}) to [Eleventy]({{ tools.11ty }}). I also wrote up [using Airtable with Eleventy](/articles/using-airtable-with-eleventy/) if you're interested.

I was originally thinking I would finish up by the end of February, but thanks to some minor burnout and a bit of [life happens](https://indieweb.org/life_happens) I ended up taking a break. Since then I've been slowly poking at it and making some good progress.

In the [Airtable article](/articles/using-airtable-with-eleventy/) I mentioned having to do a couple of extra calls to Airtable because I couldn't figure out how to filter on the initial data call. The good news is that I figured out how to do a variety filtering and am now using a single API call 🎉. This was a welcome JavaScript breakthrough for me as I ugh along trying to improve my JS skills. I'll also be adding "update the Airtable article" to the to do list!

### So far I've ugged my way through the following
* Improved filtering as mentioned above
* Added individual pages [using this approach](https://www.11ty.dev/docs/pages-from-data/). Made good use of [Nunjucks variables](https://mozilla.github.io/nunjucks/templating.html#set) to get reuse from a template, I might make a little post about that.
* Have everything sewn together and a good approximation of the layout.
* Have a nice progressively enhanced toggle menu. It's not nearly as [robust and bulletproof as Andy Bell's](https://piccalil.li/premium/build-a-fully-responsive-progressively-enhanced-burger-menu/) but I'm happy with it. I need to snap up my JS skills to really understand the more complex parts of the tutorial.

### Next up
* Nail down colors
* Focus more on the design aspect, of course the layout is part of that but I need to move on to the visual particulars of the menu and homepage. I have [some ideas](https://twitter.com/superterrific/status/1353047440664915969/photo/1)!


## Dogs of Dev
My sweet little doggy is now a [Dog of Dev](https://dogsof.dev/dogs/frieda/). I ran a [Twitter poll](https://twitter.com/superterrific/status/1361087100515409921) to help decide which cute picture to use. I was going to go with the [couch shot](https://twitter.com/superterrific/status/1361087069209186306) but understand the appeal of the [park portrait](https://twitter.com/superterrific/status/1361087073688711169).

Be sure to check out all the [Dogs of Dev](https://dogsof.dev/), a fun project by [Mike Aparicio]. It looks like [someone is going to make a Cats of Dev](https://twitter.com/peruvianidol/status/1361348257964830723/retweets/with_comments), I have a [a couple](https://twitter.com/superterrific/status/1336474131437662209/photo/1) of [those too](https://twitter.com/superterrific/status/1360692852586643460/photo/1).

## A11y Websites
I haven't posted since the beginning of the year, but I kicked off 2021 on a nice note with a [review from A11y Websites](https://twitter.com/superterrific/status/1345403075935277057). Individual reviews don't have direct links, but it's a nice project by [Callum Ryan](https://twitter.com/calum_ryan) in which he gives submitted sites a proper accessibility review. Be sure to check out [this useful resource](https://www.a11ywebsites.com/).

## Notion and Obsidian
If you use [Notion]({{ tools.notion }}) you were probably aware of their [DNS snafu](https://twitter.com/NotionHQ/status/1362088718304038914). It was a good reminder that the best files in the cloud are the ones you can always access locally. I'm not a super heavy Notion user, but I use it enough to be concerned about losing what's there.

Thanks to [this thread](https://twitter.com/piccalilli_/status/1361043178430861315) I found [Obsidian]({{ tools.obsidian }}) and was able to set up a local version of Notion using this [handy script](https://github.com/connertennery/Notion-to-Obsidian-Converter). But what about moving forward?

I've been using [iA Writer](https://ia.net/writer) to draft posts but don't love it. It's a nice clean, distraction-free app but I usually only rough out a structure and quickly move to my editor ([Atom](https://atom.io/)) to complete them there, mostly because iA Writer doesn't auto pair brackets and quotes. This is big flow killer for me, especially since I do so much linking.

Once I got the Notion backup taken care of, I started tinkering with Obsidian to see if it was a better fit for me than iA Writer moving forward. It didn't take long to realize the answer was a big, emphatic "Yes!".

Instead of prattling on about my new crush I'll just note a few things I like so far and maybe to do a post on it later...

* It's easy to create "vaults" or instances. In fact separate instances is a big selling point for me vs. Notion's all-in-one (which isn't horrible, with good organization, but so far I like the separation).
* Auto pairing of brackets and quotes 🎉
* It's easy to customize using CSS snippets or full on [themes](https://publish.obsidian.md/help/Customization/Appearance). There are several community themes or you can create your own.
* An active [user community](https://forum.obsidian.md/) (also at [Discord](https://discord.com/invite/veuWUTm), which I haven't checked out yet).

I've written this entire post in Obsidian and only did minor clean-up once I got it in Atom, and that's a welcome change. I also made vault of some design inspiration for my Horse Racing Datasets homepage concept along the lines of using [Are.na](https://www.are.na/).

I'm sure I can come up with some other ideas too. Until then, I'll continue to ugh along.
