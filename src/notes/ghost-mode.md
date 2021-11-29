---
title: "How to turn off Browsersync ghostMode in Eleventy"
summary: 'A quick how-to.'
date: 2021-07-04
category: 'Notes'
devto: true
tags: ['Eleventy']
---

In your ```eleventy.js``` file within the module.exports section add the following...

```js
  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false
  });
```

Eleventy uses [Browsersync](https://browsersync.io) to serve your site locally. ghostMode [is the option](https://browsersync.io/docs/options#option-ghostMode) that mirrors clicking, scrolling and other actions across devices. For example, if you have the same page open in Firefox and Chrome and click a link in Firefox, both browsers will load the linked page. Scroll the page on your laptop and it will also scroll your phone or tablet, etc.

I've found this feature to be very handy but encountered a scenario where I needed to disable it. I was working on a project and fired up [Sizzy]({{ tools.sizzy }}) to view it across browsers and devices. It had been awhile since I used Sizzy and I was greeted with this message...

{% figure %}
  <picture>
    <source srcset="/img/ghostMode.avif" type="image/avif">
    <source srcset="/img/ghostMode.webp" type="image/webp">
    <img src="/img/ghostMode.png" alt="An informational pop-up that reads: Browsersync can conflict with Sizzy's synchronization features. We recommend turning off Browsersync's ghost mode option if you are having troubles using Sizzy." loading="lazy" />
  </picture>
{% endfigure %}

I didn't even know ghostMode was an option and thought Browsersync just worked that way! After a bit of searching I found [this thread](https://github.com/11ty/eleventy/issues/841) about disabling it in the [Eleventy Base Blog starter](https://github.com/11ty/eleventy-base-blog) and took the example from there.

There are plenty of other [configurable options](https://browsersync.io/docs/options) in Browsersync. 11ty Rocks also has an example for [opening a browser on launch](https://11ty.rocks/eleventyjs/browsersync/).

Happy reloading!
