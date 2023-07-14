---
title: "Hot HTML Summer: Audio and Video"
summary: "Things I know nothing about."
date: 2023-07-14T13:00:00Z
htmlSection: "Audio and Video"
htmlLink: "https://web.dev/learn/html//audio-video/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{{ blurbs.htmlSummer | safe }}{% endcaption %}

{% include "text/html-summer-blurb.html" %}

## `<audio>` and `<video>`

Go to this [section at Learn HTML](https://web.dev/learn/html/audio-video/#lessaudiogreater-and-lessvideogreater).

> The [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video) and [`<audio>`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) elements can be used to embed media players directly with the `src` attribute or can be used as the container element for a series of [`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/source) elements, each providing a `src` file suggestion. While `<video>` can be used to embed an audio file, the `<audio>` element is preferable for embedding sound files.

My experience with audio and video is limited to copy and pasting code from YouTube, Vimeo or the like. This entire module is something I know nothing about, at least in a hands-on way.

> Fallback content is included between the opening and closing tags. If the user agent doesn't support `<video>` (or `<audio>` this content is shown.

Always good to know the fallbacks.

> If no `src` attribute is included on the opening `<video>` or `<audio>` tags, include one or more [`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/source) elements, each with a `src` attribute to a media file.

There's a code example at the site that illustrates this, it's similar to using `<picture>`. 

> Within the `type` attribute, you can include a [`codecs`](https://developer.mozilla.org/docs/Web/Media/Formats/codecs_parameter) parameter, which specifies exactly how the resource is encoded. Codecs give you a way of including media optimizations that are not yet supported in all browsers. The codec is separated from the media type with a semicolon. For example, the codec can be written using intuitive syntax, such as `<source src="videos/machines.webm" type="video/webm;codecs=vp8,vorbis">` which indicates that the WebM files contain VP8 video and vorbis audio.

I'm so going to know what I'm doing if I ever have to do this.

> Make sure to define the aspect ratio of your video, because when the video loads, a size difference between the poster and the video will cause a reflow and repaint.

As always, good tip.

> Omitting `controls` creates a bad user experience, especially if the boolean `autoplay` attribute is included.

This should be seared into the brains of anyone adding audio or video files to a site.

## Tracks

Go to [section at Learn HTML](https://web.dev/learn/html/audio-video/#tracks).

> Between the opening and required closing tags of both audio and video, include one or more [`<track>`](https://developer.mozilla.org/docs/Web/HTML/Element/track) elements to specify timed text tracks. [...] There are five enumerated values for the track `kind` attribute: `subtitles`, `captions`, `descriptions`, `chapters`, and other `metadata`.

As previously mentioned, YouTube and Vimeo are my only real hands-on experience with integrating audio and video. But as a consumer, `chapters` is an incredibly useful way to navigate a video.

> The value `kind="caption"` should be reserved for transcription and translations that include sound effects and other relevant audio information. This isn't just for deaf viewers. Maybe a user can't find their headphones so they turned on the captions. Or maybe they didn't quite catch the last few talking points from a favorite podcast, so they want to read the transcript to confirm their understanding. Having alternative ways to access audio and video content is both important and convenient.

If you get tired of my writing "another good tip", let me know. Otherwise, another good tip.

> The `kind="description"` is for text descriptions of the visual content in the video for users who can't see the video, whether they are using a system without a screen such as Google Home or Alexa, or are blind.

I didn't realize there was a distinction between `caption`, or what's commonly referred to as captions, and `description`. Also, another important aspect of this point, and the previous one, is broadening our understanding of how things are used and by whom. 

Program note: Hot HTML Summer is taking a summer break next week. The next post will be on Monday July 24, happy Hot HTMLing!


