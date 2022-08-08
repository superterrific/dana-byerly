---
title: 'WordPress & Eleventy part two: Eleventy'
summary: 'Some considerations for using WordPress as a headless content management system for Eleventy.'
date: 2022-08-08
category: 'Article'
tags: ['CMS', 'Eleventy', 'Side Projects', 'WordPress']
---

[Part one: Wordpress](/articles/wordpress-and-eleventy-part-one-wordpress/)

As mentioned in [part one](/articles/wordpress-and-eleventy-part-one-wordpress/), I recently created [blog for myself](https://danabyerly-junkdrawer.website/) using [WordPress](https://wordpress.com) as a content management system (CMS) for [Eleventy]({{ tools.11ty }}). This two part series covers the things I learned and encountered along the way. It’s not a step-by-step how-to guide, but rather a collection of considerations and tips. I’ve included links to how-to articles where available within the context of each post and in the Useful resources section.

This article assumes you already know how to use Eleventy, how to install packages and are familiar with how to use [dotenv](https://github.com/motdotla/dotenv).

## Table of contents
* [Intro](#intro)
* [Caveat about my dev skills](#caveat-about-my-dev-skills)
* [Fetching the data](#fetching-the-data)
* [Dates](#dates)
* [Change fully qualified URLs](#change-fully-qualified-urls)
  * [.env with a useful assist](#env-with-a-useful-assist)
* [Images](#images)
  * [Hosting images at your Eleventy site](#hosting-images-at-your-eleventy-site)
* [Tags](#tags)
  * [Tags included in a post](#tags-included-in-a-post)
  * [Listing page for tagged posts](#listing-page-for-tagged-posts)
* [RSS](#rss)
* [Hosting](#hosting)
  * [Netlify build hook](#netlify-build-hook)
* [Useful resources and wrap-up](#useful-resources-and-wrap-up)


## Intro
I highly recommend that you read [How to use 11ty with Headless WordPress and deploy to Netlify](https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/) by Dave Davies first. It will walk you through the step-by-step to of how to fetch data from your WordPress site, display a list of posts and create a page for each post in Eleventy.

I used the [example repository](https://github.com/thedavedavies/Headless-WordPress-11ty) from the  article as a proof of concept. Once I had it in good shape I integrated it into my personal Eleventy starter to use my go-to filters, base styles, etc. The post covers the things I encountered.

## Caveat about my dev skills
I’m not very good at JavaScript. One of the great things about Eleventy is that I don't have to be to get a lot of it! It's worth noting that there are likely to be other ways to handle the scenarios I encountered, especially if you have JavaScript skills. I'll point out the obvious ones along the way.

## Fetching the data
Using the [example repository](https://github.com/thedavedavies/Headless-WordPress-11ty) mentioned above, I used [Node Fetch](https://www.npmjs.com/package/node-fetch). I'm not covering the step-by-step here, but highlighting a few options.

You can use your favorite method to fetch the data. Eleventy has an [Eleventy Fetch](https://www.11ty.dev/docs/plugins/fetch/) plugin, which also includes caching. There's also a [GraphQL plugin for WordPress](https://www.wpgraphql.com/).

I covered some considerations for the accessing the WordPress endpoints in the [Select your endpoints](/articles/wordpress-and-eleventy-part-one-wordpress/#select-your-endpoints) section of part one. If you have more than 100 records in an endpoint, there's an example of using Promise.all with pagination to bring them all back in Craig Buckler's [How to use WordPress as a Headless CMS for Eleventy](https://www.sitepoint.com/wordpress-headless-cms-eleventy/) that could be helpful.

As a reference for upcoming code examples here are the names of my data files that call the Posts and Tags endpoints.
* Posts endpoint = posts.js
* Tags endpoint = taglist.js

## Dates
The first thing I noticed once I put the blog post template together was that instead of displaying the date, I was getting a `Invalid DateTime` error.

For my usual Eleventy set-up I use [Luxon](https://moment.github.io/luxon/api-docs/index.html#luxon) for dates and have two filters set-up to handle formatting. I covered the full set-up including the [installation of Luxon in this post](https://danabyerly.com/articles/time-is-on-your-side/#set-up), but the general idea is there's formatting for `datatime` and for display.

In my blog template I set the date:
```html
<time datetime="{% raw %}{{ posts.date | w3Date }}" class="post-meta dt-published">
  {{ posts.date | longDate }}{% endraw %}
</time>
```

This should result in `datetime` formatted as 2022-07-21T12:45:24.000Z and the display date formatted as July 21, 2022.

The filters I use for dates from Eleventy in `eleventy.js` are:
```js
  eleventyConfig.addFilter('longDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLLL dd, yyyy');
  });

  eleventyConfig.addFilter('w3Date', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISO();
  });
```

When working with dates from Eleventy  [fromJSDate](https://moment.github.io/luxon/api-docs/index.html#datetimefromjsdate) is used because the dates are JavaScript date objects. The dates coming from WordPress are formatted as [ISO strings](https://developer.wordpress.org/rest-api/reference/posts/#schema). A small adjustment in your date filters will fix the issue.

```js
  eleventyConfig.addFilter('longDate', dateObj => {
    return DateTime.fromISO(dateObj, {zone: 'utc'}).toFormat('LLLL dd, yyyy');
  });

  eleventyConfig.addFilter('w3Date', dateObj => {
    return DateTime.fromISO(dateObj, {zone: 'utc'}).toISO();
  });
```

By changing `fromJSDate` to `fromISO`, the filters output the dates correctly. But why am I using the w3Date filter to change the ISO date from WordPress to ISO? The date from WordPress comes back as `2022-07-21T12:45:24`, which includes the date and time, but not the timezone offset. There's an [open ticket](https://core.trac.wordpress.org/ticket/41032) to address the formatting in WordPress, but for now the filter works fine. And, you may not care if it has the timezone offset, and that's fine too!


## Change fully qualified URLs
The [Select your endpoints](/articles/wordpress-and-eleventy-part-one-wordpress/#select-your-endpoints) section of part one looks at the Posts endpoint and how the content comes back. One of the things to note is that any link to another post or page within your site will have a fully qualified URL for your WordPress site.

One suggestion for making this a bit easier to handle in Eleventy is match your WordPress permalink structure to your Eleventy permalink structure. See the [Permalink and default category section](/articles/wordpress-and-eleventy-part-one-wordpress/#permalink-and-default-category) for more information about the WordPress set-up.

Since my permalink structures match, the only thing I have to change is the domain. If you use the [WordPress Media Library](https://wordpress.org/support/article/media-library-screen/) any images within the content of your post will also have fully qualified URL paths. I'll cover that in more detail in the next section. For now we'll focus on changing URLs from your WordPress domain to your Eleventy domain.

This is one of those instances that could be handled in a number of ways depending on your preference and/or skill level. You could write a filter in your `.eleventy.js` file, or perhaps handle it directly in your API call. Both of those are approaches are a bit beyond my reach at the moment, so I used the [replace filter](https://mozilla.github.io/nunjucks/templating.html#replace) in Nunjucks.

### .env with a useful assist
Before we get to the Nunjucks filter, this is where I found using `dotenv` most helpful. If you're not familiar with [dotenv](https://github.com/motdotla/dotenv) the first couple of minutes [of this video](https://www.youtube.com/watch?v=zwcvXd3kGbw) should get you up and running (it did for me!).

In my `.env` file I've set up a key that holds the domain of my WordPress site.  It looks like this, but uses my real domain:

```md
CMS = 'https://my-wordpress-domain.com'
```

Typically environment variables are used in your JavaScript data file that contains the call to your API. But here I'm using them within a template. Fortunately it didn't take long to figure out how to do this because someone else in the Eleventy community [already discussed it](https://github.com/11ty/eleventy/issues/782)!

[This comment and example](https://github.com/11ty/eleventy/issues/782#issuecomment-1066011154) by Peter deHaan is the approach I ended up using. In my `.eleventy.js` file I have the following:

```js
const inspect = require("node:util").inspect;
require("dotenv").config();

// in the module exports section
  eleventyConfig.addFilter("inspect", (value) =>
    inspect(value, {sorted: true})
  );

  eleventyConfig.addGlobalData("env", process.env);

```

And then in my template I can use the environment variables within the Nunjucks replace filter:

```html
{% raw %}{{ posts.content.rendered | replace(env.CMS, '') | safe }}{% endraw %}
```

This filter strips out all instances of my WordPress domain and leaves all of the links and images using relative URLs. If you've set up your WordPress permalinks to match your Eleventy permalinks your links and images should now use relative URLs and point to pages within your Eleventy domain.


## Images
The [Images section](/articles/wordpress-and-eleventy-part-one-wordpress/#images) of part one provides some details and options for how to set-up images within your WordPress admin. How you handle images in Eleventy will depend on what you decide to do in WordPress.

The easiest way to handle images is with Cloudinary, and its easy to use [WordPress plugin](https://cloudinary.com/documentation/wordpress_integration), or your favorite media platform. You use the WordPress [Media Library](https://wordpress.org/support/article/media-library-screen/) as you normally would and Cloudinary optimizes and serves the images. A few things to note if you use Cloudinary...

* Turn off Lazy Loading (on by default)
* By default it will optimize all of your WordPress themes, plugins, etc, which will eat into the limits of your free tier, you can easily opt out

The Lazy Loading feature displays a loading gif in WordPress until your image loads, but in the API the image source includes the path the loading gif and not the path to the image, so your images will be broken unless you turn lazy loading off (the image tag itself uses `loading="lazy"`).

Another option is to just let your images be served from your WordPress domain. If you decided to go with this approach you'd have to adjust your link filtering to only change the domain on links and not in the image tags.

While Cloudinary offers ease of use and performance gains, I opted to serve images from the domain of my Eleventy site, mostly because I want all of my content in one place on my server. This does make extra work for me, and if I were setting it up for a client who didn't want the extra work, I would definitely choose Cloudinary.

On the off chance you'd like also like to host images from your Eleventy site, here's the additional set-up and steps I take... you can skip to the next section if you're not going to self-host images.

### Hosting images at your Eleventy site
You'll recall our Nunjucks replace filter for turning the fully qualified URLs into relative address URLs [discussed above](#change-fully-qualified-urls). The path in our image tags now look like this: `/content/uploads/my-image.jpg` if you followed the recommendation in the [Images section](/articles/wordpress-and-eleventy-part-one-wordpress/#images) of part one and changed the default behavior of organizing images by year and month. If not your image path would look something like this: `/content/uploads/2022/08/my-image.jpg`, making it harder to replace the image path.

You could set up the image path in your Eleventy site to mirror WordPress (`/content/uploads`) and then you wouldn't need additional filtering. I decided to use `/img/blog`, so I need to account for that.

In my `.env` file I added the following...
```md
MEDIAPATH='wp-content/uploads'
IMAGEPATH='img/blog'
```

And then in my template I add an additional "replace" for the image path:
```html
{% raw %}{{ posts.content.rendered | replace(env.CMS, '') | replace(env.MEDIAPATH, env.IMAGEPATH) | safe }}{% endraw %}
```

You can probably find a better way to handle this, especially if you're handy with JavaScript. But if not, this method works fine. I'm guessing the JavaScript filter approach offers better build-time performance, but for my tiny site I'm sure I'd never notice the difference.

One other thing to account for, WordPress creates several sizes of your image that are used responsively. In addition to having a copy of the original image in your Eleventy instance you'll need to grab the additional sizes from the WordPress Media Library. I haven't found a way to do that in the WordPress admin and grab them using FTP.

My image prep...
* Resize and maybe crop image (using [Acorn](https://flyingmeat.com/acorn/)).
* Optimize with [Squoosh](https://squoosh.app/).
* Add to WordPress Media Library (including alt text!).
* Download additional image sizes.
* Add to Eleventy.
* Deploy before publishing WordPress post to make the images live.

Yes, that's a lot of steps. It's fine for me but not recommended unless you don't mind doing that sort of thing. If it ends up being too annoying I can always switch to Cloudinary.

## Tags
One of [my requirements](/articles/wordpress-and-eleventy-part-one-wordpress/#requirements) was to include tags with my blog posts. To do this I had to include the [Tags endpoint](https://developer.wordpress.org/rest-api/reference/tags/) because the [Posts endpoint](https://developer.wordpress.org/rest-api/reference/posts/) includes only the ID of the tags used in post.

I did find a way to embed the additional tag data in the Posts endpoint, but couldn't figure out how to render it. Check the [Select your endpoints section](/articles/wordpress-and-eleventy-part-one-wordpress/#select-your-endpoints) of part one for more information as you might be able to figure out how to render the additional tags data (and if you do let me know!).

As for my approach, if you've ever used a MySQL join, it's a similar concept to access the tag name for your post. The tag ID field is the foreign key, or common element, that links the Posts and Tags endpoints.

I included tags for each post and a listing page per tag.

### Tags included in a post
There could be different, and potentially better, ways to do this. But, in my blog post template I have the following code to display tags...

```html
{% raw %}{% if posts.tags | length %}
  <div class="wrapper post-tags">
    <span class="visually-hidden">A list of tags for this post.</span>
      <ul class="tag-list" role="list">
      {% for tag in posts.tags %}
        {% for tagName in taglist %}
		  {% if tag === tagName.id %}
		  <li>
			<a href="/tag/{{ tagName.slug }}">{{ tagName.name }}</a>
		  </li>
		  {% endif %}
        {% endfor %}
      {% endfor %}
    </ul>
  </div>
  {% endif %}{% endraw %}
```

Here's what's happening...
* The first "if statement" includes the code block if the post has any tags.
* Create a "for loop" to call all the tags on the post from the Posts endpoint.
* Create an additional "for loop" for a the Tags endpoint.
* Use an "if statement" to make sure the ID(s) from the Posts endpoint matches an ID in the Tags endpoint.
* Assuming the IDs match, use the name and slug from the Tags endpoint to display the tag name and link to the listing page for the tag.

### Listing page for tagged posts
I've made the tags on my posts links, which points to a listing page for the tag (for example my [Eleventy tag here at this site](/tag/eleventy)!). I think of this as a publishing best practice and highly recommend that when you tag your content that you also give visitors the ability to browse your content by tag.

Creating a tag listing page is similar to creating blog posts in that [pagination is used to create the individual pages](https://www.11ty.dev/docs/pages-from-data/). There are two parts, the markdown that includes the pagination and the template or layout. My preferred method is two files but you can also combine them in a single `.njk` file assuming you're using Nunjucks.

The markdown...
```json
---
summary: "A list of posts by tag"
pagination:
    data: taglist
    size: 1
    alias: taggy
permalink: "tag/{% raw %}{{ taggy.slug }}{% endraw %}/"
layout: 'layouts/tag-listing.html'
---
```

Here's what's happening
* I've created a summary to use in the meta description (not relevant to actual tag listing but wanted to mention it).
* The pagination uses `taglist.js` (that fetches the data from the Tags endpoint) as the data source.
* The size is set to 1 to create a single page.
* The alias is used as a key in the template.
* The permalink creates the the tag listing url (e.g., /tag/my-tag/).
* The path to my template, if you use a single `.njk` file you don't need this.

From the template that lists the tagged posts...
```html
<ul class="flow">
  {% raw %}{% for posts in posts %}
      {% if taggy.id in posts.tags %}
      <li class="post-summary-list">
        <h2>
          <a href="/blog/{{ posts.slug }}">{{ posts.title.rendered | safe }}</a>
        </h2>
        <p class="post-summary-text">{{ posts.acf.summary | safe }}</p>
        <div class="post-meta">
          <p>
            Published on <time datetime="{{ posts.date | w3Date }}">{{ posts.date | longDate }}
          </time>
        </p>
        <span class="visually-hidden">A list of tags for this post.</span>
        <ul class="tag-list" role="list">
          {% for tag in posts.tags %}
            {% for tagName in taglist %}
              {% if tag === tagName.id %}
              <li>
                <a href="/tag/{{ tagName.slug }}">{{ tagName.name }}</a>
              </li>
              {% endif %}
            {% endfor %}
          {% endfor %}
        </ul>
      </li>
      {% endif %}
    {% endfor %}{% endraw %}
  </ul>
```

Here's what's happening...
* A "for loop" calls the posts from the Posts endpoint.
* The "if statement" checks if the ID from the Tags endpoint is present in the post (using the 'taggy' alias from the markdown pagination in markdown).
* Display information about the post (title, summary, date).
* The rest is the same code used in the blog post example to display all the tags for each post (which lives in a [partial](https://learneleventyfromscratch.com/lesson/6.html) for easy reuse).

Here's an example at my blog, the [listing page for the Home Zoo tag](https://danabyerly-junkdrawer.website/tag/home-zoo/).

If you wanted to use categories instead of, or in addition to, tags in WordPress it would be the same concept.

## RSS
The last thing on my [requirements list](/articles/wordpress-and-eleventy-part-one-wordpress/#requirements) was to include RSS. Eleventy has a nice [RSS plugin](https://www.11ty.dev/docs/plugins/rss/) that I've used on most of my sites. It uses [collections](https://www.11ty.dev/docs/collections/), so I had to do two things to get it to work with my WordPress data...

* Create a collection from the posts data
* Use [computed data](https://www.11ty.dev/docs/data-computed/) to make the data available to the RSS template

Here's a example of a feed template from the [Eleventy site](https://www.11ty.dev/docs/plugins/rss/#sample-feed-templates)...

```rss
{% raw %}<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:base="{{ metadata.url }}">
  <title>{{ metadata.title }}</title>
  <subtitle>{{ metadata.subtitle }}</subtitle>
  <link href="{{ permalink | url | absoluteUrl(metadata.url) }}" rel="self"/>
  <link href="{{ metadata.url }}"/>
  <updated>{{ collections.posts | getNewestCollectionItemDate | dateToRfc3339 }}</updated>
  <id>{{ metadata.url }}</id>
  <author>
    <name>{{ metadata.author.name }}</name>
    <email>{{ metadata.author.email }}</email>
  </author>
  {%- for post in collections.posts | reverse %}
  {%- set absolutePostUrl = post.url | url | absoluteUrl(metadata.url) %}
  <entry>
    <title>{{ post.data.title }}</title>
    <link href="{{ absolutePostUrl }}"/>
    <updated>{{ post.date | dateToRfc3339 }}</updated>
    <id>{{ absolutePostUrl }}</id>
    <content xml:lang="{{ metadata.language }}" type="html">{{ post.templateContent | htmlToAbsoluteUrls(absolutePostUrl) }}</content>
  </entry>
  {%- endfor %}
</feed>{% endraw %}
```

The relevant parts are...
* Setting the collection in `<updated>`
* The "for loop" of collection data
* The `<entry>` section

Since you don't need to create a collection to use data files I wasn't sure how to go about it. I found a couple of options in [11ty Rocks](https://11ty.rocks/), a useful resource created by [Stephanie Eckles](https://twitter.com/5t3ph). In  [Creating and Using Eleventy Collections](https://11ty.rocks/posts/creating-and-using-11ty-collections/) there are examples and explanations of the many ways to make a collection.

Creating a collection [from local data](https://11ty.rocks/posts/creating-and-using-11ty-collections/#collections-from-local-data), or data in your `_data` directory, seemed like a clear choice, but I couldn't figure out how to do the filtering part. Luckily there's also an example for [making a collection from a Front Matter key](https://11ty.rocks/posts/creating-and-using-11ty-collections/#collections-from-template-front-matter-data). I added `blog: true` to the Front Matter of my blog post page and created the collection that way.

In my `.eleventy.js` file I added the following to create the collection...

```js
eleventyConfig.addCollection("blog", function (collection) {
  return collection.getAll().filter((item) => item.data.blog);
});
```

It was easy enough to add the collection in the RSS template (changing collections.posts to collections.blog) but nothing was working when I plugged in my data elements. This is where [computed data](https://www.11ty.dev/docs/data-computed/) came in. To populate the `<entry>` I needed to map the data from the Posts endpoint to something useable.

The updated Front Matter for blog posts...

```json
---
layout: 'layouts/blog-single.html'
pagination:
  data: posts
  size: 1
  alias: posts
  addAllPagesToCollections: true{% raw %}
permalink: "blog/{{ posts.slug }}/"
eleventyComputed:
  title: "{{ posts.title.rendered | safe }}"
  summary: "{{ posts.acf.summary | safe }}"
  blogContent: "{{ posts.content.rendered | safe }}"
  blogDate: "{{ posts.date }}"
blog: true{% endraw %}
---
```

I already had the layout; the data, size and alias for pagination, and the permalink. I added the following...

* Setting  `alladdAllPagesToCollections` to true in pagination, this ensures all of the pages end up in the RSS feed.
* The computed data in `eleventyComputed`
	* The title of the post.
	* The summary (not used for RSS but useful elsewhere).
	* The full content.
	* The publish date.
* The `blog` key to create the collection.

And then added the new keys from computed data to the RSS template. The  `<entry>` part of my RSS template looks like this...

```rss
<entry>
  <title>{% raw %}{{ post.data.title | safe }}{% endraw %}</title>
  <link href="{% raw %}{{{ absolutePostUrl }}{% endraw %}"/>
  <updated>{% raw %}{{ post.data.blogDate | w3Date }}{% endraw %}</updated>
  <id>{% raw %}{{ absolutePostUrl }}{% endraw %}</id>
  <content type="html">
    {% raw %}{{ post.data.blogContent | replace(env.CMS, site.url) | replace(env.MEDIAPATH, env.IMAGEPATH) | safe }}{% endraw %}
  </content>
</entry>
```
**Note**: I also use CDATA within `<content>` but including it in this code snippet created an error in my RSS feed. You can view the [full code at GitHub](https://github.com/superterrific/danabyerly-junkdrawer/blob/main/src/rss.html).

Here's what's happening...

* The `<title>` picks up the RSS page title (in this case Dana Byerly's Digital Junk Drawer)
* The `<updated>` uses the computed data for the publish date and the date filter that converts the date to ISO including the timezone offset ([discussed here](#dates)), you could also leave the filter off if you don't care about the timezone offset
* The `<content>` uses the computed data for the post content and the two Nunjucks replace filters to update the fully qualified URLs ([discussed here](#change-fully-qualified-urls)).

Now your RSS feed should pick up the posts coming from WordPress.

## Hosting
My WordPress site is hosted at [Dreamhost](https://dreamhost.com) and the Eleventy site is hosted at [Netlify]({{ tools.netlify }}). Dreamhost is where I register domains, and typically when I set-up a site at Netlify I point the Dreamhost registration to Netlify nameservers, which is easy and does the job.

The WordPress site uses a sub-domain of the Eleventy site. I had my WordPress site up and running well before I hooked up my Eleventy site. Once I deployed the Eleventy site and added the domain with my usual method, the WordPress site went down. Since I had pointed the nameservers to Netlify the entire domain was pointed at Netlify, which included my sub-domain at Dreamhost. Whoops!

After some frantic research I found a [How to set up a custom domain for Netlify site using DreamHost as a domain registrar](https://superchlorine.com/2021/01/how-to-set-up-netify-custom-domain-via-dreamhost/). Instead of pointing the entire domain to Netlify nameservers, I had to create an individual A record for my Eleventy domains:

* danabyerly-junkdrawer.website
* www.danabyerly-junkdrawer.website

And then point my WordPress sub-domain back to the Dreamhost nameservers. Regardless of where you host your sites, if you use a sub-domain of public site for your WordPress site this is something to keep in mind.

### Netlify build hook
I like to have a [build hook](https://docs.netlify.com/configure-builds/build-hooks/) for all my sites that use remote data. It's helpful to be able to trigger a build without doing a deploy. In the [Deployments section of part one](/articles/wordpress-and-eleventy-part-one-wordpress/#deployments) I cover some plugins that help by triggering builds from within WordPress, and to use them you need build hook.


## Useful resources and wrap-up
That's everything I encountered as I built my site. Your requirements might be different, and you might encounter different issues, but hopefully this series helped answer some questions or flagged issues to consider.

I'm enjoying using WordPress with [my new site](https://danabyerly-junkdrawer.website/) and would definitely use WordPress as a headless CMS for Eleventy again.

A list of resources mentioned in this article...

### How-tos and repositories
* [How to use 11ty with Headless WordPress and deploy to Netlify](https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/) and [corresponding repository](https://github.com/thedavedavies/Headless-WordPress-11ty) by Dave Davies
* [How to Use WordPress as a Headless CMS for Eleventy](https://www.sitepoint.com/wordpress-headless-cms-eleventy/) by Craig Buckler

### WordPress documentation and plugins
* [Rest API documentation site](https://developer.wordpress.org/rest-api/)
* [Media Library](https://wordpress.org/support/article/media-library-screen/)
* [Cloudinary plugin](https://cloudinary.com/documentation/wordpress_integration)
* [GraphQL plugin](https://www.wpgraphql.com/)

### Eleventy resources and tools
* [dotenv](https://github.com/motdotla/dotenv)
* [Discussion on using environment variables in content](https://github.com/11ty/eleventy/issues/782)
* [Node Fetch](https://www.npmjs.com/package/node-fetch)
* [Eleventy Fetch](https://www.11ty.dev/docs/plugins/fetch/)
* [Luxon](https://moment.github.io/luxon/api-docs/index.html#luxon)
* [Partials](https://learneleventyfromscratch.com/lesson/6.html)
* [Nunjucks replace filter](https://mozilla.github.io/nunjucks/templating.html#replace)
* [Create data from pages](https://www.11ty.dev/docs/pages-from-data/)
* [RSS plugin](https://www.11ty.dev/docs/plugins/rss/)
* [11ty Rocks - Creating and using Eleventy Collections](https://11ty.rocks/posts/creating-and-using-11ty-collections/)
* [Collections](https://www.11ty.dev/docs/collections/)
* [Computed data](https://www.11ty.dev/docs/data-computed/)
