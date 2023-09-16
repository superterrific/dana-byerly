---
title: 'Upgrading to Eleventy 2.0.0'
summary: 'A step-by-step for an incredibly easy process, again.'
date: 2023-02-26
category: 'Notes'
tags: ['Eleventy', 'The Site']
---

Ah, Eleventy. Just like the [upgrade to v1.0.0](/notes/upgrading-to-eleventy-1-0-0/), you could not ask for an easier and less problematic major upgrade. Eric Bailey put it best in a [three toot thread](https://social.ericwbailey.website/@eric/109914908787346813)

> When I update the site to use version 2.0.0 I'll actually be removing dependencies, and not adding more. I am also anticipating next to no adjustments to the site's underlying code.
> 
> That's rare and special.

Indeed. Just like the update to v1.0.0 I only encountered a couple of build fails at Netlify that were easy to overcome. I also tracked the node_modules directory size reduction for each of the eight sites I updated. More on both of those in a bit. 

If you're not sure what's new in v2.0.0 the Eleventy blog lists all the [features and breaking changes](https://www.11ty.dev/blog/eleventy-v2/). Stephanie Eckles also has a useful in-depth look at the [new features and considerations](https://11ty.rocks/posts/new-features-upgrade-considerations-eleventy-version-2/) at 11ty Rocks.

## Step-by-step upgrade
Also [like last time](/notes/upgrading-to-eleventy-1-0-0/), I made a little step-by-step cheat sheet for myself so I  could easily copy and paste commands, snippets and the like. It's based on the instructions in the [Eleventy Upgrade Helper plugin](https://github.com/11ty/eleventy-upgrade-help). 

1. Upgrade Eleventy to v2.0.0
2. Install Eleventy Upgrade Help plugin
3. Add Eleventy Upgrade Help plugin to your site
4. Run `build` command and evaluate plugin output, address any issues
5. Uninstall Eleventy Upgrade Help plugin and remove from your site
6. Optional: Uninstall Browsersync and remove any configurations from your site

### Upgrade to version 2.0.0
Unlike the the v1.0.0 upgrade, Eleventy gets upgraded first.

```bash
npm install @11ty/eleventy@2
```

A couple of my sites I had some security warnings that were easy to fix with `npm audit fix`, mostly for Luxon. I chose to address those at this step.

### Install the Upgrade Help plugin and configure

```bash
npm install @11ty/eleventy-upgrade-help@2
```

Add the plugin to your `.eleventy.js` or newly available naming of `eleventy.config.js`:
```js
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
 // Should be the last plugin if there are existing plugins
  eleventyConfig.addPlugin(UpgradeHelper);
};
```

### Run the build command and evaluate the plugin output
I only had `serve` and `production` commands for my sites, so I added a `build` command. I don't know if it's problematic to run serve instead of build for this step. I'm guessing not, but if you don't have a build command you can add one to the `scripts` section of your `package.json` file:

```json
"scripts": {
	"start": "npx eleventy --serve",
	"build": "npx eleventy", /* <--- add this! */
	"production": "NODE_ENV=production eleventy"
},
```

Then run the build command:
```bash
npm run build
```

The output for this version is pretty verbose compared to v1.0.0 and includes a lot helpful information should you encounter issues. Instead of adding it here I [created a Gist ](https://gist.github.com/superterrific/238c880e7b9542c96558153a5983c73b) if you'd like see what to expect.

Since I didn't have any issues this was pretty much a formality. If you use Liquid, Silvestar Bistrović [has a helpful post](https://www.silvestar.codes/articles/migrating-to-eleventy-2-0/) on the issues he encountered and how he addressed them.

### Uninstall the Upgrade Help plugin and remove from config file

```bash
npm uninstall @11ty/eleventy-upgrade-help@2
```

And remove the configuration from your `.eleventy.js` or `eleventy.config.js` file.

At this point I also removed my configuration for Browsersync and uninstalled it.

```bash
npm uninstall browser-sync
```

One thing I'm hoping to see added soon is the ability to configure the new [Eleventy Dev Server](https://www.11ty.dev/docs/dev-server/) to open when the server starts. This is the only thing I miss from Browsersync, but it's not worth using Browsersync just for that. There's currently a feature request if you'd to [add your comment or vote](https://github.com/11ty/eleventy-dev-server/issues/28) (by adding a thumbs up emoji).

## Failed builds at Netlify
When I upgraded to v1.0.0 one site had [failed builds at Netlify](/notes/upgrading-to-eleventy-1-0-0/#failed-build) due to a unsupported Node version. And of course the Eleventy community came through with several options on how to handle the situation.

This time around I had two sites that failed because they were trying to build with an older version of Node. I knew what to do to fix the issue, but I wanted to understand why it was happening. 

Dan Urbanowicz has a handy post that covers three options for [manually setting the Node version for Netlify builds](https://danurbanowicz.com/posts/2022/10/19/how-to-manually-set-the-node-version-for-your-netlify-builds/). 

* Using a .nvmrc file
* Setting a build environment variable for the site in Netlify's admin section
* Adding a build.environment to the netlify.toml file

Another option is to set it in the engines section of your `package.json` file, but apparently that approach isn't currently supported by Netlify (long standing [open issue here](https://github.com/netlify/build-image/issues/53)).  

Neither of my failed build sites specified the Node version in any of these places.  And since the site passed on Node version in the Upgrade Help plugin I moved on to Netlify to find an anwser.

When there is no Node version specified, Netlify will use the default version set for the site's build image. The current build image is Ubuntu Focal 20.04. The [default Node version](https://docs.netlify.com/configure-builds/available-software-at-build-time/) for this build image is 16. The version installed for my failed build sites is 12.18.0.

My deploy logs show that the build is using a cached version of 12.18.0

```html
12:32:47 PM: Started restoring cached Node.js version
12:32:49 PM: Finished restoring cached Node.js version
12:32:49 PM: v12.18.0 is already installed.
12:32:49 PM: Now using node v12.18.0 (npm v6.14.4)
```

Once I figured this out I removed the explicitly set Node version from my site and tried a build again, knowing it would fail. Then I retried the build with the [option to clear the cache](https://docs.netlify.com/site-deploys/manage-deploys/#retry-deploy-from-latest-branch-commit), but no luck. After rummaging around the Netlify Support Forum I found a [similar issue that turned out to be on point](https://answers.netlify.com/t/build-fails-with-focal-image-due-to-unwanted-old-ruby/40682). 

> Why is my build using all these old versions by default, rather than the Focal defaults?  It feels like Netlify somehow cached dependency versions from Trusty (older build image) but isn’t updating them for Focal defaults?

This is what I suspected was happening for my failed builds too. The [suggested fix](https://answers.netlify.com/t/build-fails-with-focal-image-due-to-unwanted-old-ruby/40682/4) for this issue also worked for mine.

> go to **Site settings > Build & deploy > Build settings** , select **Link to a different repository** , and then select the same repository to re-link your site to it.

According to the reply from support, the versions for major languages is set when a site is first created. My sites with build fails were created a few years ago when the default build image was Ubuntu Xenial. When I updated those sites to Ubuntu Focal the cached major language versions were not updated to match the Focal defaults. By reconnecting the repository I  was able to get the updated default language versions.

If you have this issue and don't feel like reconnecting your repos you can always set your Node version using one of the methods mentioned above (.nvrmc file, netlify.toml or build environment variable). If you use one of these methods Dan Urbanowicz's article tipped a handy set and forget approach.

Instead of setting an explicit version, e.g., 18.12.1, the LTS or latest version can be set using `lts/*`. Before I discovered the repo reconnection fix I added a `build.environment` section my `netlify.toml`, which worked like a charm.

```js
[build.environment]
  NODE_VERSION = "lts/*"
```

## Spring cleaning for node_modules
Back to Eleventy, I had a [little thread at Mastodon](https://mastodon.social/@superterrific/109899278884322557) (OK, two toots) as I updated my sites throughout week, mainly to share my awe at the massive reduction in dependencies. As promised, here are all the sites I updated with the before and after size of the node_modules directory (in disk size).

| Site         | Original Size     | New Size |
|--------------|-----------|------------|
| danabyerly.com | 92.7 MB | 45.8 MB |
| [danabyerly-junkdrawer.website](https://danabyerly-junkdrawer.website) | 92.4 MB | 40.4 MB |
| cats-in-residence.org | 86.2 MB | 38.6 MB |
| horseracingdatasets.com | 59.6 MB | 32.5 MB |
| omnisurface-stars.com | 82.6 MB | 33.2 MB |
| pile-of-hrefs.com | 123.3 MB 👀 | 30.7 MB |
| rhondalieberman.com | 83.7 MB | 33.2 MB |
| stakes-profiles.com | 90.5 MB | 41.3 MB |

## Happy upgrading
You may encounter issues I didn’t depending on your set-up. If that’s the case I wish you luck!

