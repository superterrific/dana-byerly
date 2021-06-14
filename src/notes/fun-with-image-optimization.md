---
title: 'Fun with image optimization'
summary: 'Over the weekend I updated the site to use next-gen image formats, and it was kind of fun.'
category: 'Notes'
date: '2020-09-13'
tags: ['Performance', 'The Site']
---

I've been having fun fiddling around with the new site, making little changes here there, cleaning up this and that. The focus of my [Rip van Winkle-esque](/about/) return to web dev over the last few years was primarily focused on CSS and JS. When it came time to do the image production for the [projects section](/projects/) section I realized I had a lot to (re)learn in that department too.

Over the weekend I set out to improve the site's image optimization. I [mentioned here](/articles/finally-a-new-site/) that I dipped my toes in the srcset waters, initially creating a set of responsively sized images. Even though I was [using this](https://www.responsivebreakpoints.com/) to create the different sizes, it was a bit of a slog, and I thought maybe I'd look into using a CDN. But then [this article](https://jakearchibald.com/2020/avif-has-landed/) made it's way into my timeline and I decided to investigate next-generation image formats.

Putting aside .avif for a moment, or [.wee as I think I'll be calling it](https://twitter.com/hankchizljaw/status/1303430155898159110), WebP was one of the many things that happened when I wasn't paying attention. So even optimizing for WebP was a notable performance improvement (even though [Safari doesn't support it just quite yet](https://www.macrumors.com/2020/06/22/webp-safari-14/)).

With the help of [this article](https://reachlightspeed.com/blog/using-the-new-high-performance-avif-image-format-on-the-web-today/) I was able to easily make the necessary changes.
1. Use [Squoosh]({{ tools.squoosh }}) to create WebP and AVIF files from my PNGs
2. Swap in picture code.

Here's the original code using srcset and responsively sized images (with an example image instead of the Nunjucks code calling the image)...
``` html
<img src="/img/projects/pile_axxcyn_c_scale,w_1380.png"
          sizes="(min-width: 720px) 1380px, calc(100vw - 16px)"
          srcset="/img/projects/pile_axxcyn_c_scale,w_480.png 480w, /img/projects/pile_axxcyn_c_scale,w_768.png 768w, /img/projects/pile_axxcyn_c_scale,w_1019.png 1019w, /img/projects/pile_axxcyn_c_scale,w_1380.png 1380w"
          alt="Pile of hrefs site" loading="lazy" />
```
Updated code using ```picture``` and next-generation formats...
``` html
<picture>
  <source srcset="/img/projects/pile.avif" type="image/avif">
  <source srcset="/img/projects/pile.webp" type="image/webp">
  <img src="/img/projects/pile.png" alt="Pile of hrefs site" loading="lazy">
</picture>
```

I don't have that many images on the site so it was a relatively easy update, but even with the laziest approach possible of using the defaults at [Squoosh]({{ tools.squoosh }}) the difference in file size was impressive.

According to Lighthouse the image size totals for the [Projects landing page](/projects/) were...
* **1,721k** total using a set of images sized for breakpoints
* **523.4k** total using next-generation formats

That's almost 70% smaller just using the Squoosh default settings. With a little more fine-tuning I was able to get it down to 300.9k, or 83% smaller. Of course Lighthouse is using AVIF for those totals, so the percentage would be a bit less with WebP. Still it's very much a nice performance bump as well as a progressive enhancement, otherwise known as a win-win!

{% figure %}
  <picture>
    <source srcset="/img/file-size-chart.avif" type="image/avif">
    <source srcset="/img/file-size-chart.webp" type="image/webp">
    <img src="/img/file-size-chart.png" alt="Chart showing the difference in file size between the file types" loading="lazy" />
  </picture>
  {% figcaption %}
    The final image size totals by file type for the <a href="/projects">Projects page</a> after additional optimization.
  {% endfigcaption %}
{% endfigure %}

{% caption %}
<strong>Note:</strong> The 300.9k came from localhost, and it was consistent over several checks. Now that the update is live the numbers have ranged from about 285k to 380k, still a much better size than 1,721! But wanted to note the discrepancy, and that network and performance issues are a bit out of my league!
{% endcaption %}

The [article by Jake Archibald](https://jakearchibald.com/2020/avif-has-landed/) that set me on this little journey has a lot of detailed techinical information and comparisons. Some of it was just beyond my technical comprehension, but if you're looking for more technical information on AVIF, this is a good place to find it. The article mentions one of the downsides of the format, which is also a [downside of WebP](https://developers.google.com/speed/webp/faq#does_webp_support_progressive_or_interlaced_display), no progressive display. Although the article on WebP does point to an [advance decoding API](https://developers.google.com/speed/webp/docs/api#advanced_decoding_api).

For my little site that no one reads I'm OK with the tradeoff of progressive display, especially considering that the file sizes are relatively small for both formats and I'm using lazy loading, your mileage may vary.

{% caption %}
<strong>Update:</strong> Matthias Ott has a <a href="https://matthiasott.com/notes/avif-a-new-image-format">good post on AVIF</a> that includes a list of encoders. Manual conversion was fine for my little site, but there are options for bigger scale conversions!
{% endcaption %}  
