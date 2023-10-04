---
title: "Ye olde Twitter archive"
summary: "Unleashing 15 years of chit chat into the wild."
date: 2023-10-04T13:00:00Z
category: "Notes"
tags: ["IndieWeb", "Side Projects"]
---

Earlier in the year I [started fiddling around](/notes/regaining-momentum/#tweetback) with creating an archive of my tweets using [Tweetback](https://github.com/tweetback), an open source project by [Eleventy]({{ tools.11ty }}) creator Zach Leatherman.

> I’m not 100% convinced that I’ll make it public. I’ve been active on Twitter since the spring of 2007, but honestly most of it’s just chit chat and blather. I’m not a Thought Leader or a Big Account. I didn’t share any meaningful insights. I had no viral shitposts, notable bangers or things generally worthy of a public archive for all eternity. However, in the spirit of IndieWeb, I may tack it on to this site with a subdomain. 

In addition to being unsure if I even wanted to share it publicly, I was unsure of how much I'd be able to modify the layout...

> I’ve fiddled around with some of the CSS and may restructure it a bit. [...] Although I may not be brave enough to muck around with the layout as its using [Javascript as the templating language](https://www.11ty.dev/docs/languages/javascript/). I could very easily mess that up! I may just stick to fiddling with the CSS, we’ll see.

A few weeks ago I randomly [picked it back up again](https://mastodon.social/@superterrific/111049111542103143). I'm happy to report that I overcame my fear and was able to make almost all of the changes I wanted, even modifying a fair bit of JavaScript. And now I've [unleashed it into the wild.](https://tweets.danabyerly.com/)

It felt pretty good to be able to make modifications that I thought were beyond my ability. I won't be using JavaScript as a templating language in my own projects, but that's one of the many great things about [Eleventy]({{ tools.11ty }}), I don't have to. We all can chose to work in the way that suits us.

## Some changes include
* Adding a skip link
* Changing the top level navigation to include [most recent](https://tweets.danabyerly.com/recent/) and ["popular"](https://tweets.danabyerly.com/popular/)
* Reworking `<h1>`  to be page specific instead of the site title
* Adding focus indication
* Adding some open graph meta tags
* Giving the search input border more contrast, wanted to remove, or give the [Pagefind](https://pagefind.app/) placeholder more contrast, but couldn't figure out how to do it
* Swapping out the Twitter icon with a local one, the original was calling it from Twitter
* Removing the account avatar link at the tweet level

## Fun with search
The search is a great addition. I had a lot of fun playing around with it, finding random missives and WTF worthy stuff.

A sampling, including links to relevant examples...

* Mentioned procrastinating [25 times](https://tweets.danabyerly.com/990380335975288837/)
* Said "ugh" [186 times](https://tweets.danabyerly.com/551456325516152833/) (see image below) 
* Mentioned The Sopranos [10 times](https://tweets.danabyerly.com/1082797212629901312/) (that seems low) 
* Mentioned NYC, where I've lived for almost 30 years, 229 times ([garbage piles](https://tweets.danabyerly.com/1397693948211208194/), [snobbery](https://tweets.danabyerly.com/1106676925756522496/), [nightmares](https://tweets.danabyerly.com/479620161314381824/))  
* Mentioned L&O, my shorthand for [Law and Order](https://tweets.danabyerly.com/1443013766069821441/ ), [38 times](https://tweets.danabyerly.com/687667995624222720/) and used  #LawAndOrder [10 times](https://tweets.danabyerly.com/687460294038286336/) and mentioned my favorite detective, Lennie Briscoe, [12 times](https://tweets.danabyerly.com/904832428459646976/) 
* [General wreckiness](https://tweets.danabyerly.com/932484691/ ) 
* [Out of context missives ](https://tweets.danabyerly.com/27474311/)
* [Unspecified shout outs](https://tweets.danabyerly.com/30521581/) 
* [And an early observation ](https://tweets.danabyerly.com/24130111/)

{% figure %}
  <picture>
    <source srcset="/img/tweetback-ugh.avif" type="image/avif">
    <source srcset="/img/tweetback-ugh.webp" type="image/web">
    <img src="/img/tweetback-ugh.jpg" alt="Search results for the term ugh showing several Tweets where all I said was ugh." loading="lazy" />
  </picture>
  {% figcaption %}
    Ugh.
  {% endfigcaption %}
{% endfigure %}

## Subdomain
I stuck with my original idea of tacking it on here with a subdomain, which was very easy. One bonus that I didn't think of when I decided on the approach was that there was no propagation time because the top-level was already propagated.  And of course there's always not paying for yet another domain.

I also noticed some love for subdomains recently. Gaston Rampersad mentioned [being on the bandwagon](https://mastodon.social/@gastonrampersad/111105474689709115) when sharing a cool site he made [for his dog](https://scout.gaston.wtf/). Chris Coyier also recently had a [pro-subdomain post](https://chriscoyier.net/2023/09/21/use-subdomains/).

## What's next
And now that I have my subdomained [Tweet Archive](https://tweets.danabyerly.com/), I have to figure out how to link to it from here. I have a few ideas for reworking all the navigation. Until then I added it to my [Links page at the Junk Drawer](https://danabyerly-junkdrawer.website/links/).