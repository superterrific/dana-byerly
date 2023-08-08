---
title: "Hot HTML Summer: Wrap up"
summary: "Endless Hot HTML Summer."
date: 2023-08-01T13:15:00Z
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

All good things must come to an end as the saying goes. But much like [energy](https://www.scientificamerican.com/article/energy-can-neither-be-created-nor-destroyed/) or [matter](https://education.nationalgeographic.org/resource/conservation-matter-during-physical-and-chemical-changes/), our Hot HTML Summer will not end, it will change from one form to another.

I've completed the [web.dev Learn HTML course](https://web.dev/learn/html/), and indeed it's been a fun [Hot HTML Summer](/tag/hot-html-summer/). The fun isn't ending there, now I can take all the things I learned and apply them. In fact, I've now got a boat load of things of double check, update and improve from all the things I learned along the way.  

## The Hot HTML Summer to do list
I came up a big list of things to check, things to learn more about and things to try to find in the wild.

### Things to check on my sites
In no particular order...

* Make sure I'm [using `<section>` correctly,](/notes/hot-html-summer-headings-and-sections/#%3Csection%3E) I can think of a few places where I know I'm not. 
* See if I can use microdata to [improve reader view](/notes/hot-html-summer-attributes/#global-attributes).
* Check for instances of using different languages within the body of text and [apply the language attribute](/notes/hot-html-summer-document-structure/#content-language).
* Add `<nav>` to the [footer links on this site](/notes/hot-html-summer-navigation/#table-of-contents).
* Check for calling [SVGs with image element](/notes/hot-html-summer-images/#intro-section), if so add `role="img"` (pretty sure I haven't done this anywhere but will check anyway).
* Test [markdown-it-table-captions](https://github.com/martinring/markdown-it-table-captions) to see if it's a good way to add captions to tables in my [Eleventy]({{ tools.11ty }}) sites.
* Add `rel="next"` and `rel="prev"` [attributes to pagination links](/notes/hot-html-summer-links/#browsing-context) (already added on this site).
* Fix all the incorrect instances of `<cite>` that the [WordPress quote block incorrectly applies](/notes/hot-html-summer-text-basics/#quotes-and-citations) to `<blockquote>` at the Junk Drawer.
* Find a reason [to use `<data>`](/notes/hot-html-summer-other-inline-text-elements/#code-examples-and-technical-writing).

### Things to learn more about
*  [Element interfaces](https://web.dev/learn/html/apis/#available-element-interfaces)
* [Aria roles](https://developer..org/en-US/docs/Web/Accessibility/ARIA/Roles)

### Things to find in the wild
Scavenger hunt!

* `rel="author"`
* `rel="bookmark"`
* Form controls with [more than one label](/notes/hot-html-summer-attributes/#%3Clabel%3E) (even Mr. HTMHell [didn't know this one](https://front-end.social/@matuzo/110663093589746034)!)


## Things I enjoyed
There's a lot to like about this course. It's broken down into easy to digest pieces. There are a lot of good tips and best practices. Modules reinforce things learned in previous modules without explicitly saying it, and there's plenty of backstory and tea spilling.

The web would be a much better place if fullstack, framework-focused developers used [Learn HTML](https://web.dev/learn/html/) to better understand the basics, but we all can learn something from the course. Course creator [Estelle Weyl noted](https://changelog.com/jsparty/251#transcript-13) that the course was targeted towards beginners, but created for all skill levels, including "super-advanced people who don’t realize that they don’t know things". Indeed.

In his recent CSS Day talk, [That's not how I wrote CSS 3 years ago](https://www.youtube.com/watch?v=L668dK6wFcM&t=423s), Manuel Matuzović mentioned that when he wrote [100 Days or More Less Modern CSS](https://www.matuzo.at/blog/2022/100-days-of-more-or-less-modern-css/) one of the biggest things he learned was the basics. He goes on to list a few examples where the thought he understood how something worked, but was wrong. I had the exact same experience here. There were things I thought I knew but didn't, things I didn't know at all, and things where I didn't know the proper name.

Most of all, it was fun to learn from a place of comfort, building on something I already know. With only a few gaps, I've been writing HTML since 1996. I'm not employed as a developer, but I write production ready HTML and CSS at my job (delivering my designs in code to be integrated into whatever stack). Before this course I was confident in my HTML skills, and I learned a LOT. 

## Hot HTML Summers elsewhere
I've noticed plenty of HTML content so far this summer. Here's what I've seen so far. 

* [4 More HTML Concepts You Didn’t Know](https://frontenddogma.com/posts/2023/4-more-html-concepts-you-didnt-know/)
* [Fieldsets, Legends and Screen Readers again](https://www.tpgi.com/fieldsets-legends-and-screen-readers-again/)
* [Form and search landmarks](https://www.matuzo.at/blog/2023/form-and-search-landmark/)
* [Learn HTML by Building a Cat Photo App](https://www.youtube.com/watch?v=DCoK_6unfOI) (YouTube)
* [Implementing Tic Tac Toe with 170mb of HTML - no JS or CSS](https://portswigger.net/blog/tic-tac-toe-in-html)
* [O dialog focus, where art thou?](https://www.matuzo.at/blog/2023/focus-dialog/)
* [The article element and screen readers](https://www.matuzo.at/blog/2023/article-screen-readers/)
* [The case against self-closing tags in HTML](https://jakearchibald.com/2023/against-self-closing-tags-in-html/)
* [The details element and in-page search](https://www.matuzo.at/blog/2023/details-find-in-page/)
* You can also help design the [inaugural State of HTML survey](https://lea.verou.me/blog/2023/design-state-of-html/)

## `<summary>`

Thanks for all the boosting, favoriting, sharing, general words of encouragement, and camaraderie along the way. I decided to do this as a series of posts to help me absorb the lessons and refer back to my notes in the future. It's nice to know there were parts or posts that resonated with people!

If I had to sum up the course, it would be a slightly updated version of something I [mentioned in the Navigation module post](/notes/hot-html-summer-navigation/#page-breadcrumbs), "come for all the things you don’t know about HTML, stay for the tips on how use it more effectively". In case it's not yet clear, I highly recommend the course.

I'll make an occasional post with updates on my punch list. Until then, enjoy the rest of your Hot HTML Summer.






