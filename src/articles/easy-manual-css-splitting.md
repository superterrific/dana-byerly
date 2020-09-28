---
title: 'Manually splitting CSS files in Eleventy'
summary: 'Don&apos;t want to use a bundler? Eleventy makes it easy to manually split your CSS.'
category: 'Articles'
date: '2020-09-28'
tags: ['Eleventy', 'Performance', 'The Site']
---

One of the Quick Tips in the Eleventy Docs is [how to inline minified CSS](https://www.11ty.dev/docs/quicktips/inline-css/). It's very easy to implement, in fact it was one of the first things I figured out on my own after finishing the [Learn Eleventy from Scratch course](https://piccalil.li/course/learn-eleventy-from-scratch/). The course, which I highly recommend, has a section on setting up a SASS pipeline, but since I wasn't going to use SASS I had to figure something out on my own.

Before we get started, this seems like a great time to provide some context about my dev skills...

{% include 'partials/dev-caveat.html' %}

## Quick set up

You should check the [check the instructions at Eleventy](https://www.11ty.dev/docs/quicktips/inline-css/), but the gist is that once clean-css is installed and a filter is added to your eleventy.js file, there's a bit of code to add within the <code>head</code> tag to include the CSS file and then minify it. This code replaces the link to your CSS file.

I've made a directory named 'css' in '_includes' and am calling the global CSS file...

```html {% raw %}
{% set css %}
  {% include "css/global.css" %}
{% endset %}
<style>{{ css | cssmin | safe }}</style>
{% endraw %}
```

In an ongoing effort to both improve upon and learn about performance, I started playing with splitting the CSS out into content specific files, otherwise known as [code-splitting or bundling](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting). On a larger project code-splitting is typically handled by a bundler like Webpack or Parcel. Don't want to use a bundler, or in my case learn how to use a bundler? Not a problem, Eleventy makes it easy to set something up manually.

As I bumbled around figuring out how best to do this, I tried two methods. Either could work well depending on your setup.

## Using if statements

My first foray was separating out the code for the homepage and the Projects listings used on the homepage by using a [Nunjucks if statement](https://mozilla.github.io/nunjucks/templating.html#if). Building on the example above it looked like this...

```html {% raw %}
{% set css %}
  {% include "css/global.css" %}
  {% if page.url === '/' %}
    {% include "css/home.css" %}
    {% include "css/projects-landing.css" %}
  {% endif %}
{% endset %}
<style>{{ css | cssmin | safe }}</style>
{% endraw %}
```

If the current page's url is equal to the homepage ("/") then home.css and projects-landing.css will be included to be minified along with global.css. Those styles will only only appear on the homepage, cutting down on unused CSS elsewhere in the site.

Emboldened by this discovery, I started to figure out where else I could employ this technique. That's where it started to get a little a dicey. The Projects landing page was the next obvious target since I already had the styles split out into its own file. The individual project pages were also easy to split out as an individual file. I decided to just use one if statement for the projects section.

```html {% raw %}
{% set css %}
  {% include "css/global.css" %}
  {% if page.url === '/' %}
    {% include "css/home.css" %}
    {% include "css/projects-landing.css" %}
  {% endif %}
  {% if '/projects/' in page.url %}
    {% include "css/projects.css" %}
    {% include "css/projects-landing.css" %}
  {% endif %}
{% endset %}
<style>{{ css | cssmin | safe }}</style>
{% endraw %}
```

So far so good, for the most part. Here projects.css and projects-landing.css are included if '/projects/' is in the url. This ensures that both the Projects landing page and individual Project pages get those styles. If I were really trying to squeak the bytes out I could've separated them into two if statements so there was no overlap, but this approach is fine for my little low-traffic site.

The next logical move was to separate out the styles used on content pages. This was where the if statement approach became unwieldy. [Articles](/articles/), [Notes](/notes/) and [Changelog](/changelog/) all use the same styles and layout. If I had a single Blog or Writing section, the if statement approach would be fine, but trying to figure out how to include all the urls proved tricky.

I started off thinking that I could chain all the urls together with 'or' like this...

```html {% raw %}
{% if '/articles/' or '/notes/' or '/changelog/' in page.url %}
  {% include "css/content.css" %}
{% endif %}
{% endraw %}
```

But alas this didn't work. So I made a big Frankenstein of repetitive if statements for each section. I've also included styles for Syntax Highlighting (dracula.css)...

```html {% raw %}
{% set css %}
  {% include "css/global.css" %}
  {% if page.url === '/' %}
    {% include "css/home.css" %}
    {% include "css/projects-landing.css" %}
  {% endif %}
  {% if '/projects/' in page.url %}
    {% include "css/projects.css" %}
    {% include "css/projects-landing.css" %}
    {% include "css/content.css" %}
    {% include "css/dracula.css" %}
  {% endif %}
  {% if '/notes/' in page.url %}
    {% include "css/content.css" %}
    {% include "css/dracula.css" %}
  {% endif %}
  {% if '/articles/' in page.url %}
    {% include "css/content.css" %}
    {% include "css/dracula.css" %}
  {% endif %}
  {% if '/changelog/' in page.url %}
    {% include "css/content.css" %}
    {% include "css/dracula.css" %}
  {% endif %}
{% endset %}
<style>{{ css | cssmin | safe }}</style>
{% endraw %}
```

Yeah, that's a bit much. It does have the benefit of being all in one place, but this is not something that should be changing that often. I [decided to use it](https://danabyerly.com/changelog/2020-09-21/) until I could think of something better.

I was so caught up in trying to get this approach to work that I overlooked the fact that most variables are set at the layout/template level. Once I stopped hitting my head against if statements long enough to realize it, I was on to the next approach.

## Setting CSS paths in the individual layouts

Now each layout has something similar to the example below from the [layout for the homepage](https://github.com/superterrific/dana-byerly/blob/master/src/_includes/layouts/home.html)...

```html {% raw %}
{% extends "layouts/base.html" %}

{% set css %}
  {% include "css/global.css" %}
  {% include "css/home.css" %}
  {% include "css/projects-landing.css" %}
{% endset %}
{% endraw %}
```

One small drawback of this approach is that everything has to live at the layouts level, so the global styles file (e.g., global.css) needs to be included in each layout. I'm OK with that, but it's worth noting.

I had to rework how I was doing the content page layouts. Originally each section (Articles, Notes and Changelog) had its own layout that extended the base layout and called a partial with the code for the layout. Each section's layout file (e.g., article.html) sets the section's pagination between posts (e.g., read previous / read next).

If I kept this set up I would have to repeat the styles in three places, which isn't ideal. So I created a new layout called content.html that extends the base template and sets the CSS...

```html {% raw %}
{% extends "layouts/base.html" %}

{% set css %}
  {% include "css/global.css" %}
  {% include "css/content.css" %}
  {% include "css/dracula.css" %}
{% endset %}

{% block content %}{% endblock %}
{% endraw %}
```

Then in each individual content layout, I changed the extends from base.html to content.html, here's the layout for Articles...

```html {% raw %}
{% extends "layouts/content.html" %}

{% set pageHeaderTitle = title %}
{% set previousPost = collections.articles | getPreviousCollectionItem(page) %}
{% set nextPost = collections.articles | getNextCollectionItem(page) %}

    {% block content %}
    {% include "partials/post-content.html" %}
    {% endblock %}
{% endraw %}
```

By chaining the layouts together I can set the styles in one place and let the individual section layouts handle setting the section-specific items. It might seem counter intuitive, but the real action of the page layout happens in the post-content.html partial, not the layout file.

Here's a little diagram of the set-up...

{% figure %}
  <picture>
    <source srcset="/img/content-template-structure.avif" type="image/avif">
    <source srcset="/img/content-template-structure.webp" type="image/webp">
    <img src="/img/content-template-structure.png" alt="Diagram showing the content template structure." loading="lazy" />
  </picture>
  {% figcaption %}
    The content sections template structure sharing CSS across several layouts. Created using <a href="https://excalidraw.com/">Excalidraw</a>.
  {% endfigcaption %}
{% endfigure %}

## The results
One of the articles I found most helpful was [Optimizing CSS for faster page load](https://pustelto.com/blog/optimizing-css-for-faster-page-loads/) by Tomas Pustelto. There's a lot of useful info especially for bigger or team projects. Aside from the excellent overview, one thing particularly useful for this effort was learning about the [Coverage tool](https://developers.google.com/web/tools/chrome-devtools/coverage/) in Chrome Dev Tools mentioned in the 'Use code-splitting for your stylesheets' section [of the article](https://pustelto.com/blog/optimizing-css-for-faster-page-loads/). Basically the Coverage tool shows you what percentage of the loaded CSS is not being used.

Just using a single global stylesheet roughly 60% of it was unused on the homepage. After this effort only 35.8% was unused. The Coverage tool doesn't count focus and hover styles or media queries until they used (e.g, if you hover over something with the Coverage panel open you'll see the percent change). Including all of those I'm at 19% unused. I could still get the number lower, but this felt like a nice improvement.

{% figure %}
  <picture>
    <source srcset="/img/unused-css.avif" type="image/avif">
    <source srcset="/img/unused-css.webp" type="image/webp">
    <img src="/img/unused-css.png" alt="Chrome Dev Tools Coverage showing how much unused CSS is present." loading="lazy" />
  </picture>
  <picture>
    <source srcset="/img/unused-additional.avif" type="image/avif">
    <source srcset="/img/unused-additional.webp" type="image/webp">
    <img src="/img/unused-additional.png" alt="The unused number in Coverage changes as you use styles on the page." loading="lazy" />
  </picture>
  {% figcaption %}
    From the Coverage tool in Chrome Dev Tools, the top image is the default state of the homepage, with 35.8% of the styles unused. The bottom image after hovering, focusing and using media queries shows unused styles at 19%.
  {% endfigcaption %}
{% endfigure %}

By clicking on the bar chart in the Usage Visualization column you can see which styles are currently used and which are not. This is helpful for deciding what can be moved elsewhere.

Here's an example from the default state of the homepage, the styles with blue indicator (lines 476-493) are currently being used, and the styles with the red indicator (lines 495-498) are not currently being used...

{% figure %}
  <picture>
    <source srcset="/img/unused-styles.avif" type="image/avif">
    <source srcset="/img/unused-styles.webp" type="image/webp">
    <img src="/img/unused-styles.png" alt="Coverage can also show you which styles are currently being used and which are not." loading="lazy" />
  </picture>
  {% figcaption %}
    Here <strong>.hp-hero</strong> and <strong>.hp-hero a</strong> are being used but <strong>.hp-hero a:hover</strong> hasn't yet been invoked.
  {% endfigcaption %}
{% endfigure %}


## Summary
More than anything else, this was a good learning exercise. While I didn't have earth shattering gains, I did shave of about 1.2k in file size and drop overall loading time over 100ms.

{% figure %}
  <picture>
    <source srcset="/img/perf-summary-before.avif" type="image/avif">
    <source srcset="/img/perf-summary-before.webp" type="image/webp">
    <img src="/img/perf-summary-before.png" alt="Before splitting out CSS file the total load time was at 464ms." loading="lazy" />
  </picture>
  <picture>
    <source srcset="/img/perf-summary-after.avif" type="image/avif">
    <source srcset="/img/perf-summary-after.webp" type="image/webp">
    <img src="/img/perf-summary-after.png" alt="Before splitting out CSS file the total load time was at 324ms." loading="lazy" />
  </picture>
  {% figcaption %}
    Before (top image) and after (bottom image) splitting out CSS from the Performance tab in Chrome Dev Tools.
  {% endfigcaption %}
{% endfigure %}

Perhaps more important than my modest improvements is that I learned something about performance that will help me moving forward. As a bonus I also discovered yet another thing that Eleventy makes easy, so if you want to do some CSS code-splitting without using Webpack or the like, Eleventy gives you a couple of options.
