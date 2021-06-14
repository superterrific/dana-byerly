---
title: 'Quick fix and a test'
summary: 'Two great resources and testing out something unrelated.'
date: 2021-04-01
category: 'Notes'
tags: ['Accessibility', 'Side Projects', 'The Site']
---

I subscribe to a lot of useful newsletters. One of my favorites is Laura Carlson's Web Design Update, [described as](https://www.d.umn.edu/itss/training/online/webdesign/webdev_listserv.html) "a plain text email digest dedicated to disseminating news and information about web design and development with emphasis on elements of user experience, accessibility, web standards and more".

It's quite possibly one of the most beautifully nerdy things I've seen in the recent past. No frills, nothing slick and nothing annoying. Just a weekly plain text email full of useful articles focused on accessibility and usability. To sign up you send an email with a blank body to an email address then you start getting them. It's spectacular. [Go get the email address and sign-up](https://www.d.umn.edu/itss/training/online/webdesign/webdev_listserv.html)!

## The quick fix

I was reading one of the articles included in this week's edition, [WCAG: Accessible colour and contrast ratios](https://bootcamp.uxdesign.cc/wcag-accessible-colour-and-contrast-ratios-5e94ea3f81f4), and realized that I forgot to check the tag background color against the surface background color when testing the [Horse Racing Datasets redesign](/notes/horse-racing-datasets-redesigned/). Sure enough in the light mode it was just shy of the 3:1 contrast ratio needed for AA compliance. Fortunately I was able to make some adjustments and get it fixed quickly.

I missed it because button to surface contrast, or in my case tag-styled-like-button to surface contrast isn't tested in the usual tools such [Wave](https://wave.webaim.org/), Lighthouse or [DevTools](https://www.smashingmagazine.com/2020/08/accessibility-chrome-devtools/). This is no excuse of course, but a good reminder to not to skip manual testing. In fact I did manually check all the text and styled-like-buttons elements against the colors in the background images, but forgot the tags!

As usual, the ever-prolific Eleventy educator extraordinaire [Stephanie Eckles](https://twitter.com/5t3ph/) has created something useful for checking background colors against surface. [ButtonBuddy](https://buttonbuddy.dev/) lets you plug in your button colors to check all the various contrast scenarios, it's very useful!

## The test
Also this week I did a [little housekeeping](/changelog/2021-04-01) after slogging through the [Horse Racing Datasets redesign recap](/notes/horse-racing-datasets-redesigned/) and [project page update](/projects/horse-racing-datasets/). One of housekeeping items was updating to the latest version of [Eleventy RSS plugin](https://www.11ty.dev/docs/plugins/rss/).

I recently noticed that my RSS posts were dated a day behind, and in trying to figure it out I discovered there was a newer version of the plugin. Being a relative newbie at all things Jamstack I was a little proud of myself for figuring out how to do it. In retrospect was very easy, although I still had to figure it out.

Here are the steps to update the Eleventy RSS plugin in case you find yourself not quite sure what to do. This assumes you're already using the plugin and that you're using Nunjucks. If you're using Liquid there's a [separate plugin](https://www.npmjs.com/package/eleventy-xml-plugin).

In the command line in your project folder run the following:

```bash
npm update @11ty/eleventy-plugin-rss
```

And then in your RSS template you'll be changing two date filters.

Near the top of your template change this:

```html
<updated>{% raw %}{{ collections.posts | rssLastUpdatedDate }}{% endraw %}</updated>
```

To this:

```html
<updated>{% raw %}{{ collections.posts | getNewestCollectionItemDate | dateToRfc3339 }}{% endraw %}</updated>
```

Be sure to change "collections.posts" to your collection.

Then in the entry section change this:

```html
<updated>{% raw %}{{ post.date | rssDate }}{% endraw %}</updated>
```

To this:

```html
<updated>{% raw %}{{ post.date | dateToRfc3339 }}{% endraw %}</updated>
```

Since you're already using the plugin you don't have to change anything in ```eleventy.js```.

This has been a very long winded way to say "I updated my RSS plugin and am going to publish something to see if it works". It works locally! But the date is still a day off, so back to the drawing board on that front.

All of that aside, you should still check out the [Web Design Update email digest](https://www.d.umn.edu/itss/training/online/webdesign/webdev_listserv.html) and [ButtonBuddy](https://buttonbuddy.dev/)!
