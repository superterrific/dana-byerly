---
title: "Hot HTML Summer: Links"
summary: "Sharing is caring."
date: 2023-07-06T13:30:00Z
htmlSection: "Links"
htmlLink: "https://web.dev/learn/html/links/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

## The `href` attribute

Go to this [section at Learn HTML](https://web.dev/learn/html/links/#the_href_attribute).

> Absolute URLs include a protocol, in this case `https://`, and a domain name. When the protocol is written simply as `//`, it is an implicit protocol and means "use the same protocol as is currently being used."

I didn't know that `//` could be used for the same protocol. I made [a little CodePen](https://codepen.io/superterrific/pen/RwqgPwQ) to test it out. It feels a little too close to relative address to become a go-to for me, but I love learning all the little particulars of a language I though I knew pretty well.

> The `mailto` link doesn't need to include an email address, but it can, along with `cc`, `bcc`, `subject`, and `body` text to prepopulate the email. By default, an email client will be opened. You could prepopulate the subject and body of the email with no email address, to allow site visitors to invite their own friends.

I knew this one, but wanted to share it because it can be handy.

## Browsing context

Go to this [section at Learn HTML](https://web.dev/learn/html/links/#browsing_context).

> Every browsing context—basically, every browser tab—has a browsing context name. Links can open links in the current tab, a new unnamed tab, or a new or existing named tab. By default, the name is the empty string.

You guessed it, didn't know this! It gets better...

> A link with `target="_blank"` will be opened in a new tab with a null name, opening a new, unnamed tab with every link click. This can create many new tabs. Too many tabs. For example, if the user clicks on `<a href="registration.html" target="_blank">Register Now</a>` 15 times, the registration form will be opened in 15 separate tabs. This problem can be fixed by providing a tab context name. By including the [`target`attribute](https://html.spec.whatwg.org/#browsing-context-names) with a case-sensitive value—such as `<a href="registration.html" target="reg">Register Now</a>`—the first click on this link will open the registration form in a new `reg` tab. Clicking on this link 15 more times will reload the registration in the `reg` browsing context, without opening any additional tabs.

This is a nice way to reduce potential annoyance if you find yourself with a scenario that warrants opening a link in a new tab.

> The `prev` and `next` values can be used on links pointing to the previous and next document in a series.

I've added these to my pagination links!

> Similar to [`<link rel="alternative">`](https://web.dev/learn/html/document-structure/#alternate_versions_of_the_site), the meaning of `<a rel="alternative">` depends on other attributes. RSS feed alternatives will also include `type="application/rss+xml"` or `type="application/atom+xml`, alternative formats will include the `type` attribute, and translations will include the `hreflang` attribute. If the content between the opening and closing tags is in a language other than the main document language, include the `lang` attribute. If the language of the hyperlinked document is in a different language, include the `hreflang` attribute.

There's a good example that combines `rel="alternative"`, `lang`, and `hreflang`. There's also a list of list of [user experience considerations and tips for links](https://web.dev/learn/html/links/#user-experience-tips) in general that's worth reviewing.


