---
title: 'Responsive and Accessible Data Tables'
summary: 'Giving an old project a new home provided an opportunity for an upgrade.'
category: 'Articles'
date: '2020-10-30'
tags: ['Accessibility', 'Data', 'Side Projects', 'The Site']
---
Recently I converted an old project from WordPress to [Eleventy]({{ tools.11ty }}). It was a fun excuse to build something with Eleventy, and ultimately meant I could improve a few things while giving a labor of love project a sustainable home.

This post is about the process of turning Google Sheets into data tables. I wrote it primarily for myself as a record of my decisions, and to help absorb what I'd learned. The writing process also helped me make several improvements to the original code as well as [a few improvements to this site](/changelog/2020-10-30). Documenting or explaining something you've made is a great way to tighten up loose ends as well as share what you've learned.

For context, the project ([Omnisurface Stars](http://omnisurface-stars.com)), was a blog active between 2009-2010 that tracked Thoroughbred racehorses who won on all three racing surfaces: dirt, synthetic and turf. The posts were no longer relevant, but the datasets (Google Sheets) were the things worth preserving. I wrote more about the history of the project [in the Projects section]({{ projectPages.oss }}) if you're interested.

The site has three tables. I'm going to be using the [Won on all three](https://omnisurface-stars.com/won-all-three) table as an example, the [Won on two](https://omnisurface-stars.com/won-two) table is similar, and the [Pedigree table](https://omnisurface-stars.com/pedigree) was more straightforward as there are only three columns.

## Converting Google Sheets to JSON
The first order of business was converting the Google Sheets to JSON to be able to use them as [global data files in Eleventy](https://www.11ty.dev/docs/data-global/). Someday I might be able to whip up a script for this sort of thing, but today is not that day. Fortunately it's pretty easy to do it manually, especially if you only have a few to convert as I did. I found a [Google Sheet Add-on](https://gsuite.google.com/marketplace/app/export_sheet_data/903838927001?pann=cwsdp&hl=en-US) for exporting to JSON but didn't want to grant it access to all my sheets.

The tricky part was the first column where the horse name is linked text. When downloaded as a CSV the link isn't included, so I needed to extract the links and create a new column for them.

{% figure %}
  <picture>
    <source srcset="/img/oss-sheet.avif" type="image/avif">
    <source srcset="/img/oss-sheet.webp" type="image/webp">
    <img src="/img/oss-sheet.png" alt="Original Google Sheet with linked cell content" loading="lazy" />
  </picture>
  {% figcaption %}
    The trick of converting the Google Sheet from CSV to JSON was extracting the link from the first column.
  {% endfigcaption %}
{% endfigure %}

Steps 1-3 are for extracting the links, if you don't have links you only need steps 4-5.

The regex formula referenced in step 2 will only work on linked cells that use the hyperlink formula. For sheets that use the newer approach [you'll need to use a script](https://stackoverflow.com/questions/61787891/how-to-extract-the-link-from-a-cell-now-that-links-are-not-reflected-as-hyperlin). If your  cells with linked text look like this when you click into them, you can use the regex approach:

```md
=hyperlink("https://danabyerly.com", "My website")
```

1. Make a new column for the extracted link.

2. Paste the regex formula below in the first cell of new column and adjust the cell target to the cell with the linked text (e.g., change A1 to match the cell that has the link you want to extract).
```md
=REGEXEXTRACT(FORMULATEXT(A1),"""(.+)"",")
```
Once you tab out, the cell with the formula should now display the link as linked text.

3. Now that first cell has been converted, you can paste the forumla in the remaining cells and the target cell will adjust to current row (e.g., if your original target is A1, the next row automatically becomes B1 and the following row becomes C1, etc.).

**Motion warning**:
The example below is animated but does not loop.

{% figure %}
 <img src="/img/oss-extract-links.gif" class="img-center" alt="Pasting the formula to extract links" loading="lazy" />
  {% figcaption %}
    Once you've pasted the formula into the first cell, you can paste it into all the subsequent cells and the formula will adjust.
  {% endfigcaption %}
{% endfigure %}

4. Download as CSV.

5. Use a CSV to JSON converter ([like this one](https://www.convertcsv.com/csv-to-json.htm) or [this one](https://csvjson.com/csv2json)).

## Making the data tables
With JSON in hand it was time to make some data tables. As mentioned before, the goal was to make the data display responsive and more accessible than an embedded Google Sheet. I'm confident that I achieved that goal, I'm also confident there's room for improvement.

There are a few articles I found useful as I figured out which approaches to use, I'll mention them as I go and provide a list at the end of this post. I should also note that I'm not an accessibility expert! Please feel free to [hit me up on Twitter](http://twitter.com/superterrific) if you have any suggestions for improvement.

Let's start with the table itself...

```html
{% raw %}<div class="table-responsive" role="region" aria-labelledby="caption-lg" tabindex="0">
  <table class="table-lg">
    <caption id="caption-lg" class="visually-hidden">Horses who have won on dirt, synthetic and turf surfaces.</caption>
    <thead>
      <tr>
        <th class="hdr-horse">Horse</th>
        <th class="hdr-dirt"><span>Dirt</span> Type</th>
        <th class="hdr-dirt"><span>Dirt</span> Race</th>
        <th class="hdr-dirt"><span>Dirt</span> Track</th>
        <th class="hdr-dirt"><span>Dirt</span> Date</th>
        <th class="hdr-synth"><span>Synthetic</span> Type</th>
        <th class="hdr-synth"><span>Synthetic</span> Race</th>
        <th class="hdr-synth"><span>Synthetic</span> Track</th>
        <th class="hdr-synth"><span>Synthetic</span> Date</th>
        <th class="hdr-turf"><span>Turf</span> Type</th>
        <th class="hdr-turf"><span>Turf</span> Race</th>
        <th class="hdr-turf"><span>Turf</span> Track</th>
        <th class="hdr-turf"><span>Turf</span> Date</th>
      </tr>
    </thead>
    <tbody>
      {% for item in wonThree %}
      <tr>
        <td><a href="{{ item.pedigreeLink }}">{{ item.horse }}</a></td>
        <td>{{ item.dirtType }}</td>
        <td>{{ item.dirtRace }}</td>
        <td>{{ item.dirtTrk }}</td>
        <td>{{ item.dirtDate }}</td>
        <td>{{ item.synthType }}</td>
        <td>{{ item.synthRace }}</td>
        <td>{{ item.synthTrk }}</td>
        <td>{{ item.synthDate }}</td>
        <td>{{ item.turfType }}</td>
        <td>{{ item.turfRace }}</td>
        <td>{{ item.turfTrk }}</td>
        <td>{{ item.turfDate }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>{% endraw %}
```

Structurally this is a pretty straightforward table. The classes set the column header color and the <code>span</code> responsively sets line breaks [using this approach](https://twitter.com/a_sandrina_p/status/1318217958955601922). The <code>caption</code> provides extra context for screen readers. I've applied a [visually hidden class](https://piccalil.li/quick-tip/visually-hide-an-element-with-css/), otherwise the caption text would display. In this case with the paragraph text above the table the caption felt unnecessary for sited visitors.

Adrian Roselli's [A Responsive Accessible Table](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html) is full of useful information and examples, such as adding <code>role</code>, <code>aria-labelledby</code> and <code>tabindex</code> to the scrolling container to ensure that the table is navigable by keyboard. Check the [Keyboard-Friendly Scroll](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html#ResponsiveScrollingKeyboard) section for more details.

It's also worth pointing out what's not used. Another Roselli post on [Fixed Table Headers](https://adrianroselli.com/2020/01/fixed-table-headers.html) notes that <code>scope</code> is not needed for column headers, and the example in Léonie Watson's helpful [How Screen Readers Navigate Data Tables](https://tink.uk/how-screen-readers-navigate-data-tables/) post there's an example of NVDA reading a table does not include it.

### Decisions, decisions

The first decision was to move the surface indication to each cell (e.g., Dirt Date, Synthetic Date, Turf Date). The original Google Sheet pictured above had a top row spanning the header row that labeled each group of columns by surface. This was useful for sighted viewers but not for visitors using screen readers. Now each cell has the context of the surface.

Another choice was to drop the WPS column for this table because it contains [winners on all three surfaces](https://omnisurface-stars.com/won-all-three/). WPS is a racing term that means "win, place, show", or in layman's terms first place, second place and third place. I left the column in the table for [winners on two of three surfaces](https://omnisurface-stars.com/won-two/) as it was relevant there, but I changed the wording to "Finish Position" and used 1st, 2nd, 3rd to make it understandable beyond the core audience. If I really wanted to do it properly I'd create a glossary to explain some of the other terms, but I'm not expecting many visitors, core audience or otherwise.

Moving on to responsiveness, with so many columns figuring out the how to handle the layout options was tricky, especially considering that I also wanted to ensure the tables were accessible. Unfortunately there are [plenty of examples](https://speckyboy.com/responsive-html-table-techniques/) out there that use all sorts of "cool" seeming tricks that work well for sighted viewers but don't work with screen readers.

The options I came up with were:

* Put the entire table in a scrolling region (easy to implement, annoying to use on smaller screens)
* Hide some columns at smaller sizes (tough to decide which columns were less meaningful)
* Create a different layout for smaller sizes (best option, most work)

I've used the approach of hiding columns at smaller sizes before, but that approach is best when there are clear choices for data that is less relevant. Even when that's the case it's best to mention that the full dataset is viewable on larger screens. With a core audience of racing nerds who want to know the details of each win, there weren't any clear columns to hide, so that approach was out.

I decided to split the difference between the two other options and account for three viewing scenarios: Big maximized screens, medium screens or browsers sized down on big screens and small screens. I have a big screen and frequently have my browser sized down to be the equivalent of around 1300-1400 pixels. At those sizes the table was causing browser-level horizontal scrolling.

I created a container class that sets the width & height and scrolls if necessary at 1300px and below. Setting the height to <code>height: 90vh;</code> ensures that the scrolling container takes up most of the viewable area once you scroll down to the table. This covered the medium screen scenario pretty well.

```css
@media screen and (max-width: 1300px) {
  .table-responsive {
    width: 100%;
    height: 90vh;
    overflow: auto;
  }
}
```  

{% figure %}
  <picture>
    <source srcset="/img/oss-medium.avif" type="image/avif">
    <source srcset="/img/oss-medium.webp" type="image/webp">
    <img src="/img/oss-medium.png" alt="Responsive layout on medium sized screens" loading="lazy" />
  </picture>
  {% figcaption %}
    On medium screens the scrolling region takes up most of the screen. Screenshot of <a href="{{ tools.sizzy }}">Sizzy App</a>.
  {% endfigcaption %}
{% endfigure %}

For the smaller sizes I created a new layout that makes a table for each horse. The horse name is the header row that spans two columns for the data. Since the data is dynamic it's not that much extra effort to create the second table, and the extra effort pays off in a nicer solution for everyone.

```html
{% raw %}{% for item in wonThree %}
<table class="table-sm">
  <thead>
    <tr>
      <th class="hdr-horse-sm" colspan="2"><a href="{{ item.pedigreeLink }}">{{ item.horse }}</a></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="hdr-dirt">Dirt Type</td>
      <td>{{ item.dirtType }}</td>
    </tr>
    <tr>
      <td class="hdr-dirt">Dirt Race</td>
      <td>{{ item.dirtRace }}</td>
    </tr>
    <tr>
      <td class="hdr-dirt">Dirt Track</td>
      <td>{{ item.dirtTrk }}</td>
    </tr>
    <tr>
      <td class="hdr-dirt">Dirt Date</td>
      <td>{{ item.dirtDate }}</td>
    </tr>
    <tr>
      <td class="hdr-synth">Synthetic Type</td>
      <td>{{ item.synthType }}</td>
    </tr>
    <tr>
      <td class="hdr-synth">Synthetic Race</td>
      <td>{{ item.synthRace }}</td>
    </tr>
    <tr>
      <td class="hdr-synth">Synthetic Track</td>
      <td>{{ item.synthTrk }}</td>
    </tr>
    <tr>
      <td class="hdr-synth">Synthetic Date</td>
      <td>{{ item.synthDate }}</td>
    </tr>
    <tr>
      <td class="hdr-turf">Turf Type</td>
      <td>{{ item.turfType }}</td>
    </tr>
    <tr>
      <td class="hdr-turf">Turf Race</td>
      <td>{{ item.turfRace }}</td>
    </tr>
    <tr>
      <td class="hdr-turf">Turf Track</td>
      <td>{{ item.turfTrk }}</td>
    </tr>
    <tr>
      <td class="hdr-turf">Turf Date</td>
      <td>{{ item.turfDate }}</td>
    </tr>
  </tbody>
</table>
{% endfor %}{% endraw %}
```

{% figure %}
  <picture>
    <source srcset="/img/oss-mobile.avif" type="image/avif">
    <source srcset="/img/oss-mobile.webp" type="image/webp">
    <img src="/img/oss-mobile.png" class="img-center" alt="Responsive layout on small sized screens" loading="lazy" />
  </picture>
  {% figcaption %}
    By creating a second table the layout is optimized for smaller screens. Screenshot from <a href="{{ tools.sizzy }}">Sizzy App</a>
  {% endfigcaption %}
{% endfigure %}

The small table has zero top and bottom margin, so the individual tables appear as a single table. Each layout has a class to identify it: .table-lg and .table-sm.

```css
@media screen and (max-width: 800px) {
  .table-responsive,
  .table-lg {
  display: none;
  }

  .table-sm {
    display: table;
  }

  tr td:first-child {
    width: 10rem;
  }
}
}
```
At the larger sizes .table-small is hidden. At smaller sizes .table-sm is displayed and .table-lg is hidden. Since the small table doesn't need the scrolling region I also hid .table-responsive (which sets the scrolling region). I could've specified a range in the media query for the medium screens, but it always feels futzy to me to get the range correct when there are multiple queries, your mileage may vary!

A note on <code>display: table</code>, I wasn't aware of the display properties for tables. According to CSS Tricks the primary use seems to be giving [semantic meaning to non-table elements](https://css-tricks.com/almanac/properties/d/display/#table-values), gross indeed! But, when I used <code>display: block</code> to display the hidden table, none of the styles on table elements worked, as it turns out <code>display: table</code> was useful for an actual table.

Since each row from the larger table is its own table in the smallest layout, there was variation in the <code>td</code> width between the tables based on the data in the second cell. To ensure uniform cell width between the tables I set the width of the first <code>td</code>. This makes it easy to scan and simulates a single, uniform table experience.

### Sticky headers
Regardless of the layout, sticky headers were high on my list to ensure the context of the data while scrolling through the table. [CSS Tricks](https://css-tricks.com/position-sticky-and-table-headers/) and the [Adrian Roselli post](https://adrianroselli.com/2020/01/fixed-table-headers.html) mentioned before each have useful information.

```css
th {
  background: var(--color-turf-dark);
  color: var(--color-lightest);
  text-align: left;
  padding: .6rem;
  box-shadow: var(--shadow);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
```
At every size the header row sticks. In the large and smallest sizes the header sticks to the top of the browser. At the medium size the header sticks to the scrolling container.

Another small note in the above <code>th</code> styles, I set a defaults for the background and text color, which are used by default in the [Pedigree table](https://omnisurface-stars.com/pedigree) and then apply different colors for the other two tables on the individual cells allowing for surface specific background colors.

### What about screen readers?
I used [VoiceOver on Mac](https://help.apple.com/voiceover/mac/10.15/) to test the site, and I only tested on my desktop. Without a Windows machine I can't currently test on NVDA or JAWS.

VoiceOver using Safari, Chrome and Firefox had no trouble navigating through the entire page, including the table. I'm slowly getting better at testing in VoiceOver, but I'm not entirely confident that I'm doing anything close to a real world test since. I'm a heavy keyboard user in general, but I also tested the site with keyboard only and everything was usable.

### Other odds and ends
Not table specific, but these easy to implement things made a notable difference with VoiceOver.

I included an aria-label of "Primary" on the top-level navigation that announces as "Primary navigation".
```html
<nav aria-label="Primary">
  ...
</nav>
```

Using a similar approach as this [helpful post by Bryan Robinson](https://bryanlrobinson.com/blog/using-nunjucks-if-expressions-to-create-an-active-navigation-state-in-11ty/) I added aria-current in the top-level navigation. It announces as "Current Item" before reading the link text.
```html
<a href="/" {% raw %}{{ 'aria-current=true' if '/' === page.url }}{% endraw %}>Home</a>
```

For "Won on All Three" and "Won on Two" I added an aria-label to clarify potential confusion between "Won" and "One". I left out the conditional that sets aria-current in this example for brevity.
```html
<a href="/won-all-three/" aria-label="Won on all three surfaces">Won on All Three</a>
```
Visually you can discern between "Won" and "One" but hearing it read was confusing, now it announces as "Won on all three surfaces" and "Won on two of three surfaces".

Finally <code>thead</code>, <code>tbody</code>, <code>tfoot</code> don't provide semantic meaning and therefore [don't provide any accessibility benefit](https://webaim.org/techniques/tables/data). They are useful for printing as they ensure the <code>thead</code> and <code>tfoot</code> print out with every page. And speaking of printing, I didn't create any print styles (Yet? Anyone who knows hardcore racing nerds also knows they love to print things out).

### Wrapping up
I wrote this article mostly for myself as a way to remember decisions and absorb what I've learned along the way, but I'm always hoping to help out anyone who might be trying to solve similar problems. You can view the code [at the repository](https://github.com/superterrific/omnisurface-stars), and the [table specific CSS is here](https://github.com/superterrific/omnisurface-stars/blob/main/src/_includes/css/table.css).

I'm also always looking to improve my understanding and skills, especially for accessibility, so please get in touch if you have any feedback!

**Useful Articles**

* [Adrian Roselli: A Responsive Accessible Table](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html)
* [Adrian Roselli: Fixed Table Headers](https://adrianroselli.com/2020/01/fixed-table-headers.html)
* [CSS Tricks: Position Sticky and Table Headers](https://css-tricks.com/position-sticky-and-table-headers/)
* [Léonie Watson: How Screen Readers Navigate Data Tables](https://tink.uk/how-screen-readers-navigate-data-tables/)
