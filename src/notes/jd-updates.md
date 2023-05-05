---
title: 'Junk Drawer Updates'
summary: 'New content and a homepage update.'
date: 2023-05-05
category: 'Notes'
tags: ['Airtable', 'Eleventy', 'IndieWeb', 'Side Projects']
---

After several weeks of futzing with the homepage layout, I finally integrated some new features over at the [Junk Drawer](https://danabyerly-junkdrawer.website/). Earlier in the year I mentioned [wanting to add a couple new things](/notes/regaining-momentum/#the-junk-drawer), both using Airtable as a content source. Since then I also decided to pull in my most recent [image from Pixelfed](https://pixelfed.social/i/web/profile/396067586349556009). 

The Junk Drawer is now pulling the [blog](https://danabyerly-junkdrawer.website/blog/) from WordPress, two different sources from Airtable ([TV Blurbs](https://danabyerly-junkdrawer.website/tv-blurbs/) and [Wake Up Songs](https://danabyerly-junkdrawer.website/wake-up-songs/)), and the latest photo from Pixelfed (on the [homepage only](https://danabyerly-junkdrawer.website/)). It also includes some markdown here and there. [Eleventy]({{ tools.11ty }}) not only makes this possible, it makes it very easy. If you're interested in using WordPress with Eleventy I wrote a two part series ([part one](/articles/wordpress-and-eleventy-part-one-wordpress/), [part two](/articles/wordpress-and-eleventy-part-two-eleventy/)).

## TV Blurbs and Wake Up Songs
I talked a bit about each of these sections [at this site](/notes/regaining-momentum/#the-junk-drawer), and at the [Junk Drawer](https://danabyerly-junkdrawer.website/blog/new-junk-in-the-drawer/). Content and concept wise they're both straightforward, and are pretty much what they sound like. Each has a listing on the homepage and each has its own listing page. 

The integration was also straightforward since I've used Airtable and Eleventy in the past. I'm using the [same call to Airtable](/articles/using-airtable-with-eleventy/#api-call-and-listing-records) that I included in my 2020 article on using [Airtable and Eleventy](/articles/using-airtable-with-eleventy/). I [created a form](https://support.airtable.com/docs/how-to-create-a-form-in-airtable) for each base to make adding new songs or blurbs easy. Deployments at Netlify are triggered by a new row using Zapier.

Right now both are just a list in chronological order on their respective listing pages. I'm currently thinking about ways to improve organization, particularly to the TV Blurbs. My current thinking is to add a way to view all blurbs for a single series or film and a permalink for each blurb.

## The latest from Pixelfed
When I started using Mastodon with regularity I thought about bringing my toots into the Junk Drawer using RSS. That lead me to a helpful article by Raymond Camden on [bringing RSS content into an Eleventy site](https://www.raymondcamden.com/2022/03/08/including-rss-content-in-your-eleventy-site). I ditched the idea, but kept the link, and it came in handy when when I decided to pull photos in from Pixelfed. 

While going the RSS route is easy from an integration standpoint, there are some limitations and annoyances. The ones I encountered were:

* Only the first 10 entries are available via RSS.
* The image and summary are a single element, meaning there's no way to display only the image (or rather, if there is a way, I didn't find it).
* But, you can display only the summary text without the image.
* There are inline styles and line breaks in the summary text.
* The images are fairly big file size wise and only available in JPG format.

Since I'm only pulling in one image I can live with the downsides for now. I was able to make some adjustments to the inline styles by holding my nose and typing `!important`, and I optimize the images before uploading to the Pixelfed to help with performance. 

I might look into using the [Pixelfed API](https://docs.pixelfed.org/technical-documentation/api/) in combination with [eleventy-fetch](https://www.11ty.dev/docs/plugins/fetch/) and [eleventy-img](https://www.11ty.dev/docs/plugins/image/), but  ultimately I'd really like to go full-on  [POSSE](https://indieweb.org/POSSE) and create a photo section or standalone site to syndicate elsewhere. I'm not going to get to that anytime soon, but for now having the latest image from Pixelfed in the Junk Drawer in a step in that direction.


## Homepage layout
Working out how to integrate the new elements into the homepage was the most challenging part. Originally I imaged it as three listing columns, but that was boring even by my boring standards. Once I got the hero area settled the rest of it fell into place. 

I still might work on the background image of the "writing" section, but think the graph paper is OK for now. I'm not a clever visual designer, but I would be happy if I could figure out how make it feel more like a junk drawer, whatever that means.

One quasi-junk drawer visual element is the quasi-Polaroid framing for the Pixelfed image. I wanted it to look like a Polaroid photo was thrown on a table, or in a junk drawer. Fortunately Set Studio's weekly mailing, [The Index](https://set.studio/the-index-issue-8/), included the homepage for [Shantell Sans](https://shantellsans.com/), a lovely new hand-written font, around the time I was trying to figure this out. Using a hand-written font for the the "Latest from Pixelfed..." heading in combination with the Polaroid frame brought the exact vibe I was trying to create.

## What's next
I don't have a timeline for adding some better organization to TV Blurbs or figuring out how to do a photo site or section. With the new additions I do have a nice low key groove of posing Blurbs, Wake Up Songs and the occasional Pixelfed image, which feels nice.

Around here I'm hoping to [finally do a little tidying](/notes/year-two-in-the-books/#whats-next) in the Projects section a tidying. I've already [removed some older projects](/changelog/2023-03-20/) that are no longer active, and next up I'd like to spruce up the landing page a bit. 

