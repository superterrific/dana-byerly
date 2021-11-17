---
title: 'Time is on your side'
summary: 'The HTML time element is both useful and easy to use.'
date: 2021-11-16T23:00:00Z
category: 'Article'
tags: ['Eleventy', 'HTML', 'IndieWeb']
---

A couple of weeks ago creative technologist extraordinaire Henry Desroches posed the following question on Twitter...

> what's ur favorite rare HTML tag (repeats get executed, let the games begin) &mdash; [@xdesro](https://twitter.com/xdesro/status/1450943081553956864)

[I answered](https://twitter.com/superterrific/status/1450953233258754050) ```<time>``` (although I also like ```<hr>``` and ```<mark>``` quite a bit).

What is ```<time>``` and why should you use it? Henry sums it up nicely...

> perfect for communicating in both human-readable language and machine-readable language. bilingual cyborg stuff {% nowrap %}&mdash; [@xdesro](https://twitter.com/xdesro/status/1450954260321951746){% endnowrap %}

MDN summarizes...
> The **`<time>`** HTML element represents a specific period in time. It may include the 'datetime' attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders. {% nowrap %}&mdash; [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time){% endnowrap %}

Cool. But how do you use it?

## Using &lt;time&gt; with Eleventy
I use ```<time>``` on this site for publish dates. If you inspect any of the "Published on" dates, you'll see something like this:

```html
<time datetime="2021-09-07T00:00:00.000Z">September 07, 2021</time>
```

There are a [variety of formats that can be used](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values) for ```datetime```. I'm using ISO date (2021-09-07) and global time (T00:00:00.000Z), which in this example is midnight UTC. More on that in a bit.

There are a number of ways to add a date to your posts. Per the [Eleventy Content Dates page](https://www.11ty.dev/docs/dates/) you can add a ```date``` key to your post's Front Matter.

```json
title: "My cool post on using the time element with Eleventy"
date: 2021-11-16
```

About the previously mentioned midnight ```datetime``` output, if you don't include time with your date Eleventy will assume midnight UTC. More about UTC in [the Time Zones section](#time-zones).

If you don't explicitly add the date, Eleventy will look for a date in the file path and use the first one it finds. If there's no date present in the path it will use the file creation date (which will include a time!).

### Set up
I use [Luxon](https://moment.github.io/luxon/#/?id=luxon) to handle date formatting. It's fairly straightforward and offers a [variety of formats](https://moment.github.io/luxon/#/formatting). To use Luxon you'll install it and then add some filters to your ```.eleventy.js``` file.

```bash
npm install luxon
```

I originally picked up the filter approach from the excellent [Learn Eleventy from Scratch course](https://learneleventyfromscratch.com/lesson/12.html#filters), but have since switched to Luxon given that [Moment is now maintenance mode](https://momentjs.com/docs/#/-project-status/). The general approach is still the same. Create two filters, one to display the date and one to use in the ```datetime``` attribute.

In your `.eleventy.js` file add the following

```js
const { DateTime } = require('luxon');
```

And then in the module.exports section of ```eleventy.js```...

```js
  eleventyConfig.addFilter('longDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLLL dd, yyyy');
  });

  eleventyConfig.addFilter('w3Date', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISO();
  });
  ```

The ```longDate``` filter formats the date to be displayed as "November 16, 2021" and the ```w3date``` filter formats the date to be displayed in the machine readable format.

Post listing pages use...

```html
Published on {% raw %}<time datetime="{{ item.data.page.date | w3Date }}">{{ item.data.page.date | longDate }}</time>{% endraw %}
```

Individual posts use...

```html
{% raw %}<time datetime="{{ page.date | w3Date }}" class="dt-published">{{ page.date | longDate }}</time>{% endraw %}
```

If you look at the top of this page you'll see the output.

Al Power has a [slightly different approach to formatting](https://www.alpower.com/tutorials/formatting-dates-in-eleventy/) using Luxon's presets if you're interested.

### Time Zones
As mentioned above, Eleventy assumes UTC for date and time unless you specify otherwise. If you look at the filters above you'll notice the zone is set to UTC. Luxon gives you some options on [how to specify zone](https://moment.github.io/luxon/#/zones?id=specifying-a-zone).

For example, you could specify your local time zone by changing zone to ```zone: 'local'``` or more explicitly ```zone: 'America/New York'``` in my case. However, this approach is not recommended as it can cause your dates to be a day off.

The Eleventy documentation explains...

> Many date formats in Eleventy (when set in your content‘s filename as `YYYY-MM-DD-myfile.md` or in your front matter as `date: YYYY-MM-DD`) assume midnight in UTC. When displaying your dates, make sure you’re using the UTC time and not your own local time zone, which may be the default. {% nowrap %}&mdash; [Eleventy](https://www.11ty.dev/docs/dates/#dates-off-by-one-day){% endnowrap %}


### Formats
There are plenty of ways to format your dates with Luxon. For displaying dates on the site I've gone with ```LLLL dd, yyyy``` as a token which outputs November 16, 2021. You can peruse the lengthy [table of tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) as well as [presets](https://github.com/moment/luxon/blob/master/docs/formatting.md#presets) to find your preferred format.

For ```datetime``` I've used ```.toISO()```, which will output ISO standard date and time. If you just wanted to use date without time you could use ```.toISODate```. [Week or time only](https://moment.github.io/luxon/#/formatting?id=iso-8601) are other options that aren't a great a choice for a post's publish date, but could be handy for other scenarios.

Can you use ```<time>``` without including ```datetime```? Absolutely. You can wrap any date or time and get the benefit as long as you're using [valid values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values).

```html
<p>I started working on the web in <time>1996</time>.</p>
<p>I can barely wait until <time>11:00</time> to eat lunch.</p>
```


## Why use &lt;time&gt;
The ```<time>``` tag makes a crucial bit of information about your post easily understandable to both humans and machines. You know, [bilingual cyborg stuff](https://twitter.com/xdesro/status/1450954260321951746).

### Search engines
Search engines are the most ubiquitous use case. You want people to be able to find your posts, and ```<time>``` can help ensure that.

From the Bing Webmaster tools help & how-to...

> **Use HTML5 semantic elements** as they have am intrinsic meaning to browser, developer and search engine, especially use the following HTML5 Semantic Elements:
&lt;article&gt;, ```<aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time>```. {% nowrap %}&mdash; [Bing Webmaster Tools](https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a){% endnowrap %}


### IndieWeb
[IndieWeb](https://indieweb.org/) participation is another benefit of using ```<time>```. The basic premise of IndieWeb is that you should own and control your content rather than solely relying on third party services.

For example, instead of posting only on a platform like Medium or Dev.to, you would post on your own site and syndicate out to third parties (or not!).

> When you post something on the web, it should belong to you, not a corporation. Too many companies have gone out of business and [lost all of their users’ data](https://indieweb.org/site-deaths "site-deaths"). By joining the IndieWeb, your content stays yours and in your control. {% nowrap %}&mdash; [IndieWeb.org](https://indieweb.org/){% endnowrap %}

Owning your own site is just one element of IndieWeb. There are plenty of [other aspects and ways to participate](https://spec.indieweb.org/). [Webmentions](https://indieweb.org/Webmention) are the most well known, but you can also sign-in to sites using your own domain with [IndyAuth](https://indieweb.org/How_to_set_up_web_sign-in_on_your_own_domain) and participate in the [Homebrew Website Club](https://indieweb.org/Homebrew_Website_Club), an active worldwide community with many chapters.

An easy way to get started is to use [microformats to markup your posts](https://microformats.org/wiki/h-entry), which makes them easier to syndicate to other sites.

> h-entry is a simple, open format for episodic or datestamped content on the web. h-entry is often used with content intended to be syndicated, e.g. blog posts. h-entry is one of several open [microformat](https://microformats.org/wiki/microformats "microformats") standards suitable for embedding data in HTML. {% nowrap %}&mdash; [Microformats.org](https://microformats.org/wiki/h-entry){% endnowrap %}

In fact I added both ```h-entry``` and ```h-card``` to my site as a result of researching for this post! Previously I had only been aware of Webmentions, so I'm happy to take some steps towards IndieWeb participation.

Back to ```<time>```, there are four properties that ```h-entry``` needs at a minimum to be valid.

* The overall content needs to be indicated
* The name of the post
* The canonical url
* The ```datetime``` the post was published


Properties are marked using class names.

>The 'dt-published' property should be a `<time>` element so that you can take advantage of HTML5's "datetime" property. {% nowrap %}&mdash; [Microformats.org](https://microformats.org/wiki/h-entry){% endnowrap %}

If you recall the code example earlier used in the post layout to display date, the ```dt-published``` property is included.

```html
<time datetime="{{ page.date | w3Date }}" class="dt-published">{{ page.date | longDate }}</time>
```

Here's an example of my previous post at [h-entry validator](https://indiewebify.me/validate-h-entry/?url=https%3A%2F%2Fdanabyerly.com%2Fnotes%2Fthe-accidental-project%2F) at [IndieWebify.me](https://indiewebify.me/). In-depth information and examples can be found at [the h-entry page](https://microformats.org/wiki/h-entry) at the Microformats wiki.

### Events
Time-based events are another way that ```<time>``` can be useful. Having machine-readable time elements makes things like adding an event to your calendar or viewing an event's schedule in your local time zone possible. You can see examples of both such features at [THE Eleventy Meetup site](https://11tymeetup.dev/events/)!

## Summary
The ```<time>``` tag is a great addition to your site even if you don't participate in IndieWeb. It [handily won round one](https://twitter.com/seldo/status/1459987462030127105) in Laurie Voss' impromptu HTML madness bracket game, although it [didn't fare as well in round two](https://twitter.com/seldo/status/1460394844887535626) and did not move on to [round three](https://twitter.com/seldo/status/1460708012482465792). You've still to time to go vote for your favorites!


## Useful resources
* [HTML Goodies - It's Time for an HTML5 Time Tag](https://www.htmlgoodies.com/html5/its-time-for-an-html5-time-tag/)
* [IndieWebify.me](https://indiewebify.me/) - A guide to getting you on the IndieWeb
* [Why IndieWeb](https://indieweb.org/why)
* [Timestamp converter](https://www.timestamp-converter.com/) - Useful for troubleshooting the "day behind" problem
* [Max Böck - Using Webmentions in Eleventy](https://mxb.dev/blog/using-webmentions-on-static-sites/)
* [Sia Karamelegos - An in-depth tutorial on Webmentions and Eleventy](https://sia.codes/posts/webmentions-eleventy-in-depth/)
* [Amber Wilson - Grow the IndieWeb with Webmentions](https://amberwilson.co.uk/blog/grow-the-indieweb-with-webmentions/)
* [Evan Sheehan - Webmentions: Joining the IndieWeb](https://darthmall.net/weblog/webmentions/)
* [Ben Myers - On the dl](https://benmyers.dev/blog/on-the-dl/) - A look another useful semantic HTML element
