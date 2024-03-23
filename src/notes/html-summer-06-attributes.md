---
title: "Hot HTML Summer: Attributes"
summary: "Things are getting real."
date: 2023-07-04T13:45:00Z
htmlSection: "Attributes"
htmlLink: "https://web.dev/learn/html/attributes/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## Boolean attributes

Go to this [section at Learn HTML](https://web.dev/learn/html/attributes/#boolean_attributes).

> If a boolean attribute is present, it is always true. Boolean attributes include `autofocus`, `inert`, `checked`, `disabled`, `required`, `reversed`, `allowfullscreen`, `default`, `loop`, `autoplay`, `controls`, `muted`, `readonly`, `multiple,` and `selected`. [...] If the attribute value is false, omit the attribute. If the attribute is true, include the attribute but don't provide a value.

I never thought of these as boolean, but of course that makes sense. There were two attributes in that list I didn't recognize: `default` and `multiple`.

The [`default` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track#default) belongs to the `<track>` element (which I've never used), according to MDN indicates "Indicates that the track should be enabled unless the user's preferences indicate something different".

The [`multiple` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple) is valid for the `email` or `file` input type and `<select>`. according to MDN "if set, means the form control accepts one or more values". OK, I should've known that one! Maybe I did and didn't remember? Either way, noted!

## Enumerated attributes

Go to this [section at Learn HTML](https://web.dev/learn/html/attributes/#enumerated_attributes).

> Enumerated attributes are sometimes confused with boolean attributes. They are HTML attributes that have a limited set of predefined valid values.

Another name I didn't know. I feel like I'm getting a low-key Basics of Computer Science lesson by learning all the proper names. I feel confident in my ability to sling the HTML, but knowing the proper names for things is an unexpected confidence booster. I think it's good to find confidence boosters in general, but they can be especially helpful if you're self taught. 

## Global attributes

Go to this [section at Learn HTML](https://web.dev/learn/html/attributes/#global_attributes).

> Global attributes are attributes that can be set on any HTML element, including elements in the `<head>`. There are more than [30 global attributes](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#list_of_global_attributes).

I knew the name for this one! I mention this section because I visited the [linked list of global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#list_of_global_attributes) at MDN and recommend taking a look. It includes warhorses like `class` and `id`. There's the well known, but use sparingly (`role`) or ideally not at all (`autofocus`, `style`, `title`). And there are plenty that I've seen mentioned not had the occasion to use. 

A group that seemed particularly interesting were [`itemscope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope), [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop), and [`itemtype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype). These attributes allow you to add structured [microdata]( https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata).  

SEO appears to be the most prominent use case. In a post from 2018 [Bruce Lawson gives an example](https://brucelawson.co.uk/2018/content-needs-a-publication-date/), with example markup, where a combination of microdata and keeping your publication and modification dates up to date may help prioritize content in search results. 

In a post from 2020 Scott Vinkle shows some [examples where microdata can help with accessibility](https://scottvinkle.me/blogs/work/how-html-microdata-helps-with-accessibility), most notably by improving Reader View. As a heavy Reader View user I'm adding this to my "try this out" list (Hot Microdata Summer?).

## Link fragment identifier

Go to this [section at Learn HTML](https://web.dev/learn/html/attributes/#link_fragment_identifier).

> When a URL includes a hash mark (`#`) followed by a string of characters, that string is a fragment identifier. If that string matches an `id` of an element in the web page, the fragment is an anchor, or bookmark, to that element. The browser will scroll to the point where the anchor is defined.

I always thought of this as the anchor link, so notch another "I learned the official name" on my HTML belt. The real reason I mention this section is that want to note how useful anchors are on content sites. 

I use anchors here and find them handy when referencing something from a previous post. You'll notice too that all my "Go to this section at Learn HTML" go directly the relevant section in the course thanks to the use of anchors (go link fragments identifiers!). This is allows me to create a good user experience, if you want to read the relevant passage you don't have to scroll around the page to find it.

## `<label>`

Go to this [section at Learn HTML](https://web.dev/learn/html/attributes/#label).

> While each label can be associated with exactly one form control, a form control may have more than one associated label.

I did not know this, and I find it a little surprising to be honest. Off the top of my head I can't think of an example where this would've been useful, but of course that doesn't mean there aren't valid or useful scenarios. 

I'll be on the lookout for examples in the wild, but I did find these handy [screen reader test cases and results](https://scottaohara.github.io/tests/html-inputs/double-label.html) by Scott O'Hara from 2019. In most cases both labels were announced, but Safari and IE 11 only exposes one of the two labels. A few browser and screen reader combinations may have updated since then, but good to keep in mind if you find yourself wanting to use this approach.

## `contenteditable`

Go to this [section at Learn HTML](https://web.dev/learn/html/attributes/#contenteditable).

> An element with the `contenteditable` attribute set to `true` is editable, is focusable, and is added to the tab order as if `tabindex="0"` were set.

I knew that you could make an element editable, but never had the occasion to do it, so I never looked it up. There's a fun style editor example that might give you some clever ideas for next all your upcoming how-to posts.

**Update**: Manuel Matuzović has a nice `contenteditable` [example CodePen](https://codepen.io/matuzo/pen/YzaoRLJ) that includes custom data attributes discussed below. There's also a [post with more details](https://www.matuzo.at/blog/2022/counting-children/).

## Custom attributes

Go to this [section at Learn HTML](https://web.dev/learn/html/attributes/#custom-attributes).

> You can create any custom attribute you want by adding the [`data-`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*) prefix. You can name your attribute anything that starts with `data-` followed by any lowercase series of characters that don't start with `xml` and don't contain a colon (`:`).

I've used these! If you've used Bootstrap, especially anything involving toggling, like their [collapse component](https://getbootstrap.com/docs/5.3/components/collapse/), you probably have too. Because, as the course suggests...

> Custom properties are an excellent way of communicating application-specific information via JavaScript.

Someday I'll get around to creating something with these. Maybe.

