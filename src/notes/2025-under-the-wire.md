---
title: "A post under the wire"
summary: "Peaking out from under my rock to look forward."
date: 2025-12-31T16:15:00Z
category: "Notes"
tags: ["The Site", "Year in Review"]
---

It's finally happened. A year went by without an update to this site, unless you count the very [recent update to the latest version of Eleventy](/changelog/2025-12-24/), which was so easy I don't even think it counts. 

Things have been beyond busy at work for the past two years, and time for side projects was the first thing to go. I'm hoping to improve that balance in the coming year.

Despite that, I did manage to do one little project. 2025 marked my 30 year anniversary in New York City, and to mark the occasion I posted one photo of New York  City for each year that I've lived here over the course of a month. I wrote about the project over [at the Junk Drawer](https://danabyerly-junkdrawer.website/blog/30-years-in-new-york-city/) and created a [Pixelfed account ](https://pixelfed.social/30inNYC) to post the images. I'd like to eventually add it here via a subdomain, but it's low on the priority list. 

## Looking forward
As for this site, I've started to imagine how I want to change it to better accommodate my current state and interests. When I launched the site five years ago I was very much reacquainting myself with front-end skills that had I let lapse. Building a site and writing about all the things I was learning was the perfect way to learn and share. 

Despite letting this site wither into a collection of old forgotten posts, there are several posts that still get regular traffic.  When I think about all the posts that I've found helpful over the years, and ones that I've visited with regularity when I need to remember to how to do something, I feel like the spirit of the web is alive and well knowing that something I've posted here could be helping someone.

One of the things I've chuckled about, especially over the last couple of years, is that anyone visiting this site would probably not realize that I'm a designer. Especially since I don't write about design or have a case studies section. Most designer's sites that I've seen are geared towards job hunting rather than having a place on the web to do one's own thing. And this site is very much the latter. 

Of course there are exceptions, and a few notable designers that post with regularity that I enjoy are [Tyler Sticka](https://tylersticka.com/), [Stéphanie Walter](https://stephaniewalter.design/) and [Benjy Stanton](https://www.benjystanton.co.uk/). 

Stéphanie publishes a helpful [weekly roundup](https://stephaniewalter.design/blog/) and has loads of [great learning material](https://shop.stephaniewalter.design/?utm-source=swblog). Tyler's journal is a nice mix of personal interest and many helpful "where the rubber meets the road" CSS and design posts. If you're looking to learn more about how to prototype in code check out [Why I like designing in the browser](https://cloudfour.com/thinks/why-i-like-designing-in-the-browser/) and [Designing in the browser: five tips for beginners](https://cloudfour.com/thinks/designing-in-the-browser-five-tips-for-beginners/). Benjy frequently [shares his process and experiences](https://www.benjystanton.co.uk/blog/) working predominantly in the Government space in the Wales. It's great to a peak into a thoughtful, mature practice that focuses on accessibility and web standards as well usability, research and the craft of interaction design. 

## An aha moment
Monday mornings are an onslaught of design newsletters. It kills me that everyone sends everything on Monday morning. I don't give a shit about inbox zero, but I have a strict RSS zero policy, and Monday mornings are challenging.

That annoyance aside, for the last year or so most design newsletters are predominately full of "how to survive and thrive in our new AI world" Medium articles. These generally take two forms, "why aren't you doing it already OMG you're going to be left behind' or "yikes, it's happening already you're going to be left behind". A little hyperbolic? Perhaps, but the uptick in these types of posts has been notable, and tiresome. 

As my winter break kicked off I saw that post that not only broke the aforementioned mold, but resonated in a way that crystalized some disparate thoughts I've had about this site. A bit of a clickbait-y title, [Why AI is exposing design's craft crisis](https://uxdesign.cc/why-ai-is-exposing-designs-craft-crisis-434bcb652848), but if you care about design it's well worth a read.

The first part of the article does the ground work to layout the issues of AI tools in the absence of expertise, but the article isn't really about AI. It's about the design industry's decision to abandon technical literacy when the Great Web Design Split happened 15 or so years ago, and what we've lost in the process.

> This wasn’t gatekeeping by engineers. This was the design industry telling itself a story about what designers needed to know. The story went like this: designers focus on users, empathy, and problem-solving. Engineers focus on implementation, code, and technical constraints. Clean separation of concerns. Everyone stays in their lane.
> 
> What we lost wasn’t the ability to code. What we lost was the ability to participate in technical conversations.


This article feels a bit like the design flip side of Chris Coyier's 2019 juggernaut [The Great Divide](https://css-tricks.com/the-great-divide/) about what's been lost in front-end development in a framework world. It's truly depressing to highlight the reality of there being so few people who understand what I like to call the "where the rubber meets of the road of design". When there aren't many developers or designers who understand the particulars, and specifically how to make good trade-offs, we end up with all the WTF moments we too often have when trying to go about our daily digital business.

I'm all for designers learning to code, but that's not the argument here. 

> Let me be crystal clear: this is not an argument that designers should learn to code production software.
> 
> This is about strategic literacy. Understanding enough about technical systems to make informed design decisions and advocate effectively for users when those decisions are being made.
> 
> There’s a difference between writing production code and understanding what code does. Between implementing a database schema and knowing why data models influence user workflows. Between configuring a build pipeline and recognizing when technical debt is accumulating in ways that will limit future design possibilities.

As a ancient person who came out of the Web Design era and stuck with design rather than switching to a development role, I cannot underscore how true these statements are. And it's not like designers don't want to better understand technical considerations, at least the ones I work with. It's just not something that's taught or prioritized as a design skill.

I do a lot of mentoring and upskilling in my team. Some of it's front-end focused along the lines of how to evaluate code or make suggestions to developers who lack front-end skills (and just do whatever Figma Dev Mode says, which is not always great). 

But more often it's understanding data models and APIs, or thinking about validation, both front-end and back-end, and how it informs error handling and error messaging. And all the other technical considerations along the way that can inform design, or more importantly, **can be informed BY design**.

As an example, my advice to designers who want to improve their interaction design skills and technical understanding is to work on upload patterns. Some considerations...

* What are all the constraints? (e.g., file type(s), max file size, amount of files)
* Is this validation happening before the files are uploaded? (see above) 
* Are there any additional validations happening after the file has been uploaded? (e.g., validating field types and values, this is one is common if using a spreadsheet template, hello Enterprise Design!). 
* In the case of multiple file uploads, how should the various error states be handled across multiple files? (e.g., one file is the wrong the type, one is too big, etc.)

My point is that "users need to a way to upload files" is much more complex than making sure the text in your dropzone has sufficient contrast (it usually doesn't) and the instructional text is easy to understand (it usually isn't). Have a discussion with the developers on your team to understand their approach or make sure they're thinking about solving the problem in a way that makes it easy for user's to gracefully handle all the many errors that can occur. 

In the upload scenario, and so many others, the trick is that you as the designer also need to have some understanding of the developer's choices, if not you not could end up a with technical debt cluster if you insist on things that can be hard to achieve.

> The consequences show up everywhere. [UXPin research](https://www.uxpin.com/studio/blog/10-ways-to-improve-design-to-development-handoff/) found that 62% of developers spend significant time redoing designs due to communication breakdowns. Not because designers made bad aesthetic choices. Because designers proposed things that were technically nonsensical, or missed constraints that would have changed the entire approach.

But honestly I don't think there are a lot of ways for designers to go about learning these sorts of things outside of mentoring. And that's a problem. I'm not saying there's nothing out there, part of what I'm going to do as I narrow down ideas is to see what is out there. I know there are some good deep dives on Smashing and Baymard that I've referenced from time to time, but that doesn't mean there shouldn't be more. And if you're a designer with technical literacy you should share that knowledge too!

## So now what
Back to the site updates. This made me think that the way to back to this site is write more about technical literacy in design. Not because it's something I'm learning about as was the case for most of the writing on this site to date, but because I want to share what I know. And the above article does a great job of outlining why these are important skills for designers. 

As [I said on Mastodon](https://mastodon.social/@superterrific/115775410525154473), mostly to try to hold myself accountable, "Hoping to focus on giving designers more technical context for decision making & collaboration."

I don't have a grand plan and I'm not brimming with energy at the moment. And next week I'll be back in the work vortex. But, I do want to do several things...

* Rework the homepage to be a bit more simple - will probably take the "working in the open" approach and strip it back and slowly build it up
* Start to write about technical concerns for designers, again, no grand plan but I have a few notes
* Try REALLY hard not to ignore the first two bullets and just rearchitect my CSS and call it a day

I think I'm going to leave the interior pages the same for now, and maybe always. We'll see. Hopefully I'll eek out a post or two in the coming months and see where it takes me. And I guess if I get my act together and actually do this I'll have to stop calling this my web dev site! My design dev site?

Until then, here's to a better 2026.







