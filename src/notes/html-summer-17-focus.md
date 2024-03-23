---
title: "Hot HTML Summer: Focus"
summary: "Stay focused."
date: 2023-07-26T13:00:00Z
htmlSection: "Focus"
htmlLink: "https://web.dev/learn/html/focus/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## The `tabindex` attribute

Go to this [section at Learn HTML](https://web.dev/learn/html/focus/#the_tabindex_attribute).

> The `tabindex` attribute takes as its value an integer. A negative value makes an element focusable but not tabbable. A `tabindex` value of `0` makes the element focusable and tabbable, adding the element on which it is applied to the sequential focus navigation order in source code order. A value of 1 or greater makes the element focusable and tabbable, but adds it to a prioritized tabbing sequence, and, as we saw above, should be avoided.

I know all of this! But unfortunately I encounter it being used incorrectly with regularity. At the time of writing this post I was brought into a project to help with UX, which means I immediately starting using only my keyboard to see how it behaved. 

For reasons I can't even guess, the inert table headers were set to `tabindex="0"`, putting them in tab order for no good reason. This added about seven or so useless tabs before getting to an interactive element. Eric Bailey also noted all the ways this usage can [negatively impact screen reader users](https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/#making-non-interactive-elements-focusable) at The a11y Project. 

## The `autofocus` attribute

Go to this [section at Learn HTML](https://web.dev/learn/html/focus/#the_autofocus_attribute).

> The `autofocus` attribute doesn't alter the document's sequential focus navigation order. The elements in the sequence coming before the autofocused element are simply skipped. For these reasons, it is not advised to include the `autofocus` attribute.

I'll admit that I have used `autofocus` on sign in screens for internal projects where the username field is the first interactive element. I don't feel good about it though. Especially considering these five examples of how it [degrades user experience](https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/) by Adam Silver.

> When a dialog is opened, the browser will automatically focus on the first focusable interactive element within the `<dialog>`, meaning `autofocus` to an element is not necessary.

I didn't know this! The `<dialog>` module is three modules away. Spoiler alert?

## Disabled

Go to this [section at Learn HTML](https://web.dev/learn/html/focus/#disabled).

> The boolean [disabled](https://developer.mozilla.org/docs/Web/HTML/Attributes/disabled) attribute makes the form controls on which it is applied and their descendants, if any, unfocusable. Disabled form controls can't be focused, don't get click events, and are not submitted upon form submission.

Sorry, more UX chat. Instead of spelling out all the issues with disabling form buttons prior to submission, I'll send you to my two go-articles when I need source material to make an impassioned plea to a team. 

Adam Silver has a pithy summary of six [potential problems and what to do instead](https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/). Vitaly Friedman has a [deeper dive on eight specific design patterns ](https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/) where using a disabled button can have disastrous results at Smashing Magazine. I highly recommend both posts. And if you HAVE to used disabled buttons, the post at Smashing Magazine has a section of suggestions from Sandrina Pereira of how to [make disabled buttons more inclusive](https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/#making-disabled-buttons-more-inclusive).









