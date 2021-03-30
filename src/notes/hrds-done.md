---
title: 'Horse Racing Datasets redesigned'
summary: 'A redesign and port to Eleventy is finally in the books.'
date: 2021-03-29
category: 'Notes'
tags: ['Accessibility', 'Airtable', 'Eleventy', 'Side Projects']
---

Finally! It took a while to [circle back to the design](https://twitter.com/superterrific/status/1353047440664915969) after having so much fun [figuring out how to build it](/articles/using-airtable-with-eleventy/), but the fourth version of Horse Racing Datasets is [finally done](https://horseracingdatasets.com/)! Or at least out there in a good place with more improvements to come.

At the end of last year I had a working [proof of concept](/notes/update-on-the-end-of-the-year-to-do-list/) of how to use [Airtable]({{ tools.airtable }}) with [Eleventy]({{ tools.11ty }}) and wrote [an article](/articles/using-airtable-with-eleventy/) detailing all the particulars. At the time I couldn't figure out how to filter on the on the dataset so I did two extra API calls for [recently added listing](https://horseracingdatasets.com/recently-added/) and to display a [random dataset on the homepage](https://horseracingdatasets.com/). As I mentioned in my [last update](/notes/ugging-along/) I have since figured out how to do it all from a single API call, so updating the article goes on the to do list.

I also need to update the [project page]({{ projectPages.hrds }}), until then here's a bit about some of the improvements and updates...

## Filtering
Being able to do everything from a single API call is not only a big improvement from my initial proof of concept for this version, but an incredibly big improvement from the prior version, which used an API call for **each category**. This marks a huge step forward in my problem solving abilities, so rather than be mortified by the last version (OK, I'm still a little mortified!), I'm going to be proud of the improvements I've made over the last two years.

A lot of this will go in the update of the [Airtable and Eleventy article](/articles/using-airtable-with-eleventy/), but here are some particulars on the filtering.

I used the [randItem filter from 11ty Rocks](https://11ty.rocks/eleventyjs/data-arrays/#randomitem-filter) to display a "Random Dataset of the Day". Since Eleventy only pulls from the API on build, I used [Zapier]({{ tools.zapier }}) to schedule a [daily build at Netlify](https://zapier.com/apps/netlify/integrations/schedule/29330/start-deploys-of-netlify-sites-on-a-daily-schedule). This displays a new random dataset and picks up any datasets I've added to Airtable since the last build, making maintenance a snap.

The [All Datasets](https://horseracingdatasets.com/all/) page displays alphabetically and the sort order is set at Airtable. But on the [category pages](/articles/using-airtable-with-eleventy/#listing-by-tag) the default listing is to display by most recently added. With some search engine luck [I found this approach](https://stackoverflow.com/questions/65471629/dot-notation-in-nunjucks-sorting-isnt-working/65481434#65481434) and was able to create a filter to sort by title to keep the same approach used on the All Datasets listing.

The filter gets added in <code>eleventy.js</code>...

```js
config.addFilter("sortByTitle", arr => {
  arr.sort((a, b) => (a.title) > (b.title) ? 1 : -1);
  return arr;
 });
```

And then used in the for loop in the template...

```js
{% raw %}{% for datakey in all | sortByTitle %}
  ...
{% endfor %}{% endraw %}
```


The set-up is similar for the [Recently Added](https://horseracingdatasets.com/recently-added/) page. The filter gets added in <code>eleventy.js</code>...

``` js
config.addFilter("sortByNewest", arr => {
  arr.sort((b, a) => (a.date) > (b.date) ? 1 : -1);
  return arr;
});
```

And then used in the template...
```js
{% raw %}{% for datakey in all | sortByNewest | limit(5) %}
  ...
{% endfor %}{% endraw %}
```
I'm also using the [limit filter from 11ty Rocks](https://11ty.rocks/eleventyjs/data-arrays/#limit-filter) to set the amount of most recent datasets to return.

## Accessibility improvements
In the previous version the header was sticky and navigation sidebar was fixed with scrolling on larger screens. Generally I like this sort of layout for documentation or for browsing listings, but there are issues with [screen reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) when zooming out the screen size. The previous version became less usable around 240% zoom.

{% figure %}
  <picture>
    <source srcset="/img/hrds-v3-300zoom.avif" type="image/avif">
    <source srcset="/img/hrds-v3-300zoom.webp" type="image/webp">
    <img src="/img/hrds-v3-300zoom.png" alt="Prior version of Horse Racing Datasets zoomed to 300%" loading="lazy" />
  </picture>
  {% figcaption %}
    The previous version zoomed to 300% the layout starts to make the content hard to read.
  {% endfigcaption %}
{% endfigure %}

In the current version everything flows nicely and it's easy to read all the way up to 500%.

{% figure %}
  <picture>
    <source srcset="/img/hrds-v4-300zoom.avif" type="image/avif">
    <source srcset="/img/hrds-v4-300zoom.webp" type="image/webp">
    <img src="/img/hrds-v4-300zoom.png" alt="The current version of Horse Racing Datasets zoomed to 300%" loading="lazy" />
  </picture>
  {% figcaption %}
    The current version zoomed to 300% and everything is easy to read.
  {% endfigcaption %}
{% endfigure %}

Other improvements include visible focus states and color contrast that meets [WCAG AA standards](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) in both the light and dark mode.

{% figure %}
  <picture>
    <source srcset="/img/light-dark.avif" type="image/avif">
    <source srcset="/img/light-dark.webp" type="image/webp">
    <img src="/img/light-dark.png" alt="Horse Racing Datasets homepage in light and dark modes" loading="lazy" />
  </picture>
  {% figcaption %}
    Light and dark mode.
  {% endfigcaption %}
{% endfigure %}

The current set up uses the visitor's system-level settings, but I want to add to add the ability toggle sooner rather than later. I tried to implement the [Piccalilli user controlled dark or light mode](https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode) with no luck. I already had the current implementation working by time I tried it, and I'm also using a LOT of custom properties for the themes, but I think my lack of JavaScript skill was the real culprit. Rather than hold up the latest version I decided I'll put this one on the to do list and come back to it.

## Progressive enhancements
The menu toggle is simple yet progressively enhanced to work when JavaScript is disabled or fails to load. It uses the "no-js" fallback approach, which can [easily cause accessibility issues](https://twitter.com/piccalilli_/status/1349730273135476741). I tested in VoiceOver as well as keyboard-only with JavaScript enabled and disabled and it worked well. My testing was very limited, but hopefully it will work well for everyone.

For a more robust and bulletproof approach Andy Bell has a [great premium tutorial at Piccalilli](https://piccalil.li/premium/build-a-fully-responsive-progressively-enhanced-burger-menu/). The membership [price recently dropped](https://twitter.com/piccalilli_/status/1372948942019760132) making it easier to avail yourself of top-notch educational content! I want to improve my JavaScript skills to really understand more about resizeObserver and other more advanced topics before I try my hand at that one. But for now I feel like the site offers a good experience.

Filed under "know thy audience", when doing any horse racing related project I make sure to do a quick pass in IE11 on my work machine (don't ask!). The core horse racing audience generally skews older and is less likely to keep their devices up to date. Since I use custom properties the site pretty much renders as black and white in IE11. I have shadows on the dataset container and tags, and originally had them directly in their respective class selectors. They looked a bit odd in the "no color" version so I moved them to custom properties to keep them from rendering in IE11. This site basically looks like a [generic food label](https://duckduckgo.com/?t=ffsb&q=generic+food+label&atb=v225-1&iax=images&ia=images) in IE, and I have to admit that I kind of like it.

{% figure %}
  <picture>
    <source srcset="/img/hrds-ie11.avif" type="image/avif">
    <source srcset="/img/hrds-ie11.webp" type="image/webp">
    <img src="/img/hrds-ie11.png" alt="Horse Racing Datasets homepage in IE11" loading="lazy" />
  </picture>
  {% figcaption %}
    The homepage in IE11, reminiscent of <a href="https://duckduckgo.com/?t=ffsb&q=generic+food+label&atb=v225-1&iax=images&ia=images">generic food labels</a>.
  {% endfigcaption %}
{% endfigure %}

I also took a quick look with Edge on my work machine and was surprised to discover that it was an older version (44). I discovered this because the spacing was off in several areas and I realized that [clamp() was not supported](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()#browser_compatibility) in that version. I should've thought of this level of progressive enhancement before, but it lead me to figure out that defaults can be set in combination with <code>clamp()</code>, which allows unsupported browsers to pick-up the non-clamp property.

``` css
.dataset-container {
  background: var(--dataset-bg);
  padding: 1rem;
  padding: clamp(1rem, 2vw, 1.25rem);
  border: 1px solid var(--dataset-border);
  box-shadow: var(--shadow-lg);
}
```

In the above example browsers that don't support <code>clamp()</code> use padding: 1rem while the others use <code>clamp()</code>.

## Performance improvements
Performance improvements are no surprise when going from a site that did an API call on every page to a static site. But it did surprise me that the previous version's performance scores weren't worse, not that they're good, but I imagined much worse.

{% figure %}
  <picture>
    <source srcset="/img/hrds-lighthouse.avif" type="image/avif">
    <source srcset="/img/hrds-lighthouse.webp" type="image/webp">
    <img src="/img/hrds-lighthouse.png" alt="Before and after Lighthouse scores. Before: Performance 89, Accessibility 100, Best Practices 93, SEO 88. After 100 for each category." loading="lazy" />
  </picture>
  {% figcaption %}
    From just OK to perfect scores. Friendly reminder, <a href="https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/">perfect Lighthouse scores don't mean perfect sites!</a>
  {% endfigcaption %}
{% endfigure %}

The performance metrics show the details of the improvements...


| Performance Metric | Previous Version | Current Version |
| :------------- | :---------- | :----------- |
| First Contentful Paint | 1.5s   | 0.8s    |
| Speed Index| 1.7s | 0.8s |
| Largest Contentful Paint | 3.2s | 1.7s |
| Time to Interactive | 3.5s | 0.8s |
| Total Blocking Time | 160ms | 0 |
| Cumulative Layout Shift | 0.113 | 0.01 |

Another area of performance improvement was moving from Tailwind CSS to handwritten CSS. Tailwind isn't necessarily a performance issue, but I used it as is with no optimization, mostly because I didn't (and arguably still don't!) know how to use build tools.

Here's a comparison using [CSS Stats](https://cssstats.com/)

| CSS Stat | Previous Version | Current Version |
| :------------- | :---------- | :----------- |
| File size | 566kb   | 8kb    |
| Gzipped file size | 77kb | 2kb |
| Rules | 9,901 | 78 |
| Selectors | 9,969 | 101 |
| Declarations | 10,988 | 244 |
| Properties | 117 | 100 |
| ID | 2 | 0 |
| Class | 9,834 | 59 |
| Pseudo class | 3,837 | 19 |
| Pseudo element | 12 | 5 |

No surprises that there were drastic reductions, you can also view the [full stats for the All Datasets listing page](https://cssstats.com/stats?url=https%3A%2F%2Fhorseracingdatasets.com%2Fall%2F) at CSS Stats.

## Housekeeping
As mentioned in the [Filtering section](#filtering), I set up daily build at [Netlify using Zapier](https://zapier.com/apps/netlify/integrations/schedule/29330/start-deploys-of-netlify-sites-on-a-daily-schedule). API calls are only made at build time, so this ensures that there will be a new Random Dataset of Day [on the homepage](https://horseracingdatasets.com) and that any datasets I've added to Airtable will picked up daily.

I changed a couple of urls from the previous version so I set up redirects for those changes. Netlify offers a couple of different approaches to [handle redirects](https://docs.netlify.com/routing/redirects/). I went with the redirects file. To make sure it ends up in the directory that's deployed I added this to my <code>eleventy.js</code> file...

```js
config.addPassthroughCopy('./src/_redirects');
```

Finally, I wasn't originally going to have individual pages for each dataset, but I realized this would make it easier to share and reference them. I used this [handy approach](https://www.11ty.dev/docs/pages-from-data/) from the Eleventy Docs.

## What's next
Knocking this one off the list was a big accomplishment, but there's always something else to do. Here's what I'll be focusing on next.

* Update the [project page](https://danabyerly.com/projects/horse-racing-datasets/).
* The 2021 version of [Derby Magic 8 Ball](https://danabyerly.com/projects/kentucky-derby-magic-8-ball/), and maybe a revival of the [Random Derby Top 10 List](http://www.exactamundo.org/2018/04/16/2018-kentucky-derby-random-top-10-generator/).
* Update [Using Airtable with Eleventy](/articles/using-airtable-with-eleventy/) to include improved approaches.
* Work on the visitor-controlled light and dark toggle.
* Research adding search to the site.
* A secret project with [Jessica Chapel](http://twitter.com/railbird)!
