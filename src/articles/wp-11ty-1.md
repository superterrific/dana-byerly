---
title: 'WordPress & Eleventy part one: WordPress'
summary: 'Some considerations for setting up WordPress to use with Eleventy.'
date: 2022-08-05
category: 'Articles'
tags: ['CMS', 'Eleventy', 'Side Projects', 'WordPress']
---

After a quick proof of concept using [WordPress](https://wordpress.com) as content management system (CMS) for [Eleventy]({{ tools.11ty }}) I built a [little blog](https://danabyerly-junkdrawer.website/) for myself. This two part series covers the things I learned and encountered along the way. It's not a step-by-step how-to guide, but rather a collection of considerations and tips. I've included links to how-to articles where available within the context of each post and in the [Useful resources](#useful-resources-and-wrap-up) section.

This article assumes you already know how to use Eleventy and WordPress, and that you have a high-level understanding of headless content management as well as accessing data via API.

Part one (this article) covers WordPress set-up and concepts, [part two covers Eleventy](/articles/wordpress-and-eleventy-part-two-eleventy/).

## Table of contents
* [Intro](#intro)
* [Requirements](#requirements)
* [Basic concepts](#basic-concepts)
* [Setting up WordPress](#setting-up-wordpress)
  * [Permalink and default category](#permalink-and-default-category)
  * [Images](#images)
  * [Previewing and themes](#previewing-and-themes)
  * [Plugins](#plugins)
    * [Disable the Wordpress front-end or redirect](#disable-the-wordpress-front-end-or-redirect)
    * [Deployments](#deployments)
    * [Advanced Custom Fields](#advanced-custom-fields)
  * [Other settings](#other-settings)
* [Select your endpoints](#select-your-endpoints)
* [Useful resources and wrap-up](#useful-resources-and-wrap-up)

## Intro
Finding a good content management system (CMS) to use with [Eleventy]({{ tools.11ty }}) has been an area of interest around here for some time. Last year I did a [test with Forestry](/notes/testing-forestry-cms-with-eleventy/), and eventually did a test with [Netlify CMS](https://www.netlifycms.org/) that I didn't write about it. Both were decent options. I still want to try some of the API-based solutions like [Sanity](https://www.sanity.io/) or [Contentful](https://www.contentful.com/). Testing out [WordPress](https://wordpress.org/) was also on my list.

At the end of last year I found this [article by Dave Davies](https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/) and [corresponding repository](https://github.com/thedavedavies/Headless-WordPress-11ty). I grabbed the repo and followed along with the article, plugging in one of my existing WordPress endpoints. It went smoothly and was a nice, quick validation of "yeah, that seems worth a try". I put it aside until a good use case came up.

My test run with Dave's example is what eventually became my new blog, [Dana Byerly's Digital Junk Drawer](https://danabyerly-junkdrawer.website/), affectionately known as the Junk Drawer.


## Requirements
My site is a simple blog with fairly straightforward requirements. I'm not planning on using anything like carousels or galleries, and my content structure is flat. It's a vanilla blog.

* Include posts from WordPress
* Include pages from WordPress
* Include tags from WordPress
* Easy to include images in posts or pages
* RSS


## Basic concepts
You're setting up two sites...
* WordPress site for content management
* Eleventy site to display content

You can use two different domains or a domain and sub-domain. I went the sub-domain route. For hosting I have a [Dreamhost account](https://www.dreamhost.com/) and decided to host my WordPress site there, my Eleventy site is hosted at [Netlify]({{ tools.netlify }}).  If you wanted to run WordPress locally [this article should be helpful](https://www.sitepoint.com/wordpress-headless-cms-eleventy/).

The content at the WordPress site is accessed via the [WordPress REST API](https://developer.wordpress.org/rest-api/) to use as [global data](https://www.11ty.dev/docs/data-js/) in your Eleventy site. If you're wondering how to handle having the same content at two different site (as I was before I started this process), I'll cover that in the [Plugins section](#useful-resources-and-wrap-up) and in the [Hosting section of part two](/articles/wordpress-and-eleventy-part-two-eleventy/#hosting).


## Setting up WordPress
There are a few considerations when setting up Wordpress.

* Consider your permalink structure
* Consider your default category
* Decide how you want to handle images
* Pick a theme for previewing your posts
* Add some helpful plugins
* A few potentially useful settings

### Permalink and default category
There's more details about accessing the API in the [Select your endpoints section](#select-your-endpoints), but an important thing to note is any link to other posts or pages within your site will be fully qualified, or the full address of the url of your WordPress site.

Let's say your WordPress site is uses the domain `editor.mysite.com` and your public site uses `mysite.com`. Any link to your other posts or pages within the content of a post will point to `editor.mysite.com`.

There are a couple of options for handling this in the [Change fully qualified URLs](/articles/wordpress-and-eleventy-part-two-eleventy/#change-fully-qualified-urls) section of part two, but you can make things easier on yourself by setting up the permalink structure in WordPress to match the permalink structure in your Eleventy site.

In my Eleventy site I'm using the permalink structure of `/blog/post-name`. For example, I have a post at this address: https://danabyerly-junkdrawer.website/blog/welcome-to-the-junk-drawer/. If I linked to it from within another post, the link would point to `https://wpsite.danabyerly-junkdrawer.website/blog/welcome-to-the-junk-drawer/` (not the actual domain!). Because the permalink structure is the same the only thing I have to worry about changing in Eleventy is the domain.

Every post in WordPress has a category, and the default category is "uncategorized". By changing the default category to "blog" every post I publish will have the "blog" category. Then, by changing the WordPress permalink structure to `/category/post-name` it will match my Eleventy permalinks.

{% figure %}
  <picture>
    <source srcset="/img/wp-permalink.avif" type="image/avif">
    <source srcset="/img/wp-permalink.webp" type="image/webp">
    <img src="/img/wp-permalink.png" alt="Custom permalink structure setting in WordPress set to category and post title" width="1188" height="138" loading="lazy" />
  </picture>
  {% figcaption %}
    There are a variety of ways to set up your permalink in WordPress, category and post title matches my Eleventy set-up.
  {% endfigcaption %}
{% endfigure %}

WordPress has a variety of options for [permalink structures](https://wordpress.org/support/article/using-permalinks/) to help you match the permalink structure you plan to use in Eleventy.

### Images
If you use a [Featured Image](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/) in WordPress it's treated as unique element within Posts endpoint, but images within the content of the post are part of the content. Similar to links, if you use the [Media Library](https://wordpress.org/support/article/media-library-screen/), the image path will be fully qualified to your WordPress site. This also means they'll be served from your WordPress site. This may be fine for you and just something to note.

I didn't want to take this route and ultimately decided on using the WordPress Media Library, but serving the images from my Eleventy site. And since I couldn't figure out how to download the images from the [Media endpoint](https://developer.wordpress.org/rest-api/reference/media/), I have a little extra manual work to do on my end, and I'm OK with that. (And least for now, I guess we'll see how it works out!).

If you decide to host images from your Eleventy site I recommend unchecking the "Organize my uploads into month- and year-based folders" option in [Media settings](https://wordpress.org/support/article/settings-media-screen/). This will put all of your images in the `/wp-content/uploads` directory and make it easier to either mirror that path or replace it in your Eleventy site.

If I were setting up a similar site for a client I would use [Cloudinary](https://cloudinary.com/), which has an easy to use [WordPress plugin](https://cloudinary.com/documentation/wordpress_integration). I gave it a test run and it produced some nice performance gains. One thing to note with this plugin is to turn off [Lazy Loading](https://cloudinary.com/documentation/wordpress_integration#lazy_loading), which is enabled by default. It's useful within a WordPress site but in the API your images will only show the placeholder image that's used before loading. If you're an [ImageKit](https://imagekit.io/) user there is also a [WordPress plugin](https://docs.imagekit.io/platform-guides/wordpress/). I also gave that try but found the Cloudinary plugin much easier to use.

### Previewing and themes
This may or may not matter to you, but the previewing at your WordPress site will look different than your Eleventy site, unless you want to create a similar WordPress theme. I chose a simple theme and made a few small adjustments in the [new Appearances editor](https://wordpress.org/support/article/appearance-customize-screen/). It's fine, it's not a one-to-one but it's close enough.

### Plugins
There are several useful Jamstack plugins to help with some of the details.

#### Disable the Wordpress front-end or redirect
When it comes to figuring out how to handle having the same content at two sites, there are a couple of options. I went with a plugin called [Headless WordPress](https://wordpress.org/plugins/headless-wp/) that allows you disable the front-end of your WordPress site and display a 403 page. You can still access the admin area of WordPress by going directly to the sign-in screen (example: `your-wordpress-site.com/wp-login.php`).

Once signed in you can also preview your posts and view your full site. But anyone trying to view the site will get the 403 error. The plugin has some other features that I'm not using, like creating custom endpoints.

Another option that I saw mentioned by didn't try is a plugin called [Headless Mode](https://wordpress.org/plugins/headless-mode/) that redirects urls from your WordPress site to your Eleventy site.

#### Deployments
So far I've been doing manual deployments using a [Netlify build hook](https://docs.netlify.com/configure-builds/build-hooks/). Once I have a new post in good shape I'll publish it and then fire up my Eleventy site locally to proofread and fine tune. Once I'm happy with everything I'll run the build hook in Terminal, which triggers a build and effectively published the WordPress post to the Eleventy site.

This is fine because it's the way I like to work, but there are other options to make the deploy and publish to Eleventy much easier. I found two plugins that look useful, but I haven't tried either. Both offer fairly fine-grained control over what triggers a deploy, and both have repositories if you want look over the code. Neither has been updated recently, and there might also be other options.

* [JAMstack Deployments plugin](https://wordpress.org/plugins/wp-jamstack-deployments/)
* [Deploy NetiflyPress plugin](https://wordpress.org/plugins/deploy-netlifypress/)

 The Deploy NetlifyPress plugin is not an official Netlify plugin. One difference from the JAMstack Deployments plugin is that it allows for triggering a manual deploy from within the WordPress admin, a feature that could be especially handy for non-technical users.

#### Advanced Custom Fields
I'm only using this one a little bit at the moment, but I have a couple of ideas for additions that would require adding custom fields. In my usual Eleventy sites I have a "summary" key for posts that I use on listing pages and in the meta description.

My first thought was to use the WordPress "Excerpt" field, but I couldn't find a way to make it required that didn't involve mucking around with WordPress code. If you don't populate the Excerpt field WordPress will use the [first 55 characters of your post](https://wordpress.org/support/article/excerpt/), which might be fine for your use case, but I wanted to make sure I always included it.

To make minimize the inevitable "ugh, forgot the excerpt again" scenario I created a "summary" field using [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) and made it required.

### Other settings
There are a few other settings I've changed to make things a little easier.
* Only displaying the fields I want to capture in the create/edit post interface
* Setting the editor to use the theme styles
* Turn off pre-publish checklist
* Discourage search engines from indexing the site

The first three changes on my list were changed [in Preferences for the editor](https://wordpress.org/support/article/preferences-overview/), which can be found under the kabob icon in the upper right in create/edit post.

There are three sections available: General, Blocks and Panels. In General you can turn off the pre-publish checklist and change the editor to your theme styles. The pre-publish checklist adds additional steps, if you don't find them useful it's easy to turn them off. I wanted to write in dark mode and had set up my theme to use dark mode (you can also add a plugin to modify the entire admin area to use dark mode if you like).

In the Panels section of the Preferences you can specify which fields you want to display in the Post settings panel that displays in the right column (you can also hide the column all together). I'm displaying only permalink, tags and the Advance Custom Fields summary field that I added.

{% figure %}
  <picture>
    <source srcset="/img/wp-prefs.avif" type="image/avif">
    <source srcset="/img/wp-prefs.webp" type="image/webp">
    <img src="/img/wp-prefs.png" alt="WordPress preferences panel section showing the ability to customize what displays in the panel." width="800" height="732" loading="lazy" />
  </picture>
  {% figcaption %}
    In my set-up only the permalink, tags and summary display.
  {% endfigcaption %}
{% endfigure %}

In the [Reading section of settings](https://wordpress.org/support/article/settings-reading-screen) (from the main sidebar) I checked "Discourage search engines from indexing the site". I don't know if this is helpful since the content is restricted, and I didn't look into it. File this under "just in case".

## Select your Endpoints
WordPress makes a lot of data available via its REST API, and depending on what you'd like to use in your in Eleventy site you may need to access multiple endpoints. You can view [all the available endpoints in the documentation](https://developer.wordpress.org/rest-api/reference/) as well each field included in the endpoint, for example in the [Posts endpoint](https://developer.wordpress.org/rest-api/reference/posts/).

The best way to get a sense of what's available to you is the hit an endpoint and see how the data is returned. The general structure of the endpoints is the url for the site plus `/wp-json/wp/v2/posts` where `posts` is the endpoint.

I use browser extensions to format and view JSON directly in the browser, [Basic JSON formatter](https://addons.mozilla.org/en-US/firefox/addon/basic-json-formatter/) in Firefox and [JSON viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) in Chrome. Using an example from [this WordPress and Eleventy repository](https://github.com/samikeijonen/11ty-wp) by Sami Keijonen (which also has a [corresponding site](https://11ty-wp.netlify.app/)), you can hit the following endpoint with your browser and see how the data comes back:

[https://11ty.foxnet.fi/wp-json/wp/v2/posts](https://11ty.foxnet.fi/wp-json/wp/v2/posts)


Look at all those fields! Two other things to note...
* The content and excerpt come back as HTML
* The default is to return 10 records

I decided to return only the fields I planned on using, which can be done by using [the global parameter](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/) of `_fields`. You can also return up to 100 records at a time by using [pagination](https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/).

Here's the above endpoint with fields and pagination added:

https://11ty.foxnet.fi/wp-json/wp/v2/posts?fields=id,title,slug,date,content,tags&per_page=100

When you hit the updated endpoint you'll notice that it's only including the fields specified and there are 44 records returned instead of 10.

The endpoints I included in my project were [Posts](https://developer.wordpress.org/rest-api/reference/posts/), [Pages](https://developer.wordpress.org/rest-api/reference/pages/), and [Tags](https://developer.wordpress.org/rest-api/reference/tags/). Why Tags when there's a "tags" field in the Posts endpoint? Because in the Posts endpoint the tags field only includes the ID for each tag.

In the example endpoint above, in the record for the first post there is one tag with a value of "58".  In order to display the name of the tag I need to pull it from the Tags endpoint.

There is a [global parameter for embedding](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#_embed), which allows you to include linked content for authors and "terms" (categories and tags). However when combining `_fields` and `_embed`  the fields parameter is not respected. There's no mention of how to use them together in the documentation, but I did find  [this open bug](https://core.trac.wordpress.org/ticket/49985)  that also included [a workaround](https://core.trac.wordpress.org/ticket/49985#comment:1). Using our example endpoint...

https://11ty.foxnet.fi/wp-json/wp/v2/posts?_embed=true&_fields=id,title,slug,date,content,tags,_links&per_page=100

Now you'll see a field named `_embedded` that includes authors and wp:term. The field wp:term includes categories (0) and tags (1). I was able to update my Posts endpoint to include the embedded content, but couldn't figure out how to render it. Perhaps you'll have more luck than I did! If not, it's straightforward to include the Tags endpoint and [reference the additional information](/articles/wordpress-and-eleventy-part-two-eleventy/#tags).


## Useful resources and wrap-up
Depending on your set-up you could encounter additional issues and things to consider, but hopefully part one answered some of your basic questions around WordPress set-up. [Part two on Eleventy set-up](/articles/wordpress-and-eleventy-part-two-eleventy/) covers the things I encountered as I integrated my working proof of concept into my Eleventy starter.

A list of resources mentioned in this article...

### How-tos and repositories
* [How to use 11ty with Headless WordPress and deploy to Netlify](https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/) and [corresponding repository](https://github.com/thedavedavies/Headless-WordPress-11ty) by Dave Davies
* [How to Use WordPress as a Headless CMS for Eleventy](https://www.sitepoint.com/wordpress-headless-cms-eleventy/) by Craig Buckler
* [Site - Testing WordPress as a backend and Eleventy as a frontend](https://11ty-wp.netlify.app/) and [corresponding repository](https://github.com/samikeijonen/11ty-wp) by Sami Keijonen

### WordPress documentation
* [Rest API documentation site](https://developer.wordpress.org/rest-api/)
* [Using permalinks](https://wordpress.org/support/article/using-permalinks/)
* [Featured image](https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/)
* [Media Library](https://wordpress.org/support/article/media-library-screen/)
* [Media settings](https://wordpress.org/support/article/settings-media-screen/)
* [Editory preferences](https://wordpress.org/support/article/preferences-overview/)
* [Reading settings](https://wordpress.org/support/article/settings-reading-screen)
* [Excerpts](https://wordpress.org/support/article/excerpt/)

### WordPress plugins
* [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
* [Cloudinary](https://cloudinary.com/documentation/wordpress_integration)
* [ImageKit](https://docs.imagekit.io/platform-guides/wordpress/)
* [Headless WordPress](https://wordpress.org/plugins/headless-wp/)
* [Headless Mode](https://wordpress.org/plugins/headless-mode/)
* [JAMstack Deployments](https://wordpress.org/plugins/wp-jamstack-deployments/)
* [Deploy NetlifyPress](https://wordpress.org/plugins/deploy-netlifypress/) (not an official Netlify plugin)
* [Customize Appearances Screen](https://wordpress.org/support/article/appearance-customize-screen/)

### Other resources
* [Firefox extension - Basic JSON formatter](https://addons.mozilla.org/en-US/firefox/addon/basic-json-formatter/)
* [Chrome extension - JSON viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
* [Netlify build hooks](https://docs.netlify.com/configure-builds/build-hooks/)
* [Eleventy global data](https://www.11ty.dev/docs/data-js/)
