---
title: 'Changelog'
layout: 'layouts/page.html'
summary: 'Details about updates...'
eleventyExcludeFromCollections: true
---
A running list of updates inspired by [Tatiana Mac's Release Notes](https://tatianamac.com//release-notes), although not as structured and no versioning.

<h2>2020-09-09</h2>
A homepage update and a lot of little tweaks.

<h3>Homepage Layout Updates</h3>

Changed the homepage hero to use grid but kept the original flex as a fallback. The vertical alignment of the text is better, and I think it jumps less on load (although I maybe I'm kidding myself?).

<h3>Changelog added</h3>

The link is available in the footer. I'm going to come back and make this a collection with each entry as its own markdown file. And then on the Changelog listing page display the full content instead of a summary and use pagination. This seems like a more sustainable approach but I'll save that for another time.

<h3>Other</h3>

* A footer tweak to adjust the layout of the second column to be top aligned with the first column.
* Removed the <code>aria-label</code> from the primary navigation. Since it's using a <code>nav</code> tag the additional information is probably skewing towards overly verbose instead of adding helpful information.
* Similarly, removed the <code>aria-describedby</code> on the [All Tags](/tags-all/) page because there is similar text in the body in the body of page. I also updated the example cited in [Finally, a new site](/articles/finally-a-new-site) and noted the update.
* Created a new class and paired shortcode called "caption" that I used in the note about the update, and will use for similar things moving forward.
* Removed border being applied from <code>code</code> within code examples using the [syntax highlight plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/).

If you're setting a border on <code>code</code> and want don't want it on code examples using the syntax highlight plugin, you could use this...

```css
[class*='language'] code {
  border: 0;
}
```

The plugin wraps examples in <code>pre</code> with a class for each language, e.g., <code>class="language-css"</code>, so the above will remove the border from any examples using the plugin.
