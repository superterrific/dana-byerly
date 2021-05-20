---
title: 'Testing Forestry CMS with Eleventy'
summary: 'I created a test site to learn about using Forestry CMS with Eleventy.'
date: 2021-05-19
category: 'Notes'
tags: ['Eleventy', 'Side Projects']
---

One of the things on my to do list has been to take a closer look at CMS options for [Eleventy]({{ tools.11ty }}). Aside from being curious about how easy it would be to set up, I might have a couple of projects coming up where the content would be created and maintained by someone who wouldn't want to use an editor to GitHub flow.

## Process
I started by creating a simple little site locally that included...
* A Homepage
* Posts and a post listing page
* Tags and a post listing page by tag
* Pagination
* A static page

I wanted to test any prospective CMS using a site I created rather than a starter. Integrating something I built rather than poking at something someone else built felt like a better opportunity to learn, or at least maybe a more efficient one!

I started with [Forestry]({{ tools.forestry }}). I wanted to ease in with a Git-based CMS and Forestry provided an "import your site" option, making it easy to get up and running with my own site. Both Forestry and [Netlify](https://www.netlifycms.org/) provide a "use a starter project" path as well.

## Findings
Overall it went pretty smoothly and ended up being a fun little project. I learned what I set out to learn and feel Forestry would be a good pick for the projects I have I mind.

After getting the site set up in Forestry [I deployed it to Netlify](https://vigorous-benz-80f8e4.netlify.app/). It's worth noting that Forestry provides a way to [set up previews](https://forestry.io/docs/previews/about-previews/),  so you can do a lot before you ever deploy to a host.

The test site, cleverly named [CMS Test](https://vigorous-benz-80f8e4.netlify.app/), has a post about each of the elements I included, plus a kick off post and wrap-up to discuss likes and dislikes. Rather than writing it up here you can read more at the test site.

Here's what's covered...
* [Kick off](https://vigorous-benz-80f8e4.netlify.app/posts/kicking-it-off/) - Overview of the project, not that dissimilar from this post but more succinct
* [Images](https://vigorous-benz-80f8e4.netlify.app/posts/images/) - Within a template and within a body of the post
* [Snippets](https://vigorous-benz-80f8e4.netlify.app/posts/snippets/) - Creating reusable text or code
* [Date field](https://vigorous-benz-80f8e4.netlify.app/posts/date-field) - Options for handling dates
* [Drafts](https://vigorous-benz-80f8e4.netlify.app/posts/drafts/) - Setting up drafts
* [Wrap up](https://vigorous-benz-80f8e4.netlify.app/posts/wrap-up/) - Pros and cons

There are plenty of things Forestry has to offer that I didn't try out, but I feel like I have a solid starting point when I need it. It's also nice to have the site as a reference.

## Next steps
At some point I might clean up the test site, add a few things like a 404 and RSS, and make it a proper [Eleventy starter](https://www.11ty.dev/docs/starter/). Even if I don't go that route I'll use the structure and same approach if and when I test any other CMS. I might also try out an API-based CMS like [Sanity](https://www.sanity.io/) as well as [Netlify](https://www.netlifycms.org/), which is also Git-based.

If you'd like to read more about what I learned, head over to [CMS Test](https://vigorous-benz-80f8e4.netlify.app/) and check out the posts. You can also [view the repository](https://github.com/superterrific/cms-test).
