---
title: "The accidental project"
summary: 'When an existing project suddenly needs a new home.'
date: 2021-10-29T18:00:00Z
category: 'Notes'
tags: ['Data', 'Dataviz', 'Eleventy', 'Side Projects']
---

There I was, minding my own business working on another project when I noticed that the layout at [Stakes Profiles](/projects/stakes-profiles/) had taken a turn for the worse.

{% figure %}
  <picture>
    <source srcset="/img/sp-whoops.avif" type="image/avif">
    <source srcset="/img/sp-whoops.webp" type="image/webp">
    <img src="/img/sp-whoops.jpg" alt="A section with two charts overlapping each other." />
  </picture>
  {% figcaption %}
  Yeah, it's not supposed to look like that.
  {% endfigcaption %}
{% endfigure %}


I knew this day was coming, I was just hoping it would arrive a little later. When I built them in 2017 I was [just starting to skill up](/about/#from-the-beginning) on webdev after a long hiatus, and I made several not-so-great choices in order to get the project done. The main not-so-great choice was mixing markup and content in WordPress. Don't do that.

Despite not wanting to deal with it, the timing worked out well. The project I'm doing for a friend needed to go on hold for a few weeks so I decided to do what I thought would be a little test. A few weeks later Stakes Profiles now have [a standalone home](https://stakes-profiles.com).

## The project
Stakes Profiles are data visualizations of trends for Thoroughbred horse racing stakes races since 1991. They were created to answer simple questions like “how have favorites performed in this race historically?” and “what kind of running styles have performed well, or not”. The project was active between 2018 and 2019 and is not currently being updated.

Each profile looks at several data points, or angles as they're called to in racing circles, to show trends using charts. For example for odds and payouts of winners I use a straightforward bar chart to show odds and then include a set of average and median odds and payouts for the full time period and the last years.

{% figure %}
  <picture>
    <source srcset="/img/sp-kyoaks-odds.avif" type="image/avif">
    <source srcset="/img/sp-kyoaks-odds.webp" type="image/webp">
    <img src="/img/sp-kyoaks-odds.jpg" alt="Bar chart showing odds of Kentucky Oaks winners from 1991-2019." loading="lazy" />
  </picture>
{% endfigure %}

I built the charts using Google Charts, mostly because they were relatively easy to work with and I could get them to work within WordPress. I also wanted interactive charts rendered from data rather than having to export images. In addition to liking interactive charts, having to update the data and then export and images was one step too many. Ultimately even keeping the data up to date proved to be too much work for the amount of interest they generated (i.e., not much!).

The posts were essentially flat files with all of the writing and charts contained with the post. My goal for the new site was three-fold...

1. Separate the content and layout
2. Not rework the charts and writing
3. Create a well-built, more accessible and performant site

I did need to do a little tweaking here and there but overall I kept to those goals. It turned out to be easier than I imagined, but it was a journey of both good and bad. The good was [Eleventy]({{ tools.11ty }}), let's start there.

## The good
The original posts lent themselves to setting up a templated layout, which kicked off the effort with a smooth start. They were written in such a way that there was very little variation in the overall structure of each section's summary. What started as a way to make year-over-year updates manageable ended as a way to make creating an archive easy.

It took about a week of futzing with the template to see where I could plug in data and where it needed to be more freeform. If I were starting this project from scratch I might have gone the [Airtable route](/articles/using-airtable-with-eleventy/) as I've used Airtable with Eleventy [with success](https://horseracingdatasets.com/) on [more than one](https://pile-of-hrefs.com/) occasion. But I decided to go with Collections and front matter, and it worked out really well.

### Front Matter to the rescue
[Front Matter](https://learneleventyfromscratch.com/lesson/4.html#adding-front-matter-to-our-home-page) is very versatile. In addition to allowing you to add tags, publish dates and excerpts for your posts, you can add all sorts of structured data. You can also conditionally display elements based on whether or not a post contains either a key or value in its Front Matter.

For example, in the Odds section, some races had longshot winners that skewed the chart, making  it hard to get a good overall understanding of the data. In those cases I left them out as outliers and noted it before the chart. Using the key of "oddsOutlier" I was able to conditionally display that info if the race has that data.

From the [Breeders' Cup Mile Odds section](https://stakes-profiles.com/profiles/breeders-cup-mile/#winners-odds-payouts-1991-2018)...

```html
oddsOutliers: "2011 winner <b>Court Vision</b> has been excluded from the chart below as an outlier at $1 odds of 64.8-1"
```

Compare that to the [Odds section for the Arlington Million](https://stakes-profiles.com/profiles/arlington-million/#winners-odds-payouts-1991-2018), which had no outliers in the time period.

There's a standard set of key/value pairs that all profiles share, and then there are three groupings of additional key/value pairs [based on the type of race](https://stakes-profiles.com/about/#whats-included-in-each-profile) depending on the type of race.

For example, races for older horses have additional sections that look at how the different age groups have fared and how "run backs", or horses who have run in the race multiple years have performed.

Each section has an intro, so if the ```ageIntro``` key is present the age section is included.

```js
{% raw %}{% if ageIntro %}
 {% include 'partials/age.html'%}
 <hr role="presentation">
{% endif %}{% endraw %}
```

Another nice trick is that you can create arrays with key/value pairs. I used this to populate tables by looping over properties within a Front Matter key.

Using the Breeders' Cup Mile again, the [odds by age group](https://stakes-profiles.com/profiles/breeders-cup-mile/#odds-by-age-1991-2018) table uses this kind of set-up.

The data in Front Matter...

```js
ageOdds: [
{age: "3", starter: "$16.40", winner: "$7.70"},
{age: "4", starter: "$19.30", winner: "$8.30"},
{age: "5", starter: "$22.30", winner: "$8.30"},
{age: "6", starter: "$21.00", winner: "$25.70"},
{age: "7", starter: "$25.70", winner: "$24.30"},
{age: "8", starter: "$10.70", winner: "0"}
]
```

And then in the partial for the Age section the table loops over the data...

```html
<table>
	<thead>
	  <tr>
		<th>Age</th>
		<th>Average Starter Odds</th>
		<th>Average Winner Odds</th>
	  </tr>
	</thead>
	<tbody>
	  {% raw %}{% for item in ageOdds %}
	  <tr>
		<td>{{ item.age }} year-olds</td>
		<td>{{ item.starter }}</td>
		<td>{{ item.winner }}</td>
	  </tr>
	  {% endfor %}{% endraw %}
	</tbody>
</table>
```

Which displays the data. You can also [see it at the site](https://stakes-profiles.com/profiles/breeders-cup-mile/#odds-by-age-1991-2018)!

{% figure %}
  <picture>
    <source srcset="/img/sp-odds-table.avif" type="image/avif">
    <source srcset="/img/sp-odds-table.webp" type="image/webp">
    <img src="/img/sp-odds-table.jpg" alt="Table displaying average odds of starters and winners by age for the Breeders Cup Mile." loading="lazy" />
  </picture>
{% endfigure %}

The Breeders' Cup Mile is a good Front Matter example for this project in that it has several conditional sections. Feel free to [view it in all of its 61 lines of glory](https://github.com/superterrific/stakes-profiles/blob/main/src/profiles/bc-mile.md?plain=1)!

### Some improvements
Upgrading the basic HTML and CSS did a lot to improve the overall accessibility. And while the color contrast in the charts was pretty good the first time around, I took a closer look and made several small adjustments to try to ensure that contrast works for everyone.

The biggest change was in the [Bettors' Choice and Field Size charts](https://stakes-profiles.com/profiles/breeders-cup-mile/#winners-bettors-choice-field-size-1991-2018) which have two bars per year. The original version had enough contrast between the two bars but one was too light against the white background. Now the two bars have  3.02:1 ratio contrast between them and both are over 3:1 with the white background.

I also tweaked the colors in the stacked bars for Running Style and [Age](https://stakes-profiles.com/profiles/breeders-cup-mile/#all-starters-by-age-1991-2018) to ensure that all colors have at least 3:1 contrast against the white background.

There are a couple of areas for improvement. The [green and gray bar stacks](https://stakes-profiles.com/profiles/breeders-cup-mile/#winners-placing-in-prior-race-1991-2018) have 3.69:1 contrast between them but the gray does not have enough contrast against the white background. The [running style line charts](https://stakes-profiles.com/profiles/breeders-cup-mile/#winning-running-styles-1991-2018) are a mixed bag (read probably mostly not sufficient contrast) as they colors are Google default.


## The bad
The "ugh" part of this project are the accessibility issues with Google Charts. The good news is that most of the chart types I used include a tabular representation of the chart data, and those are announced by screen readers.

The bad news is that the data is only announced after the graphical representation of the chart is announced. Every tick, every line, every image of a bar is announced as "an image", and in some cases that can be upwards of 50 images announced as "an image" before anything useful is announced. And I couldn't find a way to have only the data announced.

If I were doing this project from the start and decided to use Google Charts, I would hide the charts from screen readers and create my own tabular representation of the data for screen reader users. Unfortunately I don't have the time or wherewithal to do that now.

In the Intro section of each profile I added the following text for screen readers using [visually hidden text](https://piccalil.li/quick-tip/visually-hidden/)...

> A note to screen reader users. The interactive charts on this site are built using Google Charts. There are two major elements to each chart, the images used to display the chart and a tabular representation of the data within the chart. Unfortunately the charts are structured to announce all of the images before announcing the tabular data. In some cases this will mean upwards of 50 images get announced before the data. If you'd like to provide feedback please visit the Accessibility Statement for information.

 I've also included information in the [Accessibility Statement](https://stakes-profiles.com/accessibility-statement/) (which will look familiar if you read this section since I repurposed a lot of the explanation!). I thought about hiding the charts from screen readers all together and noting it, but thought it was probably best to leave them as is and provide explanation and a method for feedback. And if you have opinions I would love to hear them!

 Another "ugh" aspect is the pages with charts take a big performance hit, which is not a surprise considering how many charts I have the on each page. There are probably things I could do to improve performance if I were a little better at JavaScript. I did choose to use the system font stack to help with performance!

 One thing I did try was adding ```{async: true}``` [as suggested here](https://groups.google.com/g/google-visualization-api/c/WTp83sJwLP0) but I didn't see much of a difference. Going the route of providing charts as images rather than interactive would no doubt improve performance.

 ## What's next?
 It's nice to have the [Stakes Profiles](https://stakes-profiles.com) in a new home. Despite not working out the way I thought they would, they represent a lot of work and provide a different way to interact with racing data than you'll find in the racing industry. I [wrote a little bit about that](https://exactamundo.org/2019/03/13/in-other-racing-data-conversations/) at my semi-defunct racing blog if you're interested.

 I've also created a Ko-fi account and added it here and to most of my other projects if you're inclined to leave me a tip!  Next up I'll be getting back to the friend's project and hope to have that wrapped up by the end of November.
