---
title: 'Regaining momentum'
summary: 'Trying to get the ball rolling again.'
date: 2023-02-10
category: 'Notes'
tags: ['IndieWeb', 'The Site', 'Side Projects', 'Studio']
---

After a little break during the holidays I had some nice blogging momentum over at the [Junk Drawer](https://danabyerly-junkdrawer.website/) in the beginning of January. And then Covid [finally caught up with me](https://danabyerly-junkdrawer.website/blog/the-kraken-got-me/). 

Before that unfortunate moment I was gearing up to do a post here. Now that I'm slowly regaining a reasonable amount of energy it seems like a good time for an update.

## The Studio
I'm still noodling on a site for freelancing. At the end of last year I replaced the Featured Projects section of the homepage with a [From the Studio](/notes/shifting-things-around/) section. I've been focusing mostly on figuring what I'll be offering and how to position it.

I have a current client that's on hold due to their enormous workload and a potential change in their business. We've already done research and I've shared my findings and recommendations. We had worked through that and had a plan when the sudden onslaught and potential shift happened. So for now that's on hold, which is fine and worked out well with my needing to take time off thanks to Covid.

I would like to have that site finished to round out my example offerings before rolling out a studio site. I currently have a personal site for a creative professional, a site for an art project and the new one is for a small business (a Lawyer). This is a good collection of the types of sites I'd like to be doing. Everyone deserves a nice site, not just people and small businesses who can afford agencies (who frequently build inaccessible, slow, bloated sites "that look nice").

## The Junk Drawer
So far the [Junk Drawer](https://danabyerly-junkdrawer.website/) is just a [blog](https://danabyerly-junkdrawer.website/blog/). Not that that's a bad thing! I'd like to also do some sort of archive-like thing, but I haven't come up with anything yet. In the meantime I had a couple of fun ideas that I'm going to add.

Last year I put together an Airtable base to track the song in my head when I wake up. I had a couple of days where I noticed that whatever song was in my head when I woke up seemed so random. I hadn't heard it or thought of it in a while, yet there it was. I did it for a little while but since I didn't have a plan it was easy to let it slip.

In the beginning of the year I was thinking about microblogging and quickly came up with an idea. I thought it would be fun to a TV blurbs microblog. Basically just small, random thoughts I have while watching TV, something [I do a lot of](https://danabyerly-junkdrawer.website/tag/tv/). My tendency is always "I'll just start a new site!" but then I decided it seemed like good Junk Drawer fodder and decided to integrate it there.

The Junk Drawer is already using WordPress so my first thought was to create a new category in WordPress (TV Blurbs) and handle it like a separate collection in Eleventy, similar to how I have [Notes](/notes/) and [Articles](/articles/) here. I anticipate that my main publishing use case will be firing off blurbs from my phone as I lay in bed and watch TV. I've heard the WordPress iOS app is nice to use so I took a look.

{% figure %}
  <picture>
    <source srcset="/img/wp-app-store.avif" type="image/avif">
    <source srcset="/img/wp-app-store.webp" type="image/web">
    <img src="/img/wp-app-store.jpg" alt="The data linked to you section of the WordPress iOS application. Contact info, search history, identifiers, diagnostics, user content, browsing history and usage data are listed as data linked to your identity and sent to WordPress." loading="lazy" />
  </picture>
  {% figcaption %}
    Does WordPress really need to collect all that data and link it to your identity to let you post to your own site? No, it doesn't.
  {% endfigcaption %}
{% endfigure %}

Yeah. No. Automatic does not need that much of my data. Since I already know how to pull data into Eleventy from Airtable this was my next thought. I wrote an article about [using Airtable with Eleventy](/articles/using-airtable-with-eleventy/) a couple of years that's still probably mostly relevant if you're interested. Airtable's iOS app is not much better...

{% figure %}
  <picture>
    <source srcset="/img/airtable-app-store.avif" type="image/avif">
    <source srcset="/img/airtable-app-store.webp" type="image/web">
    <img src="/img/airtable-app-store.jpg" alt="The data linked to you section of the Airtable iOS application. Contact info, contacts, identifiers, diagnostics, user content and usage data are listed as data linked to your identity and sent to Airtable." loading="lazy" />
  </picture>
  {% figcaption %}
    A little less than WordPress but still too much. I do have this app installed but am not using (and will not install it when I get a new phone).
  {% endfigcaption %}
{% endfigure %}

But with Airtable I can [create a form](https://support.airtable.com/docs/how-to-create-a-form-in-airtable) and fire off TV blurbs from the comfort of a browser without having to use a data hungry app. And I can trigger a deploy at Netlify when a new record is added to the Airtable base using Zapier. 

Once I settled on Airtable for the TV blurbs I decided I could also pull the wake up songs in too since they were already in Airtable. My plan is to rework the Junk Drawer homepage. The blog list will be the primary focus with TV Blurbs and the Wake Up Song as secondary lists, each with their own listing page. I don't have a timeline for this at the moment, but it's nice to have a plan.

## Tweetback
I recently created a Twitter archive locally using Zach Leatherman's [Tweetback project](https://github.com/tweetback/tweetback). I've fiddled around with some of the CSS and may restructure it a bit. I like how Henry Deroches added navigation to the top of his [Twitter archive](https://tweets.henry.codes/), so I may use a similar approach. Although I may not be brave enough to muck around with the layout as its using [Javascript as the templating language](https://www.11ty.dev/docs/languages/javascript/). I could very easily mess that up! I may just stick to fiddling with the CSS, we'll see.

Fiddling aside, I'm not 100% convinced that I'll make it public. I've been active on Twitter since the spring of 2007, but honestly most of it's just chit chat and blather. I'm not a Thought Leader or a Big Account. I didn't share any meaningful insights. I had no viral shitposts, notable bangers or things generally worthy of a public archive for all eternity. However, in the spirit of IndieWeb, I may tack it on to this site with a subdomain. Again, we'll see.

More importantly, you should [check it out if](https://github.com/tweetback/tweetback) you have a Twitter account. Even if you don't make it public, having a nice searchable archive your Tweets that you can update and modify as you see fit is terrific. And it looks like there could be some [nice enhancements](https://github.com/tweetback/tweetback/labels/enhancement) in the pipeline (I would be very interested in [this one](https://github.com/tweetback/tweetback/issues/15)). 

One of the best parts of the archive are the stats. Here are a few from mine...

### Top 5 Emoji Used in Tweets
1.  👍🏼 used 115 times on 104 tweets
2.  🎉 used 107 times on 103 tweets
3.  🤓 used 34 times on 34 tweets
4.  💸 used 33 times on 19 tweets
5.  👇🏼 used 28 times on 18 tweets
207 unique emoji on 680 tweets (2.4% of all tweets, not including retweets)

### Top 5 Swear Words
1.  `d_mn` used 149 times on 148 tweets
2.  `h_ll` used 76 times on 75 tweets
3.  `a_s` used 49 times
4.  `s_it` used 47 times on 46 tweets
5.  `b_tching` used 16 times on 15 tweets
412 swear words on 403 tweets (1.4% of all tweets, not including retweets)

And 49.2% of my tweets are replies (×16,027), potentially putting me in Reply Person territory?

## And finally
I've (hopefully!) hooked up this site to post to [my Mastodon account](https://mastodon.social/@superterrific) using IFTTT. This post will be the maiden voyage if I've set it up correctly. Fingers crossed that the formatting turns out as intended. Thanks to Matthias Ott's [handy how-to post](https://matthiasott.com/notes/syndicating-posts-personal-website-twitter-mastodon) for setting me in the right direction. You'll also want to check out Kelson Vibber's post, [How to post to Mastodon from anything using IFTTT](https://hyperborea.org/journal/2017/12/mastodon-ifttt/) as there is updated information on how to set-up the webhook portion as well as some additional formatting tips. 

If you're feeling adventurous Jeremy Keith has a post on [using Mastodon's API and Bridgy](https://adactio.com/journal/19645) and Nicolas Hoizey has one on [using a feed and GitHub action](https://nicolas-hoizey.com/articles/2023/01/07/let-s-posse-to-mastodon-with-a-feed-and-a-github-action/). 

Originally I was going to use Zapier as it's my go to automation tool, but webhooks are a premium feature and I'm not ready to upgrade there at the moment. Webhooks are available on the free tier at IFTTT. If it works out I'll also set up posts from [Junk Drawer](https://danabyerly-junkdrawer.website/) to post at Mastodon as well. Or even it doesn't go well I'll try to improve it at the Junk Drawer as I'm more likely post there next than posting here. Wish me luck!

**Update February 17, 2024**: Webhooks are [no longer available](https://www.reddit.com/r/ifttt/comments/1as8emd/no_more_free_webhook_applets/) on the free tier at IFTTT. The Pro plan is relatively affordable. Pipedream currently offers webhooks [on the free tier](https://pipedream.com/pricing).


**Update Feburary 11, 2023**: After fiddling around with several test posts, I finally got posting to work correctly. However, only using the post title and URL. I couldn't get content to display without it including the wrapping HTML. 

I found conflicting examples for how to add your access token in the webhook settings. Adding it in the URL field (?access_token=XXXXX) is what worked for me. And this is how I set-up the Body field:

```html
status=📝 New post: <<<{% raw %}{{EntryTitle}}{% endraw %}>>>

<<<{% raw %}{{EntryUrl}}{% endraw %}>>>
```
