---
title: "Hot HTML Summer: Details and summary"
summary: "Details, details."
date: 2023-07-28T13:00:00Z
htmlSection: "Details and summary"
htmlLink: "https://web.dev/learn/html/details/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## Intro section

There’s no anchor for this section, it’s the first part of the module.

> [jQuery](https://jqueryui.com/accordion/) has included an accordion UI pattern since at least 2009. The original JavaScript-free accordion solution included making each FAQ question a `<label>` followed by the checkmark it labeled, and then displaying `<div>` answer when the checkmark was checked.

I didn't know this bit of history.

> Like all semantic content, you can progressively enhance the default features and appearance.

Heart emoji.

## Toggling visibility: the `open` attribute

Go to this [section at Learn HTML](https://web.dev/learn/html/details/#toggling_visibility_the_open_attribute).

> The hidden content in the collapsed state is searchable in some browsers but not others, even though the collapsed content is not part of the DOM. If you search in Edge or Chrome, the details containing a search term will expand to display the occurrence. This behavior is not replicated in Firefox or Safari.

I knew this one because Manuel Matuzović [posted about this earlier](https://www.matuzo.at/blog/2023/details-find-in-page/) in the Hot HTML Summer. He also has a post on [inconsistencies for screen reader users](https://www.matuzo.at/blog/2023/details-summary/) that's worth a look if you are planning on using `<details>`.

## How errors are handled

Go to this [section at Learn HTML](https://web.dev/learn/html/details/#how_errors_are_handled). 

> If you don't include a `<summary>`, the browser will create one for you: with a marker and the word "details". This summary is part of a [shadow root](https://web.dev/learn/html/template/#shadow-dom), and therefore will not have author CSS summary styles applied. Unfortunately, Safari does not include the details in the [keyboard focus order](https://bugs.webkit.org/show_bug.cgi?id=249904).

Didn't know this, good to keep in mind. And...

> If you do include a `<summary>`, but it is not the first element in the `<details>`, the browser still displays the summary as it should. It will also not fail if you include a link, label, or other interactive element within the summary, but browsers handle interactive content within interactive content differently. For example, if you include a link in a summary, some browsers will add both the summary and the link to the default tabbing order, but other browsers will not focus on the link by default. If you click on a `<label>` nested in a `<summary>`, some browsers will give focus to the associated form control; other browsers will give focus to the form control and toggle the `<details>` open or closed.

I couldn't find any examples of screen reader test results for interactive elements within the summary, but if you planned on taking this approach it would be best to test it.




