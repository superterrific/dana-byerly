---
title: "Hot HTML Summer: Other inline text elements"
summary: "A suprising amount of unknown information."
date: 2023-07-27T13:00:00Z
htmlSection: "Other inline text elements"
htmlLink: "https://web.dev/learn/html/inline-text/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## Intro section

There’s no anchor for this section, it’s the first part of the module.

> Contrary to popular belief, HTML was originally intended for sharing documents, and not cat videos.

I'm going to pretend I didn't read that.

## Code examples and technical writing

Go to this [section at Learn HTML](https://web.dev/learn/html/inline-text/#code_examples_and_technical_writing).

> The [`<data>`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element links a given piece of content with a machine-readable translation; the element's `value` attribute provides the machine-readable translation of the content of the element.

Huh, I don't think knew that. And now I can't wait to think of a reason to use it.

> If the `<data>` content is time- or date-related, the [`<time>`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element, which represents a specific period in time must be used instead.

This one I know! And love, and use, I even wrote it [a love letter](https://danabyerly.com/articles/time-is-on-your-side/).

## Definitions and language support 

Go to this [section at Learn HTML](https://web.dev/learn/html/inline-text/#definitions_and_language_support).

> When including abbreviations or acronyms, always provide the full expanded version of the term in plain text on first use, as you introduce the shortened representation of the term between opening and closing [`<abbr>`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) tags; unless the term is well-known to the reader, such as "HTML" and "CSS" in this series. Only on this first occurrence, when the abbreviation or acronym is being defined, is `<abbr>` needed. The `title` attribute is not necessary nor helpful.

Good guidance on a best practice.

> When defining a term that is not an abbreviation or acronym, use the definition [`<dfn>`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element to identify the term being defined within its surrounding content.

I thought I knew this one but was wrong. It's basically tagging the term being defined within the definition. Here's an example of a word I learned recently, definition courtesy of [Lit Charts](https://www.litcharts.com/literary-devices-and-terms/synecdoche).

```html
<p>
<dfn>Synecdoche<dfn> is a figure of speech in which, most often, a part of something is used to refer to its whole. For example, "The captain commands one hundred sails" is a synecdoche that uses "sails" to refer to ships—ships being the thing of which a sail is a part.
</p>
```

> Some character sets include small annotations placed above or to the right of characters to provide information on pronunciation. The [`<ruby>`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element is the container to use to contain these annotations that make written languages like Korean, Chinese and Japanese easier to read. Ruby can also be used for Hebrew, Arabic, and Vietnamese.

Ha, I thought this was related to Ruby on Rails, wrong again. Hopping over to [MDN reveals the origin of the term](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)...

> The term _ruby_ originated as [a unit of measurement used by typesetters](https://en.wikipedia.org/wiki/Agate_(typography)), representing the smallest size that text can be printed on newsprint while remaining legible.

## Emphasizing text

Go to [section at Learn HTML](https://web.dev/learn/html/inline-text/#emphasizing_text).

> Use the [`<em>`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element to emphasize or stress a span of content. The `<em>` element can be nested, with each level of nesting indicating a greater degree of emphasis. This element has semantic meaning and can be used to inform auditory user agents like screen readers, Alexa, and Siri, to provide emphasis.

I did not know about the levels of nesting.

> Use the [`<mark>`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) element to identify or highlight text that is somehow relevant, like highlighting (or "marking") the occurrence of search terms in search results. This enables marked content to be quickly identified without adding emphasis or importance.

I like to use this one, and you can easily change the blaring yellow user agent styles with good old CSS.

> There are three elements that were temporarily deprecated, but have been added back into HTML. They should be used sparingly, if at all, as they provide little to no semantic value and CSS should always be used for styling over HTML elements.

Use with caution! The elements are `<i>`, `<u>`, and `<b>`. And specifically about `<b>`...

> The [`<b>`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element can be used to draw attention to text that is not otherwise important. This element doesn't convey any special semantic information and should only be used when none of the other elements in this section fit the purpose. No example is provided as I couldn't come up with a valid use case; that's how "last resort" this element is.

I imagine that ending with a finger snap.





