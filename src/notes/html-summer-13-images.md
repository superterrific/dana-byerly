---
title: "Hot HTML Summer: Images"
summary: "Eager for images."
date: 2023-07-13T13:00:00Z
htmlSection: "Images"
htmlLink: "https://web.dev/learn/html/images/"
category: "Notes"
tags: ['Hot HTML Summer', 'HTML']
---
{% caption %}{% include "text/html-summer-series.html" %}{% endcaption %}

{% include "text/html-summer-module.html" %}

##  Intro section

There's no anchor for this section, it's the first part of the module.

> Decorative images, such as background gradients on buttons or background images on sections of content or the full page, are presentational and should be applied with CSS. When an image adds context to a document, it is content and should be embedded with HTML.

This is a useful guideline. In the [Navigation module](https://web.dev/learn/html/navigation/) there was also a good tip for [using CSS generated separators in page breadcrumbs](/notes/hot-html-summer-navigation/#page-breadcrumbs).

> If the image is of SVG file type, also include [`role="img"`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/Img_role), which is necessary due to [VoiceOver](https://bugs.webkit.org/show_bug.cgi?id=216364) [bugs](https://bugs.webkit.org/show_bug.cgi?id=240656).

I didn't know this! I haven't included SVG images as foreground images using the `<img>` tag at this site, but I'll be checking my other sites and updating if necessary. 

## `<img> srcset` attribute

Go to this [section at Learn HTML](https://web.dev/learn/html/images/#lessimggreater-srcset-attribute).

> The [`srcset`](https://web.dev/learn/design/responsive-images/#responsive-images-with-srcset) attribute enables suggesting multiple image files, with the browser selecting which image to request based on multiple media queries including viewport size and screen resolution.

No matter how many tutorials or step-by-step how-to articles I read on this approach I'm not confident in my ability to create the correct images sizes, so I feel like I never quite get the full benefit of this approach. Just like JavaScript, some day I will figure this out!

## `<picture>` and `<source>`

Go to this [section at Learn HTML](https://web.dev/learn/html/images/#lesspicturegreater-and-lesssourcegreater).

> The [`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/source) attributes include `srcset`, `sizes`, `media`, `width`, and `height`. The `srcset` attribute is common to `img`, `source`, and `link`, but is generally implemented slightly differently on source as media queries can be listed in the `<srcset>`'s media attribute instead. `<source>` also supports image formats defined in the `type` attribute.

This is my go-to approach. Instead going the head-scratcher math route of providing images of different sizes, I provide highly optimized images in JPG, WebP and AVIF formats and let the user's browser sort out which one is best. I've used Cloudinary occasionally but prefer keeping my images within my project. If you're interested learning about using an image CDN I'd [recommend this conversation](https://someantics.dev/optimizing-images-with-cdns/) with Ben Meyers and Alistair Shepherd as a good starting point.

## Additional performance features

Go to this [section at Learn HTML](https://web.dev/learn/html/images/#additional-performance-features).

> The [`loading` attribute](https://web.dev/learn/design/responsive-images/#loading-hints/) tells the JS-enabled browser how to load the image. The default `eager` value means the image is loaded immediately as the HTML is parsed, even if the image is outside the visible viewport.

I had no idea the default value was called that, and will probably chuckle every time I remember it.





