---
title: 'Finally adding a dark theme'
summary: 'A minor health scare was the prompt I needed to add a dark theme.'
date: 2021-12-31
category: 'Notes'
tags: ['CSS', 'The Site']
---

Unfortunately my holiday break kicked off with a minor health scare. I was walking the dog when I started to notice some flashing in one of my eyes. There was a lot going on, and it was windy, so I didn't think too much of it. Once I got home and sat in front of the computer I was greeted by an onslaught of [eye floaters](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/floaters). There were so many that it was difficult to see. It was a bit terrifying.

I was relieved to find out that the ominously named [vitreous detachment](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/vitreous-detachment) that occurred is a relatively common and usually uneventful part of aging. The flashing has slowly been improving, but the floaters are here to stay. The good news is that I've already started noticing them less.

I was also diagnosed with early stage cataracts, which explains things like why I frequently ask "does it look smokey to you?". I suppose it's been easy to overlook that as a symptom with [wildfire smoke regularly making its way to these parts](https://gothamist.com/news/wildfire-smoke-returns-nyc-skies), but still an alarming indicator of what's to come (both the cataracts and wildfires).

## Enter dark mode
Dark mode and dark themes are not my personal preference, except for coding. In addition to having a bunch of dark spots and lines floating around between me and whatever I'm looking at, I've also become more sensitive to the glare of light themes.

I quickly started using dark mode and switching sites and apps to dark theme where available. And wow, I had no idea how many major sites don't offer it. I was in no position to cast aspersions given that this site didn't have one until yesterday.

I incorrectly thought of dark mode and dark themes as more of a personal preference rather than removing a barrier. I'm a bit ashamed of myself for that, and am going to write a post about what I've learned about dark mode and themes in the near-ish future.

Adding a dark theme has been on my to-do list since [I launched this site](/articles/finally-a-new-site/#whats-next). I wanted to implement it with a manual toggle, but even with [excellent tutorials like this](https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode/) I was still having trouble pulling it off. I want to come back and add one, but now I realize that it's better to offer one based on user preference than to not have one at all.

Since I'm already using [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) it was pretty easy to add another level for themes and use  `prefers-color-scheme:dark`. I also already had notes on what to make theme specific.

My original set-up defined a handful of colors like this...

```css
:root {
  --color-primary: #00365d;
  --color-secondary: #c07;
  --color-primary-highlight: #7cc7de;
  --color-secondary-highlight: #f2d1f5;
  --color-primary-tint: #f6f9fc;
  --color-secondary-tint: #f9e9fa;
}
```

The original approach applied those colors directly to selectors. For example, the color for `a` was set to this...

```css
color: var(--color-primary);
```

The update added custom properties for each item that would change based on theme. So `a` changed to this...

```css
color: var(--link-color);
```

The default theme is light, in `:root {}` the link color is set like this...

```css
--link-color: var(---color-primary);
```

Using `prefers-color-scheme` for dark it's set like this (along with all the other theme specific properties)...

```css
@media (prefers-color-scheme: dark) {
  :root {
	--link-color: var(--color-primary-highlight);
  }
}
```

It took less than five hours to get the whole thing done, and for the most part I like it. More importantly, the site is easier to use for with anyone with sight issues that make light theme hard to use, or for those of you who simply prefer it!

## Odds and ends
I already did a [year-in-review of sorts](/notes/year-one-in-the-books/) a few months ago on the one year anniversary of this site. One thing that's changed is that I've added [Plausible](https://plausible.io) for analytics, so far so good, and Plausible has a very nice dark theme!

One of the things I mentioned that I hope to do more of around here is broaden my writing topics. One post I planned to do was a "Crime drama series I watched this year". Most evenings after I step away from my computer I watch crime drama, non-American crime drama series to be specific. There's no shortage of excellent, or at least serviceable, crime drama shows.

I was going to list everything I watched, including the country. Do a bar chart of countries (more for my curiosity and to use a neat [Eleventy]({{ tools.11ty }}) trick using [permalinks for custom file formats](https://www.11ty.dev/docs/permalinks/#custom-file-formats) ). Plus make a few recommendations as well as mention shows I stopped watching or didn't like.

I might come back and do that post, but here are two recommendations that are admittedly due to [recency bias](https://www.learning-theories.com/recency-bias-tversky-kahneman.html) since I watched them in last couple of months. But, the biggest recommendations of everything I watched in 2021 are [Pustina (Wasteland)](https://www.imdb.com/title/tt5459168/) and [Bez Vedomi (The Sleepers)](https://www.imdb.com/title/tt8679520/).

Both are from the Czech Republic and directed by Ivan Zachariáš (Wasteland was co-directed with Alice Nellis). They're both substantive with a strong sense of place and even with very different settings each is uniquely stylish and well seen.

Wasteland is set in present day in a bereft town divided on being taken over by a foreign mining company. The Sleepers is set in 1989 against the backdrop of the [Velvet Revolution](https://en.wikipedia.org/wiki/Velvet_Revolution) and is really more of a spy games story than a crime drama. Twists and turns abound in both.

Without drawing this post out even further, both of these shows were the most satisfying shows I watched all year. Plot, timing, characters, acting and directing were all very well done.

Zachariáš has a new one in pre-production called [The end of the World](https://www.imdb.com/title/tt10998298/) that I'm looking forward to. I'm also looking forward to the new season of the Finnish show Kaarpi (Dead Wind) on Netflix and the final season of the Welsh show Craith (Hidden), presumably on Acorn.

Here's to a happy, healthy 2022 full of usable, accessible sites and satisfying crime drama series (or whatever you like)!
