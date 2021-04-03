---
title: 'Using Airtable with Eleventy'
summary: 'A long-winded look at getting Airtable data into Eleventy.'
category: 'Articles'
date: '2020-12-11'
tags: ['Airtable', 'Data', 'Eleventy', 'Side Projects']
---
{% caption %}
<strong>Update April 2, 2021</strong>: Since writing this article I figured out how to filter on a single API call and have updated the <a href="#isting-by-tag">Listing by tag or category</a> and <a href="#recently-added">Listing by recently added</a> sections to reflect those approaches. The project has since been completed and I've written a <a href="/notes/horse-racing-datasets-redesigned/">wrap up with more detail</a>.
{% endcaption %}

While planning out an update to an existing project I figured out how to use [Airtable]({{ tools.airtable }}) with [Eleventy]({{ tools.11ty }}). Naturally this was after [a couple of weeks of working on a proof concept](/notes/end-of-the-year-to-do-list/) to migrate from Airtable to markdown.

On the bright side this gives me an apples to apples comparison of using remote data via JavaScript data files and markdown, and I'll outline those differences as I go. But before we started...

## A caveat about my dev skills
I'm not very good at JavaScript. There will no doubt be some choices I made that someone with more JavaScript skills would've done differently. And in some cases I gave it a try using articles and examples, I'll be sure to point those out along the way.

But for now, this represents a vast improvement on the current implementation of the project I'm updating. And I'm actually a bit proud of myself for getting this far! Hopefully in the near future I'll be able to make further improvements.

This article assumes some familiarity with Airtable. Zapier has a [good overview of Airtable](https://zapier.com/blog/what-is-airtable/) if you're not familar.

You can jump right to any of the sections below if you're not interested in context of the project.

* [API call and listing records](#api-call-and-listing-records)
* [Pagination](#pagination)
* [Listing by tag or category](#listing-by-tag)
* [Listing by recently added](#recently-added)
* [Displaying a random record](#displaying-a-random-dataset)
* [Maintenance](#maintenance)
* [Comparison between collections versus remote data](#collections-versus-remote-data-comparison)
* [Useful resources](#useful-resources)


## The project
The current project, [Horse Racing Datasets](http://horseracingdatasets.com) ([project page]({{ projectPages.hrds }})), is backed by Airtable with a monstrous implementation of too many API calls, and un-purged Tailwind CSS. It's one of those "hey, at least it works!" situations, but at the time it was quite an accomplishment. Now that I know my way around Eleventy, the goal is improve the data handling and performance (and rewrite that CSS).

There are currently 64 datasets listed in Airtable. In the last year I added seven datasets and don't anticipate that pace picking up too much.

## The requirements
* List all datasets with pagination
* List by tag or category
* List by recently added with a limit on number displayed (e.g., list the four most recently added datasets)
* Display a single random dataset
* Datasets do NOT need individual pages

## API call and listing records
In the current version of the project, as well as other projects, I've used Axios to access to Airtable. Those projects used Vue and the call is within the Vue app. Previously I had tried to get a version of that call to work with Eleventy, but couldn't figure out to make it work on its own outside of the structure of the Vue app.

I decided to take a look around GitHub to see if I could find any examples, and as I [mentioned here](/notes/update-on-the-end-of-the-year-to-do-list/) I found and forked [this repository](https://github.com/plloyd11/eat), which uses [Airtable.js](https://github.com/airtable/airtable.js/), as a test.

I was quickly was able to get it to work with my data and thanks to [this comment](https://github.com/11ty/eleventy/issues/1122#issuecomment-622437989) in [this Github issue](https://github.com/11ty/eleventy/issues/1122) I was able to refine it a bit more. I wish I could explain everything that's going on in there, but I can't. At least not yet!

First you'll need to install [Airtable.js](https://github.com/airtable/airtable.js/).

```html
npm install airtable
```
And I'm using [dotenv](link) here to hide my key. If you're not familiar with how to use it the first two minutes [of this video](https://www.youtube.com/watch?v=zwcvXd3kGbw) gave me all the information I needed to install, create the .env file and call it in the script.

```html
npm install dotenv
```

```html
<!-- .env file -->
KEY='your key here'
```

```js
// src/_data/all.js
require('dotenv').config();
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.KEY }).base('appMh38AX1IpV3vIR');

module.exports = () => {
  return new Promise((resolve, reject) => {
    let allDatasets = []; // change 'allDatasets' to something more relevant to your project
      base('New') // change 'New' to your base name
        .select({ view: 'All' }) // change 'All' to your view name
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              allDatasets.push({
                "id" : record._rawJson.id,
                ...record._rawJson.fields
              });
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              reject(err)
            } else {
              resolve(allDatasets);
            }
          }
        );
      });
    };
```

If you're not using an .env file to hide your key you could use a second Airtable account to share a read-only version of your base. Then you can use the key from the base in the read-only account. You'll want to do one or the other to keep your key private.

To modify this for your project, add your base and key information in the second line. I've commented the two other places where your Airtable information will need to be swapped in. You'll probably also want to change the variable name to something more relevant to your project (e.g., I'm using allDatasets). The variable is used in three places.

This code lives in a file named <code>all.js</code> in the _data directory and is a [JavaScript data file](https://www.11ty.dev/docs/data-js/). The data is fetched at build time and available to templates in the same way that data in [global data files](https://www.11ty.dev/docs/data-global/) is available.  

```html
{% raw %}{% for item in all %}
<article>
  <h2>{{ item.title }}</h2>
  <p>{{ item.description }}</p>
</article>
{% endfor %}{% endraw %}
```

This example creates a listing of all the records retrieved in the API call and displays the title and description for each.

## Pagination
Fortunately handling [pagination for data files](https://www.11ty.dev/docs/pagination/#paginate-a-global-or-local-data-file) is similar to collections. In my project I've created a markdown page to list all the datasets. The pagination is set in front matter...

```html
<!-- all.md -->
---
title: 'All Datasets'
layout: 'layouts/feed.html'
pagination:
  data: all
  size: 10
---
```

In the data field is the name of the data file, in this case <code>all.js</code>, Size specifies how many items to list per page. If you were using collections you'd specify your collection in the data field, for example <code>collections.posts</code>.

In the template there's a [Nunjucks variable using set](https://mozilla.github.io/nunjucks/templating.html#set) that picks up the pagination data from the markdown file using <code>pagination.items</code>.

```html
<!-- feed.html -->
{% raw %}{% extends "layouts/base.html" %}

{% set datasetList = pagination.items %}

      {% block content %}
        <h1>{{ title }}</h1>
        {{ content | safe }}

        {%- for datakey in datasetList -%}
        {% include "partials/listing-items.html" %}
        {%- endfor -%}

        {% include "partials/pagination.html" %}
      {% endblock %}{% endraw %}
```

This grabs the paginated data and creates pages based on how many items are specified to be listed on each page. There's a handy section that explains how this works in detail in the [Learn Eleventy from Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) course. The include for <code>pagination.html</code> includes the 'Next' and 'Previous' links.

## Listing by Tag
Tag is a bit misleading here, because it's not in reference to tags in collections, but it's what I've called the data element in my Airtable base. The requirement is to be able to view a listing of datasets by tag, for example [all datasets for the Kentucky Derby](http://horseracingdatasets.com/kentucky-derby/).

This is one area where being more skilled in JavaScript is probably an advantage. When the data is available from collections it's simple to create a single page to [handle tag listing pages for individual tags](https://www.11ty.dev/docs/quicktips/tag-pages/) that doesn't require any maintenance when adding or removing tags. Without collections I created individual tag pages and passed the tag name into the template in order to render only items with the tag on the page.

The tags for this project are fairly fixed, so the maintenance part of needing to manually add, edit or delete a page isn't a big drawback, but it would be if tags needed to be created more frequently.

In the individual tag pages there's a variable called "filter" that has the name of tag as it's referenced in Airtable.

```html
<!-- kentucky-derby.md -->
---
title: 'Kentucky Derby Datasets'
layout: 'layouts/feed-tags.html'
filter: 'Kentucky Derby'
permalink: '/kentucky-derby/index.html'
---
```

Here's an example of some of the tags I have my in my Airtable base. Each row contains tags for a single record.

{% figure %}
  <picture>
    <source srcset="/img/hrds-airtable-tags.avif" type="image/avif">
    <source srcset="/img/hrds-airtable-tags.webp" type="image/webp">
    <img src="/img/hrds-airtable-tags.png" class="img-center" alt="Some of the tags in my Airtable base" loading="lazy" />
  </picture>
  {% figcaption %}
    In my Airtable base I have a multi-select field named "tags", I use these values in the "filter" field in front matter in the individual tag page to pass the tag name into the template.
  {% endfigcaption %}
{% endfigure %}

Then in the layout for tags, there's a [Nunjucks variable using set](https://mozilla.github.io/nunjucks/templating.html#set) to pick up the value in "filter".

```html
<!-- tags.html -->
{% raw %}{% extends "layouts/base.html" %}

{% set datasetCategory = filter %}

  {% block content %}
    <h1>{{ title }}</h1>
    <p>{{ content | safe }}</p>

    {% for datakey in all | sortByTitle %}
    {% if datasetCategory in datakey.tags %}
      {% include "partials/listing-items.html" %}
    {% endif %}
    {% endfor %}
  {% endblock %}{% endraw %}
```

Within the for loop that calls records from <code>all.js</code> I'm using an if statement to pass the tag name that the Nunjucks variable is picking up from the individual tag page front matter. Continuing the example of the Kentucky Derby tag page, the if statement is saying "if the value of 'Kentucky Derby' is found in the 'tags' field, then display the record". This creates a listing of items tagged with 'Kentucky Derby'. I'll explain the "sortByTitle" filter in a bit.

Here's an illustration of the data flow, starting at Airtable and ending in a tag page. I've only included some of the fields to illustrate the records.

{% figure %}
  <picture>
    <source srcset="/img/airtable-to-eleventy-tag-pages.avif" type="image/avif">
    <source srcset="/img/airtable-to-eleventy-tag-pages.webp" type="image/webp">
    <img src="/img/airtable-to-eleventy-tag-pages.png" class="img-center" alt="The data flow from Eleventy to individual tag pages" loading="lazy" />
  </picture>
  {% figcaption %}
     Data at Airtable is called via a JavaScript data file from Eleventy. Each tag has a corresponding markdown file, for example kentucky-derby.md. The name of tag that's used in Airtable is set in the 'filter' key in front matter and passed into the template. In the template the 'filter' value is used in the for loop to display only those records that include the tag. Created using <a href="https://excalidraw.com/">Excalidraw</a>.
  {% endfigcaption %}
{% endfigure %}


I tried a few other things before I got this to work. One of the best things was [this article by Bryan Robinson](https://bryanlrobinson.com/blog/using-eleventys-javascript-data-files/) on using JavaScript data files in Eleventy. He uses the Meetup API as an example and provides a helpful video and repository of the code.

Back to the "sortByTitle" filter. The [All Datasets](https://horseracingdatasets.com/all/) page displays alphabetically and the sort order is set at Airtable. But on the tag pages the default listing is to display by most recently added. With some search engine luck [I found this approach](https://stackoverflow.com/questions/65471629/dot-notation-in-nunjucks-sorting-isnt-working/65481434#65481434) and was able to create a filter to sort by title to keep the same approach used on the All Datasets listing.

The filter gets added in <code>eleventy.js</code>...

```js
config.addFilter("sortByTitle", arr => {
  arr.sort((a, b) => (a.title) > (b.title) ? 1 : -1);
  return arr;
 });
```

And then used in the for loop in the template...

```js
{% raw %}{% for datakey in all | sortByTitle %}
  ...
{% endfor %}{% endraw %}
```


## Recently added
In the current site there's a [page that lists new datasets](http://horseracingdatasets.com/new/), and this is something I'll keeping in the revamped version. The


The markdown page is simple as I'm not using pagination.

```html
<!-- new.md -->
---
title: 'Recently Added Datasets'
layout: 'layouts/feed.html'
---
```

I'm using the same template that's being used for the "All Datasets" page but I've added two if statements. The first is to change what's passed in to the for loop and the second is to display some text if there are no recently added datasets.

```html
<!-- feed.html -->
{% raw %}{% extends "layouts/base.html" %}

{% set datasetList = pagination.items %}

{% if '/recently-added/' in page.url %}
{% set datasetList = all | sortByNewest | limit(5) %}
{% endif %}

      {% block content %}
        <h1>{{ title }}</h1>
        {{ content | safe }}

        {% for datakey in datasetList %}
        {% include "partials/listing-items.html" %}
        {% endfor %}

        {% if datasetList | isEmpty %}
        <p>We haven't added any datasets recently, sorry!</p>
        {% endif %}

        {% include "partials/pagination.html" %}
      {% endblock %}{% endraw %}
```

Since pagination isn't being used I had to create a way to pass in the name of the data source and limit the number of items displayed. I also needed to filter the results by date to get the most recently added items first. The first if statement looks at the url, if it's the 'Recently Added' page  it sets the same variable of <code>datasetList</code> to pass in the file name that makes the API call (<code>all.js</code>), filters that data (sortByNewest) and limits the amount of items displayed to five.

Similar to the approach for filtering the tag display order, the filter gets added in <code>eleventy.js</code>...

``` js
config.addFilter("sortByNewest", arr => {
  arr.sort((b, a) => (a.date) > (b.date) ? 1 : -1);
  return arr;
});
```

The [handy limit filter is from 11ty Rocks](https://11ty.rocks/eleventyjs/data-arrays/#limit-filter). I'm also using it here at this site on the homepage!

The second if statement checks to see if the data source, set in <code>datasetList</code>, is empty. If it is empty then it displays the conditional text. I'll think more about that text when I start designing. It's fine for the scenario where there are no recently added datasets, but since this template is used for both 'All Datasets' and 'Recently Added' there's a chance the conditional text could display on the 'All Datasets' page if call fails. And if that were the case the text would be misleading.

That handy <code>isEmpty</code> filter is from [Mike Riethmuller's Eleventy Plugin for Array Filters](https://github.com/jamshop/eleventy-plugin-array-filters). He's creating a [bunch of Eleventy plugins](https://github.com/jamshop/) this month as an [Eleventy Advent thing](https://twitter.com/MikeRiethmuller/status/1334014095486373891), so be sure to keep an eye on the [Jamshop GitHub account](https://github.com/jamshop/).

Admittedly I couldn't get the array plugin to work, but I looked the code for the <code>isEmpty</code> filter and added it directly as a filter in the <code>eleventy.js</code> config file and it worked.

```js
// eleventy.js
config.addFilter('isEmpty', (value) => {
  return Array.isArray(value) && value.length === 0;
});
```

## Displaying a random dataset
This will be a new addition to the site. [Currently on the homepage](http://horseracingdatasets.com) I have some featured datasets listed. What's nice about that is that I can swap out datasets relevant to the racing calendar, but it's also a bit of work for such a low traffic site. For the new site I'm going to replace the featured datasets with a 'Random Dataset of the Day'.

I was able to use the data from the initial API call in <code>all.js</code> and another [handy filter from 11ty Rocks](https://11ty.rocks/eleventyjs/data-arrays/#randomitem-filter) that grabs a random item out the array at build time.

```html
{% raw %}{% for dataset in all | randomItem  %}
  {% include "partials/listing-items.html" %}
{% endfor %}{% endraw %}
```

I'll create a partial and include it on the homepage for the "Random Dataset of the Day". I'll be using [Netlify]({{ tools.netlify }}) for hosting and plan on setting up a daily build. In addition to picking up any additions to Airtable it will display a new random dataset.


## Maintenance
Ease of maintenance tips the scales in favor of Airtable over individual markdown files, and especially for this project since it already exists in Airtable. I have an Airtable form to add new datasets, and as I mentioned above I'll set up a daily build at Netlify using either [IFTTT](https://www.11ty.dev/docs/quicktips/netlify-ifttt/) or [Zapier](https://zapier.com/apps/netlify/integrations/schedule/29330/start-deploys-of-netlify-sites-on-a-daily-schedule) to pick up any added datasets.

Prior to figuring out how to do this with Airtable I had converted all the records to markdown files and had figured out a fairly easy to way to still keep the workflow starting at Airtable by using Zapier to email me the record formatted for markdown. Given that datasets don't get added very often this was an OK solution. I would've also had to manually deploy it (or figure out how to automate that too!), but still workable and I'd get all the benefits and ease of use of collections.

## Wrapping up
When determining the approach for your own projects, the "best" approach will come down to the specifics of the project. How often will things be added? Do you need individual pages for each item or is it only listings? How much would you benefit from the power of collections? Are you decent at JavaScript? The list probably goes on.

I will be converting [Pile of hrefs](http://pile-of-hrefs.com)([project page]({{ projectPages.pile }})) to this set-up once I have the Horse Racing Datasets redesign complete since the specifics and project needs are very similar. And [The Pile](https://twitter.com/superterrific/status/1303316906460540929) could definitely use some pagination!

Below is some additional information for quick comparison or reference. Happy remote data-ing, or collection-ing!

## Collections versus remote data comparison
Here's a quick comparison between the two approaches.

| Feature | Collection | Remote Data |
|--|--|--|
| **Tags** | Native part of Eleventy collections, easy to set-up a [zero maintenance tag page](https://www.11ty.dev/docs/quicktips/tag-pages/) to handle individual tag pages. | Have to create a markdown file for each individual tag page and filter for each tag in the template. Unless you're good at JavaScript and can figure out a better approach! |
| **Pagination** | Create a pagination object for your collection and use it in a template. | Create a pagination object for your data and use it in a template. The only difference in the code is the source of data in the pagination keys. |
| **Creating filters** | Plenty of easy to follow examples between the documentation, starter projects and in articles. | Helpful to have some solid JavaScript skills to transfer collection examples to arrays and data. |
| **Maintenance** | File based - create new file or edit existing file and then deploy. Can probably automate deploys with webhooks or do it manually depending how frequently you add or update entries. | Enter data in Airtable (or your remote data source) and set up a daily deploy at Netlify or your host. |
| **Creating individual pages** | Individual pages are automatically created when you create a markdown file and you can use the power of collections. | You can [create individual pages from data files](https://www.11ty.dev/docs/pages-from-data/) but it doesn't use collections. |


## Useful Resources
Here are some resources I found helpful. I'm currently not caching the data requests but have that bookmarked for future reference. Also, Airtable has a 100 record per call limit, I currently have less than 100 records but have also bookmarked the Stack Overflow link for future reference.

* [Bryan Robinson - Using Eleventy Javascript Data Files](https://bryanlrobinson.com/blog/using-eleventys-javascript-data-files/)
* [11ty Rocks - Collection of Data Array Filters](https://11ty.rocks/eleventyjs/data-arrays/)
* [Eleventy Docs - Creating pages from data](https://www.11ty.dev/docs/pages-from-data/)
* [Eleventy Docs - Cache data requests](https://www.11ty.dev/docs/quicktips/cache-api-requests/)
* [Jamshop - Eleventy Plugin - Array Filters](https://github.com/jamshop/eleventy-plugin-array-filters)
* [Stack Overflow - How to fetch more than 100 Airtable records](https://stackoverflow.com/questions/55094884/how-to-fetch-all-records-more-than-100-from-the-airtable-using-axios)

{% caption %}
<strong>Update April 2, 2021</strong>: This project is complete, you can view  <a href="https://github.com/superterrific/horse-racing-datasets">source code at GitHub</a> to see how the implementation turned out! There's also a <a href="/notes/horse-racing-datasets-redesigned/">wrap up post</a> and the <a href="/projects/horse-racing-datasets/">project page</a>.
{% endcaption %}
