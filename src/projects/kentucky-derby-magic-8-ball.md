---
title: 'Kentucky Derby Magic 8 Ball'
summary: 'Fun with randomization.'
projectUrl: 'https://2020-derby-8ball.glitch.me/'
allUrls:
  in2018: 'https://2018-derby-8ball.glitch.me/'
  in2019: 'https://2019-derby-8ball.glitch.me/'
  in2020: 'https://2020-derby-8ball.glitch.me/'
category: 'Projects'
launched: '2018'
displayOrder: 5
platform: ['Glitch']
role: ['Code', 'Design']
tags: ['Randomization']
---
I started this project [in 2018]({{ allUrls.in2018 }}) based on [a tutorial by Kelly Lougheed](https://medium.com/@kellylougheed/javascript-magic-8-ball-with-basic-dom-manipulation-1636b83c3c26) by remixing her [Glitch Project](https://glitch.com/~8ball-starter) (thank you!). At this point my Javascript skills were both minimal and very rusty, so this was a good opportunity to learn and do something fun. The biggest accomplishment of the inaugural version, aside from completing it, was modifying it to exclude having to ask the question, albeit what I came up with wasn't very elegant, to put it politely.

[In 2019]({{ allUrls.in2019 }}) I made some refinements to the Javascript, which felt like an accomplishment as I had a better understanding of what was happening rather than just poking at it with no real clue like I had done in the first version. [This year]({{ allUrls.in2020 }}) I made a few more JS refinements as well as some CSS and accessibility improvements.

This year's CSS improvements were mostly general clean-up, like moving from fixed sizes to relative. But a couple of refinements came from the community. I used [this article by Håvard Brynjulfsen](https://havardbrynjulfsen.design/writing/posts/create-better-accessible-foucs-effects/) to spiff up the focus styles on the button and add a nice drop shadow. I had recently saved that article to [Pile of hrefs](https://pile-of-hrefs.com/) ([see project page]({{ projectPages.pile }}) for just such an occasion. The [squishy button active state](https://piccalil.li/quick-tip/squishy-button-active-state/) came from a [Piccalilli Quick Tip](https://piccalil.li/quick-tips/). Thanks to both Håvard and Andy!

For accessibility I tested using Mac OS VoiceOver and it announced properly in Safari and Chrome, but not Firefox. I'm not sure how well it would work in other screen readers. Hopefully by next year's version I'll be able to improve the accessibility further and maybe even give it some nice 8 Ball-ish animations!


View all versions...
* [2018]({{ allUrls.in2018 }})
* [2019]({{ allUrls.in2019 }})
* [2020]({{ allUrls.in2020 }})
