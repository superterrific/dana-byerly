---
title: "Upgrading to Eleventy 1.0.0"
summary: 'A step-by-step for an incredibly easy process.'
date: 2022-01-30
category: 'Notes'
tags: ['Eleventy', 'The Site']
---

{% caption %}
<strong>Update</strong>: I've written a similar step-by-step for <a href="/notes/upgrading-to-eleventy-2-0-0/">upgrading to Eleventy v2.0.0</a>.
{% endcaption %}

I spent an easy, breezy few hours updating 10 projects to the [latest version of Eleventy](https://www.11ty.dev/blog/eleventy-one-point-oh/#install-or-upgrade). As a hobbyist dev with limited debugging skills I live in fear of these sorts of things. I'm happy to report the process was easy and I only encountered one issue for 10 sites.

It’s not surprising that I couldn’t find any step-by-step posts on upgrading given how easy it was. I put the steps together for myself (to do 10 times!) so I thought I’d share them.

There's a handy [Eleventy Upgrade Helper plugin](https://github.com/11ty/eleventy-upgrade-help) that will check your site against all the breaking changes. The README serves as a good summary of breaking changes that could impact your site.

## Step-by-step upgrade

1. Install upgrade helper plugin
2. Install upgrade
3. Remove upgrade helper plugin (or not!)

### Install upgrade helper plugin
This part has two steps, installing the plugin and adding the plugin to your site. You can do these in either order.

```bash
npm install @11ty/eleventy-upgrade-help
```

And then in .eleventy.js

```js
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
 eleventyConfig.addPlugin(UpgradeHelper);
};
```

I started up the first few sites after installing the plugin to make sure the plugin didn't cause any issues, and it didn't.

### Install the update
Initially when I tried `npm update @11ty/eleventy` the update didn't happen. I solved this by manually updating the version number in package.json but there's also probably a way to do it via the command line (adding @latest? maybe?).

You may not need this step but if you do, update the Eleventy version in package.json

```json
"@11ty/eleventy": "^1.0.0",
```

And then hold your breath and update...

```bash
npm update @11ty/eleventy
```
All of my projects but one had some additional dependency updates, and all of those were straightforward and fine.

At this point when you hold your breath and test your site, the upgrade helper will give you guidance on any issues in your site in your terminal.

```bash
[@11ty/eleventy-upgrade-help] PASSED `slug` to `slugify` filter
[@11ty/eleventy-upgrade-help] WARNING eleventyConfig.setDataDeepMerge(true) is the new 1.0 default. Revert with eleventyConfig.setDataDeepMerge(false);
[@11ty/eleventy-upgrade-help] WARNING The liquidjs `strictFilters` option default (in Eleventy) changed from false to true. Revert with `eleventyConfig.setLiquidOptions({ strictFilters: false })`.
[@11ty/eleventy-upgrade-help] WARNING The liquidjs `dynamicPartials` option default changed from false to true. Functionally this means `include` statements require quotes now. Revert with `eleventyConfig.setLiquidOptions({ dynamicPartials: false })`.
[@11ty/eleventy-upgrade-help] PASSED input directory .gitignore check
```

### Remove the upgrade helper plugin
* Remove the plugin from .eleventy.js
* Remove the plugin as a dependency in package.json

## Issues?
I was already using `slugify` on most of my sites and I don't use liquid or deep data merge, so I figured I wouldn't encounter too many issues. As it turns out, this post was a good test for `slugify`, which I was not previously using here.

Once I added this post the upgrade helper fired this message:

```bash
'Upgrading to Eleventy 1.0.0'
Expected values to be strictly equal:
+ actual - expected

+ 'upgrading-to-eleventy-1.0.0'
- 'upgrading-to-eleventy-1-0-0'
```

Decision time! I could update the site to use `{% raw %}{{ title | slugify }}{% endraw %}` instead of `{% raw %}{{ title | slug }}{% endraw %}` for permalinks, which would change the output to drop the special characters (in this case the periods) and replace them with dashes. Or I could just leave it as is.

Miraculously I don't have any other posts with special characters in the title. This made it an easy choice to update all my permalink instances from `slug` to `slugify` without having the additional step of setting up redirects for the changing urls.

The permalink change looks like this...

```json
{% raw %}"permalink": "/notes/{{ title | slugify }}/index.html"{% endraw %}
```

### Failed build
The showstopper issue was that one of my site's builds was failing at [Netlify]({{ tools.netlify }}). This is the kind of debugging scenario mentioned earlier that I live in fear of.

```bash
12:57:43 PM: > NODE_ENV=production eleventy
12:57:43 PM: Eleventy requires Node 12. You will need to upgrade Node to use Eleventy!
```

OK, but I'm using 15.3.0 locally, so I'm not sure what to make of that. Fortunately it was the Eleventy community to rescue by way of a [post by Sean McPherson](https://www.seanmcp.com/articles/upgrading-an-eleventy-site-to-1-0-0/) on the same issue.

Should you encounter this issue, the fix is to add an environment variable to your Netlify deploy settings that specifies a Node version.

1. In the settings for your site, go to Build & Deploy > Environment
2. In the Environment variables section click "Edit variables", which will make the section editable
3. Click "New variable" and add the following...

```html
Key: NODE_VERSION
Value: 16.13.2
```

After adding the environment variable the site deployed!

**Update**: Maël Brunet [offered a helpful tip via Twitter](https://twitter.com/MaelB/status/1488140840673452035), pointing out that using a `.nvmrc` file to store the Node version should have the same effect. I'm not using [Node Version Manager](https://heynode.com/tutorial/install-nodejs-locally-nvm/) (nvm), but you can create the file manually and Netlify, or presumably any host, will read the file.

To test it out I deleted the environment variable at Netlify and created file named `.nvmrc` at the root of my project. In the file I added the version number like so...

```text
16.13.2
```

It worked as expected! Christopher Kirk-Nielsen [also suggests](https://twitter.com/ckirknielsen/status/1488159743097151491) checking to see if you already have a `.nvmrc` file that needs to be updated. Even if you didn't create a file you might be using a starter project that included one.

Regardless of which approach you use, be sure to check the [recommended latest version](https://nodejs.org/), which might be different than my example.


## Happy upgrading!
You may encounter issues I didn't depending on your set-up. If that's the case I wish you luck and hope your debugging skills are better than mine! Either way, happy upgrading.
