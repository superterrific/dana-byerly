---
title: 'Using Eleventy data files for frequently used links'
summary: 'Have a set of frequently referenced links? A global data file can come in handy.'
category: 'Notes'
date: '2020-09-05'
tags: ['Eleventy', 'Data']
---

[This useful post on maintaining utility class components](https://chriskirknielsen.com/blog/building-and-maintaining-components-from-utility-classes-in-eleventy/) recently made its way into my timeline, inspiring me to write up a similar approach I used to make maintaining this site a little easier.

One of the fun things about creating this site was playing with different approaches, especially with regard to data. In [Learn Eleventy from Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) there are several useful examples of how to push the envelope with [front matter](https://learneleventyfromscratch.com/lesson/4.html), [data files](https://learneleventyfromscratch.com/lesson/7.html) and [remote data](https://learneleventyfromscratch.com/lesson/9.html). This helped me keep those ideas in mind as I played around with how to build this site.

As I was writing up the [Projects](/projects/) section it didn't take long to realize that I was going to be referencing my go-to tools like [Airtable]({{tools.airtable}}) frequently, so using [Eleventy's handy global data](https://www.11ty.dev/docs/data-global/) feature I created a tools.json file in the {% raw %}_data{% endraw %} directory.

Here's what's in tools.json:
``` json
{
  "airtable": "https://airtable.com/",
  "11ty": "https://www.11ty.dev/",
  "feedly": "https://feedly.com/",
  "googleCharts": "https://developers.google.com/chart/",
  "netlify": "https://netlify.com",
  "notion": "https://www.notion.so/",
  "piccalilli": "https://piccalil.li/",
  "pinboard": "http://pinboard.in/",
  "sergey": "https://sergey.cool",
  "sheety": "https://sheety.co/",
  "standardNotes": "https://standardnotes.org/",
  "trello": "https://trello.com",
  "vue": "https://vuejs.org/"
}
```

And here's a sample paragraph in the markdown file from the [Horse Racing Datasets]({{ projectPages.hrds }}) project page:


``` md
In 2018 I migrated it to {% raw %}[Airtable]({{ tools.airtable }}){% endraw %} and {% raw %}[Vue]({{ tools.vue }}){% endraw %} leaving the original design mostly intact...
```

This was an excellent time and annoyance saver! I also created a json file for links to my various accounts, as well as one to manage projects on landing pages, more on that one later.

In the meantime if there's anything you reference with regularity, storing it in a json file in your {% raw %}_data{% endraw %} directory can make things a little easier!
