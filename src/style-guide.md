---
title: 'Style Guide'
layout: 'layouts/page.html'
summary: "tbd."
eleventyExcludeFromCollections: true
---
Below is a minimal style guide for this site, inspired in part by [Chen Hui Jing's Style Guide](https://chenhuijing.com/styleguide/#%F0%9F%8F%80) and the [Poor Man's Style Guide](https://poormansstyleguide.com/). The color palette isn't currently included but in the meantime it's pretty close to the one I used for the [first version of this site](https://codepen.io/superterrific/pen/wvBwLKL). I'm also not currently using any form elements.

**Table of Contents**
* [Headings](#headings)
* [Block elements](#block-elements)
* [Images](#images)
* [Code](#code)
* [Lists](#lists)
* [Table](#table)


---

## Headings
All headings within content pages have anchors. The site is currently only using ```h1```-```h4```.
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

---

## Headings with text

# Heading 1
Here's some example text with ```h1```.

## Heading 2
Here's some example text with ```h2```.

### Heading 3
Here's some example text with ```h3```.

#### Heading 4
Here's some example text with ```h4```.

---

## Block elements

### Blockquote
> Here's an example of a blockquote. &mdash; Dana Byerly

### Images
All images use [figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) and [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) elements.

#### Image with text
{% figure %}
<picture>
  <source srcset="/img/monstera.avif" type="image/avif">
  <source srcset="/img/monstera.webp" type="image/webp">
  <img src="/img/monstera.jpg" alt="A large monstera plant in my apartment." loading="lazy" />
</picture>
  {% figcaption %}
    A monster Monstera plant in my apartment.
  {% endfigcaption %}
{% endfigure %}

#### Image without text
{% figure %}
  <picture>
    <source srcset="/img/monstera.avif" type="image/avif">
    <source srcset="/img/monstera.webp" type="image/webp">
    <img src="/img/monstera.jpg" alt="A large monstera plant in my apartment." loading="lazy" />
  </picture>
{% endfigure %}

### Paragraph text
Here's an example of paragraph text that is long enough to show line-height. Here is an example of a link that [goes back to the homepage](/). And here is an example of **bold text**.


---

## Code

### Code within text
Here's an example of mentioning code, like ```<figure>``` or ```display: flex``` within paragraph text.

### Code snippets


```css
/* CSS */
.wrapper-content {
  max-width: 45rem;
  margin: 0 auto;
}
```

```html
<!-- HTML -->
{% raw %}<h2 class="promo-article-title">
 <a href="{{ item.url }}">{{ item.data.title }}</a>{% endraw %}
</h2>
```

``` js
// JavaScript
config.addFilter("sortByNewest", arr => {
  arr.sort((b, a) => (a.date) > (b.date) ? 1 : -1);
  return arr;
});
```

---

## Lists

### Ordered list standalone
1. Cats
2. Dogs
3. Horses

### Unordered list standalone
* Cats
* Dogs
* Horses

### List with longer text
* Here is a list example with more text to illustrate the line-height and spacing between the bullets.
* In my opinion this nuance is often overlooked, resulting in the same amount of space between lines in a single bullet and between the bullets, making it harder to read.
* Both ordered and unordered list using this spacing.

### Ordered list within paragraph
Here's a list of some of the types of plants in my apartment.

1. Aloe Vera
2. Avocado tree (grown from a pit!)
3. Monstera
4. Parlor Palm
5. Pothos
6. Rubber plant
7. Snake plant
8. Various succulents

### Unordered list within paragraph
Here's a list of some of the types of plants in my apartment.

* Aloe Vera
* Avocado tree (grown from a pit!)
* Monstera
* Parlor Palm
* Pothos
* Rubber plant
* Snake plant
* Various succulents


---

## Table

| Crime Drama | Country of Origin | Number of Seasons |
| -------------- | -------------- | -------------- |
| Line of Duty  | United Kingdom     | 6     |
| Sorjonen (Bordertown) | Finland     | 3     |
| Innan vi Dör (Before We Die)  | Sweden     | 2     |
| Karppi (Dead Wind)     | Finland     | 2     |
| Unforgotten   | United Kingdom     | 4     |
