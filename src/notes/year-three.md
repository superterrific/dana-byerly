---
title: "Year three in the books"
summary: "Three years already?"
date: 2023-09-06T13:20:00Z
category: "Notes"
tags: ["The Site", "Year in Review"]
---

It's been [three years](/articles/finally-a-new-site/) since I created this site. One of the main purposes of the site is "[project fiddling and accountability](https://mastodon.social/@superterrific/110293702119159038)". Like [last year's post](/notes/year-two-in-the-books/), the moment of truth is upon us... 

How did I stack up to last year's [What's Next](/notes/year-two-in-the-books/#whats-next)?
* Tinkering? Check.
* Revamp the [Projects](/projects/) section? Check.
* Rework the [homepage](/)? Check.
* Integrate the [Junk Drawer](https://danabyerly-junkdrawer.website/)? Kind of?
* Studio site? Change of plans.

## Tinkering
If you like reading about tinkering, you may enjoy my [changelog](/changelog/). Here are some tinkering highlights from the past year...
* Lots of footer fiddling! Including removing some links (Twitter, and the like) and adding some links (Mastodon and the like). Also added `<nav aria-label="Secondary">` to the footer links.
* Moved the [Contact](/contact/) link from the footer to the primary navigation.
* Removed meta tags for Twitter specific social cards.
* Reworked front matter for the [Changelog](https://danabyerly.com/changelog/) from using only the ISO date to “Changelog: yyyy-mm-dd” in the page title and open graph title. The permalink still uses /changelog/yyyy-mm-dd.
* Added robots.txt in hopes of  [blocking ChatGPT](https://ruby.social/@olivierlacan/110846882340835196).
* Removed a few organizational tags like "all" and "writing" from listing on the [All Tags](/all-tags/) page.
* Lots of little streamlining, like removing "Published on" in front of post dates and on listing screens.
* Added print styles to remove the navigation, footer, tag list, previous/next links, Kofi link and "back to top" link on posts (a late addition, forgot to include this before publishing!)

## Revamping the Project section
This was the biggest effort of the year, and it happened in two parts. 

Initially I removed the "Additional Projects" on the Projects landing page and "archived" a few older projects by excluding them from the Projects collection. The pages still exist and the URLs remain the same, but they no longer display on the landing page and are not included in the section's pagination. This was accomplished by adding `eleventyExcludeFromCollections: true` to the front matter for the project. 

The second part happened [just under the wire](/changelog/2023-08-29/), and only because I remembered to look at [last year's post](/notes/year-two-in-the-books/#whats-next)! After doing the first part I was procrastinating reworking the landing page because I thought it would be a lot of work to redo all the images and make a grid of cards.

I was recently looking at Stephanie Eckles excellent resource [SmolCSS](https://smolcss.dev/) for something else and noticed the [Smol Composable Card component](https://smolcss.dev/#smol-card-component). It was great timing, and in combination with the [Smol Responsive Grid](https://smolcss.dev/#smol-css-grid) as starting point I had a new [Projects](/projects/) landing page in a couple of days.

I never really liked the original page and kept putting off making this change. I'm happy with the outcome and glad to knock it off the list.
## Reworking the homepage
This was pretty minimal. I removed the "Featured Projects" section and replaced it with "From the Studio" section. I also updated the cards used for the studio projects.

## Integrate the Junk Drawer
Does adding it to the [Projects section](/projects/the-junk-drawer/) count? I originally thought I'd come up with a clever way to include some Junk Drawer content here, but the ah-ha moment hasn't hit me yet. Or maybe it won't, which is fine.

## Studio site
At this time last year I was working on a client project for an attorney and thought that I would actively pursue more freelance work on completion of the project. File under "things don't always work out the way you envisioned".

The project was paused as the attorney was considering joining an established firm. This happened to coincide with an uptick in activity at the day job that left me too fried at the end of the day to do any work. 

The attorney eventually joined an existing firm and my workload continued to be mentally taxing. Making a real go at freelancing wasn't meant to be at the moment. We'll see if that changes in the future.  I would love to work on small projects and create well built, well thought out accessible sites that perform well. The web needs much more of that, and honestly when people hire someone to make them a site, that's what they should get. 
## Writing
I did a fair amount of writing in the past year, but differently than in previous years. Usually I write one or two bigger posts that I categorize as [Articles](/articles/). These are usually a deep dive "how-to" posts on something I've recently learned. For example last year I wrote a two part series on [using WordPress](/articles/wordpress-and-eleventy-part-one-wordpress/) as a headless content management system [for Eleventy](/articles/wordpress-and-eleventy-part-two-eleventy/).

Over the past year I wrote no articles, but I wrote a series, which was a first. [Hot HTML Summer](/tag/hot-html-summer/) was a 22 post series where I wrote a post for each lesson of the fabulous [web.dev Learn HTML](https://web.dev/learn/html/) course by Estelle Weyl.  I highly recommend taking the course, even if you've been writing HTML for a long time. You're guaranteed to learn at least a thing of two that you didn't already know, I sure did.

I also contributed my first article article elsewhere. For the [2022 HTMHell Advent calendar](https://www.htmhell.dev/adventcalendar/) I contributed [Reading the Meter](https://www.htmhell.dev/adventcalendar/2022/5/). I didn't submit an idea for this year's calendar, but recommend it as a welcoming place to contribute! I also wrote a bit about the process and article [here at this site](/notes/htmhell-reading-the-meter/).

## What's next
As always, the tinkering will continue! I got a last minute [round of tinkering in](/changelog/2023-09-06/) that knocked the remaining things off of my Tinkering To Do list. I'm sure I'll come up with additional things, all I have to do is check my RSS reader or timeline to find something interesting to try out. Or something that I could be doing better.

Speaking of which, when I was working on the [Projects section landing page](/projects/) I found myself wanting to rearchitect the current CSS. There have been plenty of CSS changes in the last three years, and my skill has improved along the way. I think this year's big ticket item will be a CSS overhaul. I started a note titled "Uh oh" as I was working on the Projects page to track all the little observations and ideas, it will be nice to give it a good clean up.

Another thing I'd like to do is give the homepage a slight refresh. I don't have any ideas at the moment, we'll see if I come up with anything. As an aside, that's what we call [hedging](https://dictionary.cambridge.org/dictionary/english/hedging).

Here's to another year!