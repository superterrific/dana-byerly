---
title: 'Finally, a new site'
summary: 'After many fits and starts I finally have a proper site. Let me tell you all about it!'
category: 'Articles'
date: '2020-09-06'
tags: ['Eleventy', 'The Site']
---
It's been awhile since I've had a personal site beyond my side-projects, and I've been wanting to change that for awhile.

## Slowly in the beginning
I started to think about it last year and quickly put together a little one-page placeholder site that's [archived here](/archive/01/). Once I got the placeholder site out there I started trying to approach it as a "real" project rather than something I was just fiddling with. I made a ton of notes, and did a ton of research. I made a problem statement. I made a [Notion]({{ tools.notion }}) board and filled it up with tasks, and then ignored it. I usually use [Trello]({{ tools.trello }}) for boards, so I made a Trello board and filled it up with tasks, and then ignored it too.

After doing so much thinking, researching and attempting to plan I just let it sit there for awhile, knowing I would eventually come back to it. In the meantime I [reworked a side-project](https://twitter.com/superterrific/status/1223416466965508098), threw together [another new project]({{ projectPages.pile }}) and then [fiddled around with some design concepts](https://twitter.com/superterrific/status/1233926346402881541) (that I mostly tossed with a few exceptions).

I knew I wanted to use [Eleventy]({{ tools.11ty }}), and tried playing around with it on my own, [but I didn't get very far](https://twitter.com/superterrific/status/1173747434880733186). I already knew how to use partials and templates, and I understood static site generators in general, but my front-end skills are very front of the front-end and light on Javascript, so I just couldn't get that far on my own.

Eventually I put my initial Eleventy floundering aside too, thinking that at some point I could come back and figure it out enough to get something out there. But then [Andy Bell](https://twitter.com/hankchizljaw) created the [Learn Eleventy from Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) course and the prospect of being able to make this site started to look hopeful!

Andy's teaching and writing style work well for me, his how-to articles in the early issues of the [Piccalilli newsletter](https://piccalil.li/newsletters/0/) were incredibly helpful right at the time I was getting serious about leveling up my CSS. I took part in the [Front-end Challenges Club](https://piccalil.li/category/front-end%20challenges%20club/) and got a lot out of that effort as well. So it was no surprise that the [Eleventy course]((https://piccalil.li/course/learn-eleventy-from-scratch/)) was exactly what I needed to go from "I think I might be able to figure Eleventy out, maybe?" to being able to understand [the Docs](https://www.11ty.dev/docs/) (for the most part!) and solve problems on my own. I highly [recommend the course](https://piccalil.li/course/learn-eleventy-from-scratch/).

## Finally, progress
A little over a month ago I finished the course then [started the site again](https://twitter.com/superterrific/status/1285215442940944384), this time knowing I could do it. It took longer that it normally would have, not only because I was ramping up on Eleventy, but because I was designing as I went. Normally I would've made a static HTML/CSS version and then integrated it, but it wasn't too terrible doing it this way.

At first I was focused on taking what I learned in the course and seeing what I could do with it. Pretty quickly I was able to do all sorts of things, like install plugins and change things around to be more to my liking. Soon I was out there reading posts and lengthy discussions of issues at Github as well as looking at starter projects or repos on Github, and for the most part I understood what was going on! This was really a great feeling.

Eventually I started focusing more on the design, which of course would lead to more investigation and poking around to find answers... you know, the fun stuff. I used some things from [initial rough design](https://twitter.com/superterrific/status/1233926346402881541), like the limited [color palette](https://codepen.io/superterrific/pen/wvBwLKL) from the placeholder site but let the site and design unfold as I worked on.  

It was so much fun looking around to see all the many ways people set up their projects or solved problems. One of the things I like the most about Eleventy is the flexibility and vast range of ways to accomplish things. It feels very inclusive to allow people to use their own preferred approaches.

## Thank you one and all
There were a lot of resources that helped me figure out various things on this site. I'm sure I'll miss a few, but hopefully not!

### Snazzy gradient hover on site title
[This post by Sarah Fossheim](https://fossheim.io/writing/posts/css-text-gradient/) was straightforward and useful, especially since gradients are one of the things in CSS that don't come easy to me.

### Creating the All Tags page
This is one of those "there are several ways to solve this problem" items. This [discussion at GitHub was very useful](https://github.com/11ty/eleventy/issues/927). I ended up [using one from this example](https://github.com/11ty/eleventy/issues/927#issuecomment-585539708) with a few small modifications. It didn't require creating a filter or a tag list collection (check the [Eleventy Base Blog starter project](https://github.com/11ty/eleventy-base-blog) for that approach!).

One thing to note about the approach I took is that collections show up in this list in addition to tags. That ended up being OK for me, but if you want more control the Base Blog approach is probably better for you.

Here's what I used, which [resulted in this](/tags-all/).

```html
<ul class="flow-0">
{% raw %}{% for tag, posts in collections | dictsort %}
{% set tagUrl %}/tag/{{ tag | replace(' ', '-') }}/{% endset %}
  <li><a href="{{ tagUrl }}" class="tag-cap">{{ tag }}</a> ({{ posts | length }})</li>
{% endfor %}{% endraw %}
</ul>
```
{% caption %}
<strong>Note:</strong> <a href="/changelog/">I updated this example</a> to remove the <code>aria-labeledby</code> as it was overly verbose given that there is similar text on the page.
{% endcaption %}

I also [noticed this article](http://dirtystylus.com/2020/09/01/eleventy-tag-list-sorting-and-post-count/) earlier in the week with a similar approach to the Base Blog.

### Applying an "active" style to current nav item
In [Learn Eleventy from Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) there's a nice approach to navigation that uses a [global data file](https://www.11ty.dev/docs/data-global/) and a little bit of Javascript to apply an "active" style to the current page or pages within a section, such as posts within the Articles section.

Initially I was going to have only one collection for writing and I was not going to use tags in project posts. Using this approach all the tags would've been for things in the Writing section, and I wanted to apply the "active" style to the Writing nav item when viewing a tag listing page. For example on the listing page for [all the posts tagged "Eleventy"](/tag/eleventy/) the Writing navigation item would have the "active" style.

This was just beyond my grasp with the global data and JS approach! Luckily [I had saved this article](https://bryanlrobinson.com/blog/using-nunjucks-if-expressions-to-create-an-active-navigation-state-in-11ty/) by Bryan Robinson. It took a different approach to creating the navigation that helped me  to do exactly what I wanted.

As it turns out I now have two writing collections and am using tags in project posts, so that approach no longer makes sense, so I'm back to the data file and JS solution, but it was still a very useful post!

### Making paired shortcodes
This [straightforward five minute video](https://www.youtube.com/watch?v=nUlB8SR039w) by Alex Carpenter will have you making [paired shortcodes](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes) in no time. This was very useful to me, and I probably went a little paired shortcode mad with five and counting. I guess I'll see if I really use them all.

### Responsive images
I dipped my toes in the srcset waters and [this easy to understand explainer from Cloud 4](https://cloudfour.com/thinks/responsive-images-the-simple-way/) helped immensely. At first I manually produced the different sizes, which was kind of a mistake and I think lead to some Lighthouse dings, but I redid them [using this resource](https://www.responsivebreakpoints.com/) listed in the article and that helped. I probably still need to work on the images, and I might bite the bullet and use Cloudinary or Imgix, but this article was the most helpful one I found in terms of quickly ramping up.

### Limiting number of posts displayed on a page
This is another one that can be accomplished in multiple ways. I ended up using the filter that [Style Stage](https://stylestage.dev/) by Stephanie Eckles  is using (hoping to contribute there eventually!). When I was trying to think of examples I remembered that Style Stage shows three featured contributions and sure enough that solution was the most direct and easy to understand of all the ones I found, which was no surprise [considering Stephanie's writing](https://moderncss.dev/)!

In the <code>module.exports</code> section of your .eleventy.js file add...
```js
eleventyConfig.addFilter('limit', function (arr, limit) {
  return arr.slice(0, limit);
});
```

And then to display a limited amount of posts from a collection, use this...
```css
{% raw %}{% for item in collections.writing  | limit(2) %}
 ... your template code here ...
{% endfor %}{% endraw %}
```

I'm using this on my homepage to display what's in the Recent Writing section.

### Additional Eleventy resources
There are plenty of great resources to help you get started with Eleventy, and new one seem to pop-up all the time!

[Tatiana Mac's Beginner's Guide to Eleventy](https://tatianamac.com/tags/Eleventy/) starts with "What is a static site generator?" and not only explains it in detail, but lays out the pros and cons. This sort of detail and approach is both beginner-friendly and hard to find. It's going to be a four part series and currently the first two parts are available, keep an eye on this one!

If you're looking to create a community-driven site [Stephanie Eckles has a useful post at CSS Tricks](https://css-tricks.com/a-community-driven-site-with-eleventy-building-the-site/). Looking to accept submissions for your site? This will help you.

Here's one that just popped up this week, [billed as "The intro guide I wished I had"](https://www.notion.so/How-the-heck-do-I-use-Eleventy-The-intro-guide-I-wish-I-had-ef349def783247dca7f65e33b780288e) by Julius Tarng and geared towards a conceptual understanding of how Eleventy works. It's also got a lot of hands-on examples and illustrations to help get you started.

## What's Next?
Here are a few of the things I'm plan on working on around here...

* Adding a dark mode for the <code>prefers-color-scheme: dark</code> among you
* Adding ability to toggle between dark and light mode
* Tightening up the CSS
* Improving accessibility
* Maybe expanding the color palette a bit
* Depending on the volume and type of writing I end up doing I might make individual feeds for [Articles](/articles) and [Notes](/notes/)
* Add more details to some of the [Projects](/projects/)
* Maybe eventually add a Photos section
* Add release notes
* Keep on fiddling!
